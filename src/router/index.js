import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import Front from '../pages/Front.vue'
import Blogs from '../pages/Blogs.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Home'
        }
    },
    {
        path: '/404',
        component: NotFound,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
        children: [
            {
                path: '',
                name: 'Home Page',
                component: Front
            },
            {
                path: 'blog',
                name: 'Blogs',
                component: Blogs
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router