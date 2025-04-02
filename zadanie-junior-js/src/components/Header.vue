<template>
    <header>
        <v-app-bar color="white" class="px-4" elevation="2">
            <v-container class="flex items-center justify-between">
                <v-btn icon @click="drawer = !drawer" aria-label="toggle drawer">
                    <v-icon v-if="drawer">mdi-close</v-icon>
                    <v-icon v-else>mdi-menu</v-icon>
                </v-btn>
                <v-toolbar-title class="text-center">{{ t("title") }}</v-toolbar-title>
                <button @click="toggleLanguage" aria-label="change language">
                    {{ locale === "pl" ? "EN" : "PL" }}
                </button>
                <button @click="toggleTheme" class="ml-3" aria-label="change theme">
                    <v-icon v-if="theme.global.name.value === 'light'">mdi-moon-waning-crescent</v-icon>
                    <v-icon v-else>mdi-white-balance-sunny</v-icon>
                </button>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list>
                <v-list-item to="/" @click="drawer = false">
                    <v-list-item-content class="flex items-end gap-2">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ t("nav.home") }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/xy" @click="drawer = false">
                    <v-list-item-content class="flex items-end gap-2">
                        <v-list-item-icon>
                            <v-icon>mdi-calculator</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ t("nav.calculator") }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/ip" @click="drawer = false">
                    <v-list-item-content class="flex items-end gap-2">
                        <v-list-item-icon>
                            <v-icon>mdi-earth</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ t("nav.check_ip") }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>
  
<script setup>
    import { ref, watch, onMounted } from "vue";
    import { useI18n } from "vue-i18n";
    import { useTheme } from "vuetify";
    
    const { locale, t } = useI18n();
    const theme = useTheme();
    const drawer = ref(false);
    
    const toggleLanguage = () => {
        locale.value = locale.value === "pl" ? "en" : "pl";
    };
    
    const toggleTheme = () => {
        theme.global.name.value = theme.global.name.value === "light" ? "dark" : "light";
    };

    onMounted(() => {
        locale.value = localStorage.getItem("locale") || "pl";
        theme.global.name.value = localStorage.getItem("theme") || "light";
    });
    watch(locale, (newVal) => localStorage.setItem("locale", newVal));
    watch(() => theme.global.name.value, (newVal) => localStorage.setItem("theme", newVal));

</script>
  