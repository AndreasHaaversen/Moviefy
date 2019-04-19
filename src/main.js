import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://www.omdbapi.com/?apikey=b76b385c&Content-Type=application/json"

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
