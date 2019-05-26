import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
