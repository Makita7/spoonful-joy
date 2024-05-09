<script setup>
import { ref } from 'vue';
import { useRecipesStore } from '@/stores/recipesStore';
import PreperationStep from '@/components/PreperationStep.vue';

const recipeStore = useRecipesStore();
let recipe = ref({
    title: null,
});
let editTitle = ref(true);
let ingredients = ref([
    {
        id: 1,
        label: null,
        amount: null,
        measurement: null,
    },
]);
const measurements = ref([
    'teaspoon', 'tablespoon', 'gr', 'kg', 'ml', 'l', 'units'
]);

function addIngredient() {
    const newId = ingredients.value.length + 1;
    ingredients.value.push({
        id: newId,
        label: '',
        amount: 0,
        measurement: '',
    })
}

// Rules
const isText = (text) => text ? text.length > 4 : false;

let diets = ref([
    {
        id: 1,
        name: '',
    }
]);

function addDiet() {
    const newId = diets.value.length + 1;
    diets.value.push(
        {
            step: newId,
            name: '',
        }
    )
}


let preperationSteps = ref([
    {
        step: 1,
        description: '',
    }
]);

function addStep() {
    const newStep = preperationSteps.value.length + 1;
    preperationSteps.value.push(
        {
            step: newStep,
            description: '',
        }
    )
}

let servings = ref(null);
let readyInMinutes = ref(null);

</script>

<template>
    <v-card class="editRecipePage pa-4 pb-8">
        <h3 v-if="recipe.title && !editTitle" @click="editTitle = true">{{ recipe.title }}</h3>
        <div class="d-flex align-center" v-if="!recipe.title || editTitle">
            <v-text-field label="Recipe Title" v-model="recipe.title" hide-details />
            <v-btn @click="editTitle = false" :disabled="!isText(recipe.title)" elevation="0" outlined>Done</v-btn>
        </div>

        <div class="d-flex detail">
            <v-col class="px-0">
                <div class="d-flex align-center">
                    <img class="icons" src="../assets/icon-people.svg" />
                    <v-text-field label="Servings" v-model="servings" />
                </div>
            </v-col>
            <v-col class="px-0">
                <div class="d-flex align-center">
                    <img class="icons" src="../assets/icon-time.svg" />
                    <v-text-field label="Preparation Time" v-model="readyInMinutes" />
                </div>
            </v-col>
        </div>

        <div class="mb-4">
            <h4>Diets:</h4>
            <v-text-field v-for="d in diets" :key="d.id" label="Diets" v-model="d.name" />
        </div>
        <div class="d-flex">
            <v-spacer />
            <img @click="addDiet()" alt="add ingredient button" src="../assets/btn-add.svg" class="addBtn" />
        </div>

        <h4 class="mb-3">Ingredients</h4>
        <div v-for="i in ingredients" :key="i">
            <v-divider class="mt-2 mb-2" />
            <v-text-field label="Ingredient Name" v-model="i.label" />
            <div class="d-flex">
                <v-col class="pl-0">
                    <v-text-field label="Amount" v-model="i.amount" />
                </v-col>
                <v-col class="pr-0">
                    <v-select :items="measurements" label="Measurement" />
                </v-col>
            </div>
        </div>
        <div class="d-flex">
            <v-spacer />
            <img @click="addIngredient()" alt="add ingredient button" src="../assets/btn-add.svg" class="addBtn" />
        </div>

        <h4 class="">Preparation</h4>
        <div v-for="s in preperationSteps" :key="s.step" class="mt-4">
            <v-divider />
            <div class="d-flex align-center">
                <p class="pr-2 font-weight-bold">Step {{ s.step }}</p>
                <v-textarea label="Description" v-model="s.description" hide-details rows="2" auto-grow />
            </div>
        </div>
        <div class="d-flex mt-2">
            <v-spacer />
            <img @click="addStep()" alt="add preparation step button" src="../assets/btn-add.svg" class="addBtn" />
        </div>
    </v-card>
</template>

<style scoped lang="scss">
.editRecipePage {
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

    .addBtn {
        width: 4rem;
        background-color: white;
        padding: 0;
    }
}
</style>