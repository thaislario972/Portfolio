<script setup lang="ts">
const props = defineProps<{
  year : string,
  title: string
  descr: string // 0..100
}>()
</script>

<template>
  <div class="flex md:gap-10 gap-5 group w-full justify-center">
    <div class="flex flex-col justify-center items-center h-40 lg:h-45 md:h-50 sm:h-55">
      <div class="w-5 h-5 rounded-full bg-linear-to-r  from-lavand to-turq"></div>
      <div class="w-[2px] h-full bg-lavand/60 group-hover:bg-lavand "></div>
    </div>
    <div class="flex flex-col p-7 border border-white/40 group-hover:border-lavand rounded-2xl md:gap-3 gap-1 w-[85%] md:w-[70%] sm:w-[80%] h-40 lg:h-45 md:h-50 sm:h-55 justify-center">
      <p class="text-lavand">{{ year }}</p>
      <p class="text-white md:text-2xl text-lg">{{title}} </p>
      <p class="text-white/70 md:text-xl text-md">{{descr}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>