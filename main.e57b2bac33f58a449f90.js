!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(i.apply(this,r));else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(this&&this[u]||u)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){e.exports={hidden:"hidden--3t7W-","pure-img":"pure-img--2hFy_",pureImg:"pure-img--2hFy_",Container:"Container--5yVp7",container:"Container--5yVp7",Home:"Home--o0kMH",home:"Home--o0kMH",ProjectOverview:"ProjectOverview--1Vk7R",projectOverview:"ProjectOverview--1Vk7R",ProjectOverview__item:"ProjectOverview__item--2jYq-",projectOverviewItem:"ProjectOverview__item--2jYq-",step1:"step1--m3Wh6",step2:"step2--2jiSe",step3:"step3--2xHMs",step4:"step4--3amYH",step5:"step5--3L6WX",step6:"step6--2eTkw","noise-anim":"noise-anim--13nmb",noiseAnim:"noise-anim--13nmb",step7:"step7--1ZBIY",MainHeading:"MainHeading--mbTeY",mainHeading:"MainHeading--mbTeY"}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r=[],i=arguments.length;i-- >2;)n.push(arguments[i]);for(;n.length;){var o=n.pop();if(o&&o.pop)for(i=o.length;i--;)n.push(o[i]);else null!=o&&!0!==o&&!1!==o&&r.push(o)}return"function"==typeof e?e(t||{},r):{nodeName:e,attributes:t||{},children:r,key:t&&t.key}}function i(e,t,n,r){return{isExact:e,path:t,url:n,params:r}}function o(e){for(var t=e.length;"/"===e[--t];);return e.slice(0,t+1)}function u(e){try{return decodeURIComponent(e)}catch(t){return e}}function a(e){return function(t,n){var r=t.location,a=function(e,t,n){if(e===t||!e)return i(e===t,e,t);var r=n&&n.exact,a=o(e).split("/"),l=o(t).split("/");if(!(a.length>l.length||r&&a.length<l.length)){var s=0,c={},f=a.length;for(t="";s<f;s++){if(":"===a[s][0])c[a[s].slice(1)]=l[s]=u(l[s]);else if(a[s]!==l[s])return;t+=l[s]+"/"}return i(!1,e,t.slice(0,-1),c)}}(e.path,r.pathname,{exact:!e.parent});return a&&e.render({match:a,location:r})}}n.r(t);var l={state:{pathname:window.location.pathname,previous:window.location.pathname},actions:{go:function(e){history.pushState(null,"",e)},set:function(e){return e}},subscribe:function(e){function t(t){e.set({pathname:window.location.pathname,previous:t.detail?window.location.previous=t.detail:window.location.previous})}var n=["pushState","replaceState"].reduce(function(e,t){var n=history[t];return history[t]=function(e,t,r){n.call(this,e,t,r),dispatchEvent(new CustomEvent("pushstate",{detail:e}))},function(){history[t]=n,e&&e()}},null);return addEventListener("pushstate",t),addEventListener("popstate",t),function(){removeEventListener("pushstate",t),removeEventListener("popstate",t),n()}}},s=n(0),c=n.n(s),f=n(1),p=n.n(f);const v=c.a.bind(p.a),d={location:l.state,points:[r("div",null,"360KM",r("br",null),"Distance"),r("div",null,"40KM",r("br",null),"Combined elevation gain/loss"),r("div",null,"The GR-20",r("br",null),"Both directions",r("br",null),"In 20 days or less"),"THIS","IS","THE 20-20 PROJECT","JUNE 2019"]},h=()=>r("div",{class:v("Home")},r("ul",{class:v("ProjectOverview")},d.points.map(e=>r("li",{class:v("ProjectOverview__item")},e)))),m=()=>r("div",{class:v("Kit")},r("script",{src:"https://lighterpack.com/e/1y6ig"}),r("div",{id:"1y6ig"}));!function(e,t,n,r){var i,o=[].map,u=r&&r.children[0]||null,a=u&&function e(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:o.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:e(t)})}}(u),l=[],s=!0,c=h(e),f=function e(t,n,r){for(var i in r)"function"==typeof r[i]?function(e,i){r[e]=function(e){var o=i(e);return"function"==typeof o&&(o=o(y(t,c),r)),o&&o!==(n=y(t,c))&&!o.then&&d(c=m(t,h(n,o),c)),o}}(i,r[i]):e(t.concat(i),n[i]=h(n[i]),r[i]=h(r[i]));return r}([],c,h(t));return d(),f;function p(e){return"function"==typeof e?p(e(c,f)):null!=e?e:""}function v(){i=!i;var e=p(n);for(r&&!i&&(u=function e(t,n,r,i,o){if(i===r);else if(null==r||r.nodeName!==i.nodeName){var u=function e(t,n){var r="string"==typeof t||"number"==typeof t?document.createTextNode(t):(n=n||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),i=t.attributes;if(i){i.oncreate&&l.push(function(){i.oncreate(r)});for(var o=0;o<t.children.length;o++)r.appendChild(e(t.children[o]=p(t.children[o]),n));for(var u in i)w(r,u,i[u],null,n)}return r}(i,o);t.insertBefore(u,n),null!=r&&j(t,n,r),n=u}else if(null==r.nodeName)n.nodeValue=i;else{!function(e,t,n,r){for(var i in h(t,n))n[i]!==("value"===i||"checked"===i?e[i]:t[i])&&w(e,i,n[i],t[i],r);var o=s?n.oncreate:n.onupdate;o&&l.push(function(){o(e,t)})}(n,r.attributes,i.attributes,o=o||"svg"===i.nodeName);for(var a={},c={},f=[],v=r.children,d=i.children,m=0;m<v.length;m++){f[m]=n.childNodes[m];var y=g(v[m]);null!=y&&(a[y]=[f[m],v[m]])}for(var m=0,b=0;b<d.length;){var y=g(v[m]),O=g(d[b]=p(d[b]));if(c[y])m++;else if(null==O||O!==g(v[m+1]))if(null==O||s)null==y&&(e(n,f[m],v[m],d[b],o),b++),m++;else{var x=a[O]||[];y===O?(e(n,x[0],x[1],d[b],o),m++):x[0]?e(n,n.insertBefore(x[0],f[m]),x[1],d[b],o):e(n,f[m],null,d[b],o),c[O]=d[b],b++}else null==y&&j(n,f[m],v[m]),m++}for(;m<v.length;)null==g(v[m])&&j(n,f[m],v[m]),m++;for(var m in a)c[m]||j(n,a[m][0],a[m][1])}return n}(r,u,a,a=e)),s=!1;l.length;)l.pop()()}function d(){i||(i=!0,setTimeout(v))}function h(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function m(e,t,n){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),t,n[e[0]]):t,h(n,r)):t}function y(e,t){for(var n=0;n<e.length;)t=t[e[n++]];return t}function g(e){return e?e.key:null}function b(e){return e.currentTarget.events[e.type](e)}function w(e,t,n,r,i){if("key"===t);else if("style"===t)if("string"==typeof n)e.style.cssText=n;else for(var o in"string"==typeof r&&(r=e.style.cssText=""),h(r,n)){var u=null==n||null==n[o]?"":n[o];"-"===o[0]?e.style.setProperty(o,u):e.style[o]=u}else"o"===t[0]&&"n"===t[1]?(t=t.slice(2),e.events?r||(r=e.events[t]):e.events={},e.events[t]=n,n?r||e.addEventListener(t,b):e.removeEventListener(t,b)):t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!i?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),null!=n&&!1!==n||e.removeAttribute(t)}function j(e,t,n){function r(){e.removeChild(function e(t,n){var r=n.attributes;if(r){for(var i=0;i<n.children.length;i++)e(t.childNodes[i],n.children[i]);r.ondestroy&&r.ondestroy(t)}return t}(t,n))}var i=n.attributes&&n.attributes.onremove;i?i(t,r):r()}}(d,{location:l.actions},(e,t)=>r("div",{class:v("Container")},r(a,{path:"/",render:h}),r(a,{path:"/kit",render:m})),document.getElementById("root"))}]);