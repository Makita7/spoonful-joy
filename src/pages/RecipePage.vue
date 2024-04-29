<script setup>
import { ref, watch, onMounted } from 'vue';
import LikeComponent from '@/components/LikeComponent.vue';
import PreperationStep from '@/components/PreperationStep.vue';
import { useRecipesStore } from '@/stores/recipesStore';
import { useRoute } from 'vue-router'

const recipeStore = useRecipesStore();
const route = useRoute();
const recipe = ref([]);

// const AsyncLoading = new Promise((resolve, reject) => {
//     if (recipeStore.randomRecipes.recipes !== undefined) {
//         resolve(recipe.value = recipeStore.randomRecipes.recipes.filter(i => i.id === route.params.id)[0])
//     } else {
//         reject(console.log(`${route.params.id} recipe was not found, sorry...`))
//     }
// })

// watch(() => recipeStore.randomRecipes.recipes, async (newData, oldData) => {
//     if (newData !== oldData && newData !== null) {
//         recipe.value = newData.filter(i => i.id === 644800)[0]
//
// })

onMounted(() => {
    recipeStore.getMainRecipes()
        .then(data => {
            recipe.value = data.recipes.filter(i => i.id == route.params.id)[0]
        })

})

</script>

<template>
    <v-card class="recipePage pa-4 pb-8" v-if="recipe">
        <div class="d-flex align-center">
            <h3>{{ recipe.title }}</h3>
            <v-spacer />
            <LikeComponent />
        </div>
        <h4>Ingredients</h4>
        <ul class="px-8">
            <li v-for="i in recipe.extendedIngredients"><span class="text-capitalize">{{ i.name }}</span> {{ i.amount }}
                {{ i.unit
                }}</li>
        </ul>
        <div class="d-flex mt-3 mb-4">
            <div class="d-flex px-2">
                Servings:
                {{ recipe.servings }}
            </div>
            <div class="d-flex px-2">
                readyInMinutes:
                {{ recipe.readyInMinutes }}
            </div>
        </div>
        <div class="">
            diets:
            <p v-for="d in recipe.diets">{{ d }}</p>
        </div>
        <h4 class="pb-2">Preparation</h4>
        <PreperationStep v-if="recipe.analyzedInstructions" v-for="step in recipe.analyzedInstructions[0].steps"
            :key="step.number" :n="step.number" :description='step.step' />
        <img :src="recipe.image" :alt="recipe.title" class="mt-4 mb-4" />
    </v-card>
    <p v-else>loading...</p>
</template>

<style scoped lang="scss">
.recipePage {
    border-radius: 3rem 3rem 0 0;

    h3 {
        font-size: 2.2rem;
        font-weight: 300;
    }

    h4 {
        font-size: 1.5rem;
    }

    li {
        font-size: 1.3rem;
    }

    img {
        background-color: aliceblue;
        border-radius: 4rem;
        padding: 7px;
        width: 100%;
    }
}
</style>