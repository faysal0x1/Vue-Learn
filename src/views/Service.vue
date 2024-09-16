<template>
    <div>
        <h1>
            Service Page
        </h1>

        <ul>
            <li v-for="service in services" :key="service.id">
                <router-link :to="{ name: 'singleService', params: { id: service.id } }">
                    {{ service.name }} - {{ service.price }}
                </router-link>
            </li>

        </ul>

        <button @click="goHome">Go to Home page</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const goHome = () => {
    router.push({ name: 'home' })
}


let services = ref([
    {
        id: 1,
        name: 'Service 1',
        price: 100
    },
    {
        id: 2,
        name: 'Service 2',
        price: 200
    },
    {
        id: 3,
        name: 'Service 3',
        price: 300
    },
    {
        id: 4,
        name: 'Service 4',
        price: 400
    },
    {
        id: 5,
        name: 'Service 5',
        price: 500
    },
    {
        id: 6,
        name: 'Service 6',
        price: 600
    },
    {
        id: 7,
        name: 'Service 7',
        price: 700
    },
    {
        id: 8,
        name: 'Service 8',
        price: 800
    },
    {
        id: 9,
        name: 'Service 9',
        price: 900
    },
    {
        id: 10,
        name: 'Service 10',
        price: 1000
    }
])

</script>

<style scoped></style>