<script setup>
import { useRecipesStore } from '@/stores/recipesStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import LikeComponent from '@/components/LikeComponent.vue';
import PreperationStep from '@/components/PreperationStep.vue';

const recipeStore = useRecipesStore();
const recipe = ref([]);
const route = useRoute()

onMounted(() => {
    recipe.value = recipeStore.myRecipes.filter(i => i.id == route.params.id)[0];
});

</script>

<template>
    <div>
        <v-card class="recipePage pa-4 pb-8" v-if="recipe">
            <div class="d-flex align-center">
                <h3>{{ recipe.title }}</h3>
                <v-spacer />
                <LikeComponent :title="recipe.title" :id="recipe.id" />
            </div>
            <h4>Ingredients</h4>
            <ul class="px-8">
                <li v-for="i in recipe.extendedIngredients">
                    <span class="text-capitalize">{{ i.name }}</span>
                    {{ i.amount }}
                    {{ i.unit }}
                </li>
            </ul>
            <div class="d-flex mt-4 mb-4 detail">
                <v-spacer />
                <div class="d-flex px-2 align-center">
                    <img class="icons" src="../assets/icon-people.svg" />
                    <p class="ml-2">{{ recipe.servings }}</p>
                </div>
                <v-spacer />
                <div class="d-flex px-2 align-center">
                    <img class="icons" src="../assets/icon-time.svg" />
                    <p class="ml-2">{{ recipe.readyInMinutes }} min</p>
                </div>
                <v-spacer />
            </div>
            <div class="mb-4">
                <h4>Diets:</h4>
                <ul class="px-8">
                    <li v-for="d in recipe.diets" :key="d" class="text-capitalize">{{ d }}</li>
                </ul>
            </div>
            <h4 class="pb-2">Preparation</h4>
            <PreperationStep v-if="recipe.analyzedInstructions" v-for="step in recipe.analyzedInstructions[0].steps"
                :key="step.number" :n="step.number" :description='step.step' />
            <img :src="recipe.image" :alt="recipe.title" class="mt-4 mb-4" />

            <v-btn to="/edit" class="edit" block outlined elevation="0">Edit</v-btn>
        </v-card>
        <p v-else>loading...</p>
    </div>
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

    .detail {
        p {
            font-size: 1.5rem;
        }

        .icons {
            width: 56px !important;
            height: auto;
        }
    }

    .save {
        color: var(--green-d);
    }
}
</style>