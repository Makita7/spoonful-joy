<script setup>
import { onMounted, ref } from 'vue';
import RecipeCardPreview from '@/components/RecipeCardPreview.vue';
import { useRecipesStore } from '@/stores/recipesStore';
import { useFavoritesStore } from '@/stores/favorites';

const recipeStore = useRecipesStore();
const favStore = useFavoritesStore();
let data = recipeStore.randomRecipes;

onMounted(() => {
    recipeStore.getMainRecipes();
})

</script>

<template>
    <div class="pb-8">
        <h2 class="text-center mb-2">My Recipes</h2>
        <RecipeCardPreview v-for="i in data.recipes" :key="i.id" :title="i.title" :id="i.id" :img="i.image" :data="i" />
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: var(--brown);
}
</style>