(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mix-pulldown-refresh/mix-pulldown-refresh"],{"3ebd":function(e,t,n){"use strict";n.r(t);var i=n("527d"),r=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},"527d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,r,s,a=500,o=0,u={props:{top:{type:Number,default:0}},data:function(){return{pageDeviation:0,pageTransition:0,refreshReady:!1,refreshing:!1}},computed:{pageTop:function(){return e.upx2px(this.top)}},created:function(){e.getSystemInfo({success:function(e){r=e.platform,a=e.windowHeight}})},methods:{pageTouchstart:function(e){s=!1,this.pageTransition=0,n=e.touches[0].pageY},pageTouchmove:function(e){s||(i=.4*(e.touches[0].pageY-n),i>=0&&(this.pageDeviation=i,this.$emit("setEnableScroll",!1)),i>=50&&!1===this.refreshReady?this.refreshReady=!0:i<50&&!0===this.refreshReady&&(this.refreshReady=!1),"ios"===r&&e.touches[0].pageY>a+10&&this.pageTouchend())},pageTouchend:function(){s=!0,0!==i&&(this.pageTransition=.3,i>=50?this.startPulldownRefresh():this.pageDeviation=0,!0===this.refreshReady&&(this.refreshReady=!1),this.$emit("setEnableScroll",!0),n=i=0)},startPulldownRefresh:function(){+new Date-o<100||(o=+new Date,this.refreshing=!0,this.pageDeviation=e.upx2px(90),this.$emit("refresh"))},endPulldownRefresh:function(){this.refreshing=!1,this.pageDeviation=e.upx2px(0)}}};t.default=u}).call(this,n("543d")["default"])},"529b":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},"9ce1":function(e,t,n){"use strict";var i=n("e739"),r=n.n(i);r.a},e365:function(e,t,n){"use strict";n.r(t);var i=n("529b"),r=n("3ebd");for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n("9ce1");var a,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=u.exports},e739:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component',
    {
        'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e365"))
        })
    },
    [['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component']]
]);
