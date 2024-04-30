import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
    let favs = ref([]);

    favs = [
        {id: '716276', title: 'Doughnuts', 'like': true}
    ]

    const toggleFavs = (idDish, title) => {
        if(favs.map(i => i.id == idDish)){
            favs.push({
                id: idDish,
                dishName: title,
                like: true
            })
        }else{
            const index = favs.indexOf(i => i.id == idDish);
            favs = favs.splice(index, 1);
        }
    }

    function checkFavs(idDish){
        if(favs.length > 0){
            return favs.map(i => i.id == idDish)[0];
        }
    }

    return { favs, toggleFavs, checkFavs }
})
