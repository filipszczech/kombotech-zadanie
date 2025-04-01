import { createApp } from 'vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

import './index.css'
import router from './router.js';
import App from "./App.vue";

import { createI18n } from "vue-i18n";

const app = createApp(App)

const vuetify = createVuetify()

const messages = {
  en: await import("./locales/en.json"),
  pl: await import("./locales/pl.json"),
};

const i18n = createI18n({
  legacy: false,
  locale: "pl",
  fallbackLocale: "en",
  messages,
});

app
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
