import VueRouter from "vue-router";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("../Pages/Home.vue"),
            name: "home"
        },
        {
            path: "/login",
            component: () => import("../Pages/Login.vue"),
            name: "login"
        },
        {
            path: "/user",
            component: () => import("../Pages/User.vue"),
            name: "user"
        }
    ]
});
