<script setup lang="ts">
</script>

<template>
  <div class="bg-black/95 w-full h-24 flex ">
    <div class="flex w-1/2 pl-10 items-center ">
      <img src="/img/logo.png" alt="logo" class="size-22" />
    </div>
    <nav class="flex justify-center gap-30 w-1/2 ">
      <NuxtLink to="/" class="text-white content-center text-xl hover:text-lavand ">Accueil</NuxtLink>
      <NuxtLink to="/mes-projets" class="text-white content-center text-xl hover:text-lavand">Mes projets</NuxtLink>
      <NuxtLink to="/qui-suis-je" class="text-white content-center text-xl hover:text-lavand">Qui suis-je</NuxtLink>
      <NuxtLink to="/contact" class="text-white content-center text-xl hover:text-lavand">Contact</NuxtLink>
    </nav>
  </div>

</template>

<style scoped>

</style>