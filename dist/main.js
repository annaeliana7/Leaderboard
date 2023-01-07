"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'poppins', sans-serif, Arial;\n}\n\n@media only screen and (max-width: 600px) {\n  .wrapper {\n    width: 80%;\n    height: 80vh;\n    margin-top: 10%;\n  }\n\n  .display {\n    flex-direction: column;\n  }\n\n  .recent-s {\n    width: 100%;\n  }\n\n  .add-s {\n    margin-top: 25px;\n  }\n}\n\n.wrapper {\n  margin: 0 auto;\n  width: 60%;\n  height: 60vh;\n  margin-top: 15%;\n}\n\n.display {\n  display: flex;\n  gap: 25px;\n}\n\n.score-title-list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.add-s {\n  gap: 25px;\n}\n\n.btn-refresh {\n  box-shadow: 1px 3px rgb(192, 187, 187);\n  cursor: pointer;\n  background: none;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  color: rgb(102, 97, 97);\n  padding: 8px;\n}\n\ntd,\nth {\n  border: 1px solid white;\n  text-align: left;\n  padding-left: 2px;\n}\n\ntr:nth-child(even) {\n  background-color: rgb(219, 214, 214);\n}\n\ntd:nth-child(even) {\n  width: 100%;\n}\n\ntable {\n  border: black;\n  border-collapse: collapse;\n}\n\n.recent-s {\n  width: 50%;\n}\n\n.submit-btn {\n  box-shadow: 3px 3px rgb(219, 214, 214);\n  margin: 0 auto;\n  display: block;\n  padding: 9px;\n  background: none;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  color: rgb(102, 97, 97);\n  cursor: pointer;\n}\n",""]);const c=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&s[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},s=[],c=0;c<n.length;c++){var i=n[c],d=r.base?i[0]+r.base:i[0],p=o[d]||0,u="".concat(d," ").concat(p);o[d]=p+1;var l=t(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var h=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var c=t(o[s]);e[c].references--}for(var i=r(n,a),d=0;d<o.length;d++){var p=t(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=i}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},80:(n,e,t)=>{var r=t(379),a=t.n(r),o=t(795),s=t.n(o),c=t(569),i=t.n(c),d=t(565),p=t.n(d),u=t(216),l=t.n(u),f=t(589),h=t.n(f),m=t(426),v={};v.styleTagTransform=h(),v.setAttributes=p(),v.insert=i().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=l(),a()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const b=async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gameId777/scores/");(n=>{const e=document.querySelector(".score-wrap");e.innerHTML="",n.forEach((n=>{const{user:t,score:r}=n,a=document.createElement("tr");e.appendChild(a);const o=document.createElement("td");o.innerHTML=`${t}`,o.classList.add(".td"),a.appendChild(o);const s=document.createElement("td");s.innerHTML=`${r}`,s.classList.add(".td"),a.appendChild(s)}))})((await n.json()).result)},g=document.querySelector(".submit-btn"),y=document.querySelector(".btn-refresh");g.addEventListener("click",(async n=>{n.preventDefault();const e=document.querySelector("#user-name"),t=document.querySelector("#user-score");await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gameId777/scores/",{method:"POST",body:JSON.stringify({user:e.value,score:t.value}),headers:{"content-type":"application/json; charset=utf-8"}}),e.value="",t.value="",b()})),y.addEventListener("click",b)}},n=>{n(n.s=80)}]);