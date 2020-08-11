import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Assets
import Buefy from "buefy"
import 'buefy/dist/buefy.css'
import './assets/css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmileWink } from '@fortawesome/free-regular-svg-icons'

Vue.use(Buefy)

library.add( faSmileWink )

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
