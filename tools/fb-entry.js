// Bundled to src/fbk.js with: npx esbuild tools/fb-entry.js --bundle --minify --format=iife --target=es2019 --outfile=src/fbk.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getDatabase, ref, set, update, get, onValue, onDisconnect } from 'firebase/database';
window.FBK = { initializeApp, getAuth, signInAnonymously, getDatabase, ref, set, update, get, onValue, onDisconnect };
