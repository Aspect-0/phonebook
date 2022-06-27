import { auth } from "../firebase/config";
import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    data: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("changed state", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    fbUser(state) {
      const db = getDatabase();
      const user = ref(db, "users/" + state.user.uid);
      onValue(user, (stuff) => {
        const data = stuff.val();
        state.data = data;
      });
    },
    createTest(state, payload) {
      const db = getDatabase();
      set(ref(db, "users/" + state.user.uid), {
        name: payload.name,
        numb: payload.numb,
        image: payload.image,
      });
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("unable to sign up");
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("unable to login");
      }
    },
    async logout(context) {
      await signOut(auth);
      context.commit("setUser", null, null);
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});
export default store;
