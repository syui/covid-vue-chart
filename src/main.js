import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false
Vue.use(VueAxios, axios, VueApexCharts)

new Vue({
  render: h => h(App)
}).$mount('#app')
