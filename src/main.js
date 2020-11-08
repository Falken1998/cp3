import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock_data.js'

let data = {
  images: mock,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
