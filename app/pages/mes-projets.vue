<script setup lang="ts">
import { ref, computed } from 'vue'

import Vitrine from "~/component/Vitrine.vue"
import ECommerce from "~/component/E-commerce.vue"
import Maquette from "~/component/Maquette.vue"
import WordPress from "~/component/WordPress.vue"
import UXUI from "~/component/UX-UI.vue"

type TagKey = 'vitrine' | 'ecommerce' | 'maquette' | 'wordpress' | 'ux-ui'

type Project = {
  id: string
  slug: string
  title: string
  desc: string
  img: string
  tags: TagKey[]
}

const tagComponent: Record<TagKey, any> = {
  vitrine: Vitrine,
  ecommerce: ECommerce,
  maquette: Maquette,
  wordpress: WordPress,
  'ux-ui': UXUI,
}

const tagLabels: Record<TagKey, string> = {
  vitrine: 'Vitrine',
  ecommerce: 'E-commerce',
  maquette: 'Maquette',
  wordpress: 'WordPress',
  'ux-ui': 'UX/UI',
}

const projects: Project[] = [
  {
    id: 'versus',
    slug: 'versus',
    title: "Versus Racing — site vitrine",
    desc: "Maquettes, prototypage et intégration WordPress d’un site vitrine présentant la marque et sa gamme de suspensions.",
    img: "/img/Versus/versus-racing.png",
    tags: ['vitrine', 'wordpress'],
  },
  {
    id: 'bps',
    slug: 'bps-racing',
    title: "BPS Racing — refonte de site e-commerce",
    desc: "Refonte d’un site e-commerce pour moderniser l’interface, simplifier le parcours utilisateur, avec un tunnel de commande optimisé.",
    img: "/img/BPS/bps-racing.png",
    tags: ['ecommerce', 'maquette', 'ux-ui'],
  },
  {
    id: 'driftcup',
    slug: 'driftcup',
    title: "DriftCup — site événementiel",
    desc: "Refonte d’un site événementiel pour moderniser l’interface, améliorer l’ergonomie et structurer la présentation de l’événement.",
    img: "/img/driftcup/DriftCup.png",
    tags: ['wordpress', 'maquette', 'ux-ui'],
  },
  {
    id: 'd2',
    slug: 'd2-racing',
    title: "D2 Racing EU — site vitrine",
    desc: "Maquettes, prototypage et intégration d’un site vitrine présentant la marque D2 Racing et sa gamme de suspensions.",
    img: "/img/d2racing/d2-racing.png",
    tags: ['wordpress', 'maquette', 'ux-ui', 'vitrine'],
  },
  {
    id: 'cmw',
    slug: 'car-modify-wonder',
    title: "Car Modify Wonder EU — site vitrine",
    desc: "Maquettes, prototypage et intégration d’un site vitrine présentant la marque et sa gamme de kits carrosserie.",
    img: "/img/cmw/CMW.jpg",
    tags: ['wordpress', 'maquette', 'ux-ui', 'vitrine'],
  },
  {
    id: 'origine',
    slug: 'origin-labo',
    title: "Origine Labo EU — site vitrine",
    desc: "Maquettes, prototypage et intégration d’un site vitrine présentant la marque Origine Labo et sa gamme de kits carrosserie.",
    img: "/img/originlabo/origin-labo.png",
    tags: ['wordpress', 'maquette', 'ux-ui', 'vitrine'],
  },
]

const selected = ref<TagKey | 'all'>('all')

const filters = computed(() => {
  const set = new Set<TagKey>()
  projects.forEach(p => p.tags.forEach(t => set.add(t)))
  return ['all', ...Array.from(set)] as Array<'all' | TagKey>
})

const filteredProjects = computed(() => {
  if (selected.value === 'all') return projects
  return projects.filter(p => p.tags.includes(selected.value as TagKey))
})
</script>

<template>
  <section class="bg-black">
    <div class="flex flex-col justify-center items-center p-10 gap-y-5 bg-gradient-to-br from-lavand/20 via-black to-turq/20">
      <h2 class="text-white text-5xl">Mes Projets</h2>
      <p class="text-white/90 text-lg sm:text-center">
        Découvrez une sélection de mes réalisations en web design, UX/UI et branding
      </p>

      <!-- FILTRES -->
      <div class="flex flex-wrap gap-3 justify-center mt-10">
        <button
            v-for="f in filters"
            :key="f"
            @click="selected = f"
            class="px-4 py-2 rounded-full border border-white/30 text-white/90 hover:border-lavand hover:text-white transition focus:bg-gradient-to-br focus:from-lavand focus:to-turq focus:shadow-lg focus:shadow-violet-800"
            :class="selected === f ? 'border-lavand bg-white/5 text-white' : ''"
        >
          <span v-if="f === 'all'">Tous</span>
          <span v-else>{{ tagLabels[f as TagKey] }}</span>
        </button>
      </div>
    </div>

    <!-- GRID CARTES -->
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-10 bg-gradient-to-bl from-turq/20 via-black to-lavand/15 px-5 md:px-10 lg:px-15 3xl:px-30 4xl:px-[15%]">
      <NuxtLink
          v-for="p in filteredProjects"
          :key="p.id"
          :to="`/projets/${p.slug}`"
          class="group flex flex-col justify-center items-center border border-white/40 hover:border-lavand rounded-2xl p-0 overflow-hidden transition-transform hover:scale-[1.01] h-140"
      >
        <div class="w-full h-[55%] overflow-hidden">
          <img
              :src="p.img"
              :alt="p.title"
              class="w-full h-full object-cover object-top rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div class="flex flex-col h-[48%] justify-around p-3 group-hover:bg-gradient-to-r group-hover:from-lavand/20 group-hover:to-turq/20 rounded-b-2xl w-full">
          <p class="text-white text-xl lg:text-2xl font-medium">{{ p.title }}</p>

          <p class="text-white text-base lg:text-lg truncate lg:whitespace-normal lg:overflow-hidden lg:text-ellipsis lg:line-clamp-2">
            {{ p.desc }}
          </p>

          <div class="flex gap-2 flex-wrap">
            <component
                v-for="t in p.tags"
                :key="t"
                :is="tagComponent[t]"
            />
          </div>

          <div class="flex gap-2 items-center">
            <p class="text-lavand text-lg">Voir le projet</p>
            <img
                src="/img/arrow-lavand.svg"
                alt="arrow"
                class="w-7 transition-all group-hover:translate-x-2"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
