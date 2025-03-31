import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import './index.css'
import router from './router.js';
import App from "./view/App.vue";

const app = createApp(App)

const vuetify = createVuetify()

app
  .use(router)
  .use(vuetify)
  .mount('#app')
