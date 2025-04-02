<template>
    <v-container>
        <div class="text-center text-3xl">
            <p class="">Not found!</p>
        </div> 
        <div class="max-w-xs m-auto text-center mt-8">
            <v-btn @click="go_home" class="inline-block">Strona główna</v-btn>
        </div>
    </v-container>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { useTitle } from '@vueuse/core';

    const title = useTitle();
    title.value = 'Rekrutacja | Not found';

    const router = useRouter();
    const go_home = () => router.push("/");
</script>