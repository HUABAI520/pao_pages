import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";
import Search from "../pages/Search.vue";
import UserEdit from "../pages/UserEdit.vue";


//  定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {path: '/', component: Index},
    {path: '/team', component: Team},
    {path: '/user', component: User},
    {path: '/search', component: Search},
    {path: '/user/edit', component: UserEdit},
]

export default routes;