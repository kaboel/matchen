import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Buefy from "buefy"
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

library.add()

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
