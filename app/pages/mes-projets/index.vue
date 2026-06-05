<template>
  <section class="bg-black">
    <div class="flex flex-col justify-center items-center px-6 py-12 md:p-10 gap-y-5 bg-gradient-to-br from-lavand/20 via-black to-turq/20 text-center sm:pt-0 pt-40">
      <h2 class="text-white text-4xl md:text-5xl">
        Mes Projets
      </h2>

      <p class="text-white/90 text-lg max-w-3xl">
        Découvrez une sélection de mes réalisations en web design, UX/UI et branding
      </p>

      <!-- FILTRES -->
      <div class="flex flex-wrap gap-3 justify-center mt-8 md:mt-10">
        <button
            v-for="filter in filters"
            :key="filter"
            @click="selected = filter"
            class="px-4 py-2 rounded-full border border-white/30 text-white/90 hover:border-lavand hover:text-white transition"
            :class="selected === filter ? 'border-lavand bg-white/5 text-white' : ''"
        >
          <span v-if="filter === 'all'">Tous</span>
          <span v-else>{{ tagLabels[filter] }}</span>
        </button>
      </div>
    </div>

    <!-- GRID CARTES -->
    <div class=" bg-gradient-to-bl from-turq/20 via-black to-lavand/15 px-5 py-10 md:px-10 lg:px-16 2xl:px-[15%] ">
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <NuxtLink
            v-for="project in filteredProjects"
            :key="project.id"
            :to="`/mes-projets/${project.slug}`"
            class="group flex flex-col justify-center items-center border border-white/40 hover:border-lavand rounded-2xl p-0 overflow-hidden transition-transform hover:scale-[1.01] min-h-[560px]"
        >
          <div class="w-full h-[55%] overflow-hidden flex justify-center items-center p-5">
            <img
                :src="project.imgCard"
                :alt="project.title"
                class=" rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div class="flex flex-col h-[45%] justify-around p-4 md:p-5 group-hover:bg-gradient-to-r group-hover:from-lavand/20 group-hover:to-turq/20 rounded-b-2xl w-full">
            <p class="text-white text-xl lg:text-2xl font-medium">
              {{ project.title }}
            </p>

            <p class="text-white text-base lg:text-lg line-clamp-3">
              {{ project.desc }}
            </p>

            <div class="flex gap-2 flex-wrap">
              <Tag
                  v-for="tag in project.tags"
                  :key="tag"
                  :title="tagLabels[tag]"
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
    </div>
  </section>
</template>

<script>
import { projects } from '~/data/projects'


export default {
  name: 'ProjectsPage',
  data() {
    return {
      selected: 'all',
      projects: projects,
      tagLabels: {
        vitrine: 'Vitrine',
        ecommerce: 'E-commerce',
        maquette: 'Maquette',
        wordpress: 'WordPress',
        'ux-ui': 'UX/UI'
      }
    }
  },
  computed: {
    filters() {
      var tags = []

      this.projects.forEach(function (project) {
        project.tags.forEach(function (tag) {
          if (tags.indexOf(tag) === -1) {
            tags.push(tag)
          }
        })
      })

      return ['all'].concat(tags)
    },
    filteredProjects() {
      if (this.selected === 'all') {
        return this.projects
      }

      return this.projects.filter((project) => {
        return project.tags.indexOf(this.selected) !== -1
      })
    }
  }
}
</script>