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
                favs = favs.value.splice(index, 1);
            }
            console.log('if', favs.value)
        }else{
            favs.value.push({
                id: idDish,
                dishName: title,
                like: true
            })
            console.log('else push', favs.value)
        }
        if(favs.value === undefined){
            favs.value = []
        }
        console.log(favs.value)
    }

    function checkFavs(idDish){
        if(favs.value.length > 1){
            console.log(`checked ${favs.map(i => i.id == idDish)[0]}`)
            return favs.map(i => i.id == idDish)[0];
        }
    }

    return { favs, toggleFavs, checkFavs }
})
