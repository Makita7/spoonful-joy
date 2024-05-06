<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="text-center">
        <h2>404</h2>
        <p>
            Page not found,
            <br />
            click to go
            <RouterLink to="/">Home</RouterLink>
        </p>
    </div>
</template>

<style scoped lang="scss">
a {
    color: var(--black);
    font-weight: bolder;
}

h2 {
    font-weight: bolder;
    font-size: 5rem;
    color: var(--coral);
}
</style>