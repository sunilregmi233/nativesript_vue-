import Vue from 'nativescript-vue';
import store from './store';
import routes from "./routes";
import BackendService from "./services/backend_service";

const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

import VueDevtools from 'nativescript-vue-devtools';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h("frame", [h(backendService.isLoggedIn() ? routes.home : routes.login)])
}).$start();