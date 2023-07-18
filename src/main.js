import "./assets/main.css";

import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue"; // ESto es de FORMKIT
import config from "../formkit.config";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.use(plugin, defaultConfig(config)); // Para usar FORMKIT

app.mount("#app");
