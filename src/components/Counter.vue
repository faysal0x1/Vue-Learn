<template>
    <div>
        <h2> {{ title }}</h2>
        <div class="counter">
            <slot />
            <button @click="$emit('increaseBy', 1)">
                count is: {{ count }}
            </button>

            <p>{{ count }}</p>

            <button @click="counterStore.decreaseCount(1)">
                count is: {{ count }}
            </button>

            {{ message }}
        </div>
    </div>
</template>
<script setup>
import { useCounterStore } from '@/store/counter';
import { inject } from 'vue';
const props = defineProps(['title', 'count']);

const message = inject("message");

const counterStore = useCounterStore();

</script>

<style scoped>
.counter {
    color: red;
    display: flex;
    justify-content: space-around;
}
</style>