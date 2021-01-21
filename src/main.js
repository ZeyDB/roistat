import Vue from 'vue'
import App from './App'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

Vue.config.productionTip = false

Vue.use(VueGoodTablePlugin);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
