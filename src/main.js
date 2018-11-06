/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import plugin from "./components/plugin";
var AV = require("leancloud-storage");
Vue.use(plugin);
Vue.config.productionTip = false;


var APP_ID = "V1VjmlxM0uyz6tDOAytCPSaR-gzGzoHsz";
var APP_KEY = "h92PRHHvdwsIcW9dSR4PjP0z";
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");