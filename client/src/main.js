import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Assets Imports
import 'bulma/css/bulma.min.css'
import './assets/css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// far
import {
  faSmileWink
} from '@fortawesome/free-regular-svg-icons'
library.add( faSmileWink )

// fas
import {
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
library.add( faSpinner )

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
