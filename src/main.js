import { createApp } from "vue";
import router from "./router";
import LandingPage from "./components/LandingPage.vue";
import "./assets/main.css";

const app = createApp(LandingPage);

app.use(router);

app.mount("#app");