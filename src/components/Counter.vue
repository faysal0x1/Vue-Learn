<template>
    <div>
        <h2> {{ title }}</h2>
        <div class="counter">
            <slot />
            <button @click="$emit('increaseBy', 1)">
                count is: {{ count }}
            </button>

            <p>{{ count }}</p>

            <button @click="$emit('decreaseBy', 1)">
                count is: {{ count }}
            </button>

            {{ message }}
        </div>
    </div>
</template>
<script setup>
import { inject } from 'vue';



const props = defineProps(['title', 'count']);

const message = inject("message");

</script>

<style scoped>
.counter {
    color: red;
    display: flex;
    justify-content: space-around;
}
</style>