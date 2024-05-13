import { createRouter, createWebHistory } from 'vue-router';
import MainFeedPage from '@/pages/MainFeedPage.vue';

const routes = [
    {
        path: '/',
        component: MainFeedPage,
    },
    {
        name: 'recipe',
        path: '/recipe/:id',
        component: () => import('/src/pages/MainFeedDetailPage.vue'),
        props: {
            default: (route) => ({
                id: route.params.id,
            }),
        },
    },
    {
        path: '/my-recipes',
        component: () => import('../pages/MyRecipesPage.vue'),
    },
    {
        name: 'myRecipes',
        path: '/my-recipes/:id',
        component: () => import ('../pages/MyRecipesDetailPage.vue'),
        props: {
            default: (route) => ({
                id: route.params.id,
            })
        },
    },
    {
        path: '/edit',
        component: () => import('/src/pages/EditAddPage.vue'),
    },
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

export default router;
