let baseUrl = uni.getStorageSync('baseUrl');
if(!baseUrl){
	baseUrl = "https://www.gjtool.cn/py"
	uni.setStorageSync('baseUrl', baseUrl);
}
let alert = "";
let option = uni.getStorageSync('config');
if (option && option.alert && option.alertText) {
	alert = option.alertText
}

//获取影视最近浏览数组
let getYsZJ = () => {
	let openid = uni.getStorageSync("userInfo").openid;
	let arr = uni.getStorageSync(openid + "ysZJ");
	if (!openid) {
		arr = []
	} else {
		if(arr && arr.length){
			arr = unique(arr, "url");
			arr.sort(compare('Time'))
		}else{
			arr = []
		}
	}
	return arr
}
//获取影视最近浏览集数
let getYsZJnum = (url) => {
	let arr = getYsZJ(),
		num = 0,currentTime=0;
	let openid = uni.getStorageSync("userInfo").openid;
	if (openid) {
		if (arr && arr.length) {
			for (let i = 0; i < arr.length; i++) {
				if (url === arr[i].url) {
					num = arr[i].num;
					currentTime = arr[i].currentTime;
					break
				}
			}
		}
	}
	return {
		num:num,
		currentTime:currentTime
	}
}
//设置影视最近浏览
let setYsZJ = (num, detailData) => {
	let arr = getYsZJ();
	let url = detailData.url;
	let openid = uni.getStorageSync("userInfo").openid;
	if (openid) {
		if (arr && arr.length) {
			let flag = false;
			detailData.num = num;
			detailData.url = url;
			for (let i = 0; i < arr.length; i++) {
				if (url === arr[i].url) {
					arr[i] = detailData;
					flag = true;
					break
				}
			}
			if (!flag) {
				arr.push(detailData)
			}
			arr.sort(compare('Time'))
			if (arr.length > 13) {
				arr = arr.splice(0, 13)
			}
			uni.setStorage({
				key: openid + "ysZJ",
				data: arr
			});
		} else {
			uni.setStorage({
				key: openid + "ysZJ",
				data: [detailData]
			});
		}
	}

}
//获取漫画最近浏览数组
let getMhZJ = () => {
	let openid = uni.getStorageSync("userInfo").openid;
	let arr = uni.getStorageSync(openid + "mhZJ");
	if (!openid) {
		arr = []
	} else {
		if(arr && arr.length){
			arr = unique(arr, "url");
			arr.sort(compare('Time'))
		}else{
			arr = []
		}
	}
	return arr
}
//获取漫画最近浏览记录
let getMhZJnum = (url) => {
	let arr = getMhZJ(),
		num = 0;
	let openid = uni.getStorageSync("userInfo").openid;
	if (openid) {
		if (arr && arr.length) {
			for (let i = 0; i < arr.length; i++) {
				if (url === arr[i].url) {
					num = arr[i].num;
					break
				}
			}
		}
	}
	return num
}
//设置漫画最近浏览
let setMhZJ = (num, detailData) => {
	let arr = getMhZJ();
	let url = detailData.url;
	let openid = uni.getStorageSync("userInfo").openid;
	if (openid) {
		if (arr && arr.length) {
			let flag = false;
			detailData.num = num;
			detailData.url = url;
			for (let i = 0; i < arr.length; i++) {
				if (url === arr[i].url) {
					arr[i] = detailData;
					flag = true;
					break
				}
			}
			if (!flag) {
				arr.push(detailData)
			}
			arr.sort(compare('Time'))
			if (arr.length > 13) {
				arr = arr.splice(0, 13)
			}
			uni.setStorage({
				key: openid + "mhZJ",
				data: arr
			});
		} else {
			uni.setStorage({
				key: openid + "mhZJ",
				data: [detailData]
			});
		}
	}

}



//获取小说最近浏览数组
let getXsZJ = () => {
	let openid = uni.getStorageSync("userInfo").openid;
	let arr = uni.getStorageSync(openid + "xsZJ");
	if (!openid) {
		arr = []
	} else {
		if(arr && arr.length){
			arr = unique(arr, "url");
			arr.sort(compare('Time'))
		}else{
			arr = []
		}
	}
	return arr
}
//获取小说最近浏览记录章节索引
let getXsZJnum = (url) => {
	let arr = getXsZJ(),
		index = 0;
	let openid = uni.getStorageSync("userInfo").openid;
	if (openid) {
		if (arr && arr.length) {
			for (let i = 0; i < arr.length; i++) {
				if (url === arr[i].url) {
					index = arr[i].index;
					break
				}
			}
		}
	}
	return index
}
//设置小说最近浏览
let setXsZJ = (num, detailData) => {
	let arr = getXsZJ();
	let url = detailData.url;
	let openid = uni.getStorageSync("userInfo").openid;
	if (openid) {
		if (arr && arr.length) {
			let flag = false;
			detailData.index = num;
			detailData.url = url;
			for (let i = 0; i < arr.length; i++) {
				if (url === arr[i].url) {
					arr[i] = detailData;
					flag = true;
					break
				}
			}
			if (!flag) {
				arr.push(detailData)
			}
			arr.sort(compare('Time'))
			if (arr.length > 13) {
				arr = arr.splice(0, 13)
			}
			uni.setStorage({
				key: openid + "xsZJ",
				data: arr
			});
		} else {
			uni.setStorage({
				key: openid + "xsZJ",
				data: [detailData]
			});
		}
	}

}

function unique(arr, keyName) {
	let obj = {};
	return arr.reduce((cur, next) => {
		obj[next[keyName]] ? "" : obj[next[keyName]] = true && cur.push(next);
		return cur;
	}, [])
}

function compare(prop) {
	return function(a, b) {
		return b[prop] - a[prop]
	}
}
let add0 = function(num) {
	return num = num < 10 ? '0' + num : num
}
let toWeek = function(m) {
	var week = '日一二三四五六';
	return week.substring(m, m + 1)
}
let getTime = function() {
	var date = new Date(),
		obj = {};
	obj.y = date.getFullYear();
	obj.m = add0(date.getMonth() + 1);
	obj.d = add0(date.getDate());
	obj.h = add0(date.getHours());
	obj.mi = add0(date.getMinutes());
	obj.s = add0(date.getSeconds());
	obj.w = toWeek(date.getDay());
	return obj
}
let getDate = function(w) {
	var obj = getTime();
	if (w == '-') {
		return obj.y + '-' + obj.m + '-' + obj.d + ' ' + obj.h + ':' + obj.mi + ':' + obj.s
	} else if (w == '/') {
		return obj.y + '/' + obj.m + '/' + obj.d + ' ' + obj.h + ':' + obj.mi + ':' + obj.s
	} else {
		return obj.y + '年' + obj.m + '月' + obj.d + '日' + '星期' + obj.w + ' ' + obj.h + ':' + obj.mi + ':' + obj.s
	}
}
let configTimer=-1;
export default {
	baseUrl,
	alert,
	getMhZJ,
	getMhZJnum,
	setMhZJ,
	getXsZJ,
	getXsZJnum,
	setXsZJ,
	getYsZJ,
	getYsZJnum,
	setYsZJ,
	getDate,
	configTimer
}
