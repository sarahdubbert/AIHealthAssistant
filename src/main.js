import Vue from 'nativescript-vue'
import Home from './components/Home'
import VueDevtools from 'nativescript-vue-devtools'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon'


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/fontawesome.min.css',
  'fas': './assets/solid.min.css',
  'fab': './assets/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
  store,
  
  render: h => h('frame', [h(Home)])
}).$start()
