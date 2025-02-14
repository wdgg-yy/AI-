import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import { createPinia } from "pinia";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import "./access";
import App from "@/App.vue";

const pinia = createPinia();

createApp(App).use(ArcoVue).use(pinia).use(router).mount("#app");
