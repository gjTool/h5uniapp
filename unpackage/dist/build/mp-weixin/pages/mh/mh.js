(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mh/mh"],{2941:function(t,e,i){"use strict";var n=i("a811"),a=i.n(n);a.a},"2e7f":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},8090:function(t,e,i){"use strict";(function(t){i("3be2");n(i("66fd"));var e=n(i("a657"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},a535:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2681"));function a(t){return t&&t.__esModule?t:{default:t}}var o=function(){i.e("components/mix-loading/mix-loading").then(function(){return resolve(i("7d04"))}.bind(null,i)).catch(i.oe)},l=function(){i.e("components/uni-icons/uni-icons").then(function(){return resolve(i("c33c"))}.bind(null,i)).catch(i.oe)},s=function(){i.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(i("d213"))}.bind(null,i)).catch(i.oe)},u=function(){i.e("components/battery/battery").then(function(){return resolve(i("3715"))}.bind(null,i)).catch(i.oe)},r={components:{mixLoading:o,uniIcons:l,uniNavBar:s,battery:u},data:function(){return{black:!1,num:0,mhname:"",show:!1,visible:!1,loading:!0,title:"",url:"",url1:"",mhlist:[],list:[],scrollTop:0,prevTimer:null,nextTimer:null,xsurl2Request:null,scrollTimer:null,scrollTopTotal:0,index:0,style:{pageHeight:0,contentViewHeight:0,footViewHeight:0,mitemHeight:0},platform:"",main:null,Intent:null,IntentFilter:null,UIDevice:null,battery:{},level:100,time:"00:00",getBatteryTimer:null,load5limitCache:!0,flag:0,text:"",lastX:0,lastY:0,ditance:120,cover:"",x:0,y:0,currentWebview:null,titleNView:null,openid:"",obj:{},detailData:{}}},onNavigationBarButtonTap:function(t){0==t.index&&this.gotomhlist(),t.index},created:function(){var e=t.getSystemInfoSync();this.windowWidth=e.windowWidth,this.windowHeight=e.windowHeight,this.platform=t.getSystemInfoSync().platform},methods:{imgLoad:function(){this.loading=!1},imgError:function(e){e.img="/static/404.jpg",t.showToast({title:"加载图片出现错误",icon:"none"})},back:function(){t.navigateBack({delta:1})},prev:function(){var e=this,i=this;i.num<=0?t.showToast({title:"已经是第一话了",icon:"none"}):(clearTimeout(this.prevTimer),this.xsurl2Request&&this.xsurl2Request.abort(),this.prevTimer=setTimeout((function(){e.num--,i.num<=-1&&(i.num=0),e.url=e.mhlist[e.num].url,e.reloadContent()}),0))},next:function(){var e=this,i=this;i.num>=this.mhlist.length-1?t.showToast({title:"已经是最后一话了",icon:"none"}):(clearTimeout(this.nextTimer),this.xsurl2Request&&this.xsurl2Request.abort(),this.nextTimer=setTimeout((function(){i.num++,i.num>=e.mhlist.length&&(i.num=e.mhlist.length-1),e.url=e.mhlist[e.num].url,e.reloadContent()}),0))},download:function(){t.showToast({title:"点击了下载",icon:"none"})},gotomhlist:function(){var e={mhname:this.title,num:this.num,from:"mh",url:this.url1,cover:this.cover};t.navigateTo({url:"/pages/mhlist/mhlist?data=".concat(JSON.stringify(e),"&obj=").concat(JSON.stringify(this.detailData))})},scrollClick:function(){this.show=!this.show,this.show},getScrollTopTotal:function(){var e=this,i=t.createSelectorQuery();i.selectAll(".m-item").boundingClientRect(),i.select("#scrollview").boundingClientRect(),i.exec((function(t){e.style.mitemHeight=0,t[0].forEach((function(t){return e.style.mitemHeight=e.style.mitemHeight+t.height})),setTimeout((function(){e.scrollTopTotal=e.style.mitemHeight-e.style.contentViewHeight}),100)}))},getTIme:function(){var t=new Date,e=t.getHours(),i=t.getMinutes();e=e<=9?"0"+e:e,i=i<=9?"0"+i:i,this.time=e+":"+i},getBattery:function(){var t=this;t.getTIme()},reloadContent:function(){var e=this,i=this,a=this.num;a=parseInt(a),this.title=this.mhlist[a].num,t.setNavigationBarTitle({title:this.title}),this.detailData.title=this.title,this.detailData.num=a,this.detailData.Time=(new Date).getTime(),this.detailData.saveTime=n.default.getDate("/"),n.default.setMhZJ(a,this.detailData),this.$eventHub.$emit("changeMhNum",a);try{var o=t.getStorageSync("mhShouCang");if(o){for(var l=0;l<o.length;l++)if(o[l].name==i.mhname){o[l].num=a,!0;break}t.setStorage({key:"mhShouCang",data:o})}}catch(s){}this.loading=!0,this.xsurl2Request=t.request({url:n.default.baseUrl,data:{mhurl2:this.url},method:"GET",complete:function(i){200==i.statusCode&&i.data&&0==i.data.code?(e.list=i.data.list,e.list.length||t.showToast({title:"获取漫画数据失败",icon:"none"}),setTimeout((function(){t.pageScrollTo({scrollTop:0,duration:0})}),0)):t.showToast({title:"获取漫画数据失败",icon:"none"})}})},handletouchmove:function(t){var e=this;clearTimeout(this.handletouchmoveTimer),this.handletouchmoveTimer=setTimeout((function(){if(!t.changedTouches&&!t.changedTouches[0]){var i=t.changedTouches[0].pageX,n=t.changedTouches[0].pageY,a=i-e.lastX,o=n-e.lastY,l="";Math.abs(a)>Math.abs(o)?a<-e.ditance?(l="向左滑动",e.flag=1):a>e.ditance&&(l="向右滑动",e.flag=2):o<-e.ditance?(l="向上滑动",e.flag=3,e.scrollTopTotal-e.scrollTop-40==0&&e.next()):o>e.ditance&&(l="向下滑动",e.flag=4,0==e.scrollTop&&e.prev()),e.lastX=i,e.lastY=n,e.text=l}}),20),clearTimeout(this.getBatteryTimer),this.getBatteryTimer=setTimeout((function(){e.getBattery()}),300)},handletouchstart:function(t){t.changedTouches&&t.changedTouches[0]&&(this.lastX=t.changedTouches[0].pageX,this.lastY=t.changedTouches[0].pageY)},handletouchend:function(t){}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReady:function(){this.getTIme();var e=t.getStorageSync("config");switch(this.index=e.index,t.getSystemInfoSync().platform){case"android":break;case"ios":break;default:break}},onUnload:function(){},onShow:function(){var e=this,i=this;setTimeout((function(){i.mhlist=t.getStorageSync("mhlist"+e.url1),e.title=i.mhlist[e.num].num,t.setNavigationBarTitle({title:e.title})}),300)},onShareAppMessage:function(t){return{title:"[漫画]"+this.mhname+" "+this.title,imageUrl:this.detailData.cover,path:"/pages/mh/mh?src="+encodeURIComponent(this.url)+"&data="+JSON.stringify(this.detailData)}},onShareTimeline:function(){return{title:"[漫画]"+this.mhname+" "+this.title,imageUrl:this.detailData.cover,query:"src="+encodeURIComponent(this.url)+"&data="+JSON.stringify(this.detailData)}},onLoad:function(e){var i=this,a=this;this.openid=t.getStorageSync("userInfo").openid,this.detailData=JSON.parse(e.data),this.title=this.detailData.title,this.url=decodeURIComponent(e.src),this.mhname=this.detailData.name,this.cover=this.detailData.cover,this.num=this.detailData.num?this.detailData.num:0,this.url1=this.detailData.url,a.mhlist=t.getStorageSync("mhlist"+this.url1),t.setNavigationBarTitle({title:this.title}),setTimeout((function(){t.request({url:n.default.baseUrl,data:{mhurl1:a.url1},method:"GET",complete:function(e){if(200==e.statusCode&&e.data&&0==e.data.code){var i=e.data.list;a.obj=e.data.data,a.mhlist=i;try{t.setStorageSync("mhlist"+a.url1,a.mhlist)}catch(n){}}else t.showToast({title:"获取章节目录失败",icon:"none"})}})}),100),this.reloadContent(),this.$eventHub.$on("changeMhContent",(function(e,n){i.title=e.num,t.setNavigationBarTitle({title:i.title}),i.num=n,i.url=e.url,i.reloadContent()}))}};e.default=r}).call(this,i("543d")["default"])},a657:function(t,e,i){"use strict";i.r(e);var n=i("2e7f"),a=i("ee21");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2941");var l,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);e["default"]=u.exports},a811:function(t,e,i){},ee21:function(t,e,i){"use strict";i.r(e);var n=i("a535"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}},[["8090","common/runtime","common/vendor"]]]);