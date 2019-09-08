import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home/Home.vue";
import CompanyData from "./pages/home/company/CompanyData.vue";
import CompanyTable from "./pages/home/company/CompanyTable.vue";
import CompanyPage from "./pages/home/company/CompanyPage.vue";
//import PaginaNaoEncontrada from "./views/PaginaNaoEncontrada.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    /*{
      path: "*",
      component: PaginaNaoEncontrada
    },*/
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "",
          name: "companydata",
          component: CompanyData
        },
        {
          path: "companytable",
          name: "companytable",
          component: CompanyTable
        },
        {
          path: "companypage",
          name: "companypage",
          component: CompanyPage
        }
      ]
    }
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

export default router;
