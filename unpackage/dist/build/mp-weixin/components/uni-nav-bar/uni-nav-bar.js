(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"2a57":function(n,t,e){"use strict";e.r(t);var u=e("43e9"),i=e("b060");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("8eca");var a,r=e("f0c5"),c=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=c.exports},"43e9":function(n,t,e){"use strict";var u={uniStatusBar:function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"97a1"))},uniIcons:function(){return e.e("components/uni-icons/uni-icons").then(e.bind(null,"3e75"))}},i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return u}))},"4ae1":function(n,t,e){},"8eca":function(n,t,e){"use strict";var u=e("4ae1"),i=e.n(u);i.a},b060:function(n,t,e){"use strict";e.r(t);var u=e("d198"),i=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);t["default"]=i.a},d198:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){e.e("components/uni-status-bar/uni-status-bar").then(function(){return resolve(e("97a1"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/uni-icons/uni-icons").then(function(){return resolve(e("3e75"))}.bind(null,e)).catch(e.oe)},o={name:"UniNavBar",components:{uniStatusBar:u,uniIcons:i},props:{show:{type:[Boolean,String],default:!0},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#FFFFFF"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!0},border:{type:[String,Boolean],default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};t.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2a57"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);
