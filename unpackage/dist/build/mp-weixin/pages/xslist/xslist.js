(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xslist/xslist"],{"0b97":function(t,n,e){"use strict";e.r(n);var o=e("c291"),s=e("635d");for(var i in s)"default"!==i&&function(t){e.d(n,t,(function(){return s[t]}))}(i);e("b97b");var a,l=e("f0c5"),r=Object(l["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=r.exports},"635d":function(t,n,e){"use strict";e.r(n);var o=e("f4cc"),s=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=s.a},"671c":function(t,n,e){"use strict";(function(t){e("2d68");o(e("66fd"));var n=o(e("0b97"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},b97b:function(t,n,e){"use strict";var o=e("e4db"),s=e.n(o);s.a},c291:function(t,n,e){"use strict";var o={mixPulldownRefresh:function(){return e.e("components/mix-pulldown-refresh/mix-pulldown-refresh").then(e.bind(null,"0542"))}},s=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}))},e4db:function(t,n,e){},f4cc:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(e("c644"));function s(t){return t&&t.__esModule?t:{default:t}}var i=function(){e.e("components/mix-loading/mix-loading").then(function(){return resolve(e("3075"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/uni-icons/uni-icons").then(function(){return resolve(e("72fa"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("4e45"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/mix-pulldown-refresh/mix-pulldown-refresh").then(function(){return resolve(e("0542"))}.bind(null,e)).catch(e.oe)},u={components:{mixLoading:i,uniIcons:a,uniNavBar:l,mixPulldownRefresh:r},data:function(){return{num:0,xsname:"",show:!1,visible:!1,loading:!0,enableScroll:!0,title:"",url:"",url1:"",xslist:[],list:[],sort:"升序",from:"xs",cover:""}},methods:{onPulldownReresh:function(){var n=this;this.getxslist((function(e){n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh(),"ok"==e?t.showToast({title:"刷新成功"}):t.showToast({title:"刷新失败",icon:"none"})}))},setEnableScroll:function(t){this.enableScroll!==t&&(this.enableScroll=t)},sortlist:function(){for(var n=this,e=[],o=this.xslist.length-1;o>-1;o--)e.push(this.xslist[o]);this.xslist=e;var s=this.xslist.length-1-this.num;this.num=s,"升序"==this.sort?(this.sort="倒序",t.pageScrollTo({scrollTop:0,duration:0})):(this.sort="升序",n.scrollTo())},back:function(){t.navigateBack({delta:1})},itemClick:function(n,e){var o=this;t.setStorage({key:"xsNum"+this.xsname,data:e}),this.num=e;try{var s=t.getStorageSync("xsShouCang");if(s){for(var i=0;i<s.length;i++)if(s[i].name==this.xsname){s[i].num=e,!0;break}t.setStorage({key:"xsShouCang",data:s})}}catch(a){}this.$eventHub.$emit("changeXsNum",e),"xs"==this.from?(this.$eventHub.$emit("changeXsContent",n,e),setTimeout((function(){o.back()}),100)):t.redirectTo({url:"/pages/xs/xs?src="+encodeURIComponent(n.url)+"&name="+encodeURIComponent(n.num)+"&xsname="+encodeURIComponent(this.xsname)+"&num="+encodeURIComponent(this.num)+"&url="+this.url1+"&cover="+this.cover})},scrollTo:function(){var n=this,e=t.getSystemInfoSync().windowHeight,o=33*(parseInt(n.num)+6)-e/2+64+44;o=o-e>=0?o:0,t.pageScrollTo({scrollTop:o,duration:0})},getxslist:function(n){var e=this;e.loading=!0,t.request({url:o.default.baseUrl,data:{xsurl1:this.url1},method:"GET",complete:function(o){if(e.loading=!1,200==o.statusCode&&o.data&&0==o.data.code){var s=o.data.list;e.xslist=s,e.getCacheState(e.xslist),setTimeout((function(){e.scrollTo(),n&&n("ok")}),200);try{t.setStorageSync("xslist"+e.xsname,e.xslist)}catch(i){}}else n&&n("fail")}})},getCacheState:function(n){var e=this,o=t.getStorageSync("xsDownload");if(o){for(var s=0;s<o.length;s++)if(o[s].name==e.xsname){var i=o[s].data;o[s].xslist=n,i.forEach((function(t){n.forEach((function(n){t.numName==n.num&&"done"==t.state&&(n.state="done")}))})),e.xslist=n;break}t.setStorageSync("xsDownload",o)}}},onLoad:function(n){var e=this;this.xsname=decodeURIComponent(n.xsname),this.num=decodeURIComponent(n.num),this.from=decodeURIComponent(n.from),this.url1=decodeURIComponent(n.url),this.cover=decodeURIComponent(n.cover),this.title=this.xsname,t.setNavigationBarTitle({title:this.title}),e.xslist=t.getStorageSync("xslist"+this.xsname),e.getCacheState(e.xslist),setTimeout((function(){e.scrollTo()}),200),e.getxslist()}};n.default=u}).call(this,e("543d")["default"])}},[["671c","common/runtime","common/vendor"]]]);