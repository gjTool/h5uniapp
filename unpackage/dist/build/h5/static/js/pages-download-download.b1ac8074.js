(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-download-download"],{"3fa5":function(t,e,n){"use strict";var a={uniPopup:n("9463").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-scroll-view",{staticClass:"nav-bar",attrs:{id:"nav-bar","scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.tabBars,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"nav-item",class:{current:n===t.tabCurrentIndex},attrs:{id:"tab"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(n)}}},[t._v(t._s(e.name))])})),1),a("v-uni-view",{staticClass:"panel-content"},[a("v-uni-swiper",{staticClass:"swiper-box",attrs:{id:"swiper",duration:300,current:t.tabCurrentIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}}},t._l(t.tabBars,(function(e){return a("v-uni-swiper-item",{key:e.id},[a("v-uni-view",{staticClass:"panel-scroll-box",attrs:{"scroll-y":!0}},t._l(e.contentList,(function(n,i){return 2==e.id&&n.cache?a("v-uni-view",{key:i,staticClass:"news-item",on:{longpress:function(a){arguments[0]=a=t.$handleEvent(a),t.longpress(n,i,e.id)}}},[a("v-uni-view",{staticClass:"news-item-text"},[a("v-uni-text",[t._v("小说名称："+t._s(n.name))])],1),a("v-uni-view",{staticClass:"news-item-text"},[a("v-uni-text",[t._v("下载进度："+t._s(n.data.length+"/"+n.xslist.length))])],1),a("v-uni-view",{staticClass:"news-item-text"},[a("v-uni-text",[t._v("下载状态："+t._s(t.getDownloadState(n.download)))])],1),a("v-uni-progress",{attrs:{percent:t.getPercent(n),"show-info":!0,"stroke-width":"3",backgroundColor:"#999"}})],1):t._e()})),1)],1)})),1)],1),a("uni-popup",{ref:"share",attrs:{type:t.type,custom:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-share"},[a("v-uni-view",{staticClass:"uni-share-title"},[t._v(t._s(t.selectObj.name))]),a("v-uni-view",{staticClass:"uni-share-content"},[a("v-uni-view",{staticClass:"uni-share-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoXsJianjie.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-share-content-image"},[a("v-uni-image",{staticClass:"image",attrs:{src:n("b190")}})],1),a("v-uni-view",{staticClass:"uni-share-content-text"},[t._v("简介")])],1),a("v-uni-view",{staticClass:"uni-share-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoXsMulu.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-share-content-image"},[a("v-uni-image",{staticClass:"image",attrs:{src:n("760a")}})],1),a("v-uni-view",{staticClass:"uni-share-content-text"},[t._v("目录")])],1),a("v-uni-view",{staticClass:"uni-share-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downloadXs.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-share-content-image"},[a("v-uni-image",{staticClass:"image",attrs:{src:n("eb30")}})],1),a("v-uni-view",{staticClass:"uni-share-content-text"},[t._v(t._s(t.selectObj.downloadText))])],1),a("v-uni-view",{staticClass:"uni-share-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteXsSc.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-share-content-image"},[a("v-uni-image",{staticClass:"image",attrs:{src:n("dde4")}})],1),a("v-uni-view",{staticClass:"uni-share-content-text"},[t._v("删除")])],1)],1),a("v-uni-view",{staticClass:"uni-share-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel("share")}}},[t._v("取消")])],1)],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"6a16":function(t,e,n){var a=n("f0ed");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4c26f16d",a,!0,{sourceMap:!1,shadowMode:!1})},"760a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABj0lEQVR4Xu1aQU4CQRDsxotHn8AT+AHwEn2CXJA9gadNvOAT9CX6BJ7gEzxykWHHA2IWk4qZnk3P1CSbEFKp7q6uGZjOqlS+tPL6hQLQAZUrwC1QuQF4CHILcAtUrgC3AGyANoxlJLc9/IM+nr5rw6zDTGFOK+BBXqXRD4Qed0AsTuWtR7rSH442bDrMGglsigky7wR4R2JQAESlbwwdUPsWeAoT+ZLnnmManZ0dgnfd5/gMu67kXpa6Q5LAzwCEzSGGAjhsWtKU6YCkcjokowMcNi1pynRAUjkdktEBDpuWNGU6AJYzXoYOsu3hVzr/dRnSC1MjOEgi4EgW6S9DnAfUPg+gA+iA8cVpT6Obs0MwTofiM/R6ST8WH7oko/j8H2AkrBtaOsBNq4wSpQOMhHVDSwe4aZVRonSAkbBuaOkAuFV/XYdhgozArK/IZKwLDkUBcr4kBbclI5AOsHDANtzIXiYZ+/j/UNeyk4V+IgT8GURUKhlDB5TcXaQ2OgBRqWQMHVByd5Ha6ABEpZIxR97efUH10NLXAAAAAElFTkSuQmCC"},"7c86":function(t,e,n){"use strict";var a=n("ee27");n("a434"),n("b680"),n("d3b7"),n("e25e"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i,o=a(n("c964")),s=a(n("c644")),r=a(n("3075")),c=a(n("72fa")),l=a(n("4e45")),u=a(n("9463")),d=0,p=!1,f={components:{mixLoading:r.default,uniIcons:c.default,uniNavBar:l.default,uniPopup:u.default},data:function(){return{tabBars:[{name:"影视",id:"3",contentList:[]},{name:"漫画",id:"1",contentList:[]}],tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,contentData:{},loading:!1,keyWord:"",timedown:3,loadListRequest:null,cancelFlag:!1,show:!1,type:"",selectObj:"",selectObjIndex:0}},onHide:function(){this.$refs["share"].close(),this.cancelFlag=!1},computed:{},onNavigationBarButtonTap:function(t){t.index,1==t.index&&this.clearCache()},onShow:function(){this.loadList(),uni.request({url:"https://www.gjtool.cn/download/config.json",method:"GET",complete:function(t){if(200==t.statusCode&&t.data){var e=t.data;uni.setStorage({key:"config",data:e}),e&&e.enable||uni.reLaunch({url:"/pages/gonggao/gonggao"})}}})},onLoad:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,d=uni.getSystemInfoSync().windowWidth,t.$eventHub.$on("xsDownload",(function(t){var e=uni.getStorageSync("xsDownload");if(e){for(var a=0;a<e.length;a++)if(e[a].name==t.name){e[a].cache=!0,e[a].download="2",n.downloadxsAll(e[a]);break}n.tabBars[1].contentList=e,uni.setStorageSync("xsDownload",e)}})),t.$eventHub.$on("ysDownload",(function(t){})),t.$eventHub.$on("mhDownload",(function(t){})),setTimeout((function(){for(var t=n.tabBars[1].contentList,e=0;e<t.length;e++)"1"!=t[e].download&&(t[e].download="3");n.tabBars[1].contentList=t,uni.setStorageSync("xsDownload",t)}),300);case 6:case"end":return e.stop()}}),e)})))()},onUnload:function(){for(var t=_this.tabBars[1].contentList,e=0;e<t.length;e++)t[e].download="3";_this.tabBars[1].contentList=t,uni.setStorageSync("xsDownload",t)},onReady:function(){},methods:{clearCache:function(){uni.showModal({title:"提示",content:"确定清除所有缓存吗？",success:function(t){if(t.confirm)try{uni.clearStorage(),uni.showToast({title:"清除成功",icon:"none"})}catch(e){}}})},downloadxsAll:function(t){if(t.cache){t.xslist,t.data;this.getData(0,t)}},isDownload:function(t,e){for(var n=!1,a=0;a<e.length;a++)if(e[a].num==t&&(e[a].list.length||"done"==e[a].state)){n=!0;break}return n},getNoDownload:function(t,e){return this.isDownload(t,e)?(t++,this.getNoDownload(t,e)):t},getData:function(t,e){var n=this,a=uni.getStorageSync("xsDownload");if(a)for(var i=0;i<a.length;i++)if(a[i].name==e.name){e=a[i];break}var o=this.getNoDownload(t,e.data);if(t=o,t>=e.xslist.length){for(var r=n.tabBars[1].contentList,c=0;c<r.length;c++)r[c].name==e.name&&(r[c].download="1");return n.tabBars[1].contentList=r,uni.setStorageSync("xsDownload",r),void(n.selectObj.downloadText="继续")}"3"!=e.download&&uni.request({url:s.default.baseUrl,data:{xsurl2:e.xslist[t].url},method:"GET",complete:function(a){if(200==a.statusCode&&a.data&&0==a.data.code){var i=a.data.content;n.setCacheValue(t,i,"done",e,(function(){t++,n.getData(t,e)}))}else n.setCacheValue(t,[],"fail",e,(function(){n.getData(t,e)}))}})},setCacheValue:function(t,e,n,a,i){var o=this,s=a.xslist;t=parseInt(t);var r={name:a.name,cover:a.cover,url:a.url,num:a.num,cache:!1,download:"0",xslist:s,data:[]};t>=s.length-1?r.download="1":r.download="2";var c={numName:s[t].num,numUrl:s[t].url,num:t,list:e,state:n};r.data.push(c);var l=uni.getStorageSync("xsDownload"),u=!1;if(l){for(var d=0;d<l.length;d++)if(l[d].name==a.name){var p=l[d].data;l[d].cover=a.cover,l[d].url=a.url,l[d].num=a.num;for(var f=!1,g=0;g<p.length;g++)p[g].numName==s[t].num&&p[g].num==t&&(p[g].list=e,p[g].numUrl=s[t].url,p[g].state="done",f=!0);f||(l[d].xslist=s,l[d].data.push(c)),u=!0;break}u||l.push(r)}else l=[],l.push(r);o.tabBars[1].contentList=l,uni.setStorageSync("xsDownload",l),i&&i()},gotoXsJianjie:function(){var t=this.selectObj;if("3"==this.selectType&&uni.navigateTo({url:"/pages/details/details?data=".concat(JSON.stringify(t))}),"1"==this.selectType&&uni.navigateTo({url:"/pages/details/mhdetails?data=".concat(JSON.stringify(t))}),"2"==this.selectType){var e={cover:t.cover,name:t.name,num:t.num,url:t.url};uni.navigateTo({url:"/pages/details/xsdetails?data=".concat(JSON.stringify(e))})}},gotoXsMulu:function(){var t=this.selectObj;this.selectType,this.selectType,"2"==this.selectType&&uni.navigateTo({url:"/pages/xslist/xslist?xsname="+encodeURIComponent(t.name)+"&num="+encodeURIComponent(t.num)+"&from=download&url="+t.url+"&cover="+t.cover})},downloadXs:function(){var t=this,e=this.selectObj;if(this.$refs["share"].close(),this.selectType,this.selectType,"2"==this.selectType){var n=uni.getStorageSync("xsDownload"),a={};if(n){for(var i=0;i<n.length;i++)if(n[i].name==e.name){n[i].cache=!0,"2"!=n[i].download?(n[i].download="2",a=n[i],t.selectObj.downloadText="暂停"):(n[i].download="3",t.selectObj.downloadText="继续");break}t.tabBars[1].contentList=n,uni.setStorageSync("xsDownload",n),a&&a.download&&"2"==a.download&&t.downloadxsAll(a)}}},deleteXsSc:function(){var t=this,e=this;this.$refs["share"].close();var n=this.selectObj;uni.showModal({title:"提示",content:"确定删除《"+n.name+"》吗？",success:function(a){if(a.confirm){if(t.selectType,t.selectType,"2"==t.selectType){var i=uni.getStorageSync("xsDownload"),o=!1;if(i&&i.length){for(var s=0;s<i.length;s++)if(i[s].name==n.name){o=!0,i[s].cache=!1,i.splice(s,1);break}e.tabBars[1].contentList=i,uni.setStorageSync("xsDownload",i)}setTimeout((function(){o?uni.showToast({title:"删除成功"}):uni.showToast({title:"删除失败",icon:"none"})}),100)}}else a.cancel}})},longpress:function(t,e,n){this.selectObj=t,this.selectObjIndex=e,"3"==t.download||"1"==t.download?this.selectObj.downloadText="继续":this.selectObj.downloadText="暂停",this.cancelFlag=!1,this.selectType=n,"2"==this.selectType&&this.togglePopup("bottom","share")},togglePopup:function(t,e){switch(t){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=t,"tip"===e?this.show=!0:this.$refs[e].open()},cancel:function(t){"tip"!==t?this.$refs[t].close():this.show=!1},change:function(t){},loadList:function(){var t=this;uni.getStorage({key:"xsDownload",success:function(e){t.tabBars[1].contentList=e.data}}),uni.getStorage({key:"ysDownload",success:function(e){t.tabBars[0].contentList=e.data}}),uni.getStorage({key:"mhDownload",success:function(e){t.tabBars[2].contentList=e.data}})},getPercent:function(t){var e=t.data.length,n=t.xslist.length;return(e/n*100).toFixed(2)},getDownloadState:function(t){var e="";switch(t){case"1":e="下载完毕";break;case"2":e="正在下载";break;case"3":default:e="下载暂停";break}return e},imgError:function(t){t.cover="/static/movie.png"},setEnableScroll:function(t){this.enableScroll!==t&&(this.enableScroll=t)},changeTab:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var a,o,s,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.loading=!1,p&&(clearTimeout(p),p=!1),a=t,"object"===typeof t&&(a=t.detail.current),"object"===typeof i){n.next=8;break}return n.next=7,e.getElSize("nav-bar");case 7:i=n.sent;case 8:i.scrollLeft,o=0,s=0,r=0;case 12:if(!(r<=a)){n.next=21;break}return n.next=15,e.getElSize("tab"+r);case 15:c=n.sent,o+=c.width,r===a&&(s=c.width);case 18:r++,n.next=12;break;case 21:"number"===typeof t&&(e.tabCurrentIndex=a),p=setTimeout((function(){e.scrollLeft=o-s/2>d/2?o-s/2-d/2:0,"object"===typeof t&&(e.tabCurrentIndex=a),e.tabCurrentIndex=a;e.tabBars[e.tabCurrentIndex]}),300);case 23:case"end":return n.stop()}}),n)})))()},getElSize:function(t){return new Promise((function(e,n){var a=uni.createSelectorQuery().select("#"+t);a.fields({size:!0,scrollOffset:!0,rect:!0},(function(t){e(t)})).exec()}))}}};e.default=f},9150:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-popup[data-v-2c090558]{position:fixed;top:0;top:0;bottom:0;left:0;right:0;z-index:1000;overflow:hidden}.uni-popup__mask[data-v-2c090558]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-2c090558]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-2c090558],\n.uni-popup__mask.uni-center[data-v-2c090558],\n.uni-popup__mask.uni-top[data-v-2c090558]{opacity:1}.uni-popup__wrapper[data-v-2c090558]{position:absolute;z-index:999;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-2c090558]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-2c090558]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-2c090558]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-2c090558]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-2c090558]{position:relative;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-2c090558]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-2c090558]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-2c090558],\n.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-2c090558]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-2c090558],\n.uni-popup__wrapper.uni-top[data-v-2c090558]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-2c090558]{-webkit-transform:scale(1);transform:scale(1);opacity:1}",""]),t.exports=e},9463:function(t,e,n){"use strict";n.r(e);var a=n("d2df"),i=n("9527");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a22c");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2c090558",null,!1,a["a"],s);e["default"]=c.exports},9527:function(t,e,n){"use strict";n.r(e);var a=n("d897"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a22c:function(t,e,n){"use strict";var a=n("c2c9"),i=n.n(a);i.a},a90d:function(t,e,n){"use strict";n.r(e);var a=n("3fa5"),i=n("ce6b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d7f8");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5fd104be",null,!1,a["a"],s);e["default"]=c.exports},b190:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEFklEQVR4Xu1bzW7aQBDetaMKTgWFByBSf8ip5NZb3ENVOCU59lQi9R7yBGmfIOm5h5A3IFKlUPUQ+gQlp9BWVcidCEeqBAfs7bfUzo9jY8PaLFHWEorEZmZnvp1vZzy7UPLAH/rA/ScKABUBDxwBRYFZBUDPyGesVGoNiBuMkDyltIi5M1fzM9bB9x1839Jsu5n9+vNwFrYlHgG9UiFvE7JDKK34OHTOCOtQRooYf+wZNwlje9pg8Cnb7JhJgZEoABdvnm8RTdtzjD/H37rGWD3baDf9HBpFSfqRQYluwPmKA4oJmY0gGVFgEgPgolTYH606Y5cI7Wqu0a5NYiwHw06lqtCxw+UYY5uT6ogyXyIAXJSX+apvweoTzbIq2W+/W1GM8Y2KUsEAheo8GhixNnJHv+rT6vKTix0AcN6wKT3mKw/+5uPgb+/106K9sPADDphav78Uh04XjIkB6JULqzYjRuAqUFrluzt4W8PKdWJcrZeIghK17Raj1DcKeBbRCfmO/SLyvJEBGHEynT6GQzx9jX8YTKGRVYdpm2Z8e/Ho1N18x8pHthK85iu7O04b3B69XFAAgFWaxvDYZECVbBSqRLayW1quw6c1x8JthPitjY0y+4ml6Z/h+x+dsPexeeJRZBP6hScFag/fUk3/e3MYlNtD5L3g38G+V1FSZ3QAyoUmJXTVT/mo2KGUb1IZbH4Hi412JSkAkF7P4GQe+lsI85Wb83TH2BhkTywAdEuFCkrYfT4Jgv977qhtJAGAA/SZqxsA3LJfGgD/6/x0DeTP6EOrKpL3w4DjNQZALgLpmrcwkgZAmNGzGlcAyNoDZrXCYfOoCFAREJyqE02DYaE5q3FFAUUByRTolp+tE6Zt+YT8AS9aUMTsorMT/jYZxhlKTb3f3/S+7EinAOp0VIP03R37nfcDjJs+zc8wd33H8bKz5H3vlw4At5R3hLwWu29lvGQmqZR4BKDx4df0mAsAplrOmIQUACoLSM4CMUXy1GoUBRQF5oAC/BCDLOjXB51D6/Jmh4ifK0wd465gf3Di1/GVToGrIzGvh9eFkNvQFMZgLguhUSlMNH5+cPtx+ndX/TxR9xlK4UG/MnelsKhfovLSKSDqgKi8AkClwTlIg6JhLCKvKKAoIJkCvBli8Stxnge3Nj7ypgg6Qju4Q3CnYTJp2ONEtIMT6E2vnHQKBLXEcGfgMNc4XY+1JTYcrngPYaUDENjyGgxavGrjx9tYNf4ReyzL9DuBlg6AmFfi0goAlQUkZwHxIBbToCigKKAoEHiVL4hcka/JoYj54F5dF2PqbKT9WmZ+M0cGwPnlRyuuw80kYXArzyhzRAaAK3NAqERRLOt/+I3xSX5YMREAspxKcl4FQJLo3gfdKgLuwyolaeM/2SeZbrZ7PDAAAAAASUVORK5CYII="},c2c9:function(t,e,n){var a=n("9150");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("13475c8e",a,!0,{sourceMap:!1,shadowMode:!1})},ce6b:function(t,e,n){"use strict";n.r(e);var a=n("7c86"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},d2df:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup"},[n("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}}),n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},d7f8:function(t,e,n){"use strict";var a=n("6a16"),i=n.n(a);i.a},d897:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1}},watch:{show:function(t){t?this.open():this.close()}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick((function(){setTimeout((function(){t.ani="uni-"+t.type}),30)}))},close:function(t){var e=this;!this.maskClick&&t||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick((function(){setTimeout((function(){e.showPopup=!1}),300)})))}}};e.default=a},dde4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEfUlEQVR4Xu1bTVYTQRCunjATF4C48z1JDAslWQEnMJzAcALgBOYGxhMIJzCcgHgC4QRmR3BDDPieOyO40AmZsmZCks789kxmJvO0+70sYKq7qr+urqqurmaQcusUcq8BlCqx3QZGP2BrANgHhDYD6CIYrfL18GNaYhHPdNplUd1HYA3iVhLg2GWAjc3e4ESAdi6SxAG4WoO1PyvqKTBmrnq4htDK3+mHG33oh+soTp0oANbkV9VPpOak6lEbtvO3g92kQEgMgHgmPwYN2+XeYCcqhH79EgOgs64egcLeeDFHxHPaFmfWd8QqY+yVn6AI8K7S000bEmtLBICLp1BimnblKqmBx/lfg4ZdpS2NWVYbvqDp+kblO3TjRCAZAApqk1Z03y4orfph5XrQ9JvARUE9oL4f3Gio/wn1P8g8AJ2i+mPk37lGK1++GdRFhPfZPt1yT98QGUOUJnYNuFhfqjJFIcs/2zCE+vptIWWIOy+/DdqiEwyiix8AFxUmA/aVDFgpSBj++0VRo2AInjuANIzdys39WZix/GhnADAN0f3y0tZQYdvMrsKCHGmfViMFPYLjM8SmQj9BcgfZi5v7c/6fEwAe1M5U3VArFVWQBfbr5m/1nbEXmgAQ5LcXKHDsrPmYYqoBBfUsKBiJXZIFDWgGYeROqyZ7HgBX370gGRNly8cTUwA83FeikixocOQ8yYwXsHw4sBpaiYpRI4I1supbC5J1Trb4EynRwg3SpXNHk3ejgXGAZ2DD7aM5pYylu5uc/F73YiIBCIJfaoBXbC+3wNSXBmlRGt+lDXDRVGkEBbap9AJB+zOKF/jyTN1GBayEKDPg2CuBcVnI1RBy+4xBW7vVj+15QtFxTD6ZsQGm0EaOfeaBdcviUMKjQer3dko3m/p2G8cvq5QZACip6ThUuSUzKW9Itz3sMQ8UH6OLjjPunyUAHMdqN2vcKWp0LJ9t/DmdABAaRwLwgIDUgKzEAaKqK7eAtAHSCEovIN2gjANkIDSDgIwEuTIY0XhChsIyFB4hIM8C8izgLM1ZSFJU1HjJw9A/fBgSTIk5D0MMh3ub18OWadQ6Ba1FV9NUWs9lDX3qBLNjBN2MkUtllz0paq8kc5uQX4lcZgCYuCSmWEWRiMaRV1kbJUbrdH9fI7Luo7tB3Z4WtyYlME6m3KD9hJfW35nSgLQmzfP57wGwbplY7nTGaAqU2Ee+G6Tdndgjhiga5LxpIgnjAGD08kOj6m9no4rLJ0k9ZQkLgofbDCzPD9SAkU9W226VYiIIh51IFHqv6nKRCnUxADyfv2BfGcJunOXrUQCg1adXaZY7nTTRCnUhAHyfwNCjRzRwL84SdlEQLLlU7b198qP4I/h1ikknBIAVaHg8gxEVNk060dUPBYBpDH+vaubzVscjhjQnJ8KLv2YPohfWAHOgUdECnNnv9YOYpPldVPXHMoUCIOsghJ18qC3Ar6K1HVbUI7encWmu9piXmfnJGVCP4o1Ca4ALEDWKEUoMYRsBZ5/KJYnG+NWprjfneUz5F3s3iIzjxSSCAAAAAElFTkSuQmCC"},eb30:function(t,e){t.exports="data:image/png;base64,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"},f0ed:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */uni-page-body[data-v-5fd104be],\n.content[data-v-5fd104be]{background-color:#f8f8f8;height:100%;overflow:hidden}\n/* 顶部tabbar */.nav-bar[data-v-5fd104be]{position:fixed;top:44px;z-index:10;height:45px;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,.06);background-color:#fff;text-align:center}.nav-bar .nav-item[data-v-5fd104be]{display:inline-block;width:75px;height:45px;text-align:center;line-height:45px;font-size:15px;color:#303133;position:relative}.nav-bar .nav-item[data-v-5fd104be]:after{content:"";width:0;height:0;border-bottom:2px solid #007aff;position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:.3s;transition:.3s}.nav-bar .current[data-v-5fd104be]{color:#007aff}.nav-bar .current[data-v-5fd104be]:after{width:50%}.panel-content[data-v-5fd104be]{height:100%;position:relative;margin-top:45px}.swiper-box[data-v-5fd104be]{height:100%;position:relative;position:relative}.panel-scroll-box[data-v-5fd104be]{padding:10px;height:100%;position:relative;overflow-y:auto}.panel-scroll-box .panel-item[data-v-5fd104be]{background:#fff;padding:30px 0;border-bottom:2px solid #000}uni-view[data-v-5fd104be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.news-item[data-v-5fd104be]{position:relative;width:100%;padding:10px;box-sizing:border-box;display:block;font-size:14px;margin-bottom:10px;border-color:#e5e5e5;border-style:solid;border-width:1px;box-shadow:0 1px 2px rgba(0,0,0,.2)}.news-item .news-item-text[data-v-5fd104be]{margin-bottom:4px}.text-list[data-v-5fd104be]{width:125px;height:42px;padding:4px}.title[data-v-5fd104be]{font-size:12px;color:#303133;line-height:18px;overflow:hidden;text-overflow:ellipsis}.img-list[data-v-5fd104be]{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background-color:#fff;width:115px;height:153px}.img[data-v-5fd104be]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:45%;height:100%}.cancel[data-v-5fd104be]{position:absolute;right:0;top:0;background:#fff;z-index:2;border-radius:50%}\n/* 底部分享 */.uni-share[data-v-5fd104be]{background:#fff}.uni-share-title[data-v-5fd104be]{line-height:30px;font-size:16px;padding:7px 0;text-align:center}.uni-share-content[data-v-5fd104be]{display:block}.uni-share-content .uni-share-item[data-v-5fd104be]{display:block;width:25%;float:left;text-align:center}.uni-share-content-box[data-v-5fd104be]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:25%;box-sizing:border-box}.uni-share-content-image[data-v-5fd104be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:30px;height:30px;overflow:hidden;border-radius:5px;margin:0 auto}.uni-share-content-image .image[data-v-5fd104be]{width:100%;height:100%}.uni-share-content-text[data-v-5fd104be]{font-size:13px;color:#333;padding-top:5px;padding-bottom:10px}.uni-share-btn[data-v-5fd104be]{height:45px;line-height:45px;border-top:1px #f5f5f5 solid;text-align:center;color:#666}uni-progress.uni-progress .uni-progress-info[data-v-5fd104be]{font-size:10px!important}body.?%PAGE?%[data-v-5fd104be]{background-color:#f8f8f8}',""]),t.exports=e}}]);