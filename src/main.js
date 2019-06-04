import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vuetify from "vuetify";
import * as firebase from "firebase";

Vue.use(Vuetify);

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCiWq6IQzBOeOpv2kGu9M-7AnZlLEh2Hi0",
      authDomain: "moviefy-a5bc4.firebaseapp.com",
      databaseURL: "https://moviefy-a5bc4.firebaseio.com",
      projectId: "moviefy-a5bc4",
      storageBucket: "moviefy-a5bc4.appspot.com",
      messagingSenderId: "842147822466",
      appId: "1:842147822466:web:73e763df5214c806"
    });
  }
}).$mount("#app");
