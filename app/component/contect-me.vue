<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  img: string
  type: string
  info: string
}>()

const isEmail = computed(() =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.info)
)

const isPhone = computed(() =>
    /^[+]?[\d\s().-]{6,}$/.test(props.info)
)

const link = computed(() => {
  if (isEmail.value) return `mailto:${props.info}`
  if (isPhone.value) return `tel:${props.info.replace(/\s/g, '')}`
  return null
})
</script>

<template>
  <div class="group flex p-7 border border-white/40 hover:border-lavand rounded-2xl gap-3 w-full h-30 items-center hover:bg-gradient-to-r hover:from-lavand/15 hover:to-turq/15">
    <img class="text-lavand md:size-18 size-13" :src="img" :alt="type" />

    <div class="flex flex-col gap-2">
      <p class="text-white/70 text-xl">{{ type }}</p>

      <!-- si email ou tel -->
      <a
          v-if="link"
          :href="link"
          class="text-white md:text-2xl text-lg group-hover:text-lavand transition-colors"
      >
        {{ info }}
      </a>

      <!-- sinon texte normal -->
      <p
          v-else
          class="text-white md:text-2xl text-lg group-hover:text-lavand"
      >
        {{ info }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>