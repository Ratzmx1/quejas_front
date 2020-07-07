import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Quejas",
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
