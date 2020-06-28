let value = uni.getStorageSync('baseUrl');
let baseUrl = value;
baseUrl = "https://www.gjtool.cn/py"
uni.setStorageSync('baseUrl', baseUrl);

let alert = "数据均来源于网络，本站并不参与上传、创作，版权争议与本站无关。仅供学习交流使用，请勿用于商业（非法）用途！否则，一切后果请自行承担！";
let option = uni.getStorageSync('config');
if (option && option.alert && option.alertText) {
    alert = option.alertText
}
export default {
    baseUrl,
    alert
}