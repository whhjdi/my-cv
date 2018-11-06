/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import plugin from "./components/plugin";
Vue.use(plugin);
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
