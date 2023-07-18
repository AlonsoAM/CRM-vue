import { createRouter, createWebHistory } from "vue-router";
import ClientesView from "../views/ClientesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: ClientesView,
      props: { titulo: "Listado de Clientes" },
    },
    {
      path: "/agregar-cliente",
      name: "agregar-cliente",
      component: () => import("../views/NuevoClienteView.vue"),
      props: { titulo: "Agregar Cliente" },
    },
  ],
});

export default router;
