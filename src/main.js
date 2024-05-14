import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Card from '../components/lib/card/index'

Vue.config.productionTip = false
Vue.use(Card)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
