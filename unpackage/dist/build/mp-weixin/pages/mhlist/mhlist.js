(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mhlist/mhlist"],{"224c":function(t,n,e){"use strict";e.r(n);var o=e("80a8"),i=e("f48b");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("529d");var l,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],l);n["default"]=r.exports},"529d":function(t,n,e){"use strict";var o=e("9c6b"),i=e.n(o);i.a},"80a8":function(t,n,e){"use strict";var o={mixPulldownRefresh:function(){return e.e("components/mix-pulldown-refresh/mix-pulldown-refresh").then(e.bind(null,"e365"))}},i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},"8a60":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("2681"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){e.e("components/mix-loading/mix-loading").then(function(){return resolve(e("7d04"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/uni-icons/uni-icons").then(function(){return resolve(e("c33c"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("d213"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/mix-pulldown-refresh/mix-pulldown-refresh").then(function(){return resolve(e("e365"))}.bind(null,e)).catch(e.oe)},u={components:{mixLoading:a,uniIcons:l,uniNavBar:s,mixPulldownRefresh:r},data:function(){return{num:0,mhname:"",show:!1,visible:!1,loading:!0,enableScroll:!0,title:"",url:"",url1:"",mhlist:[],list:[],sort:"升序",from:"xs",index:0,cover:"",openid:"",detailData:null,detailDataObj:{}}},methods:{onPulldownReresh:function(){var n=this;this.getmhlist((function(e){n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh(),"ok"==e?t.showToast({title:"刷新成功"}):t.showToast({title:"刷新失败",icon:"none"})}))},setEnableScroll:function(t){this.enableScroll!==t&&(this.enableScroll=t)},sortlist:function(){for(var n=this,e=[],o=this.mhlist.length-1;o>-1;o--)e.push(this.mhlist[o]);this.mhlist=e;var i=this.mhlist.length-1-this.num;this.num=i,"升序"==this.sort?(this.sort="倒序",t.pageScrollTo({scrollTop:0,duration:0})):(this.sort="升序",n.scrollTo())},back:function(){t.navigateBack({delta:1})},itemClick:function(n,e){var o=this;this.num=e;try{var i=t.getStorageSync("mhShouCang");if(i){for(var a=0;a<i.length;a++)if(i[a].name==this.mhname){i[a].num=e,!0;break}t.setStorage({key:"mhShouCang",data:i})}}catch(l){}this.$eventHub.$emit("changeMhNum",e),"mh"==this.from?(this.$eventHub.$emit("changeMhContent",n,e),setTimeout((function(){o.back()}),300)):t.redirectTo({url:"/pages/mh/mh?src="+encodeURIComponent(n.url)+"&data="+JSON.stringify(this.detailDataObj)})},scrollTo:function(){var n=this,e=t.getSystemInfoSync().windowHeight,o=33*(parseInt(n.num)+6)-e/2+64+44;o=o-e>=0?o:0,t.pageScrollTo({scrollTop:o,duration:0})},getmhlist:function(n){var e=this;e.loading=!0,t.request({url:o.default.baseUrl,data:{mhurl1:e.url1},method:"GET",complete:function(o){if(e.loading=!1,200==o.statusCode&&o.data&&0==o.data.code){var i=o.data.list;e.mhlist=i,setTimeout((function(){e.scrollTo(),n&&n("ok")}),200);try{t.setStorageSync("mhlist"+e.url1,e.mhlist)}catch(a){}}else n&&n("fail")}})},getCacheState:function(n){var e=this,o=t.getStorageSync("xsDownload");if(o){for(var i=0;i<o.length;i++)if(o[i].name==e.xsname){var a=o[i].data;o[i].xslist=n,a.forEach((function(t){n.forEach((function(n){t.numName==n.num&&"done"==t.state&&(n.state="done")}))})),e.xslist=n;break}t.setStorageSync("xsDownload",o)}}},onNavigationBarButtonTap:function(t){t.index,0==t.index&&this.sortlist()},onReady:function(){var n=t.getStorageSync("config");this.index=n.index},onLoad:function(n){var e=this;this.openid=t.getStorageSync("userInfo").openid,this.detailData=JSON.parse(n.data),this.detailDataObj=JSON.parse(n.obj),this.mhname=decodeURIComponent(this.detailData.mhname),this.num=decodeURIComponent(this.detailData.num),this.from=decodeURIComponent(this.detailData.from),this.url1=decodeURIComponent(this.detailData.url),this.cover=decodeURIComponent(this.detailData.cover),this.title=this.mhname,t.setNavigationBarTitle({title:this.title}),e.mhlist=t.getStorageSync("mhlist"+this.url1),setTimeout((function(){e.scrollTo()}),200),e.getmhlist()}};n.default=u}).call(this,e("543d")["default"])},"8f9d":function(t,n,e){"use strict";(function(t){e("3be2");o(e("66fd"));var n=o(e("224c"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"9c6b":function(t,n,e){},f48b:function(t,n,e){"use strict";e.r(n);var o=e("8a60"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a}},[["8f9d","common/runtime","common/vendor"]]]);