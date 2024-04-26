import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', () => {
    let favs = ref([]);

    const addFavs = (dish) => {
        favs.push({
            id: favs.value.length,
            dishName: dish,
            like: true
        })
    }

    return { favs, addFavs }
})
