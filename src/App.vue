<template>

  <div class="">
    <router-link :to="{ name: 'home' }">
      Home
    </router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'service' }">Service</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  </div>

  <router-view>

  </router-view>

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
<style scoped>
a {
  margin: 10px;
}
</style>
