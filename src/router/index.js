import { createRouter, createWebHashHistory } from "vue-router";

const Router = createRouter({
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/search.vue"),
    },
  ],
});

export default Router;
