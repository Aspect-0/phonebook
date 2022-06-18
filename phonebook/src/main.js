import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA2hFj1HgDgjTc4K371BPCSPHdMapwwQw",
  authDomain: "phonebook-project-82d87.firebaseapp.com",
  projectId: "phonebook-project-82d87",
  storageBucket: "phonebook-project-82d87.appspot.com",
  messagingSenderId: "471122324903",
  appId: "1:471122324903:web:2fc80f684d846a30901a82",
  measurementId: "G-RGWE0EZLM1",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

createApp(App).use(store).use(router).mount("#app");

export { auth };
