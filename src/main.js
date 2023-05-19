import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
// import {Button, NavBar, Icon, Tabbar, TabbarItem, Search} from "vant";
import * as VueRouter from 'vue-router'
import routes from "./config/route.js";
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App);
//按需引入
// app.use(Tabbar);
// app.use(TabbarItem);
// app.use(Button);
// app.use(NavBar);
// app.use(Icon);
// app.use(Search);
//全部引入
app.use(Vant);

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router);
app.mount('#app');








