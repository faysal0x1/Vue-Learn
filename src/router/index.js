import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import Service from "@/views/Service.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
