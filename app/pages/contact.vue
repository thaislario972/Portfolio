<script setup lang="ts">


import ContectMe from "~/component/contect-me.vue";

const contact= [
  {
    img: '/img/Contact3.png',
    type: 'Email',
    info: 'thais.lario@hotmail.com',
  },
  {
    img: '/img/Contact2.png',
    type: 'Téléphone',
    info: '+33 7 82 18 48 98',
  },
  {
    img: '/img/Contact1.png',
    type: 'Localisation',
    info: 'Alsace, France',
  },
]
</script>

<template>
  <section class="bg-black min-h-svh bg-gradient-to-br from-lavand/25 via-black to-turq/25 flex flex-col justify-evenly">
    <div class="flex flex-col md:h-5 h-80 md:pt-0 pt-20 mt-20 justify-center items-center gap-y-5 ">
      <h2 class="text-white md:text-5xl text-4xl ">Contactez-moi</h2>
      <p class="text-white/90 md:text-xl text-lg text-center w-[80%] lg:w-[60%]">N'hésitez pas à me contacter pour toutes questions</p>
    </div>
    <div class=" flex flex-col items-center gap-5 h-fit pb-10 ">
      <div class="flex flex-col xl:w-[50%] lg:w-[60%] md:w-[70%] w-[90%] gap-2 p-10 mt-20 rounded-xl border border-lavand/50">
        <p class="text-white text-2xl">Restons en contact</p>
        <p class="text-white/70 md:text-xl text-md">Ce portfolio présente une sélection de mes travaux et de mon parcours. Les informations ci-dessous sont à disposition pour
          toute question, échange ou demande d’information complémentaire autour de ces réalisations.</p>
      </div>
      <div class="flex flex-col xl:w-[50%] lg:w-[60%] md:w-[70%] w-[80%]  gap-5 ">
          <contect-me
          v-for="c in contact"
          :img="c.img"
          :type="c.type"
          :info="c.info"
          />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>