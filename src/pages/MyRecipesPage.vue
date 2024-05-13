<script setup>
import { useRecipesStore } from '@/stores/recipesStore';
import RecipeCardPreview from '@/components/RecipeCardPreview.vue';

const recipeStore = useRecipesStore();

</script>

<template>
    <h2 class="text-center mb-2">My Recipes</h2>
    <RecipeCardPreview v-for="i in recipeStore.myRecipes" :key="i.id" :title="i.title" :id="i.id" :img="i.image"
        :data="i" />
    <div v-if="!recipeStore.myRecipes">
        <p>No Recipes yet</p>
        <v-btn>add recipe</v-btn>
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: var(--brown);
}
</style>