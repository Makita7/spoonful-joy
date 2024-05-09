<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="text-center">
        <p class="top font-weight-bold text-uppercase">Page not found</p>
        <h2 class="top">404</h2>
        <img alt="404 not found" src="../assets/empty-plate-404.png" class="mx-auto" />
        <p>
            Go
            <RouterLink to="/">Home</RouterLink>
        </p>
    </div>
</template>

<style scoped lang="scss">
.top {
    color: var(--coral);

}

p {
    font-size: 1.2rem !important;
}

a {
    color: var(--black);
    font-weight: bolder;
}

h2 {
    font-weight: bolder;
    font-size: 5rem;
    margin-top: -1.4rem;
}

img {
    width: 70%;
    margin-top: -0.5rem;
}
</style>