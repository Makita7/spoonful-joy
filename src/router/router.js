import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/recipe', component: () => import('/src/pages/RecipePage.vue') },
    { path: '/edit', component: () => import('/src/pages/EditAddPage.vue') }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
