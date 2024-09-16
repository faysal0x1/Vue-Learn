<template>

  
    <h1>{{ counterStore.title }}</h1>
    <p>{{serviceStore.ourServices}}</p>

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
import { useserviceStore } from '@/store/service';
provide("message", "hello")

const counterStore = useCounterStore();
const serviceStore = useserviceStore();


</script>
<style scoped>
a {
    margin: 10px;
}
</style>