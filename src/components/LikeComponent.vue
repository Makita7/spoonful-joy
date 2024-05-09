<script setup>
import { ref, onMounted, defineProps, watch } from 'vue';
import { useFavoritesStore } from '@/stores/favorites';
import { useRoute } from 'vue-router';

let isLiked = ref(false);
let favStore = useFavoritesStore();

const props = defineProps({
    title: String,
    id: Number,
})
const route = useRoute();

function ToggleLike() {
    favStore.toggleFavs(props.id, props.title);
    isLiked.value = !isLiked.value;
}

onMounted(() => {
    isLiked.value = favStore.checkFavs(props.id);
})

watch(props, (oldProps, newProps) => {
    if (oldProps !== newProps) {
        console.log(props, 'watcher')
        isLiked.value = favStore.checkFavs(props.id);
    }
})

</script>

<template>
    <div style="position: relative;" class="hover">
        <v-icon class="heart-w">mdi-heart</v-icon>
        <v-icon class="heart" @click="ToggleLike">{{ isLiked ? 'mdi-heart' :
            'mdi-heart-outline'
            }}</v-icon>
    </div>
</template>

<style scoped lang="scss">
.hover:hover {
    transition: ease-in-out 0.3s;
    transform: scale(1.08);
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