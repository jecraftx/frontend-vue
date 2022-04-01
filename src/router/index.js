import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'
import Posts from '../views/Posts.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router