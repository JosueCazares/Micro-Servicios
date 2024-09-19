import Home from '@/pages/Home.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Home },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})