import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/Contacts",
      name: "Contacts",
      component: () => import("../views/Contacts.vue"),
      beforeEnter: (to, from, next) => {
        if (store.state.user == null) {
          next("/login");
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
