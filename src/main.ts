import { createApp } from "vue";
import App from "./App.vue";



import "~/styles/index.scss";
import 'uno.css'
import router from '../src/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);

app.use(router);
app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
