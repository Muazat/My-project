import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../views/About.vue"),
    // },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: () => import("../views/Contact.vue"),
    // },
  ],
});
export default router;
router.beforeEach(() => {
  console.log("router registered");
});

// createApp(App).use(router).mount("#app");

// router.beforeEach(async (to, from, next) => {
//   let canAccess: boolean = false;
//   try {
//     let session = await getSession();
//     canAccess = true;
//   } catch (error) {
//     canAccess = false;
//   }
//   if (to.name !== "Login" && to.name !== "SetNewPassword" && !canAccess) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

// export default router;
