import { defineStore } from 'pinia';
import RecipeServices from '@/services/RecipeServices';
import { ref } from 'vue';

export const useRecipesStore = defineStore('recipeStore', () => {
    let randomRecipes = ref(null);

    function getMainRecipes(){
        if(randomRecipes.value != null){
            RecipeServices.getRandomRecipes(10)
                .then(res => randomRecipes.value = res.recipes)
                .catch(err => console.log(err))
                .finally(() => console.log('done'))
        }
    }


    return { randomRecipes, getMainRecipes }
})
