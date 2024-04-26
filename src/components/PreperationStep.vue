<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    n: Number,
    description: String,
})

</script>

<template>
    <div>
        <h5>Step {{ n }}</h5>
        <p>{{ description }}</p>
    </div>
</template>

<style lang="scss">
h5 {
    font-size: 1.2rem;
}
</style>