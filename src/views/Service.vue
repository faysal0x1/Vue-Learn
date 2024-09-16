<template>
    <div>
        <h1>
            Service Page
        </h1>

        <button @click="goHome">Go to Home page</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goHome=()=>{
    router.push({name:'home'})
}
</script>

<style scoped></style>