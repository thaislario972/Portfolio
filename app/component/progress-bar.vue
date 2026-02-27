<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  label: string
  value: number // 0..100
}>()

const loaded = ref(false)

onMounted(() => {
  // petit délai pour laisser le DOM se peindre, puis animation
  requestAnimationFrame(() => {
    loaded.value = true
  })
})

const width = computed(() => (loaded.value ? `${props.value}%` : '0%'))
</script>

<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between">
      <p class="text-white/90 text-base">{{ label }}</p>
      <p class="text-white/60 text-sm tabular-nums">{{ value }}%</p>
    </div>

    <div class="h-2 w-full rounded-full bg-white/10 overflow-hidden">
      <div
          class="h-full rounded-full
               bg-gradient-to-r from-violet-500 via-sky-400 to-cyan-300
               transition-[width] duration-1000 ease-out"
          :style="{ width }"
      />
    </div>
  </div>
</template>

<style scoped>

</style>