<script setup>
import TestimonialDesign from "@/assets/testimonialDesign.svg"
import RightArrowIcon from "@/assets/rightArrowIcon.svg"
import LeftArrow from "@/assets/leftArrow.svg"
</script>

<template>
  <section class="mb-20" id="testimonials">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 px-10 md:px-20"
    >
      <div class="hidden md:flex">
        <img :src="TestimonialDesign" alt="" class="flex" />
      </div>

      <div
        id="animation-carousel"
        class="relative flex flex-col justify-center gap-6 md:gap-1"
        data-carousel="static"
      >
        <h1
          class="text-primary text-3xl text-center md:text-left capitalize font-semibold mb-5"
        >
          testimonials
        </h1>
        <!-- Carousel wrapper -->
        <div class="relative md:w-3/4 h-36 overflow-hidden rounded-md">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="font-light text-center md:text-left">
              <p class="text-gray-600 pb-1 font-medium capitalize">
                Abdullahi Habeeb | CEO, Habs Creative
              </p>
              “Owonikoko was a real pleasure to work with and we look forward to
              working with him again. He’s definitely the kind of developer you
              can trust with a project from start to finish.”
            </div>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="font-light text-center md:text-left">
              <p class="text-gray-600 pb-1 font-medium capitalize">
                Abdullahi Habeeb | CEO, Habs Creative
              </p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              vero vel nam, nobis ex quidem libero soluta eum consequuntur
              necessitatibus harum atque nihil amet fugit dolorum cum. Eligendi,
              iusto veritatis?.”
            </div>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="font-light text-center md:text-left">
              <p class="text-gray-600 pb-1 font-medium capitalize">
                Abdullahi Habeeb | CEO, Habs Creative
              </p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium modi commodi saepe neque aut expedita officiis, rerum
              necessitatibus cum, atque nostrum quam omnis pariatur! Laboriosam
              sapiente adipisci reiciendis? Minus aperiam quos ducimus est.
              Tempora, natus!.”
            </div>
          </div>
        </div>
        <!-- Slider controls -->
        <div class="flex justify-center md:justify-start items-center gap-8">
          <img :src="LeftArrow" alt="" class="h-8 w-8" data-carousel-prev />
          <img
            :src="RightArrowIcon"
            alt=""
            class="h-8 w-8"
            data-carousel-next
          />
        </div>
      </div>
    </div>
  </section>
</template>
