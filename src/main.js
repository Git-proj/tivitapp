import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/css/custom.scss'
import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import HighchartsVue from "highcharts-vue";

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(require('vue-moment'))
Vue.use(HighchartsVue);
Stock(Highcharts);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
