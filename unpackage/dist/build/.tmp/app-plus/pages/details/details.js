(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"511b":function(n,e,t){"use strict";var i=t("7a51"),o=t.n(i);o.a},"780b":function(n,e,t){"use strict";t.r(e);var i=t("aa54"),o=t("c02b");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("511b");var a=t("2877"),l=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},"7a51":function(n,e,t){},a604:function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(t("4e99"));function u(n){return n&&n.__esModule?n:{default:n}}var a=function(){return t.e("components/mix-loading/mix-loading").then(t.bind(null,"7978"))},l={components:{mixLoading:a},data:function(){return{num:0,loading:!0,detailData:{},list:[],obj:{},name:"",videoContext:null,video_mask:null,video_content:null,videoshow:!1,webviewStyles:{height:"50%",progress:{color:"green"}},webview:null,webviewShow:!0}},onReady:function(n){var e=this,t=this.$mp.page.$getAppWebview();setTimeout(function(){e.webview=t.children()[0],e.webview.setStyle({height:"50%"})},1e3)},computed:{src:function(){var e=this.num;if(e=parseFloat(e),0==this.list.length)return"";var t=this.list[e],i="";return i=t.m3u8url,n.$emit("videoSrc",i),i},webviewsrc:function(){var n=this.num;if(n=parseFloat(n),0==this.list.length)return"";var e=this.list[n],t="";return t=e.onlineurl,t}},onUnload:function(){n.$off("clickitem"),n.$off("videoSrc")},onLoad:function(e){var t=this;this.video_content=n.getSubNVueById("video_content"),this.videoshow=!1,this.video_content.hide("auto",0,function(){}),n.$on("clickClose",function(n){}),n.$on("fullscreen",function(n){setTimeout(function(){},50)}),this.detailData=JSON.parse(e.data),n.setNavigationBarTitle({title:this.detailData.name}),n.request({url:o.default.baseUrl,data:{ysurl:this.detailData.url},method:"GET",complete:function(n){if(t.loading=!1,200==n.statusCode&&n.data&&0==n.data.code){for(var e=n.data.list,i=0;i<e.length;i++){var o=e[i].download,u=e[i].m3u8url,a=e[i].onlineurl,l={num:e[i].num,download:"",m3u8url:"",onlineurl:""};-1!=o.indexOf(".m3u8")&&(l.m3u8url=o),-1!=o.indexOf(".mp4")&&(l.download=o),-1==o.indexOf(".m3u8")&&-1==o.indexOf(".mp4")&&(l.onlineurl=o),-1!=u.indexOf(".m3u8")&&(l.m3u8url=u),-1!=u.indexOf(".mp4")&&(l.download=u),-1==u.indexOf(".m3u8")&&-1==u.indexOf(".mp4")&&(l.onlineurl=u),-1!=a.indexOf(".m3u8")&&(l.m3u8url=a),-1!=a.indexOf(".mp4")&&(l.download=a),-1==a.indexOf(".m3u8")&&-1==a.indexOf(".mp4")&&(l.onlineurl=a),e[i]=l}t.list=e,t.obj=n.data.data}}})},methods:{fullscreenchange:function(){},playClick:function(){},videoErrorCallback:function(e){n.showModal({content:e.target.errMsg,showCancel:!1})},imgError:function(n){n.cover="/static/404.jpg"},play:function(n,e){this.num=e;var t="";t=n.m3u8url,console.log(i(t," at pages/details/details.vue:252")),this.videoshow?(this.videoshow=!1,this.video_content.hide("auto",0,function(){})):(this.videoshow=!0,this.video_content.show("auto",0,function(){}))},playh5:function(e,t){this.num=t,n.navigateTo({url:"/pages/h5Video/h5Video?src="+encodeURIComponent(e.onlineurl)+"&name="+encodeURIComponent(e.num)})}}};e.default=l}).call(this,t("6e42")["default"],t("0de9")["default"])},aa54:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o})},c02b:function(n,e,t){"use strict";t.r(e);var i=t("a604"),o=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);e["default"]=o.a},d3d9:function(n,e,t){"use strict";(function(n){t("c9d0"),t("921b");i(t("66fd"));var e=i(t("780b"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])}},[["d3d9","common/runtime","common/vendor"]]]);