(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={express:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;i.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("f90c")},"474a":function(e,t,n){"use strict";var r=n("a0ec"),o=n.n(r);o.a},"6fdc":function(e,t,n){n("c975"),n("b0c0"),n("ac1f"),n("466d");var r=e.exports,o=!1,i=window,a=document,c=a.documentElement,u=i.navigator.appVersion.match(/android/gi),l=i.navigator.appVersion.match(/iphone/gi);r.init=function(e){if(!o){var t=a.getElementsByTagName("head")[0],n=a.createElement("meta"),r=i.devicePixelRatio,s=e||r,d=null;o=!0,s=l&&null!==e?r>=3&&(!s||s>=3)?3:r>=2&&(!s||s>=2)?2:1:e||1;var f=1/s;c.setAttribute("data-dpr",s),c.setAttribute("data-device-type",l?"iphone":u?"android":"other"),n.name="viewport",n.content="initial-scale="+f+", maximum-scale="+f+", minimum-scale="+f+", user-scalable=no",t.appendChild(n);try{var m=a.createElement("div");if(m.style.width="1px",m.style.width="1vmin",document.body.appendChild(m),m.offsetWidth>1&&(document.body.removeChild(m),c.style.fontSize="3.125vmin",c.style.fontSize=window.getComputedStyle(c,null).fontSize,-1!=c.style.fontSize.indexOf("px")))return}catch(h){}i.addEventListener("resize",(function(){clearTimeout(d),d=setTimeout(p,300)}),!1),i.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(d),d=setTimeout(p,300))}),!1),p()}function p(){var e=a.documentElement.clientWidth,t=a.documentElement.clientHeight;0!=e&&e||(e=c.getBoundingClientRect().width);var n=Math.min(e,t)/320*10;c.style.fontSize=n+"px"}},r.px2rem=function(e){return e/r.rem()},r.rem2px=function(e){return e*r.rem()},r.rem=function(){return parseFloat(window.getComputedStyle(c,null).fontSize,10)},r.currentDpr=function(){return c.hasAttribute("data-dpr")?parseInt(c.hasAttribute("data-dpr"),10):devicePixelRatio},r.isAndroid=function(){return u},r.isIPhone=function(){return l},r.getDeviceType=function(){return l?"iphone":u?"android":"other"}},"7d69":function(e,t,n){"use strict";var r=n("d6b3"),o=n.n(r);o.a},a0ec:function(e,t,n){},b6c4:function(e,t,n){},d6b3:function(e,t,n){},f90c:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),i=n.n(o),a=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"express"},[n("div",[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[n("el-row",{staticStyle:{display:"flex","justify-content":"center"}},[n("el-col",{attrs:{span:20}},[n("el-form-item",{attrs:{prop:"number",required:""}},[n("el-input",{attrs:{placeholder:"请输入快递号"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1)],1)],1),n("el-row",{staticStyle:{display:"flex","justify-content":"center"}},[n("el-col",{attrs:{span:20}},[n("el-form-item",{attrs:{prop:"code"}},[n("el-select",{attrs:{placeholder:"请选择快递"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}},e._l(e.expressList,(function(e,t){return n("el-option",{key:t,attrs:{value:e.code,label:e.name}})})),1)],1)],1)],1),n("el-row",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.fetchExpressLog}},[e._v("查询")])],1)],1)],1),n("div",{staticClass:"content"},e._l(e.locationList,(function(t,r){return n("div",{key:r},[n("div",[e._v(e._s(t.location)+e._s(t.time))]),n("div",[e._v(e._s(t.context))])])})),0)])}),c=[],u=(n("99af"),n("bc3a")),l=n.n(u),s=[{name:"申通",code:"shentong"},{name:"EMS",code:"ems"},{name:"顺丰",code:"shunfeng"},{name:"圆通",code:"yuantong"},{name:"中通",code:"zhongtong"},{name:"韵达",code:"yunda"},{name:"天天",code:"tiantian"},{name:"汇通",code:"huitongkuaidi"},{name:"全峰",code:"quanfengkuaidi"},{name:"德邦",code:"debangwuliu"},{name:"宅急送",code:"zhaijisong"}],d={data:function(){return{form:{},expressList:s,rules:{number:[{required:!0,message:"请输入",trigger:"blur"}],code:[{required:!0,message:"请选择",trigger:"blur"}]},locationList:[]}},mounted:function(){console.log(this.$http)},methods:{fetchExpressLog:function(){var e=this;this.$refs.form.validate((function(t){t&&l.a.get("//www.kuaidi100.com/query?type=".concat(e.form.code,"&postid=").concat(e.form.number)).then((function(t){t.data&&(e.locationList=t.data)}))}))}}},f=d,m=(n("7d69"),n("474a"),n("2877")),p=Object(m["a"])(f,a,c,!1,null,"400fc4bb",null),h=p.exports,v=n("6fdc"),b=n.n(v);n("b6c4");r["default"].config.productionTip=!1,r["default"].use(i.a),b.a.init(1);var g=null;window.addEventListener("resize",(function(){clearTimeout(g),g=setTimeout(b.a.init(1),300)}),!1),window.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(g),g=setTimeout(b.a.init(1),300))}),!1),new r["default"]({render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=express.21c587ff.js.map