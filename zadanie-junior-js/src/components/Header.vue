<template>
    <header>
        <v-app-bar color="white" class="px-4" elevation="2">
            <v-container class="flex items-center justify-between">
                <v-btn icon @click="drawer = !drawer">
                    <v-icon v-if="drawer">mdi-close</v-icon>
                    <v-icon v-else>mdi-menu</v-icon>
                </v-btn>
                <v-toolbar-title class="text-center">{{ t("title") }}</v-toolbar-title>
                <button @click="toggleLanguage" class="">
                    {{ locale === "pl" ? "EN" : "PL" }}
                </button>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list>
                <v-list-item to="/" @click="drawer = false">
                    <v-list-item-title>{{ t("nav.home") }}</v-list-item-title>
                </v-list-item>
                <v-list-item to="/xy" @click="drawer = false">
                    <v-list-item-title>{{ t("nav.calculator") }}</v-list-item-title>
                </v-list-item>
                <v-list-item to="/ip" @click="drawer = false">
                    <v-list-item-title>{{ t("nav.check_ip") }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>
  
<script setup>
    import { ref } from "vue";
    import { useI18n } from "vue-i18n";
    
    const { locale, t } = useI18n();
    const drawer = ref(false);
    
    const toggleLanguage = () => {
        locale.value = locale.value === "pl" ? "en" : "pl";
    };
</script>
  