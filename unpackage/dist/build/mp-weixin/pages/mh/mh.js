(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mh/mh"],{2941:function(t,e,n){"use strict";var i=n("a811"),a=n.n(i);a.a},"46d2":function(t,e,n){"use strict";var i={uniNavBar:function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"d213"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},8090:function(t,e,n){"use strict";(function(t){n("3be2");i(n("66fd"));var e=i(n("a657"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a535:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2681"));function a(t){return t&&t.__esModule?t:{default:t}}var o=function(){n.e("components/mix-loading/mix-loading").then(function(){return resolve(n("7d04"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("c33c"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("d213"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/battery/battery").then(function(){return resolve(n("3715"))}.bind(null,n)).catch(n.oe)},u={components:{mixLoading:o,uniIcons:l,uniNavBar:s,battery:r},data:function(){return{black:!1,num:0,mhname:"",show:!1,visible:!1,loading:!0,title:"",url:"",url1:"",mhlist:[],list:[],scrollTop:0,prevTimer:null,nextTimer:null,xsurl2Request:null,scrollTimer:null,scrollTopTotal:0,index:0,style:{pageHeight:0,contentViewHeight:0,footViewHeight:0,mitemHeight:0},platform:"",main:null,Intent:null,IntentFilter:null,UIDevice:null,battery:{},level:100,time:"00:00",getBatteryTimer:null,load5limitCache:!0,flag:0,text:"",lastX:0,lastY:0,ditance:120,cover:"",x:0,y:0,currentWebview:null,titleNView:null,openid:"",obj:{},detailData:{}}},onNavigationBarButtonTap:function(t){0==t.index&&this.gotomhlist(),t.index},created:function(){var e=t.getSystemInfoSync();this.windowWidth=e.windowWidth,this.windowHeight=e.windowHeight,this.platform=t.getSystemInfoSync().platform},methods:{imgLoad:function(){this.loading=!1},imgError:function(e){e.img="/static/404.jpg",t.showToast({title:"加载图片出现错误",icon:"none"})},back:function(){t.navigateBack({delta:1})},prev:function(){var e=this,n=this;n.num<=0?t.showToast({title:"已经是第一话了",icon:"none"}):(clearTimeout(this.prevTimer),this.xsurl2Request&&this.xsurl2Request.abort(),this.prevTimer=setTimeout((function(){e.num--,n.num<=-1&&(n.num=0),e.url=e.mhlist[e.num].url,e.reloadContent()}),0))},next:function(){var e=this,n=this;n.num>=this.mhlist.length-1?t.showToast({title:"已经是最后一话了",icon:"none"}):(clearTimeout(this.nextTimer),this.xsurl2Request&&this.xsurl2Request.abort(),this.nextTimer=setTimeout((function(){n.num++,n.num>=e.mhlist.length&&(n.num=e.mhlist.length-1),e.url=e.mhlist[e.num].url,e.reloadContent()}),0))},download:function(){t.showToast({title:"点击了下载",icon:"none"})},gotomhlist:function(){var e={mhname:this.title,num:this.num,from:"mh",url:this.url1,cover:this.cover};t.navigateTo({url:"/pages/mhlist/mhlist?data=".concat(JSON.stringify(e),"&obj=").concat(JSON.stringify(this.detailData))})},scrollClick:function(){this.show=!this.show,this.show},getScrollTopTotal:function(){var e=this,n=t.createSelectorQuery();n.selectAll(".m-item").boundingClientRect(),n.select("#scrollview").boundingClientRect(),n.exec((function(t){e.style.mitemHeight=0,t[0].forEach((function(t){return e.style.mitemHeight=e.style.mitemHeight+t.height})),setTimeout((function(){e.scrollTopTotal=e.style.mitemHeight-e.style.contentViewHeight}),100)}))},getTIme:function(){var t=new Date,e=t.getHours(),n=t.getMinutes();e=e<=9?"0"+e:e,n=n<=9?"0"+n:n,this.time=e+":"+n},getBattery:function(){var t=this;t.getTIme()},reloadContent:function(){var e=this,n=this,a=this.num;a=parseInt(a),this.title=this.mhlist[a].num,t.setNavigationBarTitle({title:this.title}),this.detailData.title=this.title,this.detailData.num=a,this.detailData.Time=(new Date).getTime(),this.detailData.saveTime=i.default.getDate("/"),i.default.setMhZJ(a,this.detailData),this.$eventHub.$emit("changeMhNum",a);try{var o=t.getStorageSync("mhShouCang");if(o){for(var l=0;l<o.length;l++)if(o[l].name==n.mhname){o[l].num=a,!0;break}t.setStorage({key:"mhShouCang",data:o})}}catch(s){}this.loading=!0,this.xsurl2Request=t.request({url:t.getStorageSync("baseUrl"),data:{mhurl2:this.url},method:"GET",complete:function(n){200==n.statusCode&&n.data&&0==n.data.code?(e.list=n.data.list,e.list.length||t.showToast({title:"获取漫画数据失败",icon:"none"}),setTimeout((function(){t.pageScrollTo({scrollTop:0,duration:0})}),0)):t.showToast({title:"获取漫画数据失败",icon:"none"})}})}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReady:function(){this.getTIme();var e=t.getStorageSync("config");switch(this.index=e.index,t.getSystemInfoSync().platform){case"android":break;case"ios":break;default:break}},onUnload:function(){},onShow:function(){var e=this,n=this;setTimeout((function(){n.mhlist=t.getStorageSync("mhlist"+e.url1),e.title=n.mhlist[e.num].num,t.setNavigationBarTitle({title:e.title})}),300)},onShareAppMessage:function(t){return{title:"[漫画]"+this.mhname+" "+this.title,imageUrl:this.detailData.cover,path:"/pages/mh/mh?src="+encodeURIComponent(this.url)+"&data="+JSON.stringify(this.detailData)}},onShareTimeline:function(){return{title:"[漫画]"+this.mhname+" "+this.title,imageUrl:this.detailData.cover,query:"src="+encodeURIComponent(this.url)+"&data="+JSON.stringify(this.detailData)}},onLoad:function(e){var n=this,i=this;this.openid=t.getStorageSync("userInfo").openid,this.detailData=JSON.parse(e.data),this.title=this.detailData.title,this.url=decodeURIComponent(e.src),this.mhname=this.detailData.name,this.cover=this.detailData.cover,this.num=this.detailData.num?this.detailData.num:0,this.url1=this.detailData.url,i.mhlist=t.getStorageSync("mhlist"+this.url1),t.setNavigationBarTitle({title:this.title}),setTimeout((function(){t.request({url:t.getStorageSync("baseUrl"),data:{mhurl1:i.url1},method:"GET",complete:function(e){if(200==e.statusCode&&e.data&&0==e.data.code){var n=e.data.list;i.obj=e.data.data,i.mhlist=n;try{t.setStorageSync("mhlist"+i.url1,i.mhlist)}catch(a){}}else t.showToast({title:"获取章节目录失败",icon:"none"})}})}),100),this.reloadContent(),this.$eventHub.$on("changeMhContent",(function(e,i){n.title=e.num,t.setNavigationBarTitle({title:n.title}),n.num=i,n.url=e.url,n.reloadContent()}))}};e.default=u}).call(this,n("543d")["default"])},a657:function(t,e,n){"use strict";n.r(e);var i=n("46d2"),a=n("ee21");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2941");var l,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],l);e["default"]=r.exports},a811:function(t,e,n){},ee21:function(t,e,n){"use strict";n.r(e);var i=n("a535"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}},[["8090","common/runtime","common/vendor"]]]);