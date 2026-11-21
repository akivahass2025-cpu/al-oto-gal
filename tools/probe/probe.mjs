import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
const cfg = { apiKey: "AIzaSyAcZnezXR5OQ1bi1FFPKPU_jUqkV-B5i_Y", authDomain: "zeh-o-zeh.firebaseapp.com",
  databaseURL: "https://zeh-o-zeh-default-rtdb.europe-west1.firebasedatabase.app", projectId: "zeh-o-zeh", appId: "1:563159959757:web:feeddf9876cb76a92f0184" };
const app = initializeApp(cfg); const out = [];
try { const u = await signInAnonymously(getAuth(app)); out.push('auth ok ' + u.user.uid.slice(0, 6)); } catch (e) { out.push('auth FAIL ' + e.code); }
const db = getDatabase(app);
for (const p of ['aog/rooms/9999', 'rooms/A9999', 'rooms/9999x/aog']) {
  try { await set(ref(db, p), { t: Date.now(), x: { y: [1, 2] } }); const v = await get(ref(db, p)); out.push(`write ${p} ok read=${v.exists()}`); await remove(ref(db, p)).catch(() => out.push('remove fail ' + p)); }
  catch (e) { out.push(`write ${p} FAIL ${e.code || e.message}`); }
}
console.log(out.join('\n')); process.exit(0);
