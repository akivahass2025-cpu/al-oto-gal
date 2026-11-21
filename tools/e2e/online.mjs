// Two phones, one room: plays full online games against the real server and saves screenshots.
import { chromium } from 'playwright-core';
import fs from 'fs';
const URL = 'http://localhost:8080/index.html';
const log = []; const L = (...a) => { const t = a.join(' '); log.push(t); console.log(t); };
fs.mkdirSync('shots', { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
const mk = async () => { const c = await b.newContext({ viewport: { width: 412, height: 860 }, isMobile: true, hasTouch: true }); const p = await c.newPage(); p.on('pageerror', e => L('PAGEERROR', e.message)); p.on('console', m => m.type() === 'error' && L('CONSOLE', m.text())); await p.goto(URL); await p.waitForTimeout(800); return p; };
const scr = async p => p.evaluate(() => document.querySelector('.screen.on')?.id);
const until = async (p, id, ms = 20000) => { const t = Date.now(); while (Date.now() - t < ms) { if (await scr(p) === id) return true; await p.waitForTimeout(250); } throw new Error('timeout waiting ' + id + ' got ' + await scr(p)); };
async function answer(p) {
  for (let k = 0; k < 2; k++) { // self + maybe guess
    if (await scr(p) !== 's-q') return;
    await p.waitForTimeout(300);
    if (await p.$('#q-input input[type=range]')) { await p.evaluate(() => { const r = document.querySelector('#q-input input[type=range]'); r.value = 7; r.dispatchEvent(new Event('input')); }); await p.click('#q-bottom .btn'); }
    else if (await p.$('#q-input .btn.ghost')) { const o = await p.$$('#q-input .opt'); for (const x of o.slice(0, 3)) await x.click(); await p.click('#q-bottom .btn'); }
    else { const o = await p.$$('#q-input .opt'); await o[0].click(); }
    await p.waitForTimeout(500);
  }
}
async function game(mode, tag) {
  const H = await mk(), G = await mk();
  await H.click('#btn-new'); await H.fill('#p1', 'יוני');
  await H.click(`#seg-mode button[data-v="${mode}"]`); await H.click('#seg-len button[data-v="8"]');
  await H.click('#btn-start'); await until(H, 's-lobby');
  await H.waitForTimeout(800); await H.screenshot({ path: `shots/${tag}-1-lobby-host.png` });
  const code = (await H.textContent('#lobby-code')).trim(); L(tag, 'room code', code);
  await G.click('#btn-join'); await G.fill('#join-code', code); await G.fill('#join-name', 'לאה'); await G.click('#btn-join-go');
  await until(G, 's-lobby'); await G.waitForTimeout(800); await G.screenshot({ path: `shots/${tag}-2-lobby-guest.png` });
  await H.waitForTimeout(800); await H.screenshot({ path: `shots/${tag}-3-lobby-host-full.png` });
  await H.click('#btn-lobby-start');
  await until(H, 's-q'); await until(G, 's-q'); L(tag, 'both in question 1');
  for (let i = 0; i < 8; i++) {
    await answer(H);
    if (i === 0) { await H.waitForTimeout(600); await H.screenshot({ path: `shots/${tag}-4-wait.png` }); }
    await answer(G);
    await until(H, 's-reveal'); await until(G, 's-reveal');
    if (i < 2) { await H.waitForTimeout(700); await H.screenshot({ path: `shots/${tag}-5-reveal-${i}.png` }); }
    const s = await H.textContent('#rv-q'), s2 = await G.textContent('#rv-q'); if (s !== s2) L(tag, 'MISMATCH question', s, '|', s2);
    await (i % 2 ? G : H).click('#btn-next');
    if (i < 7) { await until(H, 's-q'); await until(G, 's-q'); }
  }
  await until(H, 's-end'); await until(G, 's-end');
  await H.waitForTimeout(2500); await H.screenshot({ path: `shots/${tag}-6-end-host.png` }); await G.screenshot({ path: `shots/${tag}-7-end-guest.png` });
  L(tag, 'end pct', await H.textContent('#end-pct'), await G.textContent('#end-pct'));
  // rematch from the guest phone
  await G.click('#btn-again'); await until(H, 's-q'); await until(G, 's-q'); L(tag, 'rematch ok');
  await H.close(); await G.close();
}
try { await game('match', 'm'); await game('guess', 'g'); L('ALL OK'); } catch (e) { L('FAIL', e.message); }
fs.writeFileSync('e2e.log', log.join('\n')); await b.close();
