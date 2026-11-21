const sharp = require('/tmp/tools/node_modules/sharp'); const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..'); const svg = fs.readFileSync(path.join(__dirname, 'icon.svg'));
const out = [['icons/icon-192.png',192],['icons/icon-512.png',512],['icons/icon-maskable-512.png',512],['icons/apple-touch-icon.png',180],
 ['android/app/src/main/res/mipmap-mdpi/ic_launcher.png',48],['android/app/src/main/res/mipmap-hdpi/ic_launcher.png',72],['android/app/src/main/res/mipmap-xhdpi/ic_launcher.png',96],
 ['android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png',144],['android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png',192]];
(async()=>{for(const [f,s] of out){fs.mkdirSync(path.dirname(path.join(root,f)),{recursive:true});await sharp(svg).resize(s,s).png().toFile(path.join(root,f));}console.log('icons ok');})();
