import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueGtag from "vue-gtag"
import Cloudinary from 'cloudinary-vue'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: 'UA-215816543-1' }
});

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "stm-web"
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
