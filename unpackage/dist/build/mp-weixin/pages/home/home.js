(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"0714":function(t,e,n){"use strict";n.r(e);var a=n("bde9"),i=n("f036");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("648b"),n("3cec");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"92ece2c8",null,!1,a["a"],o);e["default"]=c.exports},"3cec":function(t,e,n){"use strict";var a=n("6492"),i=n.n(a);i.a},"648b":function(t,e,n){"use strict";var a=n("f8a8"),i=n.n(a);i.a},6492:function(t,e,n){},b8cd:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("4795")),i=r(n("2681"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,i,r,o){try{var s=t[r](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(a,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function s(t){o(r,a,i,s,c,"next",t)}function c(t){o(r,a,i,s,c,"throw",t)}s(void 0)}))}}var c=function(){n.e("components/mix-loading/mix-loading").then(function(){return resolve(n("7d04"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("c33c"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("d213"))}.bind(null,n)).catch(n.oe)},l={components:{mixLoading:c,uniIcons:u,uniNavBar:d},data:function(){return{tabBars:[{name:"影视",id:"3",contentList:[]},{name:"漫画",id:"1",contentList:[]},{name:"小说",id:"2",contentList:[]}],tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,contentData:[],loading:!1,first:!1,keyWord:"",loadListRequest:null,timedown:3,ipad:!1,top:"64px",marginTop:"98px",paddingBottom:"0px",index:t.getStorageSync("config").index,weatherBody:{},weatherBodydata:{},forecastList:[],height:"100%",weixinAdvert:!0,ysurlRequest:null,ysurlRequestList:[],mhurlRequest:null,mhurlRequestList:[],searchWord:t.getStorageSync("config").searchWord||"2020",openid:"",configTimer:null}},computed:{advertNavUrl:function(){return"/pages/gonggao/gonggao"},advertImgUrl:function(){return"/static/advert/1.jpg"}},onShareAppMessage:function(t){return{title:"[免费vip影视]登陆即可观看",imageUrl:"/static/share.jpg",path:"/pages/home/home"}},onShareTimeline:function(){return{title:"[免费vip影视]登陆即可观看",imageUrl:"/static/share.jpg",query:""}},onLoad:function(){var e=this;return s(a.default.mark((function n(){var i,r,o,s,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=e,r=t.getStorageSync("config"),r&&!r.advert&&(e.timedown=0),e.timedown=0,i.windowWidth=t.getSystemInfoSync().windowWidth,t.getSystemInfoSync().windowHeight,e.statusBarHeight=t.getSystemInfoSync().statusBarHeight,i.index=r.index,e.top=e.statusBarHeight+44+"px",e.marginTop=e.statusBarHeight+78+"px",0==i.index?(i.marginTop=i.statusBarHeight+44+"px",i.forecastList.length||i.getWeather("北京")):(i.marginTop=i.statusBarHeight+88+"px",i.height=t.getSystemInfoSync().windowHeight-88-i.statusBarHeight+"px",i.contentData.length||(i.loading=!0,i.keyWord=i.searchWord,o=i.tabBars[0],i.loadList(o),s=i.tabBars[1],i.loadList(s),c=i.tabBars[2],i.loadList(c))),i.windowWidth>=768&&(e.ipad=!0),e.tabBar=e.getElSize("nav-bar");case 13:case"end":return n.stop()}}),n)})))()},onNavigationBarSearchInputConfirmed:function(t){this.confirm({detail:{value:t.text}})},onShow:function(){var e=this;this.openid=t.getStorageSync("userInfo").openid;t.getStorageSync("config");clearTimeout(i.default.configTimer),i.default.configTimer=setTimeout((function(){t.request({url:"https://www.gjtool.cn/download/config.json?_t="+(new Date).getTime(),method:"GET",complete:function(n){if(200==n.statusCode&&n.data){if(t.setStorage({key:"config",data:n.data}),n.data.baseUrl?t.setStorageSync("baseUrl",n.data.baseUrl):t.setStorageSync("baseUrl","https://www.gjtool.cn/py"),e.index=n.data.index,e.text=n.data.text,0==e.index)e.marginTop=e.statusBarHeight+44+"px",e.forecastList.length||e.getWeather("北京");else if(e.marginTop=e.statusBarHeight+88+"px",e.height=t.getSystemInfoSync().windowHeight-88-e.statusBarHeight+"px",!e.contentData.length){e.loading=!0,e.keyWord=e.searchWord;var a=e.tabBars[0];e.loadList(a);var i=e.tabBars[1];e.loadList(i);var r=e.tabBars[2];e.loadList(r)}t.showModal({title:"提示",showCancel:!1,content:n.data.alertText2,success:function(t){}})}}})}),1e3)},methods:{closeImg:function(t){"weixin-img"!==t.target.id&&(this.weixinAdvert=!1)},imgError:function(t){t.cover="/static/404.jpg"},confirm:function(e){if(this.keyWord=e.detail.value,t.hideKeyboard(),t.pageScrollTo({scrollTop:0,duration:0}),1==this.index){if(0==this.tabCurrentIndex){var n=this.tabBars[0];this.loadList(n)}else if(1==this.tabCurrentIndex){var a=this.tabBars[1];this.loadList(a)}else if(2==this.tabCurrentIndex){var i=this.tabBars[2];this.loadList(i)}}else this.getWeather(this.keyWord)},getWeather:function(e){var n=this;t.request({url:"https://www.tianqiapi.com/api/",method:"GET",data:{version:"v1",city:e,appid:"25698621",appsecret:"6vuISqb3",vue:1},complete:function(t){var e=[];if(200==t.statusCode&&t.data){for(var a=t.data.data,i=0;i<a.length;i++){var r=a[i].day.indexOf("（");a[i].day=a[i].day.substr(r+1,2),e.push(a[i])}n.weatherBody=t.data,n.weatherBodydata=t.data.data[0],n.forecastList=e}}})},back:function(){t.navigateBack({delta:1})},loadList:function(e){var n=this,a=this,i="";e&&("1"==e.id&&(i="mhname"),"2"==e.id&&(i="xsname"),"3"==e.id&&(i="ysname"),""==this.keyWord.trim()&&(this.keyWord=this.searchWord),this.loading=!0,this.loadListRequest,this.ysurlRequestList.length&&this.clearYsurlRequestList(),this.mhurlRequestList.length&&this.clearMhurlRequestList(),0!=this.index&&(this.loadListRequest=t.request({url:t.getStorageSync("baseUrl")+"?"+i+"="+this.keyWord+"&_="+(new Date).getTime(),method:"GET",complete:function(t){if(200==t.statusCode&&t.data&&0==t.data.code){var r=t.data.list,o=[];r.forEach((function(t){t.genre&&t.genre.indexOf("福利")<=-1&&t.genre.indexOf("伦理")<=-1&&t.genre.indexOf("写真")<=-1&&o.push(t)})),a.contentData="ysname"==i?o:t.data.list,a.contentData.length=18,a.getList(e,a.contentData)}else a.getList(e,[]);n.loading=!1,n.loadListRequest=null}})))},getList:function(t,e){var n=this,a=e;if(t.contentList=[],a.forEach((function(e,n){var a=e.genre;t&&"3"==t.id&&!e.cover&&(e.cover="/static/404.jpg"),e._type=t.id,e.imgText="",e.genre=a||"","2"==t.id&&(e.imgText=e.num,e.genre=e.tag?e.tag:"其他"),t.contentList.push(e)})),this.first=!0,"3"==t.id)for(var i=0;i<t.contentList.length;i++)(function(e){n.getCover(t.contentList[e])})(i);else if("1"==t.id)for(var r=0;r<t.contentList.length;r++)(function(e){n.getMhCover(t.contentList[e])})(r)},getCover:function(e){if(0!=this.index){var n=t.request({url:t.getStorageSync("baseUrl"),data:{ysurl:e.url},method:"GET",complete:function(t){if(200==t.statusCode&&t.data&&0==t.data.code){var n=t.data.data,a=e.name;e.cover=n.cover,e.name1=e.name,e.name=n.name;var i=a.replace(e.name,""),r=t.data.list[t.data.list.length-1].num;-1!=i.indexOf("更新")?-1!=e.genre.indexOf("综艺")?-1!=r.indexOf("集")||-1!=r.indexOf("期")?e.imgText="更新至"+r:e.imgText="更新至"+r+"期":e.imgText="更新至"+r:-1!=i.indexOf("完结")?-1==e.genre.indexOf("综艺")?e.imgText=t.data.list.length+"集全":e.imgText="更新至"+r:-1!=i.indexOf("集")?e.imgText="更新至"+r:-1!=i.indexOf("期")?e.imgText="更新至"+r:e.imgText=e.time+"更新"}}});return this.ysurlRequest=n,n}},clearYsurlRequestList:function(){this.ysurlRequestList.length&&(this.ysurlRequestList.forEach((function(t){t.abort()})),this.ysurlRequestList=[])},getMhCover:function(e){if(0!=this.index){var n=t.request({url:t.getStorageSync("baseUrl"),data:{mhurl1:e.url},method:"GET",complete:function(t){if(200==t.statusCode&&t.data&&0==t.data.code){var n=t.data.data;e.name;e.cover=n.cover,e.name=n.name,e.imgText=n.time?n.time+"更新":"",e.genre=n.tag?n.tag:"其他"}}});return this.mhurlRequest=n,n}},clearMhurlRequestList:function(){this.mhurlRequestList.length&&(this.mhurlRequestList.forEach((function(t){t.abort()})),this.mhurlRequestList=[])},navToDetails:function(e){if("3"==e._type){var n="/pages/details/detailsXX?data=".concat(JSON.stringify(e));0==this.index&&(n=""),t.navigateTo({url:n})}if("1"==e._type){var a="/pages/details/mhdetails?data=".concat(JSON.stringify(e));0==this.index&&(a=""),t.navigateTo({url:a})}if("2"==e._type){var i="/pages/details/xsdetails?data=".concat(JSON.stringify(e));0==this.index&&(i=""),t.navigateTo({url:i})}},setEnableScroll:function(t){this.enableScroll!==t&&(this.enableScroll=t)},changeTab:function(t){var e=this;return s(a.default.mark((function n(){var i,r,o,s,c,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e,e.loading=!1,e.scrollTimer&&(clearTimeout(e.scrollTimer),e.scrollTimer=!1),r=t,"object"===typeof t&&(r=t.detail.current),"object"===typeof e.tabBar){n.next=9;break}return n.next=8,e.getElSize("nav-bar");case 8:e.tabBar=n.sent;case 9:e.tabBar.scrollLeft,o=0,s=0,c=0;case 13:if(!(c<=r)){n.next=22;break}return n.next=16,e.getElSize("tab"+c);case 16:u=n.sent,o+=u.width,c===r&&(s=u.width);case 19:c++,n.next=13;break;case 22:"number"===typeof t&&(e.tabCurrentIndex=r),e.scrollTimer=setTimeout((function(){}),0),o-s/2>i.windowWidth/2?e.scrollLeft=o-s/2-i.windowWidth/2:e.scrollLeft=0,"object"===typeof t&&(e.tabCurrentIndex=r),e.tabCurrentIndex=r,e.tabBars[e.tabCurrentIndex];case 28:case"end":return n.stop()}}),n)})))()},getElSize:function(e){return new Promise((function(n,a){var i=t.createSelectorQuery().select("#"+e);i.fields({size:!0,scrollOffset:!0,rect:!0},(function(t){n(t)})).exec()}))}}};e.default=l}).call(this,n("543d")["default"])},baf8:function(t,e,n){"use strict";(function(t){n("3be2");a(n("66fd"));var e=a(n("0714"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},bde9:function(t,e,n){"use strict";var a={uniNavBar:function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"d213"))},uniIcons:function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"c33c"))}},i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},f036:function(t,e,n){"use strict";n.r(e);var a=n("b8cd"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},f8a8:function(t,e,n){}},[["baf8","common/runtime","common/vendor"]]]);