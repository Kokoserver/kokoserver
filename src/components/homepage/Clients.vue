<script setup>
import HeroImage from "@/assets/hero-img.svg"
</script>
<template>
  <section class="my-10" id="client">
    <div class="container space-y-9 flex items-center justify-center flex-col">
      <h1 class="text-2xl font-semibold w-96 text-center">
        I'm proud to have collaborated with some awesome companies:
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3">
        <img :src="HeroImage" alt="" class="w-40 h-40" />
        <img :src="HeroImage" alt="" class="w-40 h-40" />
        <img :src="HeroImage" alt="" class="w-40 h-40" />
        <img :src="HeroImage" alt="" class="w-40 h-40" />
        <img :src="HeroImage" alt="" class="w-40 h-40" />
        <img :src="HeroImage" alt="" class="w-40 h-40" />
      </div>
    </div>
  </section>
</template>
