<script setup>
import { useRecipesStore } from '@/stores/recipesStore';
import { RouterLink } from 'vue-router';
import RecipeCardPreview from '@/components/RecipeCardPreview.vue';

const recipeStore = useRecipesStore();

</script>

<template>
    <div class="pb-8">
        <h2 class="text-center mb-2">My Recipes</h2>
        <RecipeCardPreview v-if="recipeStore.myRecipes.length > 0" v-for="i in recipeStore.myRecipes" :key="i.id"
            :title="i.title" :id="i.id" :img="i.image" :data="i" :myRecipe="true" />
        <div v-else class="text-center">
            <p>No Recipes Yet...</p>
        </div>
        <div class="text-center">
            <RouterLink to="edit">
                <v-btn class="mt-4" elevation="0" color="var(--beige-m)" prepend-icon="mdi-plus">add recipe</v-btn>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2,
p {
    color: var(--brown);
}
</style>