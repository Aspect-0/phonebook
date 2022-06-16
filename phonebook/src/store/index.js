import { createStore } from "vuex";
const store = createStore({
  state: {
    test: 0,
  },
  mutations: {
    addTest(state) {
      state.test = state.test += 1;
    },
  },
  actions: {},
});

export default store;
