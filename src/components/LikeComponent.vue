<script setup>
import { ref, onMounted, defineProps, computed } from 'vue';
import { useFavoritesStore } from '@/stores/favorites';

let isLiked = ref(false);
let favStore = useFavoritesStore();

const props = defineProps({
    title: String,
    id: Number,
})

function ToggleLike() {
    favStore.toggleFavs(props.id, props.title);
    isLiked.value = !isLiked.value;
}

onMounted(() => {
    isLiked.value = favStore.checkFavs(props.id);
})

</script>

<template>
    <div style="position: relative;">
        <v-icon class="heart-w">mdi-heart</v-icon>
        <v-icon class="heart" @click="ToggleLike">{{ isLiked ? 'mdi-heart' :
            'mdi-heart-outline'
            }}</v-icon>
    </div>
</template>

<style scoped lang="scss">
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