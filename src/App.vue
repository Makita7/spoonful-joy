<script setup>
import { RouterView } from 'vue-router';
import NavMenu from './components/NavMenu.vue';

</script>

<template>
  <img src="./assets/bg-app.jpg" alt="background image" class="bg" />
  <header class="d-flex" style="align-items: flex-start;">
    <NavMenu />
    <v-spacer />
    <router-link to="/">
      <img src="./assets/logo.png" alt="spoonful of joy logo" class="mr-4">
    </router-link>
  </header>

  <main class=" pb-8">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped lang="scss">
.bg {
  background: url('../assets/bg-app.jpg') no-repeat;
  opacity: 0.2;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep() {
  .v-field--variant-filled .v-field__overlay {
    background-color: white;
  }
}
</style>