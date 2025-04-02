<template>
    <v-container>
        <h1 class="text-2xl mb-6">{{ t("home.title") }}</h1>
        <p class="mb-2">{{ t("home.functionality_title") }}</p>
        <li v-for="(p, index) in $tm('home.functionality')" :key="p" class="mb-2">
            {{ $rt(p) }}<span v-if="index < $tm('home.functionality').length - 1">,</span>
        </li>
    </v-container>
</template>

<script setup>
    import { useI18n } from "vue-i18n";
    import { useTitle } from '@vueuse/core';
    
    const { t } = useI18n();
    const title = useTitle();
    title.value = `Rekrutacja | ${t("nav.home")}`;
</script>