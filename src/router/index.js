import Vue from "vue";
import VueRouter from "vue-router";
import Quejas from "../view/QuejasView.vue";
import Login from "../view/LoginView.vue";
import Signup from "../view/SignupView.vue";
import Main from "../view/MainView.vue";
import Search from "../view/SeachView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/quejas",
    name: "Quejas",
    component: Quejas,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
