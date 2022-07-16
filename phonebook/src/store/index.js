import { auth } from "../firebase/config";
import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set,push, onValue, remove } from "firebase/database";
import { stringifyStyle } from "@vue/shared";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    data: null,
    contact:{},
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
     
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    fbUser(state) {
      const db = getDatabase();
      const user = ref(db, "users/" + state.user.uid + '/Contact');
      onValue(user, (stuff) => {
        const data = stuff.val();
      
        const preS = Object.values(data)
        const sort = preS.sort((a,b) => {
          if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
        })
        
        state.data = sort
      });
    },

    createContact2(state, payload){
      const db = getDatabase();
			set(ref(db, 'users/' + state.user.uid +'/Contact' + `/${payload.Number}`), {
        name: payload.name,
        Number: payload.Number,
        email: payload.email,
        
      })
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
