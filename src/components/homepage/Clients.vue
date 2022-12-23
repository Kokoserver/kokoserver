<script setup>
import HeroImage from "@/assets/hero-img.svg"
import RightArrowIcon from "@/assets/rightArrowIcon.svg"
import LeftArrow from "@/assets/leftArrow.svg"
</script>
<template>
  <section class="my-10" id="client">
    <div class="container space-y-9 flex items-center justify-center flex-col">
      <h1 class="text-2xl font-semibold w-96 text-center">
        I'm proud to have collaborated with some awesome companies:
      </h1>
      <div
        id="animation-carousel"
        class="relative flex flex-col justify-center gap-6 md:gap-5 md:hidden"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-52 w-96 overflow-hidden rounded-md">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="font-light text-gray-100 text-center md:text-left">
              <img :src="HeroImage" alt="" srcset="" class="w-full" />
            </div>
          </div>
          <div
            class="hidden duration-700 w-full ease-in-out"
            data-carousel-item
          >
            <div class="font-light text-center md:text-left">
              <img :src="HeroImage" alt="" srcset="" class="w-full" />
            </div>
          </div>
          <div
            class="hidden duration-700 w-full ease-in-out"
            data-carousel-item
          >
            <div class="font-light text-center md:text-left">
              <img :src="HeroImage" alt="" srcset="" class="w-full" />
            </div>
          </div>
        </div>
        <!-- Slider controls -->
        <div class="flex justify-center w-full items-center gap-8">
          <img :src="LeftArrow" alt="" class="h-8 w-8" data-carousel-prev />
          <img
            :src="RightArrowIcon"
            alt=""
            class="h-8 w-8"
            data-carousel-next
          />
        </div>
      </div>
      <div class="hidden grid-cols-2 md:grid-cols-3 md:grid">
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
