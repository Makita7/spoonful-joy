<script setup>
import { ref } from 'vue';

let open = ref(false);
const navTitles = ref([
    { title: 'My Recipes', to: '/' },
    { title: 'Breakfasts', to: '/' },
    // { title: 'Appetizers', to: '/' },
    // { title: 'Salads', to: '/' },
    // { title: 'Pastas', to: '/' },
    // { title: 'Lunch / Diner', to: '/' },
    // { title: 'Salads', to: '/' },
    // { title: 'Desserts', to: '/' },
    // { title: 'Cold Beverages', to: '/' },
    // { title: 'Hot Beverages', to: '/' },
]);

</script>

<template>
    <img src="../assets/btn-navbar.svg" alt="navigation menu icon" class="icon mt-4 ml-4" @click="open = !open" />

    <Transition name="fade" mode="out-in">
        <div class="nav-bg" v-if="open">
            <div class="colorfilter d-flex flex-column px-8 pt-2 pb-2">
                <div class="d-flex">
                    <v-spacer />
                    <img src="../assets/white-logo.png" alt="white spoonful of joy logo" class="logo" />
                </div>
                <RouterLink v-for="i in navTitles" :to="i.to" @click="open = false" class="pb-2 link">{{ i.title }}
                </RouterLink>
                <img class="backBtn" src="../assets/btn-back.svg" alt="back button" @click="open = !open" />
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.icon {
    width: 2.5rem;
}

a {
    font-size: 1.75rem;
}

.nav-bg {
    min-width: 100%;
    min-height: 100%;
    background: url(../assets/bg-nav.jpg) no-repeat;
    position: absolute;
    flex-direction: column;
    padding: 1rem;
    top: 0;
    z-index: +5;

    a {
        color: white;
        text-shadow: #212f2a 2px 2px 5px;
    }

    .colorfilter {
        background-color: var(--green-d);
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-blend-mode: multiply;
    }

    .logo {
        width: 11rem;
    }

    .backBtn {
        bottom: 2rem;
        right: 2rem;
        position: absolute;
    }

    .link:hover {
        font-size: 1.9rem;
        transition: ease-in-out 0.5s;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.5s ease all;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>