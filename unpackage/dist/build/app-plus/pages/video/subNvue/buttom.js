!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=31)}([function(t,e){t.exports={"uni-slider-handle":{width:0,height:0,backgroundColor:"rgba(0,0,0,0)"},"uni-slider-thumb":{width:0,height:0,backgroundColor:"rgba(0,0,0,0)"},"uni-slider-track":{backgroundColor:"#999999"}}},function(t,e,n){"use strict";function o(t,e,n,o,i,r,u,a,s,f){var l,c="function"==typeof t?t.options:t;if(s){c.components||(c.components={});var d=Object.prototype.hasOwnProperty;for(var p in s)d.call(s,p)&&!d.call(c.components,p)&&(c.components[p]=s[p])}if(f&&((f.beforeCreate||(f.beforeCreate=[])).unshift((function(){this[f.__module]=this})),(c.mixins||(c.mixins=[])).push(f)),e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),u?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var m=c.render;c.render=function(t,e){return l.call(e),m(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(3).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},,,function(t,e,n){"use strict";var o=n(22),i=n(14),r=n(1);var u=Object(r.a)(i.default,o.b,o.c,!1,null,null,"30c9fcda",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(26).default,this.options.style):Object.assign(this.options.style,n(26).default)}).call(u),e.default=u.exports},,,,,,,,function(t,e,n){"use strict";var o=n(15),i=n.n(o);e.default=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=weex.requireModule("animation"),i=(weex.requireModule("modal"),{data:function(){return{xuanjiShow:!0,platform:null}},beforeCreate:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"texticons",src:"url('../../../static/text-icon.ttf')"})},created:function(){var t=this;uni.getSystemInfo({success:function(e){t.platform=e.platform}})},mounted:function(){var t=this;uni.$on("videoButtomShow",(function(){t.animateControls(0,t.$refs.bottom)})),uni.$on("videoButtomHide",(function(){t.animateControls(40,t.$refs.bottom)})),uni.$on("videoButtomXuanjiShow",(function(){t.xuanjiShow=!1})),uni.$on("videoButtomXuanjiHide",(function(){t.xuanjiShow=!0}))},destroyed:function(){uni.$off("videoButtomShow"),uni.$off("videoButtomHide"),uni.$off("videomargin"),uni.$off("videoButtomXuanjiShow"),uni.$off("videoButtomXuanjiHide")},methods:{animateControls:function(t,e){o.transition(e,{styles:{transform:"translate(0px, ".concat(t,"px)")},duration:350,timingFunction:"ease",delay:0},(function(){}))},playNext:function(){uni.$emit("playNext")},showList:function(){uni.$emit("fullHide"),uni.getSubNVueById("list").show("auto",300)}}});e.default=i},function(t,e){t.exports={bottom:{height:"38",alignItems:"center",justifyContent:"space-between",position:"relative",transform:"translateY(40px)"},button:{position:"absolute",left:"0",right:"10",bottom:"0",height:"38"},"ios-icon":{fontSize:"14",color:"#ffffff",fontFamily:"texticons"},next:{position:"absolute",left:0,top:0,height:"38",alignItems:"center",justifyContent:"center"},xuanji:{position:"absolute",right:"0",top:0,height:"38",alignItems:"center",justifyContent:"center"},xuanjiShow:{transform:"translateY(40px)"},android:{transform:"translateY(0px)"}}},,,,,,function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"bottom",staticClass:["bottom"]},[e("div",{staticClass:["button"]},[e("div",{staticClass:["xuanji"],class:{xuanjiShow:this.xuanjiShow,android:"android"==this.platform},on:{click:this.showList}},[e("u-text",{staticClass:["text","ios-icon"]},[this._v("选集")])])])])},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}))},,,,function(t,e,n){"use strict";n.r(e);var o=n(16),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=i.a},,,,,function(t,e,n){"use strict";n.r(e);n(2);var o=n(6);o.default.mpType="page",o.default.route="pages/video/subNvue/buttom",o.default.el="#root",new Vue(o.default)}]);