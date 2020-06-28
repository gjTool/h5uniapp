import Vue from 'vue'
import App from './App'
App.mpType = 'app'
Vue.config.productionTip = false
const app = new Vue({
    ...App
})
app.$mount()
Vue.prototype.$eventHub = new Vue();
