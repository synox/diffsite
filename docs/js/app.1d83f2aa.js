!function(e){function t(t){for(var i,d,c=t[0],a=t[1],s=t[2],f=0,l=[];f<c.length;f++)d=c[f],o[d]&&l.push(o[d][0]),o[d]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);for(u&&u(t);l.length;)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(i=!1)}i&&(r.splice(t--,1),e=d(d.s=n[0]))}return e}var i={},o={0:0},r=[];function d(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=i,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)d.d(n,i,function(t){return e[t]}.bind(null,i));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=a;r.push([112,1]),n()}({112:function(e,t,n){"use strict";n.r(t);n(63),n(70),n(71);function i(e,t,n){var i;return function(){var o=this,r=arguments;i?clearTimeout(i):n&&e.apply(o,r),i=setTimeout(function(){n||e.apply(o,r),i=null},t||100)}}function o(e){return e?(0!=e.indexOf("http")&&(e="http://"+e),e):e}var r={overlay:!1,mode:null,handleDrag:!1},d=function(e,t){return"-"!=e[0]&&(e="--".concat(e)),void 0!==t&&document.documentElement.style.setProperty(e,t),getComputedStyle(document.documentElement).getPropertyValue(e)},c=function(e,t){return void 0!==t&&(r[e]=t),r[e]},a=n(40),s=n(10),u=n.n(s);n(76),n(80),n(81),n(82),n(54),n(91),n(93),n(108),n(110);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t){if("string"!=typeof e&&"string"!=typeof t)throw new Error("We expected a string as HTMLasString and linkRelType we got HTMLasString : ".concat("undefined"==typeof sourceURL?"undefined":f(sourceURL)," linkRelType ").concat(f(t)));var n=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector('link[rel="'.concat(t,'"'));if(null===n)return!1;var i=n.getAttribute("href");return null!==i&&i},m=function(e,t){return new Promise(function(n,i){return"string"!=typeof e?i(Error("We expected a string as sourceURL we got ".concat(f(e)))):u()(e)?"string"!=typeof t?i(Error("We expected a string as linkRelType we got ".concat(f(t)))):void function(e){return new Promise(function(t,n){fetch("https://cors-anywhere.herokuapp.com/".concat(e),{mode:"cors"}).then(function(i){if(!i.ok)return n(new Error("We received an invalid response when trying to get a CORS free version of ".concat(e)));t(i.text())}).catch(function(e){return n(e)})})}(e).then(function(e){var o=l(e,t);if(!o)return i(new Error("We couldn't find a valid alternativeURL"));n(o)}):i(Error("We expected an URL we got ".concat(e)))})},p=document.getElementById("diff-container"),v=document.getElementById("input-url-left"),g=document.getElementById("input-url-right"),h=document.getElementById("frame-left"),y=document.getElementById("frame-right"),E=document.getElementById("content-left"),w=document.getElementById("content-right"),L=document.getElementById("shift-left"),b=document.getElementById("shift-right"),I=document.getElementById("compare-handle"),B=document.getElementById("group-overlay"),k=document.getElementById("group-opacity"),S=(new a(".shift-section",{wrap:!0,marginTop:200}),new a(".config-section",{wrap:!0,marginTop:0,stickyClass:"config-section--sticky"}));function x(){c("handleDrag",!1),window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",x)}function O(e){if(!c("handleDrag"))return!1;e=e||window.event;var t=h.getBoundingClientRect(),n=e.pageX-t.left-window.pageXOffset;n=Math.max(0,n),n=Math.min(d("diff-site-width"),n),d("swipe-handle-position",n)}I.addEventListener("mousedown",function(e){e.preventDefault(),c("handleDrag",!0),window.addEventListener("mousemove",O),window.addEventListener("mouseup",x)}),v.addEventListener("input",function(e){i(function(){e.target.value=o(e.target.value),E.src=e.target.value},700)()}),g.addEventListener("input",function(e){i(function(){e.target.value=o(e.target.value),w.src=e.target.value},700)()}),document.getElementById("mode-amp-detect").addEventListener("click",function(){if(this.classList.toggle("mode-switch--amp")&&(u()(v.value)||u()(g.value))){var e=u()(v.value)?v.value:g.value,t=u()(v.value)?g:v;m(e,"amp-html").then(function(e){t.value=e,t.dispatchEvent(new Event("input"))}).catch(function(t){return m(e,"canonical")}).then(function(e){t.value=e,t.dispatchEvent(new Event("input"))})}}),document.getElementById("toggle-dark-mode").addEventListener("click",function(){document.body.classList.toggle("theme-dark")}),document.getElementById("mode-side-by-side").addEventListener("click",function(){p.classList.remove("diff-container--mode-overlay"),B.classList.add("disabled"),k.classList.add("disabled"),S.update()}),document.getElementById("mode-overlay").addEventListener("click",function(){p.classList.add("diff-container--mode-overlay"),B.classList.remove("disabled"),p.classList.contains("diff-container--mode-swipe")||(k.classList.remove("disabled"),S.update())}),document.getElementById("mode-swipe").addEventListener("click",function(){p.classList.add("diff-container--mode-swipe"),y.classList.remove("diff-frame--mode-blend"),k.classList.add("disabled")}),document.getElementById("mode-blend").addEventListener("click",function(){y.classList.add("diff-frame--mode-blend"),p.classList.remove("diff-container--mode-swipe"),k.classList.remove("disabled")}),document.getElementById("mode-onion").addEventListener("click",function(){y.classList.remove("diff-frame--mode-blend"),p.classList.remove("diff-container--mode-swipe"),k.classList.remove("disabled")}),document.getElementById("select-device").addEventListener("change",function(e){d("diff-site-width",e.target.value),S.update()}),document.getElementById("select-opacity").addEventListener("input",function(e){d("diff-site-opacity-right",e.target.value)});var P=function(e,t){e.value=d(t)};document.getElementById("button-shift-up-left").addEventListener("click",function(){d("diff-site-shift-left",parseInt(d("diff-site-shift-left"),10)-1),P(L,"diff-site-shift-left")}),document.getElementById("button-shift-down-left").addEventListener("click",function(){d("diff-site-shift-left",parseInt(d("diff-site-shift-left"),10)+1),P(L,"diff-site-shift-left")}),L.addEventListener("input",function(){d("diff-site-shift-left",parseInt(L.value)||0)}),document.getElementById("button-shift-up-right").addEventListener("click",function(){d("diff-site-shift-right",parseInt(d("diff-site-shift-right"),10)-1),P(b,"diff-site-shift-right")}),document.getElementById("button-shift-down-right").addEventListener("click",function(){d("diff-site-shift-right",parseInt(d("diff-site-shift-right"),10)+1),P(b,"diff-site-shift-right")}),b.addEventListener("input",function(){d("diff-site-shift-right",parseInt(b.value)||0)}),v.dispatchEvent(new Event("input")),g.dispatchEvent(new Event("input"))},70:function(e,t,n){}});
//# sourceMappingURL=app.1d83f2aa.js.map