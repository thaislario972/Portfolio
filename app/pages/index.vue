<script setup lang="ts">

</script>

<template >
  <section class="bg-black">
    <div class="h-screen bg-gradient-to-br from-lavand/15 via-black to-turq/20 md:flex md:justify-center md:items-center md:h-screen sm:h-[calc(100vh-6rem)] sm:flex sm:justify-center sm:items-center" >
      <!-- calque lumières -->
      <div class="absolute inset-0 pointer-events-none">
        <span class="light absolute top-18 left-[20%] color-lavand animation-delay-4000"></span>
        <span class="light2 absolute top-1/3 right-[20%] animation-delay-2000"></span>
      </div>

      <!-- contenu -->
      <div class="relative z-10 px-8 py-[10%] text-white flex flex-col items-center">
        <p class="w-70 rounded-full h-10 bg-white/10 text-center flex justify-center items-center border-1 border-lavand mb-5">Designer & Développeur Web</p>
        <h1 class="lg:text-9xl mb-4 text-center text-white/90 md:text-8xl sm:text-7xl ">Créatrice <br> d'Expériences <br> Digitales</h1>
        <p class="text-2xl w-200 text-center text-white/70 mt-10 sm:text-lg sm:w-150">Je conçois et développe des interfaces web modernes, intuitives et engageantes qui transforment vos idées en réalité digitale.</p>
        <div class="mt-20 gap-10 flex">
          <button class="w-70  rounded-lg h-15 bg-linear-to-r from-lavand to-turq text-xl hover:from-lavand/90 hover:to-turq/90"><NuxtLink to="/mes-projets">Découvrir mes projets</NuxtLink></button>
          <button class="w-50 h-15 bg-black/10 border-2 border-white/5 rounded-lg text-xl hover:bg-neutral-800/40"><NuxtLink to="/contact">Me contacter</NuxtLink></button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full bg-stone-950 p-10">
      <p class="text-white text-xl">Ce que je fais</p>
      <p class="text-white/70 text-lg mt-10 sm:text-center">Je combine design et développement pour créer des solutions digitales complètes</p>
      <div class="mt-10 flex lg:flex-row md:flex-row sm:flex-col lg:gap-10 md:gap-10 flex-col sm:gap-5">
        <div class=" flex flex-col lg:h-60 md:w-[33%] md:h-65 sm:w-full sm:h-60 place-content-around md:p-5 p-10 border-1 border-white/50 bg-radial from-lavand/0 to-lavand/0 hover:from-lavand/40 hover:via-lavand/20 hover:to-lavand/0 rounded-xl hover:border-lavand hover:relative hover:bottom-2">
          <img src="/img/Icon1.png" alt="icon" class="size-18">
          <p class="text-white">Design Créatif</p>
          <p class="text-white/80">Des interfaces visuellement captivantes et modernes.</p>
        </div>
        <div class="flex flex-col lg:h-60 md:w-[33%] md:h-65 sm:w-full sm:h-60 place-content-around md:p-5 p-10 border-1 border-white/50 bg-radial from-lavand/0 to-lavand/0 hover:from-turq/40 hover:via-turq/20 hover:to-turq/0 rounded-xl hover:border-turq hover:relative hover:bottom-2 ">
          <img src="/img/Icon2.png" alt="icon" class="size-18">
          <p class="text-white">UX/UI Expert</p>
          <p class="text-white/80">Expériences utilisateur intuitives et engageantes</p>
        </div>
        <div class=" flex flex-col lg:h-60 md:w-[33%] md:h-65 sm:w-full sm:h-60 place-content-around md:p-5 p-10 border-1  border-white/50 rounded-xl bg-radial from-lavand/0 to-lavand/0 hover:from-lavand/40 hover:via-lavand/20 hover:to-lavand/0 rounded-xl hover:border-lavand hover:relative hover:bottom-2">
          <img src="/img/Icon3.png" alt="icon" class="size-18" />
          <p class="text-white">Code Propre</p>
          <p class="text-white/80">Développement web avec les meilleures pratiques</p>
        </div>
      </div>
    </div>
    <div class="w-full h-80 flex flex-col justify-center items-center gap-y-10 bg-linear-to-r from-lavand/20 to-turq/20">
      <p class="text-white text-xl">Prêt à démarrer votre projet ?</p>
      <p class="text-white/80 text-lg">Discutons ensemble de votre vision et donnons vie à vos idées</p>
      <button class="w-70  rounded-lg h-15 bg-linear-to-r from-lavand to-turq text-xl hover:from-lavand/90 hover:to-turq/90 text-white font-medium"> <NuxtLink to="/contact">Démarrer une conversation</NuxtLink></button>
    </div>
  </section>
</template>

<style scoped>

</style>