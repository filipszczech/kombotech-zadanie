<script setup>
  import { onMounted } from 'vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  onMounted(async () => {
  });
</script>

<template>
  <v-app>
    <Header />
    <v-main class="min-h-[90vh] w-full relative overflow-auto">
      <div class="max-w-7xl mx-auto p-4 xl:p-8">
        <router-view></router-view>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>
