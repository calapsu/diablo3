import Vue from 'vue'
// BostrapVue
import './plugins/bootstrapVue'

// vue Font-awesome
import './plugins/fontAwesome'

// custom directives
import './directives'

import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
