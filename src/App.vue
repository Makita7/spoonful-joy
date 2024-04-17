<script setup>
import { RouterView, RouterLink } from 'vue-router';
import NavMenu from './components/NavMenu.vue';

</script>

<template>
  <header>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/recipe">Recipe</RouterLink>
    <RouterLink to="/edit">Edit</RouterLink>
    <NavMenu />
    <img src="./assets/logo.png" alt="spoonful of joy logo">
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
