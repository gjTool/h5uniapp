(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"039a":function(t,n,e){"use strict";var i=e("addb"),a=e.n(i);a.a},"127f":function(t,n,e){"use strict";(function(t){e("3be2");i(e("66fd"));var n=i(e("8bb8"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"4c7e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("4795")),a=o(e("2681"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,n,e,i,a,o,c){try{var r=t[o](c),s=r.value}catch(u){return void e(u)}r.done?n(s):Promise.resolve(s).then(i,a)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var o=t.apply(n,e);function r(t){c(o,i,a,r,s,"next",t)}function s(t){c(o,i,a,r,s,"throw",t)}r(void 0)}))}}var s,u=function(){e.e("components/mix-loading/mix-loading").then(function(){return resolve(e("7d04"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/uni-icons/uni-icons").then(function(){return resolve(e("c33c"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("d213"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("fedf"))}.bind(null,e)).catch(e.oe)},h=0,b=!1,p={components:{mixLoading:u,uniIcons:l,uniNavBar:f,uniPopup:d},data:function(){return{tabBars:[{name:"影视",id:"3",contentList:[]},{name:"漫画",id:"1",contentList:[]}],tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,contentData:{},loading:!1,keyWord:"",loadListRequest:null,cancelFlag:!1,show:!1,type:"",selectObj:"",index:0,selectObjIndex:0,openid:"",MhZJList:[],YsZJList:[]}},computed:{},onLoad:function(){var n=this;return r(i.default.mark((function e(){var o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.getStorageSync("config"),n.index=o.index,h=t.getSystemInfoSync().windowWidth,n.openid=t.getStorageSync("userInfo").openid,n.MhZJList=a.default.getMhZJ(),n.MhZJList&&n.MhZJList.length&&(n.tabBars[1].contentList=n.MhZJList),n.YsZJList=a.default.getYsZJ(),n.YsZJList&&n.YsZJList.length&&(n.tabBars[0].contentList=n.YsZJList);case 8:case"end":return e.stop()}}),e)})))()},onNavigationBarButtonTap:function(t){0==t.index&&this.clearCache(),1==t.index&&this.bianji()},onShow:function(){this.MhZJList=a.default.getMhZJ(),this.MhZJList&&this.MhZJList.length&&(this.tabBars[1].contentList=this.MhZJList),this.YsZJList=a.default.getYsZJ(),this.YsZJList&&this.YsZJList.length&&(this.tabBars[0].contentList=this.YsZJList)},onHide:function(){this.$refs["share"].close(),this.cancelFlag=!1},onReady:function(){},methods:{navToDetails:function(n){if("3"==n._type){var e="/pages/details/detailsMP?data=".concat(JSON.stringify(n));0==this.index&&(e=""),t.navigateTo({url:e})}if("1"==n._type){var i=t.getStorageSync("mhlist"+n.url),a="/pages/mh/mh?src="+encodeURIComponent(i[n.num].url)+"&data="+JSON.stringify(n);0==this.index&&(a=""),t.navigateTo({url:a})}},clearCache:function(){var n=this;t.showModal({title:"提示",content:"确定清除所有缓存吗？",success:function(e){if(e.confirm)try{t.clearStorage(),t.showToast({title:"清除成功",icon:"none"}),n.tabBars=[{name:"影视",id:"3",contentList:[]},{name:"漫画",id:"1",contentList:[]}]}catch(i){}}})},imgError:function(t){t.cover="/static/404.jpg"},setEnableScroll:function(t){this.enableScroll!==t&&(this.enableScroll=t)},changeTab:function(t){var n=this;return r(i.default.mark((function e(){var a,o,c,r,u;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.loading=!1,b&&(clearTimeout(b),b=!1),a=t,"object"===typeof t&&(a=t.detail.current),"object"===typeof s){e.next=8;break}return e.next=7,n.getElSize("nav-bar");case 7:s=e.sent;case 8:s.scrollLeft,o=0,c=0,r=0;case 12:if(!(r<=a)){e.next=21;break}return e.next=15,n.getElSize("tab"+r);case 15:u=e.sent,o+=u.width,r===a&&(c=u.width);case 18:r++,e.next=12;break;case 21:"number"===typeof t&&(n.tabCurrentIndex=a),b=setTimeout((function(){n.scrollLeft=o-c/2>h/2?o-c/2-h/2:0,"object"===typeof t&&(n.tabCurrentIndex=a),n.tabCurrentIndex=a;n.tabBars[n.tabCurrentIndex]}),300);case 23:case"end":return e.stop()}}),e)})))()},getElSize:function(n){return new Promise((function(e,i){var a=t.createSelectorQuery().select("#"+n);a.fields({size:!0,scrollOffset:!0,rect:!0},(function(t){e(t)})).exec()}))}}};n.default=p}).call(this,e("543d")["default"])},"4dba":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"85d2":function(t,n,e){"use strict";e.r(n);var i=e("4c7e"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"8bb8":function(t,n,e){"use strict";e.r(n);var i=e("4dba"),a=e("85d2");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("039a");var c,r=e("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);n["default"]=s.exports},addb:function(t,n,e){}},[["127f","common/runtime","common/vendor"]]]);