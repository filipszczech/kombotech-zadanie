<template>
    <v-container>
        <h1 class="text-2xl mb-6">{{ t("ip.title") }}</h1>
        <div v-if="error" class="flex flex-col gap-6">
            <p>{{ error }}</p>
            <v-btn @click="fetchIpAddress" class="w-fit">{{ t("ip.try_again") }}</v-btn>
        </div>
        <div v-else class="flex flex-col gap-6">
            <div v-if="loading" class="loader">
                <div class="loader-circle"></div>
            </div>
            <div v-else class="flex flex-col gap-6">
                <p class="text-lg">{{ t("ip.address") }}: {{ ipAddress }}</p>
                <v-btn @click="fetchIpAddress" class="w-fit" :disabled="loading">{{ t("ip.refresh") }}</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import { useI18n } from "vue-i18n";
    import { useTitle } from '@vueuse/core';

    const { t } = useI18n();

    const title = useTitle();
    title.value = `Rekrutacja | ${t("nav.check_ip")}`;

    const ipAddress = ref(null);
    const error = ref(null);
    const loading = ref(true);

    const fetchIpAddress = async () => {
        loading.value = true;
        error.value = null;
        try {
            const response = await fetch("https://ifconfig.me/ip");
            if (!response.ok) {
                throw new Error("Error fetching IP address: " + response.status);
            }
            const data = await response.text();
            ipAddress.value = data;
        } catch (err) {
            error.value = err.message;
        } finally {
            setTimeout(() => {
                loading.value = false;
            }, 500);
        }
    };
    onMounted(async() => {
        fetchIpAddress();
    });
</script>