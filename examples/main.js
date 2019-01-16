import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import contribution from '../src/index'
Vue.use(contribution)

new Vue({
  render: h => h(App),
}).$mount('#app')
