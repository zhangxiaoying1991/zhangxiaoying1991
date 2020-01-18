import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home'
import User from '@/components/user/User'

Vue.use(VueRouter);

const routes = [
    {
        path: '/user', 
        children: [{
            path: '/login',
            name: 'login',
            components: () => import(/* webpackChunkName: "user" */"./views/About.vue")
        },
        {
            path: '/register',
            name: 'register',
            components: () => import(/* webpackChunkName: "user" */"./views/About.vue")
        }]
    },
    {path: '/home', component: Home},
    {path: '/user', component: User}
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, //域名后面的目录
    routes: routes
});