(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"29b4":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},"385c":function(e,t,n){"use strict";n.r(t);var o=n("67f9"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"3e6f":function(e,t,n){"use strict";(function(e){n("c9d0"),n("921b");o(n("66fd"));var t=o(n("edf4"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4ed2":function(e,t,n){},"67f9":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=s(n("a34a"));s(n("4e99"));function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n,o,a,i,s){try{var r=e[i](s),c=r.value}catch(u){return void n(u)}r.done?t(c):Promise.resolve(c).then(o,a)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function s(e){c(i,o,a,s,r,"next",e)}function r(e){c(i,o,a,s,r,"throw",e)}s(void 0)})}}var l,f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"d1f3"))},d=function(){return n.e("components/mix-loading/mix-loading").then(n.bind(null,"7978"))},g=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"9e2c"))},p=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"b7c2"))},h=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"133f"))},m=0,v=!1,b=(a={components:{mixLoading:d,mixAdvert:f,uniIcons:g,uniNavBar:p,uniPopup:h},data:function(){return{tabBars:[{name:"小说",id:"2",contentList:[]},{name:"影视",id:"3",contentList:[]},{name:"漫画",id:"1",contentList:[]}],tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,contentData:{},loading:!1,keyWord:"",timedown:3,loadListRequest:null,cancelFlag:!1,show:!1,type:"",selectObj:"",selectObjIndex:0}},onShow:function(){e.request({url:"https://www.gjtool.cn/download/config.json",method:"GET",complete:function(t){if(200==t.statusCode&&t.data){var n=t.data;e.setStorage({key:"config",data:n}),n&&n.enable||e.reLaunch({url:"/pages/gonggao/gonggao"})}}})},computed:{advertNavUrl:function(){return"/pages/gonggao/gonggao"},advertImgUrl:function(){return"/static/advert/1.jpg"}},onLoad:function(){var t=u(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:m=e.getSystemInfoSync().windowWidth;case 1:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()},r(a,"onShow",function(){plus.navigator.setFullscreen(!1),this.loadList(),e.request({url:"https://www.gjtool.cn/download/config.json",method:"GET",complete:function(t){if(200==t.statusCode&&t.data){var n=t.data;n&&n.enable||e.reLaunch({url:"/pages/gonggao/gonggao"})}}})}),r(a,"onHide",function(){this.$refs["share"].close(),this.cancelFlag=!1}),r(a,"onReady",function(){var t=e.getStorageSync("config");t&&!t.advert&&(this.timedown=0),(t&&t.advert||!t)&&this.$refs.mixAdvert.initAdvert()}),r(a,"methods",{gotoXsJianjie:function(){var t=this.selectObj;"3"==t._type&&e.navigateTo({url:"/pages/details/details?data=".concat(JSON.stringify(t))}),"1"==t._type&&e.navigateTo({url:"/pages/details/mhdetails?data=".concat(JSON.stringify(t))}),"2"==t._type&&e.navigateTo({url:"/pages/details/xsdetails?data=".concat(JSON.stringify(t))})},gotoXsMulu:function(){var t=this.selectObj;t._type,t._type,"2"==t._type&&e.navigateTo({url:"/pages/xslist/xslist?xsname="+encodeURIComponent(t.name)+"&num="+encodeURIComponent(t.num)+"&from=index&url="+t.url+"&cover="+t.cover})},downloadXs:function(){e.showToast({title:"点击下载"})},deleteXsSc:function(){this.$refs["share"].close(),this.deleteItem(this.selectObj._type,this.selectObj,this.selectObjIndex)},imgError:function(e){e.cover="/static/404.jpg"},bianji:function(){this.cancelFlag=!this.cancelFlag},deleteItem:function(t,n,o){var a=this;e.showModal({title:"提示",content:"确定删除《"+n.name+"》吗？",success:function(e){if(e.confirm){if("2"==t){var o=a.tabBars[0].contentList;a.tabBars[0].contentList=a.deleteSC("xsShouCang",o,n)}if("3"==t){var i=a.tabBars[1].contentList;a.tabBars[1].contentList=a.deleteSC("ysShouCang",i,n)}if("1"==t){var s=a.tabBars[2].contentList;a.tabBars[2].contentList=a.deleteSC("mhShouCang",s,n)}}else e.cancel&&(a.cancelFlag=!1)}})},deleteSC:function(t,n,o){for(var a=this,i=e.getStorageSync("type"),s=0;s<i.length;s++)if(i[s].name==o.name){i.splice(s,1);break}e.removeStorage("xsNum"+o.name),e.setStorage({key:t,data:i,success:function(){e.showToast({title:"删除成功"}),a.cancelFlag=!1}});for(var r=0;r<n.length;r++)n[r].name==o.name&&n.splice(r,1);return n},longpress:function(e,t){this.selectObj=e,this.selectObjIndex=t,this.cancelFlag=!1,"2"==e._type&&this.togglePopup("bottom","share")},togglePopup:function(e,t){switch(e){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=e,"tip"===t?this.show=!0:this.$refs[t].open()},cancel:function(e){"tip"!==e?this.$refs[e].close():this.show=!1},change:function(e){console.log(o(e.show," at pages/index/index.vue:355"))},loadList:function(){var t=this;e.getStorage({key:"xsShouCang",success:function(e){var n=e.data;n.forEach(function(e,t){e._type="2"}),t.tabBars[0].contentList=n}}),e.getStorage({key:"ysShouCang",success:function(e){var n=e.data;n.forEach(function(e,t){e._type="3"}),t.tabBars[1].contentList=n}}),e.getStorage({key:"mhShouCang",success:function(e){var n=e.data;n.forEach(function(e,t){e._type="1"}),t.tabBars[2].contentList=n}})},navToDetails:function(t){if("3"==t._type&&e.navigateTo({url:"/pages/details/details?data=".concat(JSON.stringify(t))}),"1"==t._type){var n=t.list[t.num];e.setStorage({key:"mhlist"+t.name,data:t.list}),e.navigateTo({url:"/pages/mh/mh?src="+encodeURIComponent(n.url)+"&name="+encodeURIComponent(t.list[t.num].num)+"&mhname="+encodeURIComponent(t.name)+"&num="+encodeURIComponent(t.num)+"&url="+t.url+"&cover="+t.cover})}if("2"==t._type){var o=t.list[t.num];e.setStorage({key:"xslist"+t.name,data:t.list}),e.navigateTo({url:"/pages/xs/xs?src="+encodeURIComponent(o.url)+"&name="+encodeURIComponent(t.list[t.num].num)+"&xsname="+encodeURIComponent(t.name)+"&num="+encodeURIComponent(t.num)+"&url="+t.url+"&cover="+t.cover})}},setEnableScroll:function(e){this.enableScroll!==e&&(this.enableScroll=e)},changeTab:function(){var e=u(i.default.mark(function e(t){var n,o,a,s,r,c=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.loading=!1,v&&(clearTimeout(v),v=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof l){e.next=8;break}return e.next=7,this.getElSize("nav-bar");case 7:l=e.sent;case 8:l.scrollLeft,o=0,a=0,s=0;case 12:if(!(s<=n)){e.next=21;break}return e.next=15,this.getElSize("tab"+s);case 15:r=e.sent,o+=r.width,s===n&&(a=r.width);case 18:s++,e.next=12;break;case 21:"number"===typeof t&&(this.tabCurrentIndex=n),v=setTimeout(function(){c.scrollLeft=o-a/2>m/2?o-a/2-m/2:0,"object"===typeof t&&(c.tabCurrentIndex=n),c.tabCurrentIndex=n;c.tabBars[c.tabCurrentIndex]},300);case 23:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,o){var a=e.createSelectorQuery().select("#"+t);a.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}),a);t.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},e403:function(e,t,n){"use strict";var o=n("4ed2"),a=n.n(o);a.a},edf4:function(e,t,n){"use strict";n.r(t);var o=n("29b4"),a=n("385c");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("e403");var s=n("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports}},[["3e6f","common/runtime","common/vendor"]]]);