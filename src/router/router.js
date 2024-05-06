import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'

const routes = [
    { path: '/', component: MainPage },
    {
        name: 'recipe',
        path: '/recipe/:id',
        component: () => import('/src/pages/RecipePage.vue'),
        props: {
            default: (route) => ({
                id: route.params.id,
            }),
        },
    },
    { path: '/edit', component: () => import('/src/pages/EditAddPage.vue') },
    {
        path: "/:patchMatch(.*)*",
        name: 'notFound',
        component: () => import('/src/pages/PageNotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
