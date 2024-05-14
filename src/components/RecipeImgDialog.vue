<script setup>
import { ref, defineEmits } from 'vue';
import { useRecipesStore } from '@/stores/recipesStore';

const recipeStore = useRecipesStore();
const img = ref('');
const dialog = ref(false);

const emit = defineEmits(["setImgEmit"]);

const sendImgEmit = () => {
    console.log('close');
    emit('setImgEmit', img.value)
    dialog.value = false;
};

function ChangeImages(title) {
    img.value = title;
}


</script>

<template>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" class="dialog">
        <template v-slot:activator="{ props: dialog }">
            <v-btn v-bind="dialog" elevation="0" text block class="mb-4">{{ img.length <= 0 ? 'Choose Image'
                : 'Change Image' }}</v-btn>
        </template>
        <template v-slot:default="{ dialog }">
            <v-card class="text-center pa-2">
                <h3 class="mb-2">Choose your Image</h3>
                <div class="d-flex flex-wrap justify-space-evenly ">
                    <div @click="ChangeImages(i.title)" v-for="i in recipeStore.myrecipeImg" :key="i.id"
                        class="cont mb-2" :class="i.title === img ? 'selected' : ''">
                        <h4 class="mb-4">{{ i.title }}</h4>
                        <img :alt="i.title" :src="i.img" :class="i.beverage === true ? 'beverage' : ''" />
                    </div>
                </div>
                <v-btn @click="sendImgEmit" variant="text">Close</v-btn>
            </v-card>
        </template>
    </v-dialog>
</template>

<style lang="scss" scoped>
.cont {
    width: 9rem;
}

.v-card {
    border-radius: 2rem;
}

img {
    max-width: 8rem;
    height: auto;
}

.beverage {
    padding-top: 0.2rem;
    width: 6rem;
}

button {
    color: var(--green-d);
}

.selected {
    background-color: #fff3e4;
    border-radius: 20px;
    padding: 10px;
}

h3 {
    color: var(--beige-d);
}
</style>