<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const go_back = () => router.go(-1);
</script>

<template>
    <div class="NotFound text-center text-3xl mt-8">
        <p class="">Not found!</p>
    </div> 
    <div class="max-w-xs m-auto text-center mt-8">
        <v-btn @click="go_back" class="inline-block">Wróć</v-btn>
    </div>
</template>

<style scoped>
</style>