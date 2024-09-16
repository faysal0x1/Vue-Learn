<template>

  
    <h1>{{ counterStore.title }}</h1>

    <Counter v-for="i in 2" :key="i" :title="`Counter ${i}`" :count="counterStore.count" @increaseBy="counterStore.increaseCount"
        @decrease-by="counterStore.decreaseCount">
        <div>
            <p> counter : {{ i }}</p>
        </div>
    </Counter>


</template>


<script setup>
import { provide, ref } from 'vue'
import Counter from '../components/Counter.vue';
import { useCounterStore } from '../store/counter';
provide("message", "hello")

const counterStore = useCounterStore();



</script>
<style scoped>
a {
    margin: 10px;
}
</style>