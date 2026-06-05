<script setup lang="ts">
import ProgressBar from '~/component/progress-bar.vue'
import Parcours from '~/component/parcours-card.vue'

const skills = [
  { label: 'Figma', value: 95 },
  { label: 'UI/UX Design', value: 75 },
  { label: 'Vue', value: 70 },
  { label: 'WordPress / Elementor', value: 80 },
  { label: 'HTML / CSS Tailwind', value: 95 },
  { label: 'Suite Adobe', value: 90 },
]

const parc = [
  { year : '2026-2028',
    title: 'Designer UX/UX - Intégration front',
    descr: 'Alternance - Conception maquette, prototypage et intégration front-end'
  },
  { year : '2026-2028',
    title: 'Diplôme Expert en création digitale',
    descr: 'Ynov Connect - Mastère en design graphique, UX/UI et développement web'
  },
  { year : '2024-2026',
    title: 'Designer UX/UX - Intégration front',
    descr: 'DriftShop - Conception maquette, prototypage et intégration front-end'
  },
  { year : '2023 - 2026',
    title: 'Diplôme Chef de projet web et stratégie digitale',
    descr: ' Ynov Campus - Bachelor en design graphique, UX/UI et développement web'
  },
]
</script>

<template>
  <section class="bg-black">
    <div class="flex flex-col h-80 justify-center items-center lg:pt-10 md:pt-20 pt-30 lg:h-70 md:h-60 sm:h-60 p-10 gap-y-5 bg-gradient-to-br from-lavand/20 via-black to-turq/25">
      <h2 class="text-white md:text-5xl text-4xl ">Qui suis-je ?</h2>
      <p class="text-white/90 md:text-xl text-md text-center sm:text-center lg:w-[60%]">Designer UX/UI et développeur web passionné, je transforme des concepts créatifs en expériences digitales mémorables.</p>
    </div>
    <div class="bg-gradient-to-bl from-turq/25 via-black to-lavand/20 lg:px-20 py-0">
      <div class="grid xl:grid-cols-2  lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-20 lg:p-20 p-10 ">
        <div class="flex flex-col gap-5 ">
          <img src="/img/ordi-bur.jpeg" alt="ordi" class="w-full rounded-3xl h-full object-cover" />
          <div class="grid grid-cols-3 md:gap-7 gap-2 sm:gap-2">
            <div class=" p-5 flex flex-col justify-center items-center gap-2 border border-white/40 rounded-3xl hover:border-lavand">
              <img src="/img/medal.svg" alt="medal" class="md:h-10 h-6"/>
              <p class="text-white md:text-4xl text-xl">9+</p>
              <p class="text-white/80 md:text-xl text-lg text-center">Projets réalisés</p>
            </div>
            <div class=" p-5 flex flex-col justify-center items-center gap-2 border border-white/40 rounded-3xl hover:border-lavand">
              <img src="/img/user.svg" alt="medal" class="md:h-10 h-6"/>
              <p class="text-white md:text-4xl text-xl">5+</p>
              <p class="text-white/80 md:text-xl text-lg text-center">Refontes UX / UI</p>
            </div>
            <div class=" p-5 flex flex-col justify-center items-center gap-2 border border-white/40 rounded-3xl hover:border-lavand">
              <img src="/img/coffee.svg" alt="medal" class="md:h-10 h-6"/>
              <p class="text-white md:text-4xl text-xl">1000+</p>
              <p class="text-white/80 md:text-xl text-lg text-center">Tasses de café</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-10 lg:justify-center ">
          <div class="flex flex-col gap-5">
            <div class="flex gap-5 items-center">
              <img src="/img/Icon1.png" alt="icon" class="md:h-18 h-15"/>
              <p class="text-white md:text-3xl text-2xl">Ma passion</p>
            </div>
            <p class="text-white/70 md:text-2xl text-lg">Depuis 2 ans, je conçois et refonds des interfaces web dans le cadre de projets professionnels en alternance. J’interviens de la réflexion UX et du prototypage
              jusqu’à l’intégration, avec une attention particulière portée à la clarté des parcours et aux besoins des utilisateurs.</p>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex gap-5 items-center">
              <img src="/img/Icon3.png" alt="icon" class="md:h-18 h-15"/>
              <p class="text-white md:text-3xl text-2xl">Mon approche</p>
            </div>
            <p class="text-white/70 md:text-2xl text-lg">J’adopte une approche globale des projets web, en reliant réflexion UX, design et intégration. Cette vision me permet de concevoir des interfaces cohérentes,
              simples à utiliser et techniquement fiables, en restant toujours attentive aux usages réels et aux contraintes du projet.</p>
          </div>
          <div class="flex flex-col gap-5 ">
            <div class="flex gap-5 items-center">
              <img src="/img/Icon4.png" alt="icon" class="md:h-18 h-15"/>
              <p class="text-white md:text-3xl text-2xl">Mes compétences</p>
            </div>
            <div class=" space-y-6 ">
              <ProgressBar
                  v-for="s in skills"
                  :key="s.label"
                  :label="s.label"
                  :value="s.value"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col justify-center items-center gap-10 pb-20">
        <p class="text-white text-3xl">Mon Parcours</p>
        <div class="flex flex-col gap-5  w-full">
          <Parcours
          v-for="p in parc"
          :year="p.year"
          :title="p.title"
          :descr="p.descr"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>