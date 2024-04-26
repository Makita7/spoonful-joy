<script setup>
import LikeComponent from '@/components/LikeComponent.vue';
import PreperationStep from '@/components/PreperationStep.vue';

</script>

<template>
    <v-card class="recipePage pa-4">
        <div class="d-flex align-center">
            <h3>Dish Name</h3>
            <v-spacer />
            <LikeComponent />
        </div>
        <h4>Ingredients</h4>
        <ul class="px-8">
            <li v-for="i in 3">Ingredients {{ i }}</li>
        </ul>
        <div class="d-flex mt-3 mb-4">
            more info with icons
        </div>
        <h4>Preparation</h4>
        <PreperationStep v-for="i in 5" key="i" :n="i"
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.' />
    </v-card>
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
}
</style>