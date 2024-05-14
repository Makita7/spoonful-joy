<script setup>
import { ref } from 'vue';
import { useRecipesStore } from '@/stores/recipesStore';

const recipeStore = useRecipesStore();
let recipeTitle = ref(null);
let editTitle = ref(true);
function setTitle() {
    if (titleCorrect() === true) {
        editTitle.value = false;
    }
}


let ingredients = ref([
    {
        id: 1,
        name: null,
        amount: null,
        unit: null,
    },
]);
const measurements = ref([
    'teaspoon', 'tablespoon', 'gr', 'kg', 'ml', 'l', 'units'
]);

function addIngredient() {
    const newId = ingredients.value.length + 1;
    ingredients.value.push({
        id: newId,
        name: '',
        amount: null,
        unit: '',
    })
}

let diets = ref([
    'Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30',
]);

let selectedDiets = ref([]);

let preperationSteps = ref([
    {
        number: 1,
        step: '',
    }
]);

function addStep() {
    const newStep = preperationSteps.value.length + 1;
    preperationSteps.value.push(
        {
            number: newStep,
            step: '',
        }
    )
}

let servings = ref(null);
let readyInMinutes = ref(null);


// Rules
//TODO: move rules to another file like in maestro
let valid = ref(false);
const isNumber = (n) => n && n > 0 && /[\d]*$/.test(n) || 'must be a number';
const isText = (text) => text && text.length > 4 && /^[^\d]*$/.test(text) || 'must be at least 4 characters long and no numbers';
const isDescription = (text) => text && text.length > 4 || 'must write a longer description';
const notNull = (text) => !text ? 'must select an option' : null;
const titleCorrect = () => (recipeTitle.value && recipeTitle.value.length > 4 && /^[^\d]*$/.test(recipeTitle.value)) ? true : false;

function Save() {
    recipeStore.AddMyRecipe(recipeTitle.value, ingredients.value, servings.value, readyInMinutes.value, selectedDiets.value, preperationSteps.value);
    // console.log(recipeTitle.value, ingredients.value, servings.value, readyInMinutes.value, selectedDiets.value, preperationSteps.value)
}

</script>

<template>
    <v-card class="editRecipePage pa-4 pb-8">
        <v-form @submit.prevent v-model="valid">
            {{ recipeStore.myRecipes }}
            <h3 v-if="recipeTitle && !editTitle" @click="editTitle = true">{{ recipeTitle }}</h3>
            <div class="d-flex align-center" v-if="!recipeTitle || editTitle">
                <v-text-field label="Recipe Title" v-model="recipeTitle" @keydown.enter="setTitle()" :rules="[isText]"
                    class="mr-4" type="text" />
                <v-btn @click="setTitle()" :disabled="!titleCorrect()" elevation="0" outlined>Done</v-btn>
            </div>

            <div class="d-flex detail">
                <v-col class="px-0">
                    <div class="d-flex align-center">
                        <img class="icons" src="../assets/icon-people.svg" />
                        <v-text-field label="Servings" v-model="servings" :rules="[isNumber(servings)]" type="number" />
                    </div>
                </v-col>
                <v-col class="px-0">
                    <div class="d-flex align-center">
                        <img class="icons" src="../assets/icon-time.svg" />
                        <v-text-field label="Time" v-model="readyInMinutes" hint="minutes"
                            :rules="[isNumber(readyInMinutes)]" type="number" />
                    </div>
                </v-col>
            </div>

            <div class="mb-4">
                <h4>Diets:</h4>
                <v-chip-group v-model="selectedDiets" column multiple>
                    <v-chip v-for="d in diets" :key="d" :value="d" color="#b16e19" filter>
                        {{ d }}
                    </v-chip>
                </v-chip-group>
            </div>

            <h4 class="mb-3">Ingredients</h4>
            <div v-for="i in ingredients" :key="i">
                <v-divider class="mt-2 mb-2" />
                <v-text-field label="Ingredient Name" v-model="i.name" type="text" :rules="[isText]" />
                <div class="d-flex">
                    <v-col class="pl-0">
                        <v-text-field label="Amount" v-model="i.amount" type="number" :rules="[isNumber(i.amount)]" />
                    </v-col>
                    <v-col class="pr-0">
                        <v-select :items="measurements" label="Measurement" :rules="[notNull]" v-model="i.unit" />
                    </v-col>
                </div>
            </div>
            <div class="d-flex">
                <v-spacer />
                <img @click="addIngredient()" alt="add ingredient button" src="../assets/btn-add.svg" class="addBtn" />
            </div>

            <h4 class="">Preparation</h4>
            <div v-for="s in preperationSteps" :key="s.number" class="mt-4">
                <v-divider />
                <div class="d-flex align-center">
                    <p class="pr-2 font-weight-bold">Step {{ s.number }}</p>
                    <v-textarea label="Description" v-model="s.step" hide-details rows="2" auto-grow
                        :rules="[isDescription]" />
                </div>
            </div>
            <div class="d-flex mt-2">
                <v-spacer />
                <img @click="addStep()" alt="add preparation step button" src="../assets/btn-add.svg" class="addBtn" />
            </div>
            <v-btn type="submit" class="save" block outlined elevation="0" @click="Save" :disabled="!valid">Save</v-btn>
        </v-form>
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

    .save {
        color: var(--green-d);
    }
}
</style>