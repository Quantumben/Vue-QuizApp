import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";

const routes = [
    { path: "/", name: "Home", component: LandingPage },
    {
        path: "/start",
        name: "Quiz",
        component: () =>
            import ('./App.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;