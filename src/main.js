import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body)
// Vue.use(ElementUI)
Vue.use(animate)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require('common/image/default.png'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
