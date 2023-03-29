<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";

import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 500,
    easing: "ease-out-cubic",
  });
  window.addEventListener("load", AOS.refresh); // to ensure animation play when view reaches element precisely
});
</script>

<template>
  <main class="app">
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "@/assets/icomoon/style.scss";
@import "@/assets/styles/globals";
</style>
