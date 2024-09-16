<template>
    <div>
        <h1>
            Single Service Page
        </h1>

  

        <button @click="goHome">Go to Service page</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const goHome = () => {
    router.push({ name: 'service' })
}




</script>

<style scoped></style>