if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let r={};const u=e=>n(e,t),l={module:{uri:t},exports:r,require:u};i[t]=Promise.all(o.map((e=>l[e]||u(e)))).then((e=>(s(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"netflix-clone"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/hyemin-youn.github.io/css/app.d7edfa3f.css",revision:null},{url:"/hyemin-youn.github.io/index.html",revision:"4079854085e80935682ca685e36aeee3"},{url:"/hyemin-youn.github.io/js/app.1cb87954.js",revision:null},{url:"/hyemin-youn.github.io/js/chunk-vendors.f0460d34.js",revision:null},{url:"/hyemin-youn.github.io/manifest.json",revision:"2a2831ba0aaaa5dda11e400b68109e5d"},{url:"/hyemin-youn.github.io/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
