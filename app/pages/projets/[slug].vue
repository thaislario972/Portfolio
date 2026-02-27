<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects, type TagKey } from '~/data/projects'

import Vitrine from "~/component/Vitrine.vue"
import ECommerce from "~/component/E-commerce.vue"
import Maquette from "~/component/Maquette.vue"
import WordPress from "~/component/WordPress.vue"
import UXUI from "~/component/UX-UI.vue"

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const project = computed(() => projects.find(p => p.slug === slug.value))

const tagComponent: Record<TagKey, any> = {
  vitrine: Vitrine,
  ecommerce: ECommerce,
  maquette: Maquette,
  wordpress: WordPress,
  'ux-ui': UXUI,
}

// Si slug inconnu -> 404
if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' })
}

// SEO simple (optionnel)
useHead(() => ({
  title: project.value?.title ? `${project.value.title} | Portfolio` : 'Projet | Portfolio',
  meta: [
    { name: 'description', content: project.value?.desc || '' },
  ],
}))
</script>

<template>
  <section class="bg-black">
    <div class="p-20 flex flex-col items-center gap-20 bg-gradient-to-br from-lavand/20 via-black to-turq/20">
      <!-- Tags dynamiques -->
      <div class="flex items-center justify-center gap-5" v-if="project">
        <component
            v-for="t in project.tags"
            :key="t"
            :is="tagComponent[t]"
            class="h-12 px-8 text-2xl"
        />
      </div>

      <!-- Titre + description -->
      <div class="flex flex-col w-[70%] items-center gap-5" v-if="project">
        <h2 class="text-white text-4xl">{{ project.title }}</h2>
        <p class="text-white/70 text-2xl text-center">{{ project.desc }}</p>
      </div>

      <!-- Cards infos -->
      <div class="grid grid-cols-4 gap-5 w-[100%]" v-if="project">
        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/user-1.svg" alt="user" class="size-10" />
          <p class="text-white/60 text-lg text-center">Entreprise</p>
          <p class="text-white text-xl text-center">{{ project.company }}</p>
        </div>

        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/calendar.svg" alt="calendar" class="size-10" />
          <p class="text-white/60 text-lg text-center">Année</p>
          <p class="text-white text-xl text-center">{{ project.year }}</p>
        </div>

        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/clock.svg" alt="clock" class="size-10" />
          <p class="text-white/60 text-lg text-center">Durée</p>
          <p class="text-white text-xl text-center">{{ project.duration }}</p>
        </div>

        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/check.svg" alt="check" class="size-10" />
          <p class="text-white/60 text-lg text-center">Rôle</p>
          <p class="text-white text-xl text-center">{{ project.role }}</p>
        </div>
      </div>

      <!-- Hero -->
      <img
          v-if="project"
          :src="project.heroImg"
          :alt="`${project.title} visuel`"
          class="w-[70%] rounded-2xl border border-white/40"
      />

      <!-- Défi / Solution -->
      <div class="grid grid-cols-2 gap-10 w-[100%]" v-if="project">
        <div class="flex flex-col justify-center gap-5 border border-white/60 rounded-xl p-8">
          <div class="flex gap-3 items-center">
            <img src="/img/défi.png" alt="défi" class="size-18" />
            <p class="text-white text-3xl">{{ project.challengeTitle }}</p>
          </div>
          <p class="text-white/70 text-xl whitespace-pre-line">{{ project.challengeText }}</p>
        </div>

        <div class="flex flex-col justify-center gap-5 border border-white/60 rounded-xl p-8">
          <div class="flex gap-3 items-center">
            <img src="/img/solution.png" alt="solution" class="size-18" />
            <p class="text-white text-3xl">{{ project.solutionTitle }}</p>
          </div>
          <p class="text-white/70 text-xl whitespace-pre-line">{{ project.solutionText }}</p>
        </div>
      </div>

      <!-- Résultats -->
      <div class="flex flex-col w-[100%] justify-center items-center gap-5" v-if="project">
        <p class="text-white text-3xl">{{ project.resultsTitle || 'Résultats' }}</p>

        <div class="grid grid-cols-3 gap-10">
          <div
              v-for="(r, i) in project.results"
              :key="i"
              class="flex flex-col justify-center items-center gap-5 border border-lavand/60 rounded-xl p-8 bg-gradient-to-br from-lavand/20 to-turq/20"
          >
            <img src="/img/check.svg" alt="check" class="size-15" />
            <p class="text-white text-xl text-center">{{ r }}</p>
          </div>
        </div>
      </div>

      <!-- Galerie -->
      <div class="flex flex-col justify-center items-center w-[100%]" v-if="project">
        <p class="text-white text-3xl mb-15">{{ project.galleryTitle || 'Galerie' }}</p>

        <div class="grid grid-cols-[1fr_auto] grid-rows-2 w-[100%] gap-20">
          <img
              v-for="(g, i) in project.gallery"
              :key="i"
              :src="g.src"
              :alt="g.alt"
              :class="g.class || 'border border-white/60 rounded-2xl w-full'"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>