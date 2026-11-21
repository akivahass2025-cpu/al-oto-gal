// Builds index.html (the whole game in one file) from src/game.html + src/decks/*.json, and stamps sw.js.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const ORDER = ['food','travel','lifestyle','love','entertainment','big','music','childhood','workmoney','tech','home','holidays','wyr','bff','animals','sport','football','future','shopping','israeli','funny','jewish'];
const NEW = ['sport','animals','bff','wyr','football','future','shopping','israeli','funny','jewish'];
const dir = path.join(root, 'src/decks');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json',''));
files.sort((a,b) => (ORDER.indexOf(a)+1||99) - (ORDER.indexOf(b)+1||99));
let total = 0; const problems = [];
const decks = files.map(id => {
  const d = JSON.parse(fs.readFileSync(path.join(dir, id + '.json'), 'utf8'));
  d.id = id; if (NEW.includes(id)) d.isNew = true;
  d.questions.forEach((q, i) => {
    const bad = m => problems.push(`${id}#${i}: ${m}`);
    if (!q.q) bad('no text');
    if (q.t === 'ab' && (!q.o || q.o.length !== 2)) bad('ab needs 2');
    if ((q.t === 'mc' || q.t === 'rank') && (!q.o || q.o.length !== 4)) bad(q.t + ' needs 4');
    if (!['ab','mc','rank','scale','who'].includes(q.t)) bad('type ' + q.t);
  });
  total += d.questions.length; return d;
});
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
const fbk = fs.readFileSync(path.join(root, 'src/fbk.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'src/game.html'), 'utf8').replace('/*__DECKS__*/', () => 'window.DECKS=' + JSON.stringify(decks) + ';').replace('/*__FIREBASE__*/', () => fbk);
fs.writeFileSync(path.join(root, 'index.html'), html);
const sw = fs.readFileSync(path.join(root, 'src/sw.js'), 'utf8').replace('__VERSION__', Date.now());
fs.writeFileSync(path.join(root, 'sw.js'), sw);
console.log(`built: ${decks.length} decks, ${total} questions`);
