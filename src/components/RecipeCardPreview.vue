<script setup>
import LikeComponent from './LikeComponent.vue';

const props = defineProps({
    title: String,
    img: String,
    id: Number,
    data: Object,
})

</script>

<template>
    <v-card class="mx-4 pa-4 card mb-6">
        <router-link :to="{ name: 'recipe', params: { id: id } }">
            <div class="d-flex mb-2">
                <img :src="img" :alt="title" class="mx-auto" />
            </div>
        </router-link>
        <div class="d-flex align-center">
            <router-link :to="{ name: 'recipe', params: { id: id } }">
                <h3>{{ title }}</h3>
            </router-link>
            <v-spacer />
            <LikeComponent :title="props.title" :id="props.id" />
        </div>
    </v-card>
</template>

<style scoped lang="scss">
.card {
    background-color: var(--beige-l);
    border-radius: 2rem;

    img {
        background-color: aliceblue;
        border-radius: 4rem;
        padding: 7px;
        width: 100%;
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