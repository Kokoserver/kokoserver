<script setup>
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
        class="relative flex flex-col justify-center items-center gap-6 md:gap-5 md:hidden"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-20 w-96 overflow-hidden rounded-md">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="font-light text-gray-100 text-center md:text-left">
              <div
                class="flex flex-col items-center border-gray-600 rounded-lg md:flex-row md:max-w-xl"
              >
                <img
                  class="object-cover rounded-t-lg w-[10rem]"
                  src="/clients/Imisi-navy-1170x498.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="hidden duration-700 w-full ease-in-out"
            data-carousel-item
          >
            <div class="font-light text-center md:text-left">
              <div
                class="flex flex-col items-center border-gray-600 rounded-lg md:flex-row md:max-w-xl"
              >
                <img
                  class="object-cover rounded-t-lg w-[10rem]"
                  src="/clients/FINAL-GOLD.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="hidden duration-700 w-full ease-in-out"
            data-carousel-item
          >
            <div class="font-light text-center md:text-left">
              <div
                class="flex flex-col items-center border-gray-600 rounded-lg md:flex-row md:max-w-xl"
              >
                <img
                  class="object-cover rounded-t-lg w-[10rem]"
                  src="/clients/logo-slant-e1662252738309.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="hidden duration-700 w-full ease-in-out"
            data-carousel-item
          >
            <div class="font-light text-center md:text-left">
              <div
                class="flex flex-col items-center border-gray-600 rounded-lg md:flex-row md:max-w-xl"
              >
                <img
                  class="object-cover rounded-t-lg w-[10rem]"
                  src="/clients/logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="hidden duration-700 w-full ease-in-out"
            data-carousel-item
          >
            <div class="font-light text-center md:text-left">
              <div
                class="flex flex-col items-center border-gray-600 rounded-lg md:flex-row md:max-w-xl"
              >
                <img
                  class="object-cover rounded-t-lg w-[10rem]"
                  src="/clients/project-enable-logo-png.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="hidden duration-700 w-full ease-in-out"
            data-carousel-item
          >
            <div class="font-light text-center md:text-left">
              <div
                class="flex flex-col items-center border-gray-600 rounded-lg md:flex-row md:max-w-xl"
              >
                <img
                  class="object-cover rounded-t-lg w-[10rem]"
                  src="/clients/stanforteedge-logo-trans.png"
                  alt=""
                />
              </div>
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
      <div class="hidden grid-cols-2 md:grid-cols-3 md:grid gap-6">
        <img
          src="/clients/Imisi-navy-1170x498.png"
          alt=""
          class="w-24 object-cover"
        />
        <img src="/clients/FINAL-GOLD.png" alt="" class="w-24 object-cover" />
        <img
          src="/clients/logo-slant-e1662252738309.png"
          alt=""
          class="w-24 object-cover"
        />
        <img src="/clients/logo.png" alt="" class="w-24 object-cover" />
        <img
          src="/clients/project-enable-logo-png.png"
          alt=""
          class="w-24 object-cover"
        />
        <img
          src="/clients/stanforteedge-logo-trans.png"
          alt=""
          class="w-24 object-cover"
        />
      </div>
    </div>
  </section>
</template>
