import Vue from 'vue'
import VueCompositionApi from "@vue/composition-api";
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueCompositionApi);


new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
