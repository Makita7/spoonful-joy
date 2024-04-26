<script setup>
import { onMounted, ref } from 'vue';
import RecipeCardPreview from '@/components/RecipeCardPreview.vue';
import { useRecipesStore } from '@/stores/recipesStore';

const recipeStore = useRecipesStore();
let data = recipeStore.randomRecipes;

onMounted(() => {
    recipeStore.getMainRecipes();
})

</script>

<template>
    <div>
        <h2 class="text-center mb-2">My Recipes</h2>
        data:{{ data }}
        <RecipeCardPreview v-for="i in data" :key i.id :title="i.title" :img="i.image" :data="i" />
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: var(--brown);
}
</style>