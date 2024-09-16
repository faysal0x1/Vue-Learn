<template>
  <h1>{{ title }}</h1>

  <Counter v-for="i in 2" :key="i" :title="`Counter ${i}`" :count="count" @increaseBy="increaseCount"
    @decrease-by="decreaseCount">
    <div>
      <p> counter : {{ i }}</p>
    </div>
  </Counter>


</template>


<script setup>
import { provide, ref } from 'vue'
import Counter from './components/Counter.vue';

provide("message", "hello")

let count = ref(0)

const increaseCount = (n) => {
  count.value += n;
}

const decreaseCount = (n) => {
  if (count.value <= 0) return
  count.value -= n;
}

</script>
<style scoped></style>
