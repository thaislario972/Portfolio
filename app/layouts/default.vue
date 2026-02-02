<script setup lang="ts">
import AppFooter from "~/component/AppFooter.vue";
import AppHeader from "~/component/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>

<style scoped>

</style>