let value = uni.getStorageSync('baseUrl');
let baseUrl = value;
baseUrl = "https://www.gjtool.cn/py"
uni.setStorageSync('baseUrl', baseUrl);
uni.request({
	url: 'https://www.gjtool.cn/download/config.json',
	method: 'GET',
	complete: res => {
		if (res.statusCode == 200 && res.data) {
			uni.setStorage({
				key: 'config',
				data: res.data
			});
		}
	}
});
let alert = "";
let option = uni.getStorageSync('config');
if (option && option.alert && option.alertText) {
    alert = option.alertText
}
export default {
    baseUrl,
    alert
}