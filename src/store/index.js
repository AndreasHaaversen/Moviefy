import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            TMDBKey: "" //Add something for generating the key
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          console.log(error);
        });
    },
    logUserIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            TMDBKey: "" // Add something for getting this from the database
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  getters: {
    getCurrentUser() {
      return this.state.user;
    }
  }
});

export default store;
