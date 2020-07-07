import Vue from "vue";
import VueRouter from "vue-router";
import Quejas from "../view/Quejas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Quejas",
    component: Quejas,
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/signup",
    name: "Signup",
  },
  {
    path: "/search",
    name: "Search",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
