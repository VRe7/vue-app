import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";

const Login = r => require.ensure([], () => (require("../page/login/login")), "Login");
const Message = r => require.ensure([], () => (require("../page/message/message")), "message");
const Contacts = r => require.ensure([], () => (require("../page/contacts/contacts")), "contacts");
const Dynamics = r => require.ensure([], () => (require("../page/dynamics/dynamics")), "dynamics");
const Search = r => require.ensure([], () => (require("../page/search/search")), "search");
const PageNotFound = r => require.ensure([], () => (require("../page/error/pageNotFound")), "pageNotFound");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/login", name: "Login", component: Login },
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        { path: "", redirect: "login" },
        { path: "/message", name: "Message", component: Message },
        { path: "/contacts", name: "Contacts", component: Contacts },
        { path: "/dynamics", name: "Dynamics", component: Dynamics },
        { path: "/search", name: "Search", component: Search }
      ]
    },
    { path: "*", component: PageNotFound }
  ]
});
