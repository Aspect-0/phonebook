import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA2hFj1HgDgjTc4K371BPCSPHdMapwwQw",
  authDomain: "phonebook-project-82d87.firebaseapp.com",
  projectId: "phonebook-project-82d87",
  storageBucket: "phonebook-project-82d87.appspot.com",
  messagingSenderId: "471122324903",
  appId: "1:471122324903:web:2fc80f684d846a30901a82",
  measurementId: "G-RGWE0EZLM1",
};

initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };
