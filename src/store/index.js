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
  },
  actions: {
    updateSesion(context, obj) {
      context.commit("sesion", obj);
    },
  },
  modules: {},
});
