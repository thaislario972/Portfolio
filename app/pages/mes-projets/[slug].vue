<script setup lang="ts">
import { computed } from 'vue'
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

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' })
}

useHead(() => ({
  title: project.value?.title ? `${project.value.title} | Portfolio` : 'Projet | Portfolio',
  meta: [
    { name: 'description', content: project.value?.desc || '' },
  ],
}))
const selectedImage = ref<null | { src: string; alt: string }>(null)

const openModal = (image: { src: string; alt: string }) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}
</script>

<template>
  <section class="bg-black">
    <div class="md:p-20 p-10 flex flex-col items-center gap-20 bg-gradient-to-br from-lavand/20 via-black to-turq/20 sm:pt-20 pt-40">
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
      <div class="flex flex-col w-full items-center gap-5" v-if="project">
        <h2 class="text-white text-4xl text-center">{{ project.title }}</h2>
        <p class="text-white/70 sm:text-2xl text-lg text-center">{{ project.desc }}</p>
      </div>


      <!-- Cards infos -->
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-5 4xl:w-[70%] 5xl:w-[50%] w-full" v-if="project">
        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/user-1.svg" alt="user" class="size-10" />
          <p class="text-white/60 md:text-lg text-md text-center">Entreprise</p>
          <p class="text-white md:text-xl text-sm text-center">{{ project.company }}</p>
        </div>

        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/calendar.svg" alt="calendar" class="size-10" />
          <p class="text-white/60 md:text-lg text-md text-center">Année</p>
          <p class="text-white md:text-xl text-sm text-center">{{ project.year }}</p>
        </div>

        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/clock.svg" alt="clock" class="size-10" />
          <p class="text-white/60 md:text-lg text-md text-center">Durée</p>
          <p class="text-white md:text-xl text-sm text-center">{{ project.duration }}</p>
        </div>

        <div class="flex flex-col w-full px-8 py-3 items-center justify-center gap-2 border border-white/60 rounded-lg">
          <img src="/img/check.svg" alt="check" class="size-10" />
          <p class="text-white/60 md:text-lg text-md text-center">Rôle</p>
          <p class="text-white md:text-xl text-sm text-center">{{ project.role }}</p>
        </div>
      </div>

      <!-- Hero -->
      <button
          v-if="project"
          type="button"
          @click="openModal({
    src: project.heroImg,
    alt: `${project.title} visuel`
  })"
          class="4xl:w-[70%] 5xl:w-[50%] w-full cursor-pointer"
      >

        <img
            :src="project.heroImg"
            :alt="`${project.title} visuel`"
            class="w-full rounded-2xl border border-white/40"
        />

      </button>

      <!-- Défi / Solution -->
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 4xl:w-[70%] 5xl:w-[50%] w-full" v-if="project">
        <div class="flex flex-col justify-center gap-5 border border-white/60 rounded-xl p-8">
          <div class="flex gap-3 items-center">
            <img src="/img/défi.png" alt="défi" class="md:size-18 size-15" />
            <p class="text-white md:text-3xl text-2xl">{{ project.challengeTitle }}</p>
          </div>
          <p class="text-white/70 md:text-xl text-lg whitespace-pre-line">{{ project.challengeText }}</p>
        </div>

        <div class="flex flex-col justify-center gap-5 border border-white/60 rounded-xl p-8">
          <div class="flex gap-3 items-center">
            <img src="/img/solution.png" alt="solution" class="md:size-18 size-15" />
            <p class="text-white md:text-3xl text-2xl">{{ project.solutionTitle }}</p>
          </div>
          <p class="text-white/70 md:text-xl text-lg whitespace-pre-line">{{ project.solutionText }}</p>
        </div>
      </div>

      <!-- Résultats -->
      <div class="flex flex-col justify-center items-center gap-5 4xl:w-[70%] 5xl:w-[50%] w-full" v-if="project">
        <p class="text-white text-3xl">{{ project.resultsTitle || 'Résultats' }}</p>

        <div class="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div
              v-for="(r, i) in project.results"
              :key="i"
              class="flex flex-col justify-center items-center gap-5 border border-lavand/60 rounded-xl p-8 bg-gradient-to-br from-lavand/20 to-turq/20"
          >
            <img src="/img/check.svg" alt="check" class="md:size-15 size-12" />
            <p class="text-white md:text-xl text-lg text-center">{{ r }}</p>
          </div>
        </div>
      </div>

      <!-- Galerie -->
      <div class="flex flex-col justify-center items-center w-[100%]" v-if="project">
        <p class="text-white text-3xl mb-15">{{ project.galleryTitle || 'Galerie' }}</p>
        <div class="grid grid-cols-2 gap-10 w-full 4xl:w-[70%] 5xl:w-[50%]">
          <button
              v-for="(g, i) in project.gallery"
              :key="i"
              type="button"
              @click="openModal(g)"
              class="overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
                :src="g.src"
                :alt="g.alt"
                :class="g.class"
            />
          </button>
        </div>

        <div
            v-if="selectedImage"
            class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            @click="closeModal"
        >
          <div class="relative max-w-5xl w-full" @click.stop>
            <button
                type="button"
                @click="closeModal"
                class="absolute -top-12 right-0 text-white text-3xl"
            >
              ×
            </button>

            <img
                :src="selectedImage.src"
                :alt="selectedImage.alt"
                class="w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>