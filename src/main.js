import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
