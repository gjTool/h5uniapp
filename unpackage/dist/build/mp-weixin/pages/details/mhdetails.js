(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/mhdetails"],{"0ecb":function(t,a,i){},"73da":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement;t._self._c},s=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}))},"749a":function(t,a,i){"use strict";i.r(a);var e=i("73da"),n=i("d4bb");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("ce61");var o,l=i("f0c5"),u=Object(l["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);a["default"]=u.exports},"8c10":function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("27de"));function n(t){return t&&t.__esModule?t:{default:t}}var s=function(){i.e("components/mix-loading/mix-loading").then(function(){return resolve(i("a24b"))}.bind(null,i)).catch(i.oe)},o=function(){i.e("components/uni-icons/uni-icons").then(function(){return resolve(i("3e75"))}.bind(null,i)).catch(i.oe)},l=function(){i.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(i("2a57"))}.bind(null,i)).catch(i.oe)},u={components:{mixLoading:s,uniIcons:o,uniNavBar:l},data:function(){return{visible:!1,num:0,loading:!0,detailData:{},list:[],title:"",obj:{},index:0,type:"h5",openid:""}},onNavigationBarButtonTap:function(a){a.index,0==a.index&&t.showToast({title:"点击了收藏"})},onReady:function(){var a=t.getStorageSync("config");this.index=a.index},onShareAppMessage:function(t){return{title:"[漫画]"+this.title,imageUrl:this.detailData.cover,path:"/pages/details/mhdetails?data="+JSON.stringify(this.detailData)}},onShareTimeline:function(){return{title:"[漫画]"+this.title,imageUrl:this.detailData.cover,query:"data="+JSON.stringify(this.detailData)}},onPullDownRefresh:function(){this.getList()},onLoad:function(a){var i=this;this.openid=t.getStorageSync("userInfo").openid,this.detailData=JSON.parse(a.data),this.title=this.detailData.name,this.num=e.default.getMhZJnum(this.detailData.url),this.num=this.num?this.num:0,t.setNavigationBarTitle({title:this.title}),this.getList(),this.$eventHub.$on("changeMhNum",(function(t){i.num=t,i.detailData.title=i.list[i.num].num,i.detailData.Time=(new Date).getTime(),i.detailData.saveTime=e.default.getDate("/"),e.default.setMhZJ(t,i.detailData)}))},methods:{getList:function(){var a=this;t.request({url:t.getStorageSync("baseUrl"),data:{mhurl1:this.detailData.url},method:"GET",complete:function(i){if(a.loading=!1,t.stopPullDownRefresh(),200==i.statusCode&&i.data&&0==i.data.code){var e=i.data.list;a.list=e,a.obj=i.data.data,a.detailData.cover=a.obj.cover;try{t.setStorageSync("mhlist"+a.detailData.url,a.list)}catch(n){}}}})},imgError:function(t){t.cover="/static/404.jpg"},play:function(a,i){this.num=i,this.detailData.title=this.list[i].num,this.detailData.mum=this.num,e.default.setMhZJ(this.num,this.detailData);try{t.setStorageSync("mhlist"+this.detailData.url,this.list)}catch(n){}t.navigateTo({url:"/pages/mh/mh?src="+encodeURIComponent(a.url)+"&data="+JSON.stringify(this.detailData)})},back:function(){t.navigateBack({delta:1})},download:function(){t.showToast({title:"点击了下载",icon:"none"})},shoucang:function(){try{var a=t.getStorageSync("mhShouCang");if(a){this.detailData.num=this.num,this.detailData.list=this.list;for(var i=!1,e=0;e<a.length;e++)if(a[e].name==this.detailData.name){a[e]=this.detailData,i=!0;break}i?t.showToast({title:"已经收藏过啦"}):(a.push(this.detailData),t.setStorage({key:"mhShouCang",data:a,success:function(){t.showToast({title:"收藏成功"})}}))}else{var n=[];this.detailData.num=this.num,this.detailData.list=this.list,n.push(this.detailData),t.setStorage({key:"mhShouCang",data:n,success:function(){t.showToast({title:"收藏成功"})}})}}catch(o){var s=[];this.detailData.num=this.num,this.detailData.list=this.list,s.push(this.detailData),t.setStorage({key:"mhShouCang",data:s,success:function(){t.showToast({title:"收藏成功"})}})}},gotomhlist:function(){var a={mhname:this.title,num:this.num,from:"mhdetails",url:this.detailData.url,cover:this.detailData.cover};t.navigateTo({url:"/pages/mhlist/mhlist?data=".concat(JSON.stringify(a),"&obj=").concat(JSON.stringify(this.detailData))})}}};a.default=u}).call(this,i("543d")["default"])},aa67:function(t,a,i){"use strict";(function(t){i("c0c1");e(i("66fd"));var a=e(i("749a"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,i("543d")["createPage"])},ce61:function(t,a,i){"use strict";var e=i("0ecb"),n=i.n(e);n.a},d4bb:function(t,a,i){"use strict";i.r(a);var e=i("8c10"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a}},[["aa67","common/runtime","common/vendor"]]]);