import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { preloadImage } from "../scripts/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter(to, from, next) {
        // preload important images in first page section
        preloadImage(new URL("../assets/images/chart-desktop.jpg", import.meta.url).href);
        preloadImage(new URL("../assets/images/chart-mobile.png", import.meta.url).href);

        next();
      },
    },
  ],
});

export default router;
