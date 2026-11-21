(()=>{var wo=()=>{};var qi={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};var f=function(n,e){if(!n)throw Le(e)},Le=function(n){return new Error("Firebase Database ("+qi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};var bo=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},zl=function(n){let e=[],t=0,i=0;for(;t<n.length;){let r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){let s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{let s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){let s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4,h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),i.push(t[d],t[u],t[h],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){let s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;let l=r<n.length?t[n.charAt(r)]:64;++r;let u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new $i;let h=s<<2|a>>4;if(i.push(h),l!==64){let p=a<<4&240|l>>2;if(i.push(p),u!==64){let _=l<<6&192|u;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},$i=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Yi=function(n){let e=bo(n);return vn.encodeByteArray(e,!0)},Tt=function(n){return Yi(n).replace(/\./g,"")},et=function(n){try{return vn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function So(n){return Ao(void 0,n)}function Ao(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!ql(t)||(n[t]=Ao(n[t],e[t]));return n}function ql(n){return n!=="__proto__"}function $l(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var Kl=()=>$l().__FIREBASE_DEFAULTS__,Yl=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jl=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&et(n[1]);return e&&JSON.parse(e)},Ji=()=>{try{return wo()||Kl()||Yl()||Jl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qi=n=>{var e,t;return(t=(e=Ji())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ro=n=>{let e=Qi(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Xi=()=>{var n;return(n=Ji())===null||n===void 0?void 0:n.config},Zi=n=>{var e;return(e=Ji())===null||e===void 0?void 0:e[`_${n}`]};var H=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function ge(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yn(n){return(await fetch(n,{credentials:"include"})).ok}function Po(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tt(JSON.stringify(t)),Tt(JSON.stringify(o)),""].join(".")}var wt={};function Ql(){let n={prod:[],emulator:[]};for(let e of Object.keys(wt))wt[e]?n.emulator.push(e):n.prod.push(e);return n}function Xl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var To=!1;function In(n,e){if(typeof window=="undefined"||typeof document=="undefined"||!ge(window.location.host)||wt[n]===e||wt[n]||To)return;wt[n]=e;function t(h){return`__firebase__banner__${h}`}let i="__firebase__banner",s=Ql().prod.length>0;function o(){let h=document.getElementById(i);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,p){h.setAttribute("width","24"),h.setAttribute("id",p),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){let h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{To=!0,o()},h}function d(h,p){h.setAttribute("id",p),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function u(){let h=Xl(i),p=t("text"),_=document.getElementById(p)||document.createElement("span"),E=t("learnmore"),S=document.getElementById(E)||document.createElement("a"),j=t("preprendIcon"),G=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){let Y=h.element;a(Y),d(S,E);let Ze=l();c(G,j),Y.append(G,_,S,Ze),document.body.appendChild(Y)}s?(_.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}function L(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ct(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function No(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function ko(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function En(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oo(){let n=L();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ne(){return qi.NODE_CLIENT===!0||qi.NODE_ADMIN===!0}function Do(){try{return typeof indexedDB=="object"}catch{return!1}}function Lo(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Zl="FirebaseError",J=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Zl,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ue.prototype.create)}},ue=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?eu(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new J(r,a,i)}};function eu(n,e){return n.replace(tu,(t,i)=>{let r=e[i];return r!=null?String(r):`<${i}?>`})}var tu=/\{\$([^}]+)}/g;function tt(n){return JSON.parse(n)}function N(n){return JSON.stringify(n)}var Mo=function(n){let e={},t={},i={},r="";try{let s=n.split(".");e=tt(et(s[0])||""),t=tt(et(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}};var xo=function(n){let e=Mo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fo=function(n){let e=Mo(n).claims;return typeof e=="object"&&e.admin===!0};function Q(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Me(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function nt(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bt(n,e,t){let i={};for(let r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function ie(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let r of t){if(!i.includes(r))return!1;let s=n[r],o=e[r];if(Co(s)&&Co(o)){if(!ie(s,o))return!1}else if(s!==o)return!1}for(let r of i)if(!t.includes(r))return!1;return!0}function Co(n){return n!==null&&typeof n=="object"}function ve(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function it(n){let e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){let[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function rt(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}var gn=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){let h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),d=1518500249):(l=s^o^a,d=1859775393):u<60?(l=s&o|a&(s|o),d=2400959708):(l=s^o^a,d=3395469782);let h=(r<<5|r>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let i=t-this.blockSize,r=0,s=this.buf_,o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}};function Uo(n,e){let t=new Ki(n,e);return t.subscribe.bind(t)}var Ki=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");nu(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=zi),r.error===void 0&&(r.error=zi),r.complete===void 0&&(r.complete=zi);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function nu(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zi(){}function xe(n,e){return`${n} failed: ${e} argument `}var Wo=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){let s=r-55296;i++,f(i<n.length,"Surrogate pair missing trail surrogate.");let o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},St=function(n){let e=0;for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};var j_=4*60*60*1e3;function M(n){return n&&n._delegate?n._delegate:n}var z=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Fe="[DEFAULT]";var wn=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new H;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ru(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;let r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);let o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:iu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function iu(n){return n===Fe?void 0:n}function ru(n){return n.instantiationMode==="EAGER"}var At=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new wn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var su=[],C;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(C||(C={}));var ou={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},au=C.INFO,cu={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},lu=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),r=cu[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},ye=class{constructor(e){this.name=e,this._logLevel=au,this._logHandler=lu,this._userLogHandler=null,su.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ou[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}};var uu=(n,e)=>e.some(t=>n instanceof t),Vo,Ho;function du(){return Vo||(Vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hu(){return Ho||(Ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Bo=new WeakMap,tr=new WeakMap,jo=new WeakMap,er=new WeakMap,ir=new WeakMap;function fu(n){let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(re(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bo.set(t,n)}).catch(()=>{}),ir.set(e,n),e}function pu(n){if(tr.has(n))return;let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});tr.set(n,e)}var nr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return tr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return re(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Go(n){nr=n(nr)}function _u(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(Tn(this),e,...t);return jo.set(i,e.sort?e.sort():[e]),re(i)}:hu().includes(n)?function(...e){return n.apply(Tn(this),e),re(Bo.get(this))}:function(...e){return re(n.apply(Tn(this),e))}}function mu(n){return typeof n=="function"?_u(n):(n instanceof IDBTransaction&&pu(n),uu(n,du())?new Proxy(n,nr):n)}function re(n){if(n instanceof IDBRequest)return fu(n);if(er.has(n))return er.get(n);let e=mu(n);return e!==n&&(er.set(n,e),ir.set(e,n)),e}var Tn=n=>ir.get(n);function qo(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(n,e),a=re(o);return i&&o.addEventListener("upgradeneeded",c=>{i(re(o.result),c.oldVersion,c.newVersion,re(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}var gu=["get","getKey","getAll","getAllKeys","count"],vu=["put","add","delete","clear"],rr=new Map;function zo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rr.get(e))return rr.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,r=vu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||gu.includes(t)))return;let s=async function(o,...a){let c=this.transaction(o,r?"readwrite":"readonly"),l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return rr.set(e,s),s}Go(n=>({...n,get:(e,t,i)=>zo(e,t)||n.get(e,t,i),has:(e,t)=>!!zo(e,t)||n.has(e,t)}));var or=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yu(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function yu(n){let e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}var ar="@firebase/app",$o="0.13.2";var de=new ye("@firebase/app"),Iu="@firebase/app-compat",Eu="@firebase/analytics-compat",wu="@firebase/analytics",Tu="@firebase/app-check-compat",Cu="@firebase/app-check",bu="@firebase/auth",Su="@firebase/auth-compat",Au="@firebase/database",Ru="@firebase/data-connect",Pu="@firebase/database-compat",Nu="@firebase/functions",ku="@firebase/functions-compat",Ou="@firebase/installations",Du="@firebase/installations-compat",Lu="@firebase/messaging",Mu="@firebase/messaging-compat",xu="@firebase/performance",Fu="@firebase/performance-compat",Uu="@firebase/remote-config",Wu="@firebase/remote-config-compat",Vu="@firebase/storage",Hu="@firebase/storage-compat",Bu="@firebase/firestore",ju="@firebase/ai",Gu="@firebase/firestore-compat",zu="firebase",qu="11.10.0";var cr="[DEFAULT]",$u={[ar]:"fire-core",[Iu]:"fire-core-compat",[wu]:"fire-analytics",[Eu]:"fire-analytics-compat",[Cu]:"fire-app-check",[Tu]:"fire-app-check-compat",[bu]:"fire-auth",[Su]:"fire-auth-compat",[Au]:"fire-rtdb",[Ru]:"fire-data-connect",[Pu]:"fire-rtdb-compat",[Nu]:"fire-fn",[ku]:"fire-fn-compat",[Ou]:"fire-iid",[Du]:"fire-iid-compat",[Lu]:"fire-fcm",[Mu]:"fire-fcm-compat",[xu]:"fire-perf",[Fu]:"fire-perf-compat",[Uu]:"fire-rc",[Wu]:"fire-rc-compat",[Vu]:"fire-gcs",[Hu]:"fire-gcs-compat",[Bu]:"fire-fst",[Gu]:"fire-fst-compat",[ju]:"fire-vertex","fire-js":"fire-js",[zu]:"fire-js-all"};var Cn=new Map,Ku=new Map,lr=new Map;function Ko(n,e){try{n.container.addComponent(e)}catch(t){de.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ee(n){let e=n.name;if(lr.has(e))return de.debug(`There were multiple attempts to register component ${e}.`),!1;lr.set(e,n);for(let t of Cn.values())Ko(t,n);for(let t of Ku.values())Ko(t,n);return!0}function Pt(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function B(n){return n==null?!1:n.settings!==void 0}var Yu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new ue("app","Firebase",Yu);var ur=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}};var we=qu;function fr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i=Object.assign({name:cr,automaticDataCollectionEnabled:!0},e),r=i.name;if(typeof r!="string"||!r)throw Ie.create("bad-app-name",{appName:String(r)});if(t||(t=Xi()),!t)throw Ie.create("no-options");let s=Cn.get(r);if(s){if(ie(t,s.options)&&ie(i,s.config))return s;throw Ie.create("duplicate-app",{appName:r})}let o=new At(r);for(let c of lr.values())o.addComponent(c);let a=new ur(t,i,o);return Cn.set(r,a),a}function bn(n=cr){let e=Cn.get(n);if(!e&&n===cr&&Xi())return fr();if(!e)throw Ie.create("no-app",{appName:n});return e}function X(n,e,t){var i;let r=(i=$u[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);let s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),de.warn(a.join(" "));return}Ee(new z(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var Ju="firebase-heartbeat-database",Qu=1,Rt="firebase-heartbeat-store",sr=null;function Xo(){return sr||(sr=qo(Ju,Qu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Rt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),sr}async function Xu(n){try{let t=(await Xo()).transaction(Rt),i=await t.objectStore(Rt).get(Zo(n));return await t.done,i}catch(e){if(e instanceof J)de.warn(e.message);else{let t=Ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});de.warn(t.message)}}}async function Yo(n,e){try{let i=(await Xo()).transaction(Rt,"readwrite");await i.objectStore(Rt).put(e,Zo(n)),await i.done}catch(t){if(t instanceof J)de.warn(t.message);else{let i=Ie.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});de.warn(i.message)}}}function Zo(n){return`${n.name}!${n.options.appId}`}var Zu=1024,ed=30,dr=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new hr(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>ed){let o=nd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){de.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Jo(),{heartbeatsToSend:i,unsentEntries:r}=td(this._heartbeatsCache.heartbeats),s=Tt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return de.warn(t),""}}};function Jo(){return new Date().toISOString().substring(0,10)}function td(n,e=Zu){let t=[],i=n.slice();for(let r of n){let s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Qo(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Qo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var hr=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Do()?Lo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Xu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function Qo(n){return Tt(JSON.stringify({version:2,heartbeats:n})).length}function nd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}function id(n){Ee(new z("platform-logger",e=>new or(e),"PRIVATE")),Ee(new z("heartbeat",e=>new dr(e),"PRIVATE")),X(ar,$o,n),X(ar,$o,"esm2017"),X("fire-js","")}id("");var rd="firebase",sd="11.10.0";X(rd,sd,"app");function Sn(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function va(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var ya=va,Ia=new ue("auth","Firebase",va());var Dn=new ye("@firebase/auth");function od(n,...e){Dn.logLevel<=C.WARN&&Dn.warn(`Auth (${we}): ${n}`,...e)}function Rn(n,...e){Dn.logLevel<=C.ERROR&&Dn.error(`Auth (${we}): ${n}`,...e)}function Z(n,...e){throw Ur(n,...e)}function oe(n,...e){return Ur(n,...e)}function Ea(n,e,t){let i=Object.assign(Object.assign({},ya()),{[e]:t});return new ue("auth","Firebase",i).create(e,{appName:n.name})}function be(n){return Ea(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ur(n,...e){if(typeof n!="string"){let t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ia.create(n,...e)}function m(n,e,...t){if(!n)throw Ur(e,...t)}function se(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Rn(e),new Error(e)}function fe(n,e){n||se(e)}function yr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ad(){return ea()==="http:"||ea()==="https:"}function ea(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function cd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ad()||ko()||"connection"in navigator)?navigator.onLine:!0}function ld(){if(typeof navigator=="undefined")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Ue=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,fe(t>e,"Short delay should be less than long delay!"),this.isMobile=Ct()||En()}get(){return cd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Wr(n,e){fe(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Ln=class{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var ud={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var dd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hd=new Ue(3e4,6e4);function k(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function x(n,e,t,i,r={}){return wa(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});let a=ve(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);let l=Object.assign({method:e,headers:c},s);return No()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&ge(n.emulatorConfig.host)&&(l.credentials="include"),Ln.fetch()(await Ta(n,n.config.apiHost,t,a),l)})}async function wa(n,e,t){n._canInitEmulator=!1;let i=Object.assign(Object.assign({},ud),e);try{let r=new Ir(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw kt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw kt(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw kt(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw kt(n,"user-disabled",o);let d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ea(n,d,l);Z(n,d)}}catch(r){if(r instanceof J)throw r;Z(n,"network-request-failed",{message:String(r)})}}async function Se(n,e,t,i,r={}){let s=await x(n,e,t,i,r);return"mfaPendingCredential"in s&&Z(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ta(n,e,t,i){let r=`${e}${t}?${i}`,s=n,o=s.config.emulator?Wr(n.config,r):`${n.config.apiScheme}://${r}`;return dd.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function fd(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Ir=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(oe(this.auth,"network-request-failed")),hd.get())})}};function kt(n,e,t){let i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);let r=oe(n,e,i);return r.customData._tokenResponse=t,r}function ta(n){return n!==void 0&&n.enterprise!==void 0}var Mn=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fd(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Ca(n,e){return x(n,"GET","/v2/recaptchaConfig",k(n,e))}async function pd(n,e){return x(n,"POST","/v1/accounts:delete",e)}async function xn(n,e){return x(n,"POST","/v1/accounts:lookup",e)}function Ot(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ba(n,e=!1){let t=M(n),i=await t.getIdToken(e),r=Vr(i);m(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");let s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ot(pr(r.auth_time)),issuedAtTime:Ot(pr(r.iat)),expirationTime:Ot(pr(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pr(n){return Number(n)*1e3}function Vr(n){let[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Rn("JWT malformed, contained fewer than 3 sections"),null;try{let r=et(t);return r?JSON.parse(r):(Rn("Failed to decode base64 JWT payload"),null)}catch(r){return Rn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function na(n){let e=Vr(n);return m(e,"internal-error"),m(typeof e.exp!="undefined","internal-error"),m(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}async function xt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof J&&_d(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function _d({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Er=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;let r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Ft=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ot(this.lastLoginAt),this.creationTime=Ot(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Fn(n){var e;let t=n.auth,i=await n.getIdToken(),r=await xt(n,xn(t,{idToken:i}));m(r==null?void 0:r.users.length,t,"internal-error");let s=r.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Aa(s.providerUserInfo):[],a=md(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ft(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Sa(n){let e=M(n);await Fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function md(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Aa(n){return n.map(e=>{var{providerId:t}=e,i=Sn(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}async function gd(n,e){let t=await wa(n,{},async()=>{let i=ve({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=await Ta(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:a,body:i};return n.emulatorConfig&&ge(n.emulatorConfig.host)&&(c.credentials="include"),Ln.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vd(n,e){return x(n,"POST","/v2/accounts:revokeToken",k(n,e))}var Dt=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(typeof e.idToken!="undefined","internal-error"),m(typeof e.refreshToken!="undefined","internal-error");let t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):na(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){m(e.length!==0,"internal-error");let t=na(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(m(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:r,expiresIn:s}=await gd(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){let{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new n;return i&&(m(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(m(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(m(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return se("not implemented")}};function Te(n,e){m(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}var Ce=class n{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Sn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Er(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ft(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await xt(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ba(this,e)}reload(){return Sa(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(B(this.auth.app))return Promise.reject(be(this.auth));let e=await this.getIdToken();return await xt(this,pd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,l,d;let u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(r=t.email)!==null&&r!==void 0?r:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,j=(l=t.createdAt)!==null&&l!==void 0?l:void 0,G=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Y,emailVerified:Ze,isAnonymous:Io,providerData:ji,stsTokenManager:Eo}=t;m(Y&&Eo,e,"internal-error");let jl=Dt.fromJSON(this.name,Eo);m(typeof Y=="string",e,"internal-error"),Te(u,e.name),Te(h,e.name),m(typeof Ze=="boolean",e,"internal-error"),m(typeof Io=="boolean",e,"internal-error"),Te(p,e.name),Te(_,e.name),Te(E,e.name),Te(S,e.name),Te(j,e.name),Te(G,e.name);let Gi=new n({uid:Y,auth:e,email:h,emailVerified:Ze,displayName:u,isAnonymous:Io,photoURL:_,phoneNumber:p,tenantId:E,stsTokenManager:jl,createdAt:j,lastLoginAt:G});return ji&&Array.isArray(ji)&&(Gi.providerData=ji.map(Gl=>Object.assign({},Gl))),S&&(Gi._redirectEventId=S),Gi}static async _fromIdTokenResponse(e,t,i=!1){let r=new Dt;r.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Fn(s),s}static async _fromGetAccountInfoResponse(e,t,i){let r=t.users[0];m(r.localId!==void 0,"internal-error");let s=r.providerUserInfo!==void 0?Aa(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Dt;a.updateFromIdToken(i);let c=new n({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Ft(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}};var ia=new Map;function he(n){fe(n instanceof Function,"Expected a class definition");let e=ia.get(n);return e?(fe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ia.set(n,e),e)}var Un=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Un.type="NONE";var wr=Un;function Pn(n,e,t){return`firebase:${n}:${e}:${t}`}var Wn=class n{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:r,name:s}=this.auth;this.fullUserKey=Pn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Pn("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await xn(this.auth,{idToken:e}).catch(()=>{});return t?Ce._fromGetAccountInfoResponse(this.auth,t,e):null}return Ce._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new n(he(wr),e,i);let r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l),s=r[0]||he(wr),o=Pn(i,e.config.apiKey,e.name),a=null;for(let l of t)try{let d=await l._get(o);if(d){let u;if(typeof d=="string"){let h=await xn(e,{idToken:d}).catch(()=>{});if(!h)break;u=await Ce._fromGetAccountInfoResponse(e,h,d)}else u=Ce._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}let c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new n(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new n(s,e,i))}};function ra(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ka(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ra(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Da(e))return"Blackberry";if(La(e))return"Webos";if(Pa(e))return"Safari";if((e.includes("chrome/")||Na(e))&&!e.includes("edge/"))return"Chrome";if(Oa(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ra(n=L()){return/firefox\//i.test(n)}function Pa(n=L()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Na(n=L()){return/crios\//i.test(n)}function ka(n=L()){return/iemobile/i.test(n)}function Oa(n=L()){return/android/i.test(n)}function Da(n=L()){return/blackberry/i.test(n)}function La(n=L()){return/webos/i.test(n)}function Hr(n=L()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yd(n=L()){var e;return Hr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Id(){return Oo()&&document.documentMode===10}function Ma(n=L()){return Hr(n)||Oa(n)||La(n)||Da(n)||/windows phone/i.test(n)||ka(n)}function xa(n,e=[]){let t;switch(n){case"Browser":t=ra(L());break;case"Worker":t=`${ra(L())}-${n}`;break;default:t=n}let i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${we}/${i}`}var Tr=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=s=>new Promise((o,a)=>{try{let c=e(s);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(let r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}};async function Ed(n,e={}){return x(n,"GET","/v2/passwordPolicy",k(n,e))}var wd=6,Cr=class{constructor(e){var t,i,r,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:wd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;let c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var br=class{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vn(this),this.idTokenSubscription=new Vn(this),this.beforeStateQueue=new Tr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ia,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await xn(this,{idToken:e}),i=await Ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(B(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}let i=await this.assertedPersistence.getCurrentUser(),r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ld()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(B(this.app))return Promise.reject(be(this));let t=e?M(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return B(this.app)?Promise.reject(be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return B(this.app)?Promise.reject(be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(he(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Ed(this),t=new Cr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ue("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await vd(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&he(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let c=e.addObserver(t,i,r);return()=>{o=!0,c()}}else{let c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(B(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&od(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function Ge(n){return M(n)}var Vn=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uo(t=>this.observer=t)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var ri={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Td(n){ri=n}function Fa(n){return ri.loadJS(n)}function Cd(){return ri.recaptchaEnterpriseScript}function bd(){return ri.gapiScript}function Ua(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Sr=class{constructor(){this.enterprise=new Ar}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Ar=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var Sd="recaptcha-enterprise",Lt="NO_RECAPTCHA",Hn=class{constructor(e){this.type=Sd,this.auth=Ge(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ca(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let l=new Mn(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){let c=window.grecaptcha;ta(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Lt)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sr().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&ta(window.grecaptcha))r(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Cd();c.length!==0&&(c+=a),Fa(c).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}};async function Nt(n,e,t,i=!1,r=!1){let s=new Hn(n),o;if(r)o=Lt;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}let a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){let c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mt(n,e,t,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let a=await Nt(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let c=await Nt(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){let a=await Nt(n,e,t);return i(n,a).catch(async c=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let d=await Nt(n,e,t,!1,!0);return i(n,d)}return Promise.reject(c)})}else{let a=await Nt(n,e,t,!1,!0);return i(n,a)}else return Promise.reject(r+" provider is not supported.")}async function Ad(n){let e=Ge(n),t=await Ca(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new Mn(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new Hn(e).verify()}function Wa(n,e){let t=Pt(n,"auth");if(t.isInitialized()){let r=t.getImmediate(),s=t.getOptions();if(ie(s,e!=null?e:{}))return r;Z(r,"already-initialized")}return t.initialize({options:e})}function Rd(n,e){let t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(he);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Va(n,e,t){let i=Ge(n);m(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");let r=!!(t!=null&&t.disableWarnings),s=Ha(e),{host:o,port:a}=Pd(e),c=a===null?"":`:${a}`,l={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){m(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),m(ie(l,i.config.emulator)&&ie(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,ge(o)?(yn(`${s}//${o}${c}`),In("Auth",!0)):r||Nd()}function Ha(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Pd(n){let e=Ha(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){let s=r[1];return{host:s,port:sa(i.substr(s.length+1))}}else{let[s,o]=i.split(":");return{host:s,port:sa(o)}}}function sa(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Nd(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var We=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return se("not implemented")}_getIdTokenResponse(e){return se("not implemented")}_linkToIdToken(e,t){return se("not implemented")}_getReauthenticationResolver(e){return se("not implemented")}};async function kd(n,e){return x(n,"POST","/v1/accounts:signUp",e)}async function Od(n,e){return Se(n,"POST","/v1/accounts:signInWithPassword",k(n,e))}async function Dd(n,e){return Se(n,"POST","/v1/accounts:signInWithEmailLink",k(n,e))}async function Ld(n,e){return Se(n,"POST","/v1/accounts:signInWithEmailLink",k(n,e))}var Ut=class n extends We{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new n(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mt(e,t,"signInWithPassword",Od,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Dd(e,{email:this._email,oobCode:this._password});default:Z(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mt(e,i,"signUpPassword",kd,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ld(e,{idToken:t,email:this._email,oobCode:this._password});default:Z(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function st(n,e){return Se(n,"POST","/v1/accounts:signInWithIdp",k(n,e))}var Md="http://localhost",Ve=class n extends We{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Z("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Sn(t,["providerId","signInMethod"]);if(!i||!r)return null;let o=new n(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return st(e,t)}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,st(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,st(e,t)}buildRequest(){let e={requestUri:Md,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ve(t)}return e}};async function oa(n,e){return x(n,"POST","/v1/accounts:sendVerificationCode",k(n,e))}async function xd(n,e){return Se(n,"POST","/v1/accounts:signInWithPhoneNumber",k(n,e))}async function Fd(n,e){let t=await Se(n,"POST","/v1/accounts:signInWithPhoneNumber",k(n,e));if(t.temporaryProof)throw kt(n,"account-exists-with-different-credential",t);return t}var Ud={USER_NOT_FOUND:"user-not-found"};async function Wd(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Se(n,"POST","/v1/accounts:signInWithPhoneNumber",k(n,t),Ud)}var Wt=class n extends We{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return xd(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fd(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Wd(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new n({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}};function Vd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hd(n){let e=it(rt(n)).link,t=e?it(rt(e)).deep_link_id:null,i=it(rt(n)).deep_link_id;return(i?it(rt(i)).link:null)||i||t||e||n}var Bn=class n{constructor(e){var t,i,r,s,o,a;let c=it(rt(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,u=Vd((r=c.mode)!==null&&r!==void 0?r:null);m(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){let t=Hd(e);try{return new n(t)}catch{return null}}};var ot=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Ut._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=Bn.parseLink(t);return m(i,"argument-error"),Ut._fromEmailAndCode(e,i.code,i.tenantId)}};ot.PROVIDER_ID="password";ot.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ot.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var jn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var He=class extends jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Vt=class n extends He{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";var Ht=class n extends He{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return n.credential(t,i)}catch{return null}}};Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";var Bt=class n extends He{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";var jt=class n extends He{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return n.credential(t,i)}catch{return null}}};jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";async function Bd(n,e){return Se(n,"POST","/v1/accounts:signUp",k(n,e))}var Be=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){let s=await Ce._fromIdTokenResponse(e,i,r),o=aa(i);return new n({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);let r=aa(i);return new n({user:e,providerId:r,_tokenResponse:i,operationType:t})}};function aa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function Br(n){var e;if(B(n.app))return Promise.reject(be(n));let t=Ge(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Be({user:t.currentUser,providerId:null,operationType:"signIn"});let i=await Bd(t,{returnSecureToken:!0}),r=await Be._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}var Rr=class n extends J{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new n(e,t,i,r)}};function Ba(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(n,s,e,i):s})}async function jd(n,e,t=!1){let i=await xt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Be._forOperation(n,"link",i)}async function Gd(n,e,t=!1){let{auth:i}=n;if(B(i.app))return Promise.reject(be(i));let r="reauthenticate";try{let s=await xt(n,Ba(i,r,e,n),t);m(s.idToken,i,"internal-error");let o=Vr(s.idToken);m(o,i,"internal-error");let{sub:a}=o;return m(n.uid===a,i,"user-mismatch"),Be._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Z(i,"user-mismatch"),s}}async function zd(n,e,t=!1){if(B(n.app))return Promise.reject(be(n));let i="signIn",r=await Ba(n,i,e),s=await Be._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function ja(n,e,t,i){return M(n).onIdTokenChanged(e,t,i)}function Ga(n,e,t){return M(n).beforeAuthStateChanged(e,t)}function ca(n,e){return x(n,"POST","/v2/accounts/mfaEnrollment:start",k(n,e))}function qd(n,e){return x(n,"POST","/v2/accounts/mfaEnrollment:finalize",k(n,e))}function $d(n,e){return x(n,"POST","/v2/accounts/mfaEnrollment:start",k(n,e))}function Kd(n,e){return x(n,"POST","/v2/accounts/mfaEnrollment:finalize",k(n,e))}var Gn="__sak";var zn=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gn,"1"),this.storage.removeItem(Gn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Yd=1e3,Jd=10,qn=class extends zn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ma(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let i=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Id()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Jd):r()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Yd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};qn.type="LOCAL";var za=qn;var Qd=1e3;function _r(n){var e,t;let i=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),r=RegExp(`${i}=([^;]+)`);return(t=(e=document.cookie.match(r))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function mr(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var Pr=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator=="undefined"||typeof document=="undefined"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=mr(e);if(window.cookieStore){let i=await window.cookieStore.get(t);return i==null?void 0:i.value}return _r(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let i=mr(e);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let i=mr(e);if(window.cookieStore){let a=l=>{let d=l.changed.find(h=>h.name===i);d&&t(d.value),l.deleted.find(h=>h.name===i)&&t(null)},c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(t,c),window.cookieStore.addEventListener("change",a)}let r=_r(i),s=setInterval(()=>{let a=_r(i);a!==r&&(t(a),r=a)},Qd),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){let i=this.listenerUnsubscribes.get(t);i&&(i(),this.listenerUnsubscribes.delete(t))}};Pr.type="COOKIE";var $n=class extends zn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};$n.type="SESSION";var jr=$n;function Xd(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Kn=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;let i=new n(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});let a=Array.from(o).map(async l=>l(t.origin,s)),c=await Xd(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Kn.receivers=[];function Gr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}var Nr=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{let l=Gr("",20);r.port1.start();let d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){let h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function ae(){return window}function Zd(n){ae().location.href=n}function qa(){return typeof ae().WorkerGlobalScope!="undefined"&&typeof ae().importScripts=="function"}async function eh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function th(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nh(){return qa()?self:null}var $a="firebaseLocalStorageDb",ih=1,Yn="firebaseLocalStorage",Ka="fbase_key",je=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function si(n,e){return n.transaction([Yn],e?"readwrite":"readonly").objectStore(Yn)}function rh(){let n=indexedDB.deleteDatabase($a);return new je(n).toPromise()}function kr(){let n=indexedDB.open($a,ih);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let i=n.result;try{i.createObjectStore(Yn,{keyPath:Ka})}catch(r){t(r)}}),n.addEventListener("success",async()=>{let i=n.result;i.objectStoreNames.contains(Yn)?e(i):(i.close(),await rh(),e(await kr()))})})}async function la(n,e,t){let i=si(n,!0).put({[Ka]:e,value:t});return new je(i).toPromise()}async function sh(n,e){let t=si(n,!1).get(e),i=await new je(t).toPromise();return i===void 0?null:i.value}function ua(n,e){let t=si(n,!0).delete(e);return new je(t).toPromise()}var oh=800,ah=3,Jn=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kr(),this.db)}async _withRetries(e){let t=0;for(;;)try{let i=await this._openDb();return await e(i)}catch(i){if(t++>ah)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kn._getInstance(nh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eh(),!this.activeServiceWorker)return;this.sender=new Nr(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||th()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await kr();return await la(e,Gn,"1"),await ua(e,Gn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>la(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(i=>sh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ua(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(r=>{let s=si(r,!1).getAll();return new je(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],i=new Set;if(e.length!==0)for(let{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(let r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Jn.type="LOCAL";var Ya=Jn;function da(n,e){return x(n,"POST","/v2/accounts/mfaSignIn:start",k(n,e))}function ch(n,e){return x(n,"POST","/v2/accounts/mfaSignIn:finalize",k(n,e))}function lh(n,e){return x(n,"POST","/v2/accounts/mfaSignIn:finalize",k(n,e))}var gm=Ua("rcb"),vm=new Ue(3e4,6e4);var Nn="recaptcha";async function uh(n,e,t){var i;if(!n._getRecaptchaConfig())try{await Ad(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){let s=r.session;if("phoneNumber"in r){m(s.type==="enroll",n,"internal-error");let o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Mt(n,o,"mfaSmsEnrollment",async(d,u)=>{if(u.phoneEnrollmentInfo.captchaResponse===Lt){m((t==null?void 0:t.type)===Nn,d,"argument-error");let h=await gr(d,u,t);return ca(d,h)}return ca(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{m(s.type==="signin",n,"internal-error");let o=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;m(o,n,"missing-multi-factor-info");let a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Mt(n,a,"mfaSmsSignIn",async(u,h)=>{if(h.phoneSignInInfo.captchaResponse===Lt){m((t==null?void 0:t.type)===Nn,u,"argument-error");let p=await gr(u,h,t);return da(u,p)}return da(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Mt(n,s,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===Lt){m((t==null?void 0:t.type)===Nn,l,"argument-error");let u=await gr(l,d,t);return oa(l,u)}return oa(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function gr(n,e,t){m(t.type===Nn,n,"argument-error");let i=await t.verify();m(typeof i=="string",n,"argument-error");let r=Object.assign({},e);if("phoneEnrollmentInfo"in r){let s=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,c=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:c}}),r}else if("phoneSignInInfo"in r){let s=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:s,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:i}),r}var Gt=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,t){return uh(this.auth,e,M(t))}static credential(e,t){return Wt._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?Wt._fromTokenResponse(t,i):null}};Gt.PROVIDER_ID="phone";Gt.PHONE_SIGN_IN_METHOD="phone";function dh(n,e){return e?he(e):(m(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var zt=class extends We{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return st(e,this._buildIdpRequest())}_linkToIdToken(e,t){return st(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return st(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function hh(n){return zd(n.auth,new zt(n),n.bypassAuthState)}function fh(n){let{auth:e,user:t}=n;return m(t,e,"internal-error"),Gd(t,new zt(n),n.bypassAuthState)}async function ph(n){let{auth:e,user:t}=n;return m(t,e,"internal-error"),jd(t,new zt(n),n.bypassAuthState)}var Qn=class{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hh;case"linkViaPopup":case"linkViaRedirect":return ph;case"reauthViaPopup":case"reauthViaRedirect":return fh;default:Z(this.auth,"internal-error")}}resolve(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var _h=new Ue(2e3,1e4);var Or=class n extends Qn{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){fe(this.filter.length===1,"Popup operations only handle one event");let e=Gr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_h.get())};e()}};Or.currentPopupAction=null;var mh="pendingRedirect",kn=new Map,Dr=class extends Qn{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=kn.get(this.auth._key());if(!e){try{let i=await gh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}kn.set(this.auth._key(),e)}return this.bypassAuthState||kn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function gh(n,e){let t=Ih(e),i=yh(n);if(!await i._isAvailable())return!1;let r=await i._get(t)==="true";return await i._remove(t),r}function vh(n,e){kn.set(n._key(),e)}function yh(n){return he(n._redirectPersistence)}function Ih(n){return Pn(mh,n.config.apiKey,n.name)}async function Eh(n,e,t=!1){if(B(n.app))return Promise.reject(be(n));let i=Ge(n),r=dh(i,e),o=await new Dr(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}var wh=10*60*1e3,Lr=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Th(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ja(e)){let r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(oe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wh&&this.cachedEventUids.clear(),this.cachedEventUids.has(ha(e))}saveEventToCache(e){this.cachedEventUids.add(ha(e)),this.lastProcessedEventTime=Date.now()}};function ha(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ja({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Th(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ja(n);default:return!1}}async function Ch(n,e={}){return x(n,"GET","/v1/projects",e)}var bh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sh=/^https?/;async function Ah(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Ch(n);for(let t of e)try{if(Rh(t))return}catch{}Z(n,"unauthorized-domain")}function Rh(n){let e=yr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Sh.test(t))return!1;if(bh.test(n))return i===n;let r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}var Ph=new Ue(3e4,6e4);function fa(){let n=ae().___jsl;if(n!=null&&n.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nh(n){return new Promise((e,t)=>{var i,r,s;function o(){fa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fa(),t(oe(n,"network-request-failed"))},timeout:Ph.get()})}if(!((r=(i=ae().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ae().gapi)===null||s===void 0)&&s.load)o();else{let a=Ua("iframefcb");return ae()[a]=()=>{gapi.load?o():t(oe(n,"network-request-failed"))},Fa(`${bd()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw On=null,e})}var On=null;function kh(n){return On=On||Nh(n),On}var Oh=new Ue(5e3,15e3),Dh="__/auth/iframe",Lh="emulator/auth/iframe",Mh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fh(n){let e=n.config;m(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Wr(e,Lh):`https://${n.config.authDomain}/${Dh}`,i={apiKey:e.apiKey,appName:n.name,v:we},r=xh.get(n.config.apiHost);r&&(i.eid=r);let s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${ve(i).slice(1)}`}async function Uh(n){let e=await kh(n),t=ae().gapi;return m(t,n,"internal-error"),e.open({where:document.body,url:Fh(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mh,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});let o=oe(n,"network-request-failed"),a=ae().setTimeout(()=>{s(o)},Oh.get());function c(){ae().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}var Wh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vh=500,Hh=600,Bh="_blank",jh="http://localhost",Xn=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Gh(n,e,t,i=Vh,r=Hh){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),a="",c=Object.assign(Object.assign({},Wh),{width:i.toString(),height:r.toString(),top:s,left:o}),l=L().toLowerCase();t&&(a=Na(l)?Bh:t),Ra(l)&&(e=e||jh,c.scrollbars="yes");let d=Object.entries(c).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(yd(l)&&a!=="_self")return zh(e||"",a),new Xn(null);let u=window.open(e||"",a,d);m(u,n,"popup-blocked");try{u.focus()}catch{}return new Xn(u)}function zh(n,e){let t=document.createElement("a");t.href=n,t.target=e;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}var qh="__/auth/handler",$h="emulator/auth/handler",Kh=encodeURIComponent("fac");async function pa(n,e,t,i,r,s){m(n.config.authDomain,n,"auth-domain-config-required"),m(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:we,eventId:r};if(e instanceof jn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",nt(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof He){let d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);let a=o;for(let d of Object.keys(a))a[d]===void 0&&delete a[d];let c=await n._getAppCheckToken(),l=c?`#${Kh}=${encodeURIComponent(c)}`:"";return`${Yh(n)}?${ve(a).slice(1)}${l}`}function Yh({config:n}){return n.emulator?Wr(n,$h):`https://${n.authDomain}/${qh}`}var vr="webStorageSupport",Mr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jr,this._completeRedirectFn=Eh,this._overrideRedirectResult=vh}async _openPopup(e,t,i,r){var s;fe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await pa(e,t,i,yr(),r);return Gh(e,o,Gr())}async _openRedirect(e,t,i,r){await this._originValidation(e);let s=await pa(e,t,i,yr(),r);return Zd(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(fe(s,"If manager is not set, promise should be"),s)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await Uh(e),i=new Lr(e);return t.register("authEvent",r=>(m(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vr,{type:vr},r=>{var s;let o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[vr];o!==void 0&&t(!!o),Z(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ah(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ma()||Pa()||Hr()}},Qa=Mr,Zn=class{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return se("unexpected MultiFactorSessionType")}}},xr=class n extends Zn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,i){return qd(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ch(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},ei=class{constructor(){}static assertion(e){return xr._fromCredential(e)}};ei.FACTOR_ID="phone";var ti=class{static assertionForEnrollment(e,t){return ni._fromSecret(e,t)}static assertionForSignIn(e,t){return ni._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let i=e;m(typeof((t=i.user)===null||t===void 0?void 0:t.auth)!="undefined","internal-error");let r=await $d(i.user.auth,{idToken:i.credential,totpEnrollmentInfo:{}});return ii._fromStartTotpMfaEnrollmentResponse(r,i.user.auth)}};ti.FACTOR_ID="totp";var ni=class n extends Zn{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,i){return m(typeof this.secret!="undefined",e,"argument-error"),Kd(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){m(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let i={verificationCode:this.otp};return lh(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}},ii=class n{constructor(e,t,i,r,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let r=!1;return(An(e)||An(t))&&(r=!0),r&&(An(e)&&(e=((i=this.auth.currentUser)===null||i===void 0?void 0:i.email)||"unknownuser"),An(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function An(n){return typeof n=="undefined"||(n==null?void 0:n.length)===0}var _a="@firebase/auth",ma="1.10.8";var Fr=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Jh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qh(n){Ee(new z("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;m(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});let c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xa(n)},l=new br(i,r,s,c);return Rd(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ee(new z("auth-internal",e=>{let t=Ge(e.getProvider("auth").getImmediate());return(i=>new Fr(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),X(_a,ma,Jh(n)),X(_a,ma,"esm2017")}var Xh=5*60,Zh=Zi("authIdTokenMaxAge")||Xh,ga=null,ef=n=>async e=>{let t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Zh)return;let r=t==null?void 0:t.token;ga!==r&&(ga=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function zr(n=bn()){let e=Pt(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Wa(n,{popupRedirectResolver:Qa,persistence:[Ya,za,jr]}),i=Zi("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(i,location.origin);if(location.origin===s.origin){let o=ef(s.toString());Ga(t,o,()=>o(t.currentUser)),ja(t,a=>o(a))}}let r=Qi("auth");return r&&Va(t,`http://${r}`),t}function tf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Td({loadJS(n){return new Promise((e,t)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{let s=oe("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",tf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qh("Browser");var Xa="@firebase/database",Za="1.0.20";var Js="";function nf(n){Js=n}var Zr=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),N(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:tt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};var es=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Q(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};var kc=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){let e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zr(e)}}catch{}return new es},qe=kc("localStorage"),ts=kc("sessionStorage");var lt=new ye("@firebase/database"),rf=function(){let n=1;return function(){return n++}}(),Oc=function(n){let e=Wo(n),t=new gn;t.update(e);let i=t.digest();return vn.encodeByteArray(i)},dn=function(...n){let e="";for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=dn.apply(null,i):typeof i=="object"?e+=N(i):e+=i,e+=" "}return e},$e=null,ec=!0,sf=function(n,e){f(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(lt.logLevel=C.VERBOSE,$e=lt.log.bind(lt),e&&ts.set("logging_enabled",!0)):typeof n=="function"?$e=n:($e=null,ts.remove("logging_enabled"))},O=function(...n){if(ec===!0&&(ec=!1,$e===null&&ts.get("logging_enabled")===!0&&sf(!0)),$e){let e=dn.apply(null,n);$e(e)}},hn=function(n){return function(...e){O(n,...e)}},ns=function(...n){let e="FIREBASE INTERNAL ERROR: "+dn(...n);lt.error(e)},_e=function(...n){let e=`FIREBASE FATAL ERROR: ${dn(...n)}`;throw lt.error(e),new Error(e)},W=function(...n){let e="FIREBASE WARNING: "+dn(...n);lt.warn(e)},of=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&W("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Di=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},af=function(n){if(ne()||document.readyState==="complete")n();else{let e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},dt="[MIN_NAME]",Ke="[MAX_NAME]",Qe=function(n,e){if(n===e)return 0;if(n===dt||e===Ke)return-1;if(e===dt||n===Ke)return 1;{let t=tc(n),i=tc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},cf=function(n,e){return n===e?0:n<e?-1:1},qt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+N(e))},Qs=function(n){if(typeof n!="object"||n===null)return N(n);let e=[];for(let i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=N(e[i]),t+=":",t+=Qs(n[e[i]]);return t+="}",t},Dc=function(n,e){let t=n.length;if(t<=e)return[n];let i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function D(n,e){for(let t in n)n.hasOwnProperty(t)&&e(t,n[t])}var Lc=function(n){f(!Di(n),"Invalid JSON number");let e=11,t=52,i=(1<<e-1)-1,r,s,o,a,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));let l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();let d=l.join(""),u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},lf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function df(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");let i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}var hf=new RegExp("^-?(0*)\\d{1,10}$"),ff=-2147483648,pf=2147483647,tc=function(n){if(hf.test(n)){let e=Number(n);if(e>=ff&&e<=pf)return e}return null},vt=function(n){try{n()}catch(e){setTimeout(()=>{let t=e.stack||"";throw W("Exception was thrown by user callback.",t),e},Math.floor(0))}},_f=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qt=function(n,e){let t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};var is=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,B(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){W(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};var rs=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',W(e)}},Re=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Re.OWNER="owner";var ai="5",Mc="v",xc="s",Fc="r",Uc="f",Wc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vc="ls",Hc="p",ss="ac",Bc="websocket",jc="long_polling";var ci=class{constructor(e,t,i,r,s=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function mf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Gc(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let i;if(e===Bc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===jc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mf(n)&&(t.ns=n.namespace);let r=[];return D(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}var os=class{constructor(){this.counters_={}}incrementCounter(e,t=1){Q(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return So(this.counters_)}};var qr={},$r={};function Xs(n){let e=n.toString();return qr[e]||(qr[e]=new os),qr[e]}function gf(n,e){let t=n.toString();return $r[t]||($r[t]=e()),$r[t]}var as=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&vt(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};var nc="start",vf="close",yf="pLPCommand",If="pRTLPCB",zc="id",qc="pw",$c="ser",Ef="cb",wf="seg",Tf="ts",Cf="d",bf="dframe",Kc=1870,Yc=30,Sf=Kc-Yc,Af=25e3,Rf=3e4,cs=class n{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hn(e),this.stats_=Xs(t),this.urlFn=c=>(this.appCheckToken&&(c[ss]=this.appCheckToken),Gc(t,jc,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new as(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rf)),af(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ls((...s)=>{let[o,a,c,l,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===nc)this.id=a,this.password=c;else if(o===vf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{let[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);let i={};i[nc]="t",i[$c]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ef]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Mc]=ai,this.transportSessionId&&(i[xc]=this.transportSessionId),this.lastSessionId&&(i[Vc]=this.lastSessionId),this.applicationId&&(i[Hc]=this.applicationId),this.appCheckToken&&(i[ss]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Wc.test(location.hostname)&&(i[Fc]=Uc);let r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n.forceAllow_=!0}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){return ne()?!1:n.forceAllow_?!0:!n.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!lf()&&!uf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=Yi(t),r=Dc(i,Sf);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ne())return;this.myDisconnFrame=document.createElement("iframe");let i={};i[bf]="t",i[zc]=e,i[qc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=N(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},ls=class n{constructor(e,t,i,r){if(this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,ne())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=rf(),window[yf+this.uniqueCallbackIdentifier]=e,window[If+this.uniqueCallbackIdentifier]=t,this.myIFrame=n.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');let o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){O("frame writing exception"),a.stack&&O(a.stack),O(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||O("No IE domain setting required")}catch{let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[zc]=this.myID,e[qc]=this.myPW,e[$c]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yc+i.length<=Kc;){let o=this.pendingSegs.shift();i=i+"&"+wf+r+"="+o.seg+"&"+Tf+r+"="+o.ts+"&"+Cf+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(Af)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){ne()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{O("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};var Pf=16384,Nf=45e3,li=null;typeof MozWebSocket!="undefined"?li=MozWebSocket:typeof WebSocket!="undefined"&&(li=WebSocket);var pe=class n{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hn(this.connId),this.stats_=Xs(t),this.connURL=n.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){let o={};return o[Mc]=ai,!ne()&&typeof location!="undefined"&&location.hostname&&Wc.test(location.hostname)&&(o[Fc]=Uc),t&&(o[xc]=t),i&&(o[Vc]=i),r&&(o[ss]=r),s&&(o[Hc]=s),Gc(e,Bc,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qe.set("previous_websocket_failure",!0);try{let i;if(ne()){let r=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/${ai}/${Js}/${process.platform}/${r}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let s=process.env,o=this.connURL.indexOf("wss://")===0?s.HTTPS_PROXY||s.https_proxy:s.HTTP_PROXY||s.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new li(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");let r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){let t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&li!==null&&!n.forceDisallow_}static previouslyFailed(){return qe.isInMemoryStorage||qe.get("previous_websocket_failure")===!0}markConnectionHealthy(){qe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let i=tt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();let t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=Dc(t,Pf);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};pe.responsesRequiredToBeHealthy=2;pe.healthyTimeout=3e4;var ui=class n{static get ALL_TRANSPORTS(){return[cs,pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=pe&&pe.isAvailable(),i=t&&!pe.previouslyFailed();if(e.webSocketOnly&&(t||W("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pe];else{let r=this.transports_=[];for(let s of n.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};ui.globalTransportInitialized_=!1;var kf=6e4,Of=5e3,Df=10*1024,Lf=100*1024,Kr="t",ic="d",Mf="s",rc="r",xf="e",sc="o",oc="a",ac="n",cc="p",Ff="h",us=class{constructor(e,t,i,r,s,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hn("c:"+this.id+":"),this.transportManager_=new ui(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Qt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Df?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){let t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kr in e){let t=e[Kr];t===oc?this.upgradeIfSecondaryHealthy_():t===rc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===sc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=qt("t",e),i=qt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:oc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ac,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=qt("t",e),i=qt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=qt(Kr,e);if(ic in e){let i=e[ic];if(t===Ff){let r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===ac){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Mf?this.onConnectionShutdown_(i):t===rc?this.onReset_(i):t===xf?ns("Server Error: "+i):t===sc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ns("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ai!==i&&W("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Qt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Of))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cc,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};var di=class{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};var hi=class{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};var fi=class n extends hi{static getInstance(){return new n}constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ct()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};var lc=32,uc=768,T=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function w(){return new T("")}function v(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ke(n){return n.pieces_.length-n.pieceNum_}function b(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new T(n.pieces_,e)}function Zs(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Uf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function tn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Jc(n){if(n.pieceNum_>=n.pieces_.length)return null;let e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new T(e,0)}function A(n,e){let t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof T)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{let i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new T(t,0)}function y(n){return n.pieceNum_>=n.pieces_.length}function U(n,e){let t=v(n),i=v(e);if(t===null)return e;if(t===i)return U(b(n),b(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Wf(n,e){let t=tn(n,0),i=tn(e,0);for(let r=0;r<t.length&&r<i.length;r++){let s=Qe(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function eo(n,e){if(ke(n)!==ke(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function q(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ke(n)>ke(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}var ds=class{constructor(e,t){this.errorPrefix_=t,this.parts_=tn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=St(this.parts_[i]);Qc(this)}};function Vf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=St(e),Qc(n)}function Hf(n){let e=n.parts_.pop();n.byteLength_-=St(e),n.parts_.length>0&&(n.byteLength_-=1)}function Qc(n){if(n.byteLength_>uc)throw new Error(n.errorPrefix_+"has a key path longer than "+uc+" bytes ("+n.byteLength_+").");if(n.parts_.length>lc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lc+") or object contains a cycle "+ze(n))}function ze(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}var hs=class n extends hi{static getInstance(){return new n}constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}};var $t=1e3,Bf=60*5*1e3,dc=30*1e3,jf=1.3,Gf=3e4,zf="server_kill",hc=3,Ye=class n extends di{constructor(e,t,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=n.nextPersistentConnectionId_++,this.log_=hn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$t,this.maxReconnectDelay_=Bf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!ne())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let r=++this.requestNumber_,s={r,a:e,b:t};this.log_(N(s)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();let t=new H,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{let a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;let s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();let s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");let a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);let s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{let c=a.d,l=a.s;n.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Q(e,"w")){let i=Me(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();W(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=xo(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{let s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);let s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){let s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();let o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;let a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){let s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+N(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ns("Unrecognized action received from server: "+N(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gf&&(this.reconnectDelay_=$t),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+n.nextConnectionId_++,s=this.lastSessionId,o=!1,a=null,c=function(){a?a.close():(o=!0,i())},l=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};let d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new us(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{W(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zf)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&W(u),c())}}}interrupt(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nt(this.interruptReasons_)&&(this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>Qs(s)).join("$"):i="default";let r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){let i=new T(e).toString(),r;if(this.listens.has(i)){let s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hc&&(this.reconnectDelay_=dc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){O("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";ne()&&(this.repoInfo_.nodeAdmin?t="admin_node":t="node"),e["sdk."+t+"."+Js.replace(/\./g,"-")]=1,Ct()?e["framework.cordova"]=1:En()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=fi.getInstance().currentlyOnline();return nt(this.interruptReasons_)&&e}};Ye.nextPersistentConnectionId_=0;Ye.nextConnectionId_=0;var I=class n{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n(e,t)}};var ht=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new I(dt,e),r=new I(dt,t);return this.compare(i,r)!==0}minPost(){return I.MIN}};var oi,pi=class extends ht{static get __EMPTY_NODE(){return oi}static set __EMPTY_NODE(e){oi=e}compare(e,t){return Qe(e.name,t.name)}isDefinedOn(e){throw Le("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return I.MIN}maxPost(){return new I(Ke,oi)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,oi)}toString(){return".key"}},ut=new pi;var ct=class{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},F=class n{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i!=null?i:n.RED,this.left=r!=null?r:$.EMPTY_NODE,this.right=s!=null?s:$.EMPTY_NODE}copy(e,t,i,r,s){return new n(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this,s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return $.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return $.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};F.RED=!0;F.BLACK=!1;var fs=class{copy(e,t,i,r,s){return this}insert(e,t,i){return new F(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},$=class n{constructor(e,t=n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(e){return new n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ct(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ct(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ct(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ct(this.root_,null,this.comparator_,!0,e)}};$.EMPTY_NODE=new fs;function qf(n,e){return Qe(n.name,e.name)}function to(n,e){return Qe(n,e)}var ps;function $f(n){ps=n}var Xc=function(n){return typeof n=="number"?"number:"+Lc(n):"string:"+n},Zc=function(n){if(n.isLeafNode()){let e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Q(e,".sv"),"Priority must be a string or number.")}else f(n===ps||n.isEmpty(),"priority of unexpected type.");f(n===ps||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};var fc,me=class n{static set __childrenNodeConstructor(e){fc=e}static get __childrenNodeConstructor(){return fc}constructor(e,t=n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zc(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:v(e)===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=v(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,n.__childrenNodeConstructor.EMPTY_NODE.updateChild(b(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xc(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":",t==="number"?e+=Lc(this.value_):e+=this.value_,this.lazyHash_=Oc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof n.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,r=n.VALUE_TYPE_ORDER.indexOf(t),s=n.VALUE_TYPE_ORDER.indexOf(i);return f(r>=0,"Unknown leaf type: "+t),f(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};me.VALUE_TYPE_ORDER=["object","boolean","number","string"];var el,tl;function Kf(n){el=n}function Yf(n){tl=n}var _s=class extends ht{compare(e,t){let i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Qe(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return I.MIN}maxPost(){return new I(Ke,new me("[PRIORITY-POST]",tl))}makePost(e,t){let i=el(e);return new I(t,new me("[PRIORITY-POST]",i))}toString(){return".priority"}},R=new _s;var Jf=Math.log(2),ms=class{constructor(e){let t=s=>parseInt(Math.log(s)/Jf,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;let r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},_i=function(n,e,t,i){n.sort(e);let r=function(c,l){let d=l-c,u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new F(h,u.node,F.BLACK,null,null);{let p=parseInt(d/2,10)+c,_=r(c,p),E=r(p+1,l);return u=n[p],h=t?t(u):u,new F(h,u.node,F.BLACK,_,E)}},s=function(c){let l=null,d=null,u=n.length,h=function(_,E){let S=u-_,j=u;u-=_;let G=r(S+1,j),Y=n[S],Ze=t?t(Y):Y;p(new F(Ze,Y.node,E,null,G))},p=function(_){l?(l.left=_,l=_):(d=_,l=_)};for(let _=0;_<c.count;++_){let E=c.nextBitIsOne(),S=Math.pow(2,c.count-(_+1));E?h(S,F.BLACK):(h(S,F.BLACK),h(S,F.RED))}return d},o=new ms(n.length),a=s(o);return new $(i||e,a)};var Yr,at={},ft=class n{static get Default(){return f(at&&R,"ChildrenNode.ts has not been loaded"),Yr=Yr||new n({".priority":at},{".priority":R}),Yr}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=Me(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $?t:null}hasIndex(e){return Q(this.indexSet_,e.toString())}addIndex(e,t){f(e!==ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(I.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=_i(i,e.getCompare()):a=at;let c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;let d=Object.assign({},this.indexes_);return d[c]=a,new n(d,l)}addToIndexes(e,t){let i=bt(this.indexes_,(r,s)=>{let o=Me(this.indexSet_,s);if(f(o,"Missing index implementation for "+s),r===at)if(o.isDefinedOn(e.node)){let a=[],c=t.getIterator(I.Wrap),l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),_i(a,o.getCompare())}else return at;else{let a=t.get(e.name),c=r;return a&&(c=c.remove(new I(e.name,a))),c.insert(e,e.node)}});return new n(i,this.indexSet_)}removeFromIndexes(e,t){let i=bt(this.indexes_,r=>{if(r===at)return r;{let s=t.get(e.name);return s?r.remove(new I(e.name,s)):r}});return new n(i,this.indexSet_)}};var Kt,g=class n{static get EMPTY_NODE(){return Kt||(Kt=new n(new $(to),null,ft.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Zc(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kt}updatePriority(e){return this.children_.isEmpty()?this:new n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{let t=this.children_.get(e);return t===null?Kt:t}}getChild(e){let t=v(e);return t===null?this:this.getImmediateChild(t).getChild(b(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{let i=new I(e,t),r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));let o=r.isEmpty()?Kt:this.priorityNode_;return new n(r,o,s)}}updateChild(e,t){let i=v(e);if(i===null)return t;{f(v(e)!==".priority"||ke(e)===1,".priority must be the last token in a path");let r=this.getImmediateChild(i).updateChild(b(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,r=0,s=!0;if(this.forEachChild(R,(o,a)=>{t[o]=a.val(e),i++,s&&n.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){let o=[];for(let a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xc(this.getPriority().val())+":"),this.forEachChild(R,(t,i)=>{let r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Oc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let r=this.resolveIndex_(i);if(r){let s=r.getPredecessorKey(new I(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new I(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new I(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{let r=this.children_.getIteratorFrom(e.name,I.Wrap),s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{let r=this.children_.getReverseIteratorFrom(e.name,I.Wrap),s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fn?-1:0}withIndex(e){if(e===ut||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ut||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let i=this.getIterator(R),r=t.getIterator(R),s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ut?null:this.indexMap_.get(e.toString())}};g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var gs=class extends g{constructor(){super(new $(to),g.EMPTY_NODE,ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}},fn=new gs;Object.defineProperties(I,{MIN:{value:new I(dt,g.EMPTY_NODE)},MAX:{value:new I(Ke,fn)}});pi.__EMPTY_NODE=g.EMPTY_NODE;me.__childrenNodeConstructor=g;$f(fn);Yf(fn);var Qf=!0;function P(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){let t=n;return new me(t,P(e))}if(!(n instanceof Array)&&Qf){let t=[],i=!1;if(D(n,(o,a)=>{if(o.substring(0,1)!=="."){let c=P(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new I(o,c)))}}),t.length===0)return g.EMPTY_NODE;let s=_i(t,qf,o=>o.name,to);if(i){let o=_i(t,R.getCompare());return new g(s,P(e),new ft({".priority":o},{".priority":R}))}else return new g(s,P(e),ft.Default)}else{let t=g.EMPTY_NODE;return D(n,(i,r)=>{if(Q(n,i)&&i.substring(0,1)!=="."){let s=P(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(P(e))}}Kf(P);var vs=class extends ht{constructor(e){super(),this.indexPath_=e,f(!y(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Qe(e.name,t.name):s}makePost(e,t){let i=P(e),r=g.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(t,r)}maxPost(){let e=g.EMPTY_NODE.updateChild(this.indexPath_,fn);return new I(Ke,e)}toString(){return tn(this.indexPath_,0).join("/")}};var ys=class extends ht{compare(e,t){let i=e.node.compareTo(t.node);return i===0?Qe(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,t){let i=P(e);return new I(t,i)}toString(){return".value"}},Xf=new ys;function nl(n){return{type:"value",snapshotNode:n}}function pt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function nn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function rn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Zf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}var sn=class{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(nn(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(pt(t,i)):o.trackChildChange(rn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(R,(r,s)=>{t.hasChild(r)||i.trackChildChange(nn(r,s))}),t.isLeafNode()||t.forEachChild(R,(r,s)=>{if(e.hasChild(r)){let o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(rn(r,s,o))}else i.trackChildChange(pt(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};var mi=class n{constructor(e){this.indexedFilter_=new sn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=n.getStartPost_(e),this.endPost_=n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new I(t,i))||(i=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=g.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(g.EMPTY_NODE);let s=this;return t.forEachChild(R,(o,a)=>{s.matches(new I(o,a))||(r=r.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}};var Is=class{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{let i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{let i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new mi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new I(t,i))||(i=g.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=g.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){let a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(g.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){let a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){let u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();let a=e;f(a.numChildren()===this.limit_,"");let c=new I(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){let u=a.getImmediateChild(t),h=r.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);let p=h==null?1:o(h,c);if(d&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(rn(t,i,u)),a.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(nn(t,u));let E=a.updateImmediateChild(t,g.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(pt(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return i.isEmpty()?e:d&&o(l,c)>=0?(s!=null&&(s.trackChildChange(nn(l.name,l.node)),s.trackChildChange(pt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,g.EMPTY_NODE)):e}};var Es=class n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dt}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ke}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===R}copy(){let e=new n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function ep(n){return n.loadsAllData()?new sn(n.getIndex()):n.hasLimit()?new Is(n):new mi(n)}function pc(n){let e={};if(n.isDefault())return e;let t;if(n.index_===R?t="$priority":n.index_===Xf?t="$value":n.index_===ut?t="$key":(f(n.index_ instanceof vs,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=N(t),n.startSet_){let i=n.startAfterSet_?"startAfter":"startAt";e[i]=N(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+N(n.indexStartName_))}if(n.endSet_){let i=n.endBeforeSet_?"endBefore":"endAt";e[i]=N(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+N(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function _c(n){let e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==R&&(e.i=n.index_.toString()),e}var ws=class n extends di{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=hn("p:rest:"),this.listens_={}}listen(e,t,i,r){let s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);let o=n.getListenId_(e,i),a={};this.listens_[o]=a;let c=pc(e._queryParams);this.restRequest_(s+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,i),Me(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",r(h,null)}})}unlisten(e,t){let i=n.getListenId_(e,t);delete this.listens_[i]}get(e){let t=pc(e._queryParams),i=e._path.toString(),r=new H;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ve(t);this.log_("Sending REST request for "+o);let a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=tt(a.responseText)}catch{W("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&W("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}};var Ts=class{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function gi(){return{value:null,children:new Map}}function yt(n,e,t){if(y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{let i=v(e);n.children.has(i)||n.children.set(i,gi());let r=n.children.get(i);e=b(e),yt(r,e,t)}}function Cs(n,e){if(y(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{let t=n.value;return n.value=null,t.forEachChild(R,(i,r)=>{yt(n,new T(i),r)}),Cs(n,e)}}else if(n.children.size>0){let t=v(e);return e=b(e),n.children.has(t)&&Cs(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function bs(n,e,t){n.value!==null?t(e,n.value):tp(n,(i,r)=>{let s=new T(e.toString()+"/"+i);bs(r,s,t)})}function tp(n,e){n.children.forEach((t,i)=>{e(i,t)})}var Ss=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&D(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}};var mc=10*1e3,np=30*1e3,ip=5*60*1e3,As=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ss(e);let i=mc+(np-mc)*Math.random();Qt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;D(e,(r,s)=>{s>0&&Q(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),Qt(this.reportStats_.bind(this),Math.floor(Math.random()*2*ip))}};var ee;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ee||(ee={}));function no(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function io(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ro(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}var Rs=class n{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ee.ACK_USER_WRITE,this.source=no()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new T(e));return new n(w(),t,this.revert)}}else return f(v(this.path)===e,"operationForChild called for unrelated child."),new n(b(this.path),this.affectedTree,this.revert)}};var vi=class n{constructor(e,t){this.source=e,this.path=t,this.type=ee.LISTEN_COMPLETE}operationForChild(e){return y(this.path)?new n(this.source,w()):new n(this.source,b(this.path))}};var _t=class n{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ee.OVERWRITE}operationForChild(e){return y(this.path)?new n(this.source,w(),this.snap.getImmediateChild(e)):new n(this.source,b(this.path),this.snap)}};var on=class n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ee.MERGE}operationForChild(e){if(y(this.path)){let t=this.children.subtree(new T(e));return t.isEmpty()?null:t.value?new _t(this.source,w(),t.value):new n(this.source,w(),t)}else return f(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new n(this.source,b(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};var ce=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;let t=v(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};var Ps=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function rp(n,e,t,i){let r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Zf(o.childName,o.snapshotNode))}),Yt(n,r,"child_removed",e,i,t),Yt(n,r,"child_added",e,i,t),Yt(n,r,"child_moved",s,i,t),Yt(n,r,"child_changed",e,i,t),Yt(n,r,"value",e,i,t),r}function Yt(n,e,t,i,r,s){let o=i.filter(a=>a.type===t);o.sort((a,c)=>op(n,a,c)),o.forEach(a=>{let c=sp(n,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function sp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function op(n,e,t){if(e.childName==null||t.childName==null)throw Le("Should only compare child_ events.");let i=new I(e.childName,e.snapshotNode),r=new I(t.childName,t.snapshotNode);return n.index_.compare(i,r)}function Li(n,e){return{eventCache:n,serverCache:e}}function Xt(n,e,t,i){return Li(new ce(e,t,i),n.serverCache)}function il(n,e,t,i){return Li(n.eventCache,new ce(e,t,i))}function yi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Je(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}var Jr,ap=()=>(Jr||(Jr=new $(cf)),Jr),V=class n{static fromObject(e){let t=new n(null);return D(e,(i,r)=>{t=t.set(new T(i),r)}),t}constructor(e,t=ap()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:w(),value:this.value};if(y(e))return null;{let i=v(e),r=this.children.get(i);if(r!==null){let s=r.findRootMostMatchingPathAndValue(b(e),t);return s!=null?{path:A(new T(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{let t=v(e),i=this.children.get(t);return i!==null?i.subtree(b(e)):new n(null)}}set(e,t){if(y(e))return new n(t,this.children);{let i=v(e),s=(this.children.get(i)||new n(null)).set(b(e),t),o=this.children.insert(i,s);return new n(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new n(null):new n(null,this.children);{let t=v(e),i=this.children.get(t);if(i){let r=i.remove(b(e)),s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new n(null):new n(this.value,s)}else return this}}get(e){if(y(e))return this.value;{let t=v(e),i=this.children.get(t);return i?i.get(b(e)):null}}setTree(e,t){if(y(e))return t;{let i=v(e),s=(this.children.get(i)||new n(null)).setTree(b(e),t),o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new n(this.value,o)}}fold(e){return this.fold_(w(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(A(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,w(),t)}findOnPath_(e,t,i){let r=this.value?i(t,this.value):!1;if(r)return r;if(y(e))return null;{let s=v(e),o=this.children.get(s);return o?o.findOnPath_(b(e),A(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,w(),t)}foreachOnPath_(e,t,i){if(y(e))return this;{this.value&&i(t,this.value);let r=v(e),s=this.children.get(r);return s?s.foreachOnPath_(b(e),A(t,r),i):new n(null)}}foreach(e){this.foreach_(w(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(A(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};var te=class n{constructor(e){this.writeTree_=e}static empty(){return new n(new V(null))}};function Zt(n,e,t){if(y(e))return new te(new V(t));{let i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){let r=i.path,s=i.value,o=U(r,e);return s=s.updateChild(o,t),new te(n.writeTree_.set(r,s))}else{let r=new V(t),s=n.writeTree_.setTree(e,r);return new te(s)}}}function Ns(n,e,t){let i=n;return D(t,(r,s)=>{i=Zt(i,A(e,r),s)}),i}function gc(n,e){if(y(e))return te.empty();{let t=n.writeTree_.setTree(e,new V(null));return new te(t)}}function ks(n,e){return Xe(n,e)!=null}function Xe(n,e){let t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(U(t.path,e)):null}function vc(n){let e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(R,(i,r)=>{e.push(new I(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new I(i,r.value))}),e}function Pe(n,e){if(y(e))return n;{let t=Xe(n,e);return t!=null?new te(new V(t)):new te(n.writeTree_.subtree(e))}}function Os(n){return n.writeTree_.isEmpty()}function mt(n,e){return rl(w(),n.writeTree_,e)}function rl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(f(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=rl(A(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(A(n,".priority"),i)),t}}function Mi(n,e){return cl(e,n)}function cp(n,e,t,i,r){f(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=Zt(n.visibleWrites,e,t)),n.lastWriteId=i}function lp(n,e,t,i){f(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ns(n.visibleWrites,e,t),n.lastWriteId=i}function up(n,e){for(let t=0;t<n.allWrites.length;t++){let i=n.allWrites[t];if(i.writeId===e)return i}return null}function dp(n,e){let t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");let i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){let a=n.allWrites[o];a.visible&&(o>=t&&hp(a,i.path)?r=!1:q(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return fp(n),!0;if(i.snap)n.visibleWrites=gc(n.visibleWrites,i.path);else{let a=i.children;D(a,c=>{n.visibleWrites=gc(n.visibleWrites,A(i.path,c))})}return!0}else return!1}function hp(n,e){if(n.snap)return q(n.path,e);for(let t in n.children)if(n.children.hasOwnProperty(t)&&q(A(n.path,t),e))return!0;return!1}function fp(n){n.visibleWrites=sl(n.allWrites,pp,w()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function pp(n){return n.visible}function sl(n,e,t){let i=te.empty();for(let r=0;r<n.length;++r){let s=n[r];if(e(s)){let o=s.path,a;if(s.snap)q(t,o)?(a=U(t,o),i=Zt(i,a,s.snap)):q(o,t)&&(a=U(o,t),i=Zt(i,w(),s.snap.getChild(a)));else if(s.children){if(q(t,o))a=U(t,o),i=Ns(i,a,s.children);else if(q(o,t))if(a=U(o,t),y(a))i=Ns(i,w(),s.children);else{let c=Me(s.children,v(a));if(c){let l=c.getChild(b(a));i=Zt(i,w(),l)}}}else throw Le("WriteRecord should have .snap or .children")}}return i}function ol(n,e,t,i,r){if(!i&&!r){let s=Xe(n.visibleWrites,e);if(s!=null)return s;{let o=Pe(n.visibleWrites,e);if(Os(o))return t;if(t==null&&!ks(o,w()))return null;{let a=t||g.EMPTY_NODE;return mt(o,a)}}}else{let s=Pe(n.visibleWrites,e);if(!r&&Os(s))return t;if(!r&&t==null&&!ks(s,w()))return null;{let o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(q(l.path,e)||q(e,l.path))},a=sl(n.allWrites,o,e),c=t||g.EMPTY_NODE;return mt(a,c)}}}function _p(n,e,t){let i=g.EMPTY_NODE,r=Xe(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(R,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){let s=Pe(n.visibleWrites,e);return t.forEachChild(R,(o,a)=>{let c=mt(Pe(s,new T(o)),a);i=i.updateImmediateChild(o,c)}),vc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{let s=Pe(n.visibleWrites,e);return vc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function mp(n,e,t,i,r){f(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=A(e,t);if(ks(n.visibleWrites,s))return null;{let o=Pe(n.visibleWrites,s);return Os(o)?r.getChild(t):mt(o,r.getChild(t))}}function gp(n,e,t,i){let r=A(e,t),s=Xe(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){let o=Pe(n.visibleWrites,r);return mt(o,i.getNode().getImmediateChild(t))}else return null}function vp(n,e){return Xe(n.visibleWrites,e)}function yp(n,e,t,i,r,s,o){let a,c=Pe(n.visibleWrites,e),l=Xe(c,w());if(l!=null)a=l;else if(t!=null)a=mt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){let d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),p=h.getNext();for(;p&&d.length<r;)u(p,i)!==0&&d.push(p),p=h.getNext();return d}else return[]}function Ip(){return{visibleWrites:te.empty(),allWrites:[],lastWriteId:-1}}function Ii(n,e,t,i){return ol(n.writeTree,n.treePath,e,t,i)}function so(n,e){return _p(n.writeTree,n.treePath,e)}function yc(n,e,t,i){return mp(n.writeTree,n.treePath,e,t,i)}function Ei(n,e){return vp(n.writeTree,A(n.treePath,e))}function Ep(n,e,t,i,r,s){return yp(n.writeTree,n.treePath,e,t,i,r,s)}function oo(n,e,t){return gp(n.writeTree,n.treePath,e,t)}function al(n,e){return cl(A(n.treePath,e),n.writeTree)}function cl(n,e){return{treePath:n,writeTree:e}}var Ds=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");let r=this.changeMap.get(i);if(r){let s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,rn(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,nn(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,pt(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,rn(i,e.snapshotNode,r.oldSnap));else throw Le("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};var Ls=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}},ll=new Ls,an=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let i=this.optCompleteServerCache_!=null?new ce(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oo(this.writes_,e,i)}}getChildAfterChild(e,t,i){let r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Je(this.viewCache_),s=Ep(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}};function wp(n){return{filter:n}}function Tp(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Cp(n,e,t,i,r){let s=new Ds,o,a;if(t.type===ee.OVERWRITE){let l=t;l.source.fromUser?o=Ms(n,e,l.path,l.snap,i,r,s):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!y(l.path),o=wi(n,e,l.path,l.snap,i,r,a,s))}else if(t.type===ee.MERGE){let l=t;l.source.fromUser?o=Sp(n,e,l.path,l.children,i,r,s):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=xs(n,e,l.path,l.children,i,r,a,s))}else if(t.type===ee.ACK_USER_WRITE){let l=t;l.revert?o=Pp(n,e,l.path,i,r,s):o=Ap(n,e,l.path,l.affectedTree,i,r,s)}else if(t.type===ee.LISTEN_COMPLETE)o=Rp(n,e,t.path,i,s);else throw Le("Unknown operation type: "+t.type);let c=s.getChanges();return bp(e,o,c),{viewCache:o,changes:c}}function bp(n,e,t){let i=e.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=yi(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(nl(yi(e)))}}function ul(n,e,t,i,r,s){let o=e.eventCache;if(Ei(i,t)!=null)return e;{let a,c;if(y(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){let l=Je(e),d=l instanceof g?l:g.EMPTY_NODE,u=so(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{let l=Ii(i,Je(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{let l=v(t);if(l===".priority"){f(ke(t)===1,"Can't have a priority with additional path components");let d=o.getNode();c=e.serverCache.getNode();let u=yc(i,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{let d=b(t),u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();let h=yc(i,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=oo(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,r,s):a=o.getNode()}}return Xt(e,a,o.isFullyInitialized()||y(t),n.filter.filtersNodes())}}function wi(n,e,t,i,r,s,o,a){let c=e.serverCache,l,d=o?n.filter:n.filter.getIndexedFilter();if(y(t))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){let p=c.getNode().updateChild(t,i);l=d.updateFullNode(c.getNode(),p,null)}else{let p=v(t);if(!c.isCompleteForPath(t)&&ke(t)>1)return e;let _=b(t),S=c.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?l=d.updatePriority(c.getNode(),S):l=d.updateChild(c.getNode(),p,S,_,ll,null)}let u=il(e,l,c.isFullyInitialized()||y(t),d.filtersNodes()),h=new an(r,u,s);return ul(n,u,t,r,h,a)}function Ms(n,e,t,i,r,s,o){let a=e.eventCache,c,l,d=new an(r,e,s);if(y(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Xt(e,l,!0,n.filter.filtersNodes());else{let u=v(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=Xt(e,l,a.isFullyInitialized(),a.isFiltered());else{let h=b(t),p=a.getNode().getImmediateChild(u),_;if(y(h))_=i;else{let E=d.getCompleteChild(u);E!=null?Zs(h)===".priority"&&E.getChild(Jc(h)).isEmpty()?_=E:_=E.updateChild(h,i):_=g.EMPTY_NODE}if(p.equals(_))c=e;else{let E=n.filter.updateChild(a.getNode(),u,_,h,d,o);c=Xt(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ic(n,e){return n.eventCache.isCompleteForChild(e)}function Sp(n,e,t,i,r,s,o){let a=e;return i.foreach((c,l)=>{let d=A(t,c);Ic(e,v(d))&&(a=Ms(n,a,d,l,r,s,o))}),i.foreach((c,l)=>{let d=A(t,c);Ic(e,v(d))||(a=Ms(n,a,d,l,r,s,o))}),a}function Ec(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function xs(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;y(t)?l=i:l=new V(null).setTree(t,i);let d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){let p=e.serverCache.getNode().getImmediateChild(u),_=Ec(n,p,h);c=wi(n,c,new T(u),_,r,s,o,a)}}),l.children.inorderTraversal((u,h)=>{let p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){let _=e.serverCache.getNode().getImmediateChild(u),E=Ec(n,_,h);c=wi(n,c,new T(u),E,r,s,o,a)}}),c}function Ap(n,e,t,i,r,s,o){if(Ei(r,t)!=null)return e;let a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(y(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return wi(n,e,t,c.getNode().getChild(t),r,s,a,o);if(y(t)){let l=new V(null);return c.getNode().forEachChild(ut,(d,u)=>{l=l.set(new T(d),u)}),xs(n,e,t,l,r,s,a,o)}else return e}else{let l=new V(null);return i.foreach((d,u)=>{let h=A(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),xs(n,e,t,l,r,s,a,o)}}function Rp(n,e,t,i,r){let s=e.serverCache,o=il(e,s.getNode(),s.isFullyInitialized()||y(t),s.isFiltered());return ul(n,o,t,i,ll,r)}function Pp(n,e,t,i,r,s){let o;if(Ei(i,t)!=null)return e;{let a=new an(i,e,r),c=e.eventCache.getNode(),l;if(y(t)||v(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ii(i,Je(e));else{let u=e.serverCache.getNode();f(u instanceof g,"serverChildren would be complete if leaf node"),d=so(i,u)}d=d,l=n.filter.updateFullNode(c,d,s)}else{let d=v(t),u=oo(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,b(t),a,s):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,g.EMPTY_NODE,b(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ii(i,Je(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Ei(i,w())!=null,Xt(e,l,o,n.filter.filtersNodes())}}var Fs=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,r=new sn(i.getIndex()),s=ep(i);this.processor_=wp(s);let o=t.serverCache,a=t.eventCache,c=r.updateFullNode(g.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(g.EMPTY_NODE,a.getNode(),null),d=new ce(c,o.isFullyInitialized(),r.filtersNodes()),u=new ce(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Li(u,d),this.eventGenerator_=new Ps(this.query_)}get query(){return this.query_}};function Np(n){return n.viewCache_.serverCache.getNode()}function kp(n){return yi(n.viewCache_)}function Op(n,e){let t=Je(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!y(e)&&!t.getImmediateChild(v(e)).isEmpty())?t.getChild(e):null}function wc(n){return n.eventRegistrations_.length===0}function Dp(n,e){n.eventRegistrations_.push(e)}function Tc(n,e,t){let i=[];if(t){f(e==null,"A cancel should cancel all event registrations.");let r=n.query._path;n.eventRegistrations_.forEach(s=>{let o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){let o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Cc(n,e,t,i){e.type===ee.MERGE&&e.source.queryId!==null&&(f(Je(n.viewCache_),"We should always have a full cache before handling merges"),f(yi(n.viewCache_),"Missing event cache, even though we have a server cache"));let r=n.viewCache_,s=Cp(n.processor_,r,e,t,i);return Tp(n.processor_,s.viewCache),f(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,dl(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Lp(n,e){let t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(R,(s,o)=>{i.push(pt(s,o))}),t.isFullyInitialized()&&i.push(nl(t.getNode())),dl(n,i,t.getNode(),e)}function dl(n,e,t,i){let r=i?[i]:n.eventRegistrations_;return rp(n.eventGenerator_,e,t,r)}var Ti,Ci=class{constructor(){this.views=new Map}};function Mp(n){f(!Ti,"__referenceConstructor has already been defined"),Ti=n}function xp(){return f(Ti,"Reference.ts has not been loaded"),Ti}function Fp(n){return n.views.size===0}function ao(n,e,t,i){let r=e.source.queryId;if(r!==null){let s=n.views.get(r);return f(s!=null,"SyncTree gave us an op for an invalid query."),Cc(s,e,t,i)}else{let s=[];for(let o of n.views.values())s=s.concat(Cc(o,e,t,i));return s}}function hl(n,e,t,i,r){let s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Ii(t,r?i:null),c=!1;a?c=!0:i instanceof g?(a=so(t,i),c=!1):(a=g.EMPTY_NODE,c=!1);let l=Li(new ce(a,c,!1),new ce(i,r,!1));return new Fs(e,l)}return o}function Up(n,e,t,i,r,s){let o=hl(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Dp(o,t),Lp(o,t)}function Wp(n,e,t,i){let r=e._queryIdentifier,s=[],o=[],a=Oe(n);if(r==="default")for(let[c,l]of n.views.entries())o=o.concat(Tc(l,t,i)),wc(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{let c=n.views.get(r);c&&(o=o.concat(Tc(c,t,i)),wc(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!Oe(n)&&s.push(new(xp())(e._repo,e._path)),{removed:s,events:o}}function fl(n){let e=[];for(let t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ne(n,e){let t=null;for(let i of n.views.values())t=t||Op(i,e);return t}function pl(n,e){if(e._queryParams.loadsAllData())return xi(n);{let i=e._queryIdentifier;return n.views.get(i)}}function _l(n,e){return pl(n,e)!=null}function Oe(n){return xi(n)!=null}function xi(n){for(let e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}var bi;function Vp(n){f(!bi,"__referenceConstructor has already been defined"),bi=n}function Hp(){return f(bi,"Reference.ts has not been loaded"),bi}var Bp=1,Si=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=Ip(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function ml(n,e,t,i,r){return cp(n.pendingWriteTree_,e,t,i,r),r?It(n,new _t(no(),e,t)):[]}function jp(n,e,t,i){lp(n.pendingWriteTree_,e,t,i);let r=V.fromObject(t);return It(n,new on(no(),e,r))}function Ae(n,e,t=!1){let i=up(n.pendingWriteTree_,e);if(dp(n.pendingWriteTree_,e)){let s=new V(null);return i.snap!=null?s=s.set(w(),!0):D(i.children,o=>{s=s.set(new T(o),!0)}),It(n,new Rs(i.path,s,t))}else return[]}function pn(n,e,t){return It(n,new _t(io(),e,t))}function Gp(n,e,t){let i=V.fromObject(t);return It(n,new on(io(),e,i))}function zp(n,e){return It(n,new vi(io(),e))}function qp(n,e,t){let i=lo(n,t);if(i){let r=uo(i),s=r.path,o=r.queryId,a=U(s,e),c=new vi(ro(o),a);return ho(n,s,c)}else return[]}function Ai(n,e,t,i,r=!1){let s=e._path,o=n.syncPointTree_.get(s),a=[];if(o&&(e._queryIdentifier==="default"||_l(o,e))){let c=Wp(o,e,t,i);Fp(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));let l=c.removed;if(a=c.events,!r){let d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(h,p)=>Oe(p));if(d&&!u){let h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){let p=Yp(h);for(let _=0;_<p.length;++_){let E=p[_],S=E.query,j=Il(n,E);n.listenProvider_.startListening(en(S),cn(n,S),j.hashFn,j.onComplete)}}}!u&&l.length>0&&!i&&(d?n.listenProvider_.stopListening(en(e),null):l.forEach(h=>{let p=n.queryToTagMap.get(Fi(h));n.listenProvider_.stopListening(en(h),p)}))}Jp(n,l)}return a}function gl(n,e,t,i){let r=lo(n,i);if(r!=null){let s=uo(r),o=s.path,a=s.queryId,c=U(o,e),l=new _t(ro(a),c,t);return ho(n,o,l)}else return[]}function $p(n,e,t,i){let r=lo(n,i);if(r){let s=uo(r),o=s.path,a=s.queryId,c=U(o,e),l=V.fromObject(t),d=new on(ro(a),c,l);return ho(n,o,d)}else return[]}function Us(n,e,t,i=!1){let r=e._path,s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(h,p)=>{let _=U(h,r);s=s||Ne(p,_),o=o||Oe(p)});let a=n.syncPointTree_.get(r);a?(o=o||Oe(a),s=s||Ne(a,w())):(a=new Ci,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;s!=null?c=!0:(c=!1,s=g.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((p,_)=>{let E=Ne(_,w());E&&(s=s.updateImmediateChild(p,E))}));let l=_l(a,e);if(!l&&!e._queryParams.loadsAllData()){let h=Fi(e);f(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");let p=Qp();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}let d=Mi(n.pendingWriteTree_,r),u=Up(a,e,t,d,s,c);if(!l&&!o&&!i){let h=pl(a,e);u=u.concat(Xp(n,e,h))}return u}function co(n,e,t){let r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{let c=U(o,e),l=Ne(a,c);if(l)return l});return ol(r,e,s,t,!0)}function Kp(n,e){let t=e._path,i=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{let u=U(l,t);i=i||Ne(d,u)});let r=n.syncPointTree_.get(t);r?i=i||Ne(r,w()):(r=new Ci,n.syncPointTree_=n.syncPointTree_.set(t,r));let s=i!=null,o=s?new ce(i,!0,!1):null,a=Mi(n.pendingWriteTree_,e._path),c=hl(r,e,a,s?o.getNode():g.EMPTY_NODE,s);return kp(c)}function It(n,e){return vl(e,n.syncPointTree_,null,Mi(n.pendingWriteTree_,w()))}function vl(n,e,t,i){if(y(n.path))return yl(n,e,t,i);{let r=e.get(w());t==null&&r!=null&&(t=Ne(r,w()));let s=[],o=v(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){let l=t?t.getImmediateChild(o):null,d=al(i,o);s=s.concat(vl(a,c,l,d))}return r&&(s=s.concat(ao(r,n,i,t))),s}}function yl(n,e,t,i){let r=e.get(w());t==null&&r!=null&&(t=Ne(r,w()));let s=[];return e.children.inorderTraversal((o,a)=>{let c=t?t.getImmediateChild(o):null,l=al(i,o),d=n.operationForChild(o);d&&(s=s.concat(yl(d,a,c,l)))}),r&&(s=s.concat(ao(r,n,i,t))),s}function Il(n,e){let t=e.query,i=cn(n,t);return{hashFn:()=>(Np(e)||g.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?qp(n,t._path,i):zp(n,t._path);{let s=df(r,t);return Ai(n,t,null,s)}}}}function cn(n,e){let t=Fi(e);return n.queryToTagMap.get(t)}function Fi(n){return n._path.toString()+"$"+n._queryIdentifier}function lo(n,e){return n.tagToQueryMap.get(e)}function uo(n){let e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new T(n.substr(0,e))}}function ho(n,e,t){let i=n.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");let r=Mi(n.pendingWriteTree_,e);return ao(i,t,r,null)}function Yp(n){return n.fold((e,t,i)=>{if(t&&Oe(t))return[xi(t)];{let r=[];return t&&(r=fl(t)),D(i,(s,o)=>{r=r.concat(o)}),r}})}function en(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Hp())(n._repo,n._path):n}function Jp(n,e){for(let t=0;t<e.length;++t){let i=e[t];if(!i._queryParams.loadsAllData()){let r=Fi(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function Qp(){return Bp++}function Xp(n,e,t){let i=e._path,r=cn(n,e),s=Il(n,t),o=n.listenProvider_.startListening(en(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)f(!Oe(a.value),"If we're adding a query, it shouldn't be shadowed");else{let c=a.fold((l,d,u)=>{if(!y(l)&&d&&Oe(d))return[xi(d).query];{let h=[];return d&&(h=h.concat(fl(d).map(p=>p.query))),D(u,(p,_)=>{h=h.concat(_)}),h}});for(let l=0;l<c.length;++l){let d=c[l];n.listenProvider_.stopListening(en(d),cn(n,d))}}return o}var Ws=class n{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new n(t)}node(){return this.node_}},Vs=class n{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=A(this.path_,e);return new n(this.syncTree_,t)}node(){return co(this.syncTree_,this.path_)}},Zp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},bc=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return e_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return t_(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},e_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},t_=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));let i=n.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);let r=e.node();if(f(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let o=r.getValue();return typeof o!="number"?i:o+i},El=function(n,e,t,i){return fo(e,new Vs(t,n),i)},wl=function(n,e,t){return fo(n,new Ws(e),t)};function fo(n,e,t){let i=n.getPriority().val(),r=bc(i,e.getImmediateChild(".priority"),t),s;if(n.isLeafNode()){let o=n,a=bc(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new me(a,P(r)):n}else{let o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new me(r))),o.forEachChild(R,(a,c)=>{let l=fo(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}var ln=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function po(n,e){let t=e instanceof T?e:new T(e),i=n,r=v(t);for(;r!==null;){let s=Me(i.node.children,r)||{children:{},childCount:0};i=new ln(r,i,s),t=b(t),r=v(t)}return i}function Et(n){return n.node.value}function Tl(n,e){n.node.value=e,Hs(n)}function Cl(n){return n.node.childCount>0}function n_(n){return Et(n)===void 0&&!Cl(n)}function Ui(n,e){D(n.node.children,(t,i)=>{e(new ln(t,n,i))})}function bl(n,e,t,i){t&&!i&&e(n),Ui(n,r=>{bl(r,e,!0,i)}),t&&i&&e(n)}function i_(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function _n(n){return new T(n.parent===null?n.name:_n(n.parent)+"/"+n.name)}function Hs(n){n.parent!==null&&r_(n.parent,n.name,n)}function r_(n,e,t){let i=n_(t),r=Q(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,Hs(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,Hs(n))}var s_=/[\[\].#$\/\u0000-\u001F\u007F]/,o_=/[\[\].#$\u0000-\u001F\u007F]/,Qr=10*1024*1024,_o=function(n){return typeof n=="string"&&n.length!==0&&!s_.test(n)},Sl=function(n){return typeof n=="string"&&n.length!==0&&!o_.test(n)},a_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sl(n)},Al=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Di(n)||n&&typeof n=="object"&&Q(n,".sv")},Bs=function(n,e,t,i){i&&e===void 0||Wi(xe(n,"value"),e,t)},Wi=function(n,e,t){let i=t instanceof T?new ds(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ze(i));if(typeof e=="function")throw new Error(n+"contains a function "+ze(i)+" with contents = "+e.toString());if(Di(e))throw new Error(n+"contains "+e.toString()+" "+ze(i));if(typeof e=="string"&&e.length>Qr/3&&St(e)>Qr)throw new Error(n+"contains a string greater than "+Qr+" utf8 bytes "+ze(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(D(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!_o(o)))throw new Error(n+" contains an invalid key ("+o+") "+ze(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vf(i,o),Wi(n,a,i),Hf(i)}),r&&s)throw new Error(n+' contains ".value" child '+ze(i)+" in addition to actual children.")}},c_=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];let s=tn(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!_o(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Wf);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&q(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Rl=function(n,e,t,i){if(i&&e===void 0)return;let r=xe(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");let s=[];D(e,(o,a)=>{let c=new T(o);if(Wi(r,a,A(t,c)),Zs(c)===".priority"&&!Al(a))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),c_(r,s)},l_=function(n,e,t){if(!(t&&e===void 0)){if(Di(e))throw new Error(xe(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Al(e))throw new Error(xe(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}};var Pl=function(n,e,t,i){if(!(i&&t===void 0)&&!Sl(t))throw new Error(xe(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},u_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pl(n,e,t,i)},Jt=function(n,e){if(v(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},d_=function(n,e){let t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_o(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!a_(t))throw new Error(xe(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};var js=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function Vi(n,e){let t=null;for(let i=0;i<e.length;i++){let r=e[i],s=r.getPath();t!==null&&!eo(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function Nl(n,e,t){Vi(n,t),kl(n,i=>eo(i,e))}function K(n,e,t){Vi(n,t),kl(n,i=>q(i,e)||q(e,i))}function kl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){let r=n.eventLists_[i];if(r){let s=r.path;e(s)?(h_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function h_(n){for(let e=0;e<n.events.length;e++){let t=n.events[e];if(t!==null){n.events[e]=null;let i=t.getEventRunner();$e&&O("event: "+t.toString()),vt(i)}}}var f_="repo_interrupt",p_=25,Gs=class{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new js,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gi(),this.transactionQueueTree_=new ln,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function __(n,e,t){if(n.stats_=Xs(n.repoInfo_),n.forceRestClient_||_f())n.server_=new ws(n.repoInfo_,(i,r,s,o)=>{Sc(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ac(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{N(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ye(n.repoInfo_,e,(i,r,s,o)=>{Sc(n,i,r,s,o)},i=>{Ac(n,i)},i=>{g_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=gf(n.repoInfo_,()=>new As(n.stats_,n.server_)),n.infoData_=new Ts,n.infoSyncTree_=new Si({startListening:(i,r,s,o)=>{let a=[],c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=pn(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),mo(n,"connected",!1),n.serverSyncTree_=new Si({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,c)=>{let l=o(a,c);K(n.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function m_(n){let t=n.infoData_.getNode(new T(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Hi(n){return Zp({timestamp:m_(n)})}function Sc(n,e,t,i,r){n.dataUpdateCount++;let s=new T(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){let c=bt(t,l=>P(l));o=$p(n.serverSyncTree_,s,c,r)}else{let c=P(t);o=gl(n.serverSyncTree_,s,c,r)}else if(i){let c=bt(t,l=>P(l));o=Gp(n.serverSyncTree_,s,c)}else{let c=P(t);o=pn(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=gt(n,s)),K(n.eventQueue_,a,o)}function Ac(n,e){mo(n,"connected",e),e===!1&&E_(n)}function g_(n,e){D(e,(t,i)=>{mo(n,t,i)})}function mo(n,e,t){let i=new T("/.info/"+e),r=P(t);n.infoData_.updateSnapshot(i,r);let s=pn(n.infoSyncTree_,i,r);K(n.eventQueue_,i,s)}function go(n){return n.nextWriteId_++}function v_(n,e,t){let i=Kp(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(r=>{let s=P(r).withIndex(e._queryParams.getIndex());Us(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=pn(n.serverSyncTree_,e._path,s);else{let a=cn(n.serverSyncTree_,e);o=gl(n.serverSyncTree_,e._path,s,a)}return K(n.eventQueue_,e._path,o),Ai(n.serverSyncTree_,e,t,null,!0),s},r=>(mn(n,"get for query "+N(e)+" failed: "+r),Promise.reject(new Error(r))))}function y_(n,e,t,i,r){mn(n,"set",{path:e.toString(),value:t,priority:i});let s=Hi(n),o=P(t,i),a=co(n.serverSyncTree_,e),c=wl(o,a,s),l=go(n),d=ml(n.serverSyncTree_,e,c,l,!0);Vi(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{let _=h==="ok";_||W("set at "+e+" failed: "+h);let E=Ae(n.serverSyncTree_,l,!_);K(n.eventQueue_,e,E),De(n,r,h,p)});let u=yo(n,e);gt(n,u),K(n.eventQueue_,u,[])}function I_(n,e,t,i){mn(n,"update",{path:e.toString(),value:t});let r=!0,s=Hi(n),o={};if(D(t,(a,c)=>{r=!1,o[a]=El(A(e,a),P(c),n.serverSyncTree_,s)}),r)O("update() called with empty data.  Don't do anything."),De(n,i,"ok",void 0);else{let a=go(n),c=jp(n.serverSyncTree_,e,o,a);Vi(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{let u=l==="ok";u||W("update at "+e+" failed: "+l);let h=Ae(n.serverSyncTree_,a,!u),p=h.length>0?gt(n,e):e;K(n.eventQueue_,p,h),De(n,i,l,d)}),D(t,l=>{let d=yo(n,A(e,l));gt(n,d)}),K(n.eventQueue_,e,[])}}function E_(n){mn(n,"onDisconnectEvents");let e=Hi(n),t=gi();bs(n.onDisconnect_,w(),(r,s)=>{let o=El(r,s,n.serverSyncTree_,e);yt(t,r,o)});let i=[];bs(t,w(),(r,s)=>{i=i.concat(pn(n.serverSyncTree_,r,s));let o=yo(n,r);gt(n,o)}),n.onDisconnect_=gi(),K(n.eventQueue_,w(),i)}function w_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Cs(n.onDisconnect_,e),De(n,t,i,r)})}function Rc(n,e,t,i){let r=P(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&yt(n.onDisconnect_,e,r),De(n,i,s,o)})}function T_(n,e,t,i,r){let s=P(t,i);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&yt(n.onDisconnect_,e,s),De(n,r,o,a)})}function C_(n,e,t,i){if(nt(t)){O("onDisconnect().update() called with empty data.  Don't do anything."),De(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,s)=>{r==="ok"&&D(t,(o,a)=>{let c=P(a);yt(n.onDisconnect_,A(e,o),c)}),De(n,i,r,s)})}function b_(n,e,t){let i;v(e._path)===".info"?i=Us(n.infoSyncTree_,e,t):i=Us(n.serverSyncTree_,e,t),Nl(n.eventQueue_,e._path,i)}function Pc(n,e,t){let i;v(e._path)===".info"?i=Ai(n.infoSyncTree_,e,t):i=Ai(n.serverSyncTree_,e,t),Nl(n.eventQueue_,e._path,i)}function S_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(f_)}function mn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),O(t,...e)}function De(n,e,t,i){e&&vt(()=>{if(t==="ok")e(null);else{let r=(t||"error").toUpperCase(),s=r;i&&(s+=": "+i);let o=new Error(s);o.code=r,e(o)}})}function Ol(n,e,t){return co(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function vo(n,e=n.transactionQueueTree_){if(e||Bi(n,e),Et(e)){let t=Ll(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&A_(n,_n(e),t)}else Cl(e)&&Ui(e,t=>{vo(n,t)})}function A_(n,e,t){let i=t.map(l=>l.currentWriteId),r=Ol(n,e,i),s=r,o=r.hash();for(let l=0;l<t.length;l++){let d=t[l];f(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;let u=U(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}let a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{mn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){let u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(Ae(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Bi(n,po(n.transactionQueueTree_,e)),vo(n,n.transactionQueueTree_),K(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)vt(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{W("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}gt(n,e)}},o)}function gt(n,e){let t=Dl(n,e),i=_n(t),r=Ll(n,t);return R_(n,r,i),i}function R_(n,e,t){if(e.length===0)return;let i=[],r=[],o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){let c=e[a],l=U(t,c.path),d=!1,u;if(f(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,r=r.concat(Ae(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=p_)d=!0,u="maxretry",r=r.concat(Ae(n.serverSyncTree_,c.currentWriteId,!0));else{let h=Ol(n,c.path,o);c.currentInputSnapshot=h;let p=e[a].update(h.val());if(p!==void 0){Wi("transaction failed: Data returned ",p,c.path);let _=P(p);typeof p=="object"&&p!=null&&Q(p,".priority")||(_=_.updatePriority(h.getPriority()));let S=c.currentWriteId,j=Hi(n),G=wl(_,h,j);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=G,c.currentWriteId=go(n),o.splice(o.indexOf(S),1),r=r.concat(ml(n.serverSyncTree_,c.path,G,c.currentWriteId,c.applyLocally)),r=r.concat(Ae(n.serverSyncTree_,S,!0))}else d=!0,u="nodata",r=r.concat(Ae(n.serverSyncTree_,c.currentWriteId,!0))}K(n.eventQueue_,t,r),r=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Bi(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)vt(i[a]);vo(n,n.transactionQueueTree_)}function Dl(n,e){let t,i=n.transactionQueueTree_;for(t=v(e);t!==null&&Et(i)===void 0;)i=po(i,t),e=b(e),t=v(e);return i}function Ll(n,e){let t=[];return Ml(n,e,t),t.sort((i,r)=>i.order-r.order),t}function Ml(n,e,t){let i=Et(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);Ui(e,r=>{Ml(n,r,t)})}function Bi(n,e){let t=Et(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,Tl(e,t.length>0?t:void 0)}Ui(e,i=>{Bi(n,i)})}function yo(n,e){let t=_n(Dl(n,e)),i=po(n.transactionQueueTree_,e);return i_(i,r=>{Xr(n,r)}),Xr(n,i),bl(i,r=>{Xr(n,r)}),t}function Xr(n,e){let t=Et(e);if(t){let i=[],r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Ae(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Tl(e,void 0):t.length=s+1,K(n.eventQueue_,_n(e),r);for(let o=0;o<i.length;o++)vt(i[o])}}function P_(n){let e="",t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function N_(n){let e={};n.charAt(0)==="?"&&(n=n.substring(1));for(let t of n.split("&")){if(t.length===0)continue;let i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):W(`Invalid query segment '${t}' in query '${n}'`)}return e}var Nc=function(n,e){let t=k_(n),i=t.namespace;t.domain==="firebase.com"&&_e(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&_e("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||of();let r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ci(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new T(t.pathString)}},k_=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(r=P_(n.substring(d,u)));let h=N_(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;let p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{let _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};var Ri=class{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){let e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+N(this.snapshot.exportVal())}},Pi=class{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};var Ni=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};var zs=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new H;return w_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Jt("OnDisconnect.remove",this._path);let e=new H;return Rc(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Jt("OnDisconnect.set",this._path),Bs("OnDisconnect.set",e,this._path,!1);let t=new H;return Rc(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Jt("OnDisconnect.setWithPriority",this._path),Bs("OnDisconnect.setWithPriority",e,this._path,!1),l_("OnDisconnect.setWithPriority",t,!1);let i=new H;return T_(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Jt("OnDisconnect.update",this._path),Rl("OnDisconnect.update",e,this._path,!1);let t=new H;return C_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};var qs=class n{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return y(this._path)?null:Zs(this._path)}get ref(){return new le(this._repo,this._path)}get _queryIdentifier(){let e=_c(this._queryParams),t=Qs(e);return t==="{}"?"default":t}get _queryObject(){return _c(this._queryParams)}isEqual(e){if(e=M(e),!(e instanceof n))return!1;let t=this._repo===e._repo,i=eo(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uf(this._path)}};var le=class n extends qs{constructor(e,t){super(e,t,new Es,!1)}get parent(){let e=Jc(this._path);return e===null?null:new n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},un=class n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new T(e),i=ki(this.ref,e);return new n(this._node.getChild(t),i,R)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new n(r,ki(this.ref,i),R)))}hasChild(e){let t=new T(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function xl(n,e){return n=M(n),n._checkNotDeleted("ref"),e!==void 0?ki(n._root,e):n._root}function ki(n,e){return n=M(n),v(n._path)===null?u_("child","path",e,!1):Pl("child","path",e,!1),new le(n._repo,A(n._path,e))}function Fl(n){return n=M(n),new zs(n._repo,n._path)}function Ul(n,e){n=M(n),Jt("set",n._path),Bs("set",e,n._path,!1);let t=new H;return y_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Wl(n,e){Rl("update",e,n._path,!1);let t=new H;return I_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Vl(n){n=M(n);let e=new Ni(()=>{}),t=new Oi(e);return v_(n._repo,n,t).then(i=>new un(i,new le(n._repo,n._path),n._queryParams.getIndex()))}var Oi=class n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){let i=t._queryParams.getIndex();return new Ri("value",this,new un(e.snapshotNode,new le(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Pi(this,e,t):null}matches(e){return e instanceof n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},$s=class n{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Pi(this,e,t):null}createEvent(e,t){f(e.childName!=null,"Child events should have a childName.");let i=ki(new le(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Ri(e.type,this,new un(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof n?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function O_(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){let c=t,l=(d,u)=>{Pc(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}let o=new Ni(t,s||void 0),a=e==="value"?new Oi(o):new $s(e,o);return b_(n._repo,n,a),()=>Pc(n._repo,n,a)}function Hl(n,e,t,i){return O_(n,"value",e,t,i)}Mp(le);Vp(le);var D_="FIREBASE_DATABASE_EMULATOR_HOST",Ks={},L_=!1;function M_(n,e,t,i){let r=e.lastIndexOf(":"),s=e.substring(0,r),o=ge(s);n.repoInfo_=new ci(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function x_(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||_e("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),O("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Nc(s,r),a=o.repoInfo,c,l;typeof process!="undefined"&&process.env&&(l=process.env[D_]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Nc(s,r),a=o.repoInfo):c=!o.repoInfo.secure;let d=r&&c?new Re(Re.OWNER):new rs(n.name,n.options,e);d_("Invalid Firebase Database URL",o),y(o.path)||_e("Database URL must point to the root of a Firebase Database (not including a child path).");let u=U_(a,n,d,new is(n,t));return new Ys(u,n)}function F_(n,e){let t=Ks[e];(!t||t[n.key]!==n)&&_e(`Database ${e}(${n.repoInfo_}) has already been deleted.`),S_(n),delete t[n.key]}function U_(n,e,t,i){let r=Ks[e.name];r||(r={},Ks[e.name]=r);let s=r[n.toURLString()];return s&&_e("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Gs(n,L_,t,i),r[n.toURLString()]=s,s}var Ys=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(__(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new le(this._repo,w())),this._rootInternal}_delete(){return this._rootInternal!==null&&(F_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_e("Cannot call "+e+" on a deleted database.")}};function Bl(n=bn(),e){let t=Pt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){let i=Ro("database");i&&W_(t,...i)}return t}function W_(n,e,t,i={}){n=M(n),n._checkNotDeleted("useEmulator");let r=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&ie(i,s.repoInfo_.emulatorOptions))return;_e("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&_e('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Re(Re.OWNER);else if(i.mockUserToken){let a=typeof i.mockUserToken=="string"?i.mockUserToken:Po(i.mockUserToken,n.app.options.projectId);o=new Re(a)}ge(e)&&(yn(e),In("Database",!0)),M_(s,r,i,o)}function V_(n){nf(we),Ee(new z("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return x_(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),X(Xa,Za,n),X(Xa,Za,"esm2017")}Ye.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ye.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};V_();window.FBK={initializeApp:fr,getAuth:zr,signInAnonymously:Br,getDatabase:Bl,ref:xl,set:Ul,update:Wl,get:Vl,onValue:Hl,onDisconnect:Fl};})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
