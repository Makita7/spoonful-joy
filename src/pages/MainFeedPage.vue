<script setup>
import { onMounted } from 'vue';
import RecipeCardPreview from '@/components/RecipeCardPreview.vue';
import { useRecipesStore } from '@/stores/recipesStore';

const recipeStore = useRecipesStore();
let data = recipeStore.randomRecipes;

onMounted(() => {
    recipeStore.getMainRecipes();
})

</script>

<template>
    <div class="pb-8">
        <h2 class="text-center mb-2">My Feed</h2>
        <RecipeCardPreview v-for="i in data.recipes" :key="i.id" :title="i.title" :id="i.id" :img="i.image" :data="i"
            :myRecipe="false" />
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: var(--brown);
}
</style>