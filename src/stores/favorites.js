import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
    let favs = ref([]);

    const toggleFavs = (idDish, title) => {
        if(!undefined && favs.value.length >= 1){
            if(!favs.value.find(i => i.id == idDish)){
                favs.value.push({
                    id: idDish,
                    dishName: title,
                    like: true
                })
            }else{
                const index = favs.value.findIndex(i => i.id === idDish);
                favs.value.splice(index, 1);
            }
        }else{
            favs.value.push({
                id: idDish,
                dishName: title,
                like: true
            })
        }
        if(favs.value === undefined){
            favs.value = []
        }
        return favs
    }

    function checkFavs(idDish){
        if(favs.value.length >= 1){
            return favs.value.find(i => i.id == idDish);
        }
    }

    return { favs, toggleFavs, checkFavs }
})
