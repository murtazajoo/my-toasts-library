!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("ToasterUi",[],r):"object"==typeof exports?exports.ToasterUi=r():t.ToasterUi=r()}(self,(()=>(()=>{var t={480:(t,r,e)=>{"use strict";e.d(r,{Z:()=>a});var n=e(81),i=e.n(n),s=e(645),o=e.n(s)()(i());o.push([t.id,'/*\r\n* Prefixed by https://autoprefixer.github.io\r\n* PostCSS: v8.4.14,\r\n* Autoprefixer: v10.4.7\r\n* Browsers: last 4 version\r\n*/\r\n\r\nbody {\r\n  width: 100% !important;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.toaster-ui-lib {\r\n  width: 95%;\r\n  word-break: break-all;\r\n  background-color: #000000;\r\n  color: #fff;\r\n  padding: 20px 35px 20px 25px;\r\n  border-radius: 0px;\r\n  font-family: Arial, sans-serif;\r\n  margin: 10px;\r\n  -webkit-animation: toaster-ui-lib-slide-in-blurred-right 0.6s\r\n    cubic-bezier(0.445, 0.05, 0.55, 0.95) both;\r\n  animation: toaster-ui-lib-slide-in-blurred-right 0.6s\r\n    cubic-bezier(0.445, 0.05, 0.55, 0.95) both;\r\n  opacity: 0;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n\r\n  overflow: hidden;\r\n  --timer: 0;\r\n  --display: block;\r\n}\r\n.toaster-ui-lib::after {\r\n  content: "";\r\n  display: var(--display);\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 4px;\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    right top,\r\n    from(#5bc0de),\r\n    color-stop(#5cb85c),\r\n    color-stop(#f0ad4e),\r\n    to(#d9534f)\r\n  );\r\n  background: -o-linear-gradient(left, #5bc0de, #5cb85c, #f0ad4e, #d9534f);\r\n  background: linear-gradient(to right, #5bc0de, #5cb85c, #f0ad4e, #d9534f);\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-animation: toaster-ui-lib-timer calc(var(--timer) - 0.8s) linear 0.3s\r\n    forwards;\r\n  animation: toaster-ui-lib-timer calc(var(--timer) - 0.8s) linear 0.3s forwards;\r\n}\r\n@-webkit-keyframes toaster-ui-lib-timer {\r\n  0% {\r\n    width: 100%;\r\n  }\r\n  100% {\r\n    width: 0%;\r\n  }\r\n}\r\n@keyframes toaster-ui-lib-timer {\r\n  0% {\r\n    width: 100%;\r\n  }\r\n  100% {\r\n    width: 0%;\r\n  }\r\n}\r\n.toaster-ui-lib-container {\r\n  max-width: calc(300px + 3vw);\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 999999;\r\n}\r\n\r\n.toaster-ui-lib-close {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  -ms-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 13px;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n  /* width: 30px;\r\n  height: 30px; */\r\n  border-radius: 100px;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 568px) {\r\n  .toaster-ui-lib-container {\r\n    max-width: 100%;\r\n  }\r\n  .toaster-ui-lib {\r\n    border-radius: 0px;\r\n    margin: 2px 0;\r\n    width: 100%;\r\n    padding: 20px 10px;\r\n  }\r\n  .toaster-ui-lib-close {\r\n    right: 10px;\r\n  }\r\n}\r\n\r\n.toaster-ui-lib-success {\r\n  background-color: teal;\r\n}\r\n\r\n.toaster-ui-lib-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n\r\n.toaster-ui-lib-error {\r\n  background-color: #d9534f;\r\n}\r\n.toaster-ui-lib-info {\r\n  background-color: #5bc0de;\r\n}\r\n\r\n.toaster-ui-lib-loading {\r\n  background-color: #414141;\r\n}\r\n\r\n.toaster-ui-lib-loader {\r\n  border: 1px solid transparent;\r\n  border-radius: 50%;\r\n  border-top: 1px solid #a6dbff;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-right: 15px;\r\n  -webkit-animation: spin 0, 6s linear infinite; /* Safari */\r\n  display: inline-block;\r\n  -webkit-animation: toaster-ui-lib-spin 0.6s linear infinite;\r\n  animation: toaster-ui-lib-spin 0.6s linear infinite;\r\n}\r\n\r\n/* Safari */\r\n@-webkit-keyframes toaster-ui-lib-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes toaster-ui-lib-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes toaster-ui-lib-slide-out-blurred-right {\r\n  0% {\r\n    -webkit-transform: translateX(0) scaleY(1) scaleX(1);\r\n    transform: translateX(0) scaleY(1) scaleX(1);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    -webkit-filter: blur(0);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    -webkit-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\r\n    -webkit-filter: blur(40px);\r\n    filter: blur(40px);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes toaster-ui-lib-slide-out-blurred-right {\r\n  0% {\r\n    -webkit-transform: translateX(0) scaleY(1) scaleX(1);\r\n    transform: translateX(0) scaleY(1) scaleX(1);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    -webkit-filter: blur(0);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    -webkit-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\r\n    -webkit-filter: blur(40px);\r\n    filter: blur(40px);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes toaster-ui-lib-slide-in-blurred-right {\r\n  0% {\r\n    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\r\n    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\r\n    -webkit-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\r\n    -webkit-filter: blur(40px);\r\n    filter: blur(40px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0) scaleY(1) scaleX(1);\r\n    transform: translateX(0) scaleY(1) scaleX(1);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    -webkit-filter: blur(0);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes toaster-ui-lib-slide-in-blurred-right {\r\n  0% {\r\n    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\r\n    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\r\n    -webkit-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\r\n    -webkit-filter: blur(40px);\r\n    filter: blur(40px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0) scaleY(1) scaleX(1);\r\n    transform: translateX(0) scaleY(1) scaleX(1);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    -webkit-filter: blur(0);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n',""]);const a=o},645:t=>{"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var e="",n=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),n&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=t(r),n&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(t,e,n,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);n&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),r.push(d))}},r}},81:t=>{"use strict";t.exports=function(t){return t[1]}},413:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>y});var n=e(379),i=e.n(n),s=e(795),o=e.n(s),a=e(569),l=e.n(a),c=e(565),d=e.n(c),u=e(216),p=e.n(u),m=e(589),f=e.n(m),b=e(480),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),i()(b.Z,h);const y=b.Z&&b.Z.locals?b.Z.locals:void 0},379:t=>{"use strict";var r=[];function e(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function n(t,n){for(var s={},o=[],a=0;a<t.length;a++){var l=t[a],c=n.base?l[0]+n.base:l[0],d=s[c]||0,u="".concat(c," ").concat(d);s[c]=d+1;var p=e(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var f=i(m,n);n.byIndex=a,r.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function i(t,r){var e=r.domAPI(r);return e.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;e.update(t=r)}else e.remove()}}t.exports=function(t,i){var s=n(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var a=e(s[o]);r[a].references--}for(var l=n(t,i),c=0;c<s.length;c++){var d=e(s[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}s=l}}},569:t=>{"use strict";var r={};t.exports=function(t,e){var n=function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},565:(t,r,e)=>{"use strict";t.exports=function(t){var r=e.nc;r&&t.setAttribute("nonce",r)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=t.insertStyleElement(t);return{update:function(e){!function(t,r,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,i&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var s=e.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),r.styleTagTransform(n,t,r.options)}(r,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},589:t=>{"use strict";t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}},8:t=>{t.exports=class{constructor(t,r="default",e={}){this.id=e.id||this.generateId(),this.content=t,this.type=r,this.allowHtml=e.allowHtml||!1,this.autoClose=!1!==e.autoClose&&"loading"!==this.type,this.duration=e.duration||3e3,this.dismissTimeout=null,this.onClose=e.onClose||null,this.createToastElement(this.content,this.type,this.duration),this.setCustomStyles(e.styles)}createToastElement(t,r,e){if(this.toastElement=document.createElement("div"),this.toastElement.classList.add("toaster-ui-lib"),this.toastElement.classList.add(`toaster-ui-lib-${r}`),this.toastElement.style.setProperty("--timer",` ${e}ms`),this.toastElement.style.setProperty("--display",this.autoClose?"block":"none"),"loading"===this.type){const t=document.createElement("div");t.classList.add("toaster-ui-lib-loader"),this.toastElement.appendChild(t)}const n=document.createElement("span");n.classList.add("toaster-ui-lib-text"),this.allowHtml?n.innerHTML=`<span>${t}</span>`:n.innerText=t,this.toastElement.appendChild(n);const i=document.createElement("span");i.classList.add("toaster-ui-lib-close"),i.innerHTML="&times;",i.addEventListener("click",(()=>{this.close()})),this.toastElement.appendChild(i)}generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)}update(t,r,e={},n){if(this.content=t,this.type=r||n.type,this.allowHtml=e.allowHtml||n.allowHtml,this.autoClose=void 0!==e.autoClose?!1!==e.autoClose:"loading"===n.type||n.autoClose,this.onClose=e.onClose||n.onClose,this.duration=e.duration||n.duration,this.setCustomStyles(e.styles||n.styles),this.toastElement&&(this.toastElement.className=`toaster-ui-lib toaster-ui-lib-${this.type}`,this.toastElement.style.setProperty("--timer",`${this.duration}ms`),this.toastElement.style.setProperty("--display",this.autoClose?"block":"none")),this.toastElement.innerHTML="","loading"===this.type){const t=document.createElement("div");t.classList.add("toaster-ui-lib-loader"),this.toastElement.appendChild(t)}const i=document.createElement("span");i.classList.add("toaster-ui-lib-text"),this.allowHtml?i.innerHTML=`<span>${this.content}</span>`:i.innerText=this.content,this.toastElement.appendChild(i);const s=document.createElement("span");s.classList.add("toaster-ui-lib-close"),s.innerHTML="&times;",s.addEventListener("click",(()=>{this.close()})),this.toastElement.appendChild(s),!0===this.autoClose&&this.startDismissTimeout()}setCustomStyles(t){t&&"object"==typeof t&&Object.assign(this.toastElement.style,t)}setDuration(t){this.duration=t}show(){this.toastElement.style.opacity="0",!0===this.autoClose&&this.startDismissTimeout()}startDismissTimeout(){this.dismissTimeout=setTimeout((()=>{this.close()}),this.duration)}close(){"function"==typeof this.onClose&&this.onClose(),this.toastElement.style.animation="toaster-ui-lib-slide-out-blurred-right 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95) both",this.toastElement.addEventListener("animationend",(()=>{clearTimeout(this.dismissTimeout),this.toastElement.parentNode&&this.toastElement.parentNode.removeChild(this.toastElement)}))}}},138:(t,r,e)=>{e(413);const n=e(8);t.exports=class{constructor(){this.toastMap=new Map,this.container=document.createElement("div"),this.container.classList.add("toaster-ui-lib-container"),document.body.appendChild(this.container)}addToast(t,r="default",e={}){const i=new n(t,r,e);return this.container.insertBefore(i.toastElement,this.container.firstChild),this.toastMap.set(i.id,i),i.show(),i.id}updateToast(t,r,e,n={}){const i=this.toastMap.get(t);i&&(console.log(i),i.update(r,e,n,i))}}}},r={};function e(n){var i=r[n];if(void 0!==i)return i.exports;var s=r[n]={id:n,exports:{}};return t[n](s,s.exports,e),s.exports}return e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.nc=void 0,e(138)})()));