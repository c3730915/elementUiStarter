import { createApp } from "vue";
import App from "./App.vue";



import "~/styles/index.scss";
import 'uno.css'
import router from '../src/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);

app.use(router);
// @ts-ignore
app.use(Viewer, {
    Options: {

        'inline': true,
        'button': true, //右上角按钮
        "navbar": true, //底部缩略图
        "title": true, //当前图片标题
        "toolbar": true, //底部工具栏
        "tooltip": true, //显示缩放百分比
        "movable": true, //是否可以移动
        "zoomable": true, //是否可以缩放
        "rotatable": true, //是否可旋转
        "scalable": true, //是否可翻转
        "transition": true, //使用 CSS3 过度
        "fullscreen": true, //播放时是否全屏
        "keyboard": true, //是否支持键盘
        "url": "data-source",
    }})
app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
