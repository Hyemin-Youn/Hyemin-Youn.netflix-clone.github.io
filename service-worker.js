if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>n(e,o),u={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"netflix-clone"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.570ca034.css",revision:null},{url:"/index.html",revision:"90ed1470fff640b855ba6ee13ad41bda"},{url:"/js/app.1f634aec.js",revision:null},{url:"/js/chunk-vendors.f0460d34.js",revision:null},{url:"/manifest.json",revision:"2a2831ba0aaaa5dda11e400b68109e5d"}],{})}));
//# sourceMappingURL=service-worker.js.map
