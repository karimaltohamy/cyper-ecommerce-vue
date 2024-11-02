import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/clinet/Home.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../pages/clinet/Products.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: () => import("../pages/clinet/ProductDetails.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/dashboard/Home.vue"),
    children: [
      {
        path: "/dashboard/home",
        name: "DashboardHome",
        component: () => import("../pages/dashboard/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
