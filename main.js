(()=>{"use strict";var e={904:(e,n,t)=>{t.d(n,{c:()=>u});var a=t(500),i=t.n(a),r=t(312),o=t.n(r),c=t(536),d=t.n(c),l=new URL(t(260),t.b),s=o()(i()),p=d()(l);s.push([e.id,`:root {\n    --blue: #337CA0;\n    --red: #F24333;\n    --dark-red: #C11B0C;\n    --green: #5FBB97;\n    --gold: #DAA520;\n}\n\nbody {\n    margin: 0;\n}\n\nheader {\n    background: linear-gradient(var(--red), var(--dark-red));\n    padding: 20px;\n    border-bottom: var(--gold) 2px solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#content {\n    height: calc(100vh - 104px);\n    background-image: url(${p});\n    background-color: red;\n    background-position: center;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    font-family: 'Pacifico', cursive;\n    font-size: 35px;\n    color: white;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n}\n\n#hero-img {\n    width: 100%;\n    height: 100%;\n    filter: brightness(50%);\n}\n\n.header-container {\n    width: min(100%, 800px);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\nnav button {\n    width: 100px;\n    height: 40px;\n    background-color: white;\n    color: #3a3a3a;\n    border: none;\n    border-radius: 10px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 1rem;\n}\n\nnav button:hover {\n    color: black;\n    text-decoration: underline var(--red) 1px wavy;\n}\n\n.bubble {\n    background-color: rgba(255,255,255,0.8);\n    backdrop-filter: blur(5px);\n    border-radius: 20px;\n    width: min(80%, 800px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.catch {\n    text-align: center;\n    font-family: 'Pacifico', cursive;\n    display: block;\n    font-size: 1.2rem;\n}\n\n.description {\n    margin: 20px;\n    font-size: 1rem;\n    text-align: center;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#chef {\n    width: 30%;\n    margin: 10px;\n}\n\n.pizza-list {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 20px;\n    padding: 20px;\n    padding-top: 0;\n}\n\n.pizza-item {\n    background-color: white;\n    width: 300px;\n    height: 200px;\n    border-radius: 10px;\n    background-position: center;\n    background-size: cover;\n    overflow: hidden;\n    position: relative;\n}\n\n.pizza-panel {\n    background-color: rgba(255,255,255,0.8);\n    backdrop-filter: blur(5px);\n    width: 100%;\n    height: 25%;\n    position: absolute;\n    top: 75%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.pizza-name {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1.3rem;\n    font-weight: bold;\n    padding: 20px;\n}\n\n.pizza-price {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1.1rem;\n    font-style: italic;\n    padding: 20px;\n}\n\nli {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}`,""]);const u=s},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&o[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),n.push(s))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},o=[],c=0;c<e.length;c++){var d=e[c],l=a.base?d[0]+a.base:d[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=i(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var c=t(r[o]);n[c].references--}for(var d=a(e,i),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=d}}},176:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},260:(e,n,t)=>{e.exports=t.p+"f9c0a6c48a2f51058cab.jpg"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(596),n=t.n(e),a=t(520),i=t.n(a),r=t(176),o=t.n(r),c=t(120),d=t.n(c),l=t(808),s=t.n(l),p=t(936),u=t.n(p),m=t(904),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=s(),n()(m.c,f),m.c&&m.c.locals&&m.c.locals;const h=t.p+"b1305dc47a2260853d06.png",b=t.p+"b3f20c17b761ea024125.webp",g=t.p+"469793bb879c65a693a2.webp",v=t.p+"71c8f31f39c86675cd0e.webp",y=t.p+"d74b9dbfb8eda0de8a0d.webp",x=t.p+"7d42e1b08ab02ac16cee.webp",C=function(){let e=document.getElementById("content");e.textContent="";let n=document.createElement("div");n.classList.add("bubble"),e.appendChild(n);let t=document.createElement("span");t.classList.add("logo"),t.style.display="block",t.style.color="var(--red)",t.style.fontSize="50px",t.textContent="About",n.appendChild(t);let a=document.createElement("span");a.classList.add("catch"),a.textContent="Open times",n.appendChild(a);let i=document.createElement("ul");function r(e){let n=document.createElement("li");n.textContent=e,i.appendChild(n)}n.appendChild(i),r("Sunday: 8am - 8pm"),r("Monday: 6am - 6pm"),r("Tuesday: 6am - 6pm"),r("Wednesday: 6am - 6pm"),r("Thursday: 6am - 10pm"),r("Friday: 6am - 10pm"),r("Saturday: 8am - 10pm");let o=document.createElement("p");o.classList.add("description"),o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n.appendChild(o)};let w=document.getElementById("home-btn"),E=document.getElementById("menu-btn"),z=document.getElementById("about-btn");w.addEventListener("click",(()=>{!function(){let e=document.getElementById("content");e.textContent="";let n=document.createElement("div");n.classList.add("bubble"),e.appendChild(n);let t=document.createElement("span");t.classList.add("logo"),t.style.display="block",t.style.color="var(--red)",t.style.fontSize="50px",t.textContent="Doughlicious",n.appendChild(t);let a=document.createElement("span");a.classList.add("catch"),a.textContent="The best local Pizza",n.appendChild(a);let i=document.createElement("img");i.id="chef",i.src=h,n.appendChild(i);let r=document.createElement("p");r.classList.add("description"),r.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n.appendChild(r)}()})),E.addEventListener("click",(()=>{!function(){let e=document.getElementById("content");e.textContent="";let n=document.createElement("div");n.classList.add("bubble"),e.appendChild(n);let t=document.createElement("span");t.classList.add("logo"),t.style.display="block",t.style.color="var(--red)",t.style.fontSize="50px",t.textContent="Menu",n.appendChild(t);let a=document.createElement("div");function i(e,n,t){let i=document.createElement("div");i.classList.add("pizza-item"),i.style.backgroundImage=`url(${e})`,a.appendChild(i);let r=document.createElement("div");r.classList.add("pizza-panel"),i.appendChild(r);let o=document.createElement("span");o.classList.add("pizza-name"),o.textContent=n,r.appendChild(o);let c=document.createElement("span");c.classList.add("pizza-price"),c.textContent=`£${t.toFixed(2)}`,r.append(c)}a.classList.add("pizza-list"),n.appendChild(a),i(b,"Pepperoni",10),i(g,"Cheese",8.5),i(v,"Hawaiian",11.5),i(y,"Cheeseburger",15),i(x,"Meateor",15)}()})),z.addEventListener("click",(()=>{C()})),C()})()})();