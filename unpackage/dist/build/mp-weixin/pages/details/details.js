(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"350c":function(n,e,t){"use strict";var i=t("7f58"),a=t.n(i);a.a},"3cac":function(n,e,t){"use strict";t.r(e);var i=t("9d27"),a=t("ee3c");for(var o in a)"default"!==o&&function(n){t.d(e,n,(function(){return a[n]}))}(o);t("350c");var u,l=t("f0c5"),r=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=r.exports},"6e1e":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(t("27de"));function i(n){return n&&n.__esModule?n:{default:n}}var a=function(){t.e("components/mix-loading/mix-loading").then(function(){return resolve(t("a24b"))}.bind(null,t)).catch(t.oe)},o=function(){t.e("components/uni-icons/uni-icons").then(function(){return resolve(t("3e75"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("2a57"))}.bind(null,t)).catch(t.oe)},l={components:{uniIcons:o,uniNavBar:u,mixLoading:a},data:function(){return{show:!0,title:"影视详情",num:0,index:0,loading:!0,detailData:{},list:[],obj:{},name:"",videoContext:null,video_mask:null,video_content:null,videoshow:!1,webview:null,webviewShow:!0,first:!0,checked:!1,webviewStyles:{top:"44px",videoFullscreen:"landscape"},webviewsrc:"/hybrid/html/index.html"}},onReady:function(e){var t=n.getStorageSync("config");this.index=t.index},computed:{},onUnload:function(){},onLoad:function(e){var t=this;this.detailData=JSON.parse(e.data),this.title=this.detailData.name,n.setNavigationBarTitle({title:this.detailData.name}),n.request({url:n.getStorageSync("baseUrl"),data:{ysurl:this.detailData.url},method:"GET",complete:function(n){if(t.loading=!1,200==n.statusCode&&n.data&&0==n.data.code){var e=n.data.list;t.obj=n.data.data;for(var i=0;i<e.length;i++){var a=e[i].download,o=e[i].m3u8url,u=e[i].onlineurl,l={cover:t.obj.cover,num:e[i].num,download:"",m3u8url:"",onlineurl:""};-1!=a.indexOf(".m3u8")&&(l.m3u8url=a),-1!=a.indexOf(".mp4")&&(l.download=a),-1==a.indexOf(".m3u8")&&-1==a.indexOf(".mp4")&&(l.onlineurl=a),-1!=o.indexOf(".m3u8")&&(l.m3u8url=o),-1!=o.indexOf(".mp4")&&(l.download=o),-1==o.indexOf(".m3u8")&&-1==o.indexOf(".mp4")&&(l.onlineurl=o),-1!=u.indexOf(".m3u8")&&(l.m3u8url=u),-1!=u.indexOf(".mp4")&&(l.download=u),-1==u.indexOf(".m3u8")&&-1==u.indexOf(".mp4")&&(l.onlineurl=u),e[i]=l}t.list=e,t.src()}}})},methods:{src:function(){var e=this.num;if(e=parseFloat(e),0==this.list.length)return"";var t=this.list[e],i=t.m3u8url,a=document.getElementsByTagName("iframe")[0];if(a){var o=a.contentWindow.player;o&&o.pause()}if(""!=i){if(this.first)this.webviewsrc=this.webviewsrc+"?url="+i,this.first=!1;else{o=a.contentWindow.player;o.src(i),o.play()}return i}n.showToast({title:"当前播放线路为空,请更换线路",icon:"none"})},fullscreenchange:function(){},playClick:function(){},videoErrorCallback:function(n){},back:function(){n.navigateBack()},shoucang:function(){n.showToast({title:"点击了收藏"})},imgError:function(n){n.cover="/static/404.jpg"},plays:function(){var n=this;setTimeout((function(){n.play()}),1e3)},play:function(n,e){var t=document.getElementsByTagName("iframe")[0],i=t.contentWindow.player;i.play()},play2:function(n,e){var t=document.getElementsByTagName("iframe")[0],i=t.contentWindow.player;if(this.num==e)i.play();else{this.num=e;var a=this.list[e],o=a.m3u8url;i.src(o),i.play()}},playh5:function(n,e){}}};e.default=l}).call(this,t("543d")["default"])},"7f58":function(n,e,t){},"9d27":function(n,e,t){"use strict";var i={uniNavBar:function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"2a57"))}},a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},a3c7:function(n,e,t){"use strict";(function(n){t("c0c1");i(t("66fd"));var e=i(t("3cac"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},ee3c:function(n,e,t){"use strict";t.r(e);var i=t("6e1e"),a=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=a.a}},[["a3c7","common/runtime","common/vendor"]]]);