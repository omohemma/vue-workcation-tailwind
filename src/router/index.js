import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Card from "../views/Card.vue";
import Navigation from "../views/Navigation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cards",
    name: "Card",
    component: Card
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: Navigation
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
