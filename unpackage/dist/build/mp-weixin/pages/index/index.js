(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0912":function(t,e,n){"use strict";n.r(e);var i=n("be4f"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},2201:function(t,e,n){"use strict";(function(t){n("c0c1");i(n("66fd"));var e=i(n("3993"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},3993:function(t,e,n){"use strict";n.r(e);var i=n("e66f"),a=n("0912");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("b5e7");var r,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},"429a":function(t,e,n){},b5e7:function(t,e,n){"use strict";var i=n("429a"),a=n.n(i);a.a},be4f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("4795")),a=s(n("27de"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,a,s,r){try{var o=t[s](r),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(i,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var s=t.apply(e,n);function o(t){r(s,i,a,o,u,"next",t)}function u(t){r(s,i,a,o,u,"throw",t)}o(void 0)}))}}var u,c=function(){n.e("components/mix-loading/mix-loading").then(function(){return resolve(n("a24b"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("3e75"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("2a57"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("aa22"))}.bind(null,n)).catch(n.oe)},h=0,g=!1,m={components:{mixLoading:c,uniIcons:l,uniNavBar:f,uniPopup:d},data:function(){return{tabBars:[{name:"影视",id:"3",contentList:[]},{name:"漫画",id:"1",contentList:[]},{name:"小说",id:"2",contentList:[]}],tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,contentData:{},loading:!1,keyWord:"",loadListRequest:null,cancelFlag:!1,show:!1,type:"",selectObj:"",index:0,selectObjIndex:0,openid:"",MhZJList:[],YsZJList:[],XsZJList:[]}},computed:{},onLoad:function(){var e=this;return o(i.default.mark((function n(){var s,r,o,u;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=t.getStorageSync("config"),e.index=s.index,h=t.getSystemInfoSync().windowWidth,e.openid=t.getStorageSync("userInfo").openid,e.MhZJList=a.default.getMhZJ(),e.MhZJList&&e.MhZJList.length)for(e.tabBars[1].contentList=e.MhZJList,r=0;r<e.tabBars[1].contentList.length;r++)(function(t){e.getMhCover(e.tabBars[1].contentList[t],t,e.tabBars[1].contentList.length)})(r);if(e.YsZJList=a.default.getYsZJ(),e.YsZJList&&e.YsZJList.length)for(e.tabBars[0].contentList=e.YsZJList,o=0;o<e.tabBars[0].contentList.length;o++)(function(t){e.getCover(e.tabBars[0].contentList[t],t,e.tabBars[0].contentList.length)})(o);if(e.XsZJList=a.default.getXsZJ(),e.XsZJList&&e.XsZJList.length)for(e.tabBars[2].contentList=e.XsZJList,u=0;u<e.tabBars[2].contentList.length;u++)(function(t){e.getXsCover(e.tabBars[2].contentList[t],t,e.tabBars[2].contentList.length)})(u);case 10:case"end":return n.stop()}}),n)})))()},onNavigationBarButtonTap:function(t){0==t.index&&this.clearCache(),1==t.index&&this.bianji()},onShow:function(){this.MhZJList=a.default.getMhZJ(),this.MhZJList&&this.MhZJList.length&&(this.tabBars[1].contentList=this.MhZJList),this.YsZJList=a.default.getYsZJ(),this.YsZJList&&this.YsZJList.length&&(this.tabBars[0].contentList=this.YsZJList),this.XsZJList=a.default.getXsZJ(),this.XsZJList&&this.XsZJList.length&&(this.tabBars[2].contentList=this.XsZJList)},methods:{getCover:function(e,n,i){var a=this;if(0!=this.index){var s=t.request({url:t.getStorageSync("baseUrl"),data:{ysurl:e.url},method:"GET",complete:function(n){if(200==n.statusCode&&n.data&&0==n.data.code){var i=n.data.data,s=e.name;e.cover=i.cover,e.name=i.name;var r=s.replace(e.name,"");if(-1!=r.indexOf("更新"))if(-1!=e.genre.indexOf("综艺")){var o=n.data.list[n.data.list.length-1].num;-1!=o.indexOf("集")||-1!=o.indexOf("期")?e.imgText="更新至"+o:e.imgText="更新至"+o+"期"}else e.imgText=r;else-1!=r.indexOf("完结")?-1==e.genre.indexOf("综艺")?e.imgText=n.data.list.length+"集全":e.imgText=r:-1!=r.indexOf("集")?e.imgText=r:-1!=r.indexOf("期")?e.imgText=r:e.imgText=e.time+"更新";t.setStorage({key:a.openid+"ysZJ",data:a.tabBars[0].contentList})}}});return this.ysurlRequest=s,s}},clearYsurlRequestList:function(){this.ysurlRequestList.length&&(this.ysurlRequestList.forEach((function(t){t.abort()})),this.ysurlRequestList=[])},getMhCover:function(e,n,i){var a=this;if(0!=this.index){var s=t.request({url:t.getStorageSync("baseUrl"),data:{mhurl1:e.url},method:"GET",complete:function(n){if(200==n.statusCode&&n.data&&0==n.data.code){var i=n.data.data;e.name;e.cover=i.cover,e.name=i.name,e.imgText=i.time?i.time+"更新":"",e.genre=i.tag?i.tag:"其他",t.setStorage({key:a.openid+"mhZJ",data:a.tabBars[1].contentList})}}});return this.mhurlRequest=s,s}},clearMhurlRequestList:function(){this.mhurlRequestList.length&&(this.mhurlRequestList.forEach((function(t){t.abort()})),this.mhurlRequestList=[])},getXsCover:function(e,n,i){var a=this;if(0!=this.index){var s=t.request({url:t.getStorageSync("baseUrl"),data:{xsname:e.name},method:"GET",complete:function(n){if(200==n.statusCode&&n.data&&0==n.data.code){var i=n.data.list;i.forEach((function(n){n.url===e.url&&(e.imgText=n.num,e.genre=n.tag?n.tag:"其他",t.setStorage({key:a.openid+"xsZJ",data:a.tabBars[2].contentList}))}))}}});return this.xsurlRequest=s,s}},clearXsurlRequestList:function(){this.xsurlRequestList.length&&(this.xsurlRequestList.forEach((function(t){t.abort()})),this.xsurlRequestList=[])},navToDetails:function(e){if("3"==e._type){var n="/pages/details/detailsMP?data=".concat(JSON.stringify(e));0==this.index&&(n=""),t.navigateTo({url:n})}if("1"==e._type){var i=t.getStorageSync("mhlist"+e.url),a="/pages/mh/mh?src="+encodeURIComponent(i[e.num].url)+"&data="+JSON.stringify(e);0==this.index&&(a=""),t.navigateTo({url:a})}if("2"==e._type){var s=t.getStorageSync("xslist"+e.url),r="/pages/xs/xs?src="+encodeURIComponent(s[e.index].url)+"&data="+JSON.stringify(e);0==this.index&&(r=""),t.navigateTo({url:r})}},clearCache:function(){var e=this;t.showModal({title:"提示",content:"确定清除所有缓存吗？",success:function(n){if(n.confirm)try{t.clearStorage(),t.showToast({title:"清除成功",icon:"none"}),e.tabBars=[{name:"影视",id:"3",contentList:[]},{name:"漫画",id:"1",contentList:[]}]}catch(i){}}})},imgError:function(t){t.cover="/static/404.jpg"},setEnableScroll:function(t){this.enableScroll!==t&&(this.enableScroll=t)},changeTab:function(t){var e=this;return o(i.default.mark((function n(){var a,s,r,o,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.loading=!1,g&&(clearTimeout(g),g=!1),a=t,"object"===typeof t&&(a=t.detail.current),"object"===typeof u){n.next=8;break}return n.next=7,e.getElSize("nav-bar");case 7:u=n.sent;case 8:u.scrollLeft,s=0,r=0,o=0;case 12:if(!(o<=a)){n.next=21;break}return n.next=15,e.getElSize("tab"+o);case 15:c=n.sent,s+=c.width,o===a&&(r=c.width);case 18:o++,n.next=12;break;case 21:"number"===typeof t&&(e.tabCurrentIndex=a),g=setTimeout((function(){e.scrollLeft=s-r/2>h/2?s-r/2-h/2:0,"object"===typeof t&&(e.tabCurrentIndex=a),e.tabCurrentIndex=a;e.tabBars[e.tabCurrentIndex]}),300);case 23:case"end":return n.stop()}}),n)})))()},getElSize:function(e){return new Promise((function(n,i){var a=t.createSelectorQuery().select("#"+e);a.fields({size:!0,scrollOffset:!0,rect:!0},(function(t){n(t)})).exec()}))}}};e.default=m}).call(this,n("543d")["default"])},e66f:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))}},[["2201","common/runtime","common/vendor"]]]);