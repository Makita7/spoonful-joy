<script setup>
import RecipeCardPreview from '@/components/RecipeCardPreview.vue';
</script>

<template>
    <div>
        <h2 class="text-center mb-2">My Recipes</h2>
        <RecipeCardPreview />
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: var(--brown);
}
</style>