if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),c={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"netflix-clone"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.be099bc4.css",revision:null},{url:"/index.html",revision:"317f43dcb69b5438cb04ca20a2d11e4a"},{url:"/js/609.e21cbfa0.js",revision:null},{url:"/js/app.b4291613.js",revision:null},{url:"/js/chunk-vendors.a66f2fc0.js",revision:null},{url:"/manifest.json",revision:"2a2831ba0aaaa5dda11e400b68109e5d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
