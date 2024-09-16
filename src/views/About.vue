<template>
    <div>
        About Page
        {{ test }}

        Title {{ title}}
    </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
let test = useCounterStore().count

let title = useCounterStore().title

</script>

<style scoped></style>