import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home'
import About from './views/About'

Vue.use(VueRouter);

const routes = [
    {
        path: '/home', 
        name: 'home',
        component: Home
    },
    {
        path: '/about', 
        name: 'about',
        component: About
    }
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, //域名后面的目录
    routes: routes
});