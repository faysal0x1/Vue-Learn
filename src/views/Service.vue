<template>
    <div>
        <h1>
            Service Page
        </h1>

        <ul>
            <li v-for="service in serviceStore.services" :key="service.id">
                <router-link :to="{ name: 'singleService', params: { id: service.id } }">
                    {{ service.name }} - {{ service.price }}
                </router-link>
            </li>

        </ul>

        <button @click="goHome">Go to Home page</button>
    </div>
</template>

<script setup>
import { useserviceStore } from '@/store/service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const goHome = () => {
    router.push({ name: 'home' })
}

const serviceStore = useserviceStore();


</script>

<style scoped></style>