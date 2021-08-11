import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalOpen: false,
  },
  mutations: {
    CHANGE_MODAL_STATE(state, isModalOpen) {
      state.isModalOpen = isModalOpen;
    },
  },
  actions: {
    async fakeRequest({ commit }, data) {
      try {
        const response = await fetch("some_url", {
          method: "POST",
          body: JSON.stringify(data),
        });
        if (response.status === 200) {
          commit("CHANGE_MODAL_STATE", false);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
