import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loged: false,
    token: "",
  },
  mutations: {
    sesion(state, obj) {
      state.loged = obj.bol;
      state.token = obj.tok;
    },
    logout(state) {
      state.loged = false;
      state.token = "";
    },
  },
  actions: {
    updateSesion(context, obj) {
      context.commit("sesion", obj);
    },
    closeSesion(context) {
      context.commit("logout");
    },
  },
  getters: {
    isLoged: (state) => {
      return state.loged;
    },
  },
});
