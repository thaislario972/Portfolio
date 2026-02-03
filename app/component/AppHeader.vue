<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const closeMenu = () => (isOpen.value = false)
</script>

<template >
  <header class="fixed sm:static w-full bg-black/95">
    <div class="h-24 px-6 md:px-10 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <img src="/img/logo.png" alt="logo" class="h-20 w-auto" />
      </NuxtLink>

      <!-- Menu desktop -->
      <nav class="hidden lg:flex items-center gap-10">
        <NuxtLink to="/" class="text-white text-xl hover:text-lavand">Accueil</NuxtLink>
        <NuxtLink to="/mes-projets" class="text-white text-xl hover:text-lavand">Mes projets</NuxtLink>
        <NuxtLink to="/qui-suis-je" class="text-white text-xl hover:text-lavand">Qui suis-je</NuxtLink>
        <NuxtLink to="/contact" class="text-white text-xl hover:text-lavand">Contact</NuxtLink>
      </nav>

      <!-- Bouton burger (mobile/tablette) -->
      <button
          class="lg:hidden inline-flex items-center justify-center w-12 h-12 text-white"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-label="Ouvrir le menu"
      >
        <!-- icône burger -->
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <!-- icône croix -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Panneau mobile/tablette -->
    <div v-show="isOpen" class="lg:hidden border-t border-white/10">
      <nav class="flex flex-col px-6 py-6 gap-4">
        <NuxtLink @click="closeMenu" to="/" class="text-white text-lg hover:text-lavand">Accueil</NuxtLink>
        <NuxtLink @click="closeMenu" to="/mes-projets" class="text-white text-lg hover:text-lavand">Mes projets</NuxtLink>
        <NuxtLink @click="closeMenu" to="/qui-suis-je" class="text-white text-lg hover:text-lavand">Qui suis-je</NuxtLink>
        <NuxtLink @click="closeMenu" to="/contact" class="text-white text-lg hover:text-lavand">Contact</NuxtLink>
      </nav>
    </div>
  </header>

</template>

<style scoped>

</style>