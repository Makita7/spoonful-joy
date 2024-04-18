<script setup>
import { ref } from 'vue';

let like = ref(false);

</script>

<template>
    <v-card class="mx-4 pa-4 card">
        <router-link to="/recipe">
            <div class="d-flex mb-2">
                <img src="../assets/food-appetizer.png" alt="name of food" class="mx-auto" />
            </div>
        </router-link>
        <div class="d-flex align-center">
            <router-link to="/recipe">
                <h3>Title of Dish</h3>
            </router-link>
            <v-spacer />
            <div style="position: relative;">
                <v-icon class="heart-w">mdi-heart</v-icon>
                <v-icon class="heart" @click="like = !like">{{ like ? 'mdi-heart' : 'mdi-heart-outline'
                    }}</v-icon>
            </div>
        </div>
    </v-card>
</template>

<style scoped lang="scss">
.card {
    background-color: var(--beige-l);

    img {
        background-color: aliceblue;
        border-radius: 6rem;
        padding: 7px;
    }
}

h3 {
    color: var(--brown);
}

.heart {
    color: var(--coral);
    font-size: 2rem;
}

.heart-w {
    position: absolute;
    color: var(--white);
    font-size: 2.5rem;
    top: -0.25rem;
    left: -0.2rem;
    text-shadow: white 0px 0px 5px;
}
</style>