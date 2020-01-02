import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home'
import User from '@/components/user/User'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/user', component: User}
]

export const router = new VueRouter({routes: routes});