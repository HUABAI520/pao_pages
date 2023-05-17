import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button, NavBar, Icon, Tabbar, TabbarItem} from "vant";

const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Button);
app.use(NavBar);
app.use(Icon)
app.mount('#app')






