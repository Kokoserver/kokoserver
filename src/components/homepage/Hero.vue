<script setup>
import HeroImage from "@/assets/hero-img.svg"
import facebookIcon from "@/assets/facebookIcon.svg"
import linkedinIcon from "@/assets/linkedinIcon.svg"
import githubIcon from "@/assets/githubIcon.svg"
import mailIcon from "@/assets/mailIcon.svg"
</script>

<template>
  <section class="my-20">
    <div class="">
      <div
        class="container gap-10 items-center justify-center place-content-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16"
      >
        <div class="flex flex-col gap-8">
          <img
            class="w-full dark:hidden"
            :src="HeroImage"
            alt="dashboard image"
          />
          <div class="flex items-center justify-center space-x-5">
            <!-- <a href="#">
              <img :src="facebookIcon" alt="" />
            </a> -->
            <a href="https://linkedin.com/owonikoko-olaoluwa">
              <img :src="linkedinIcon" alt="" />
            </a>
            <a href="https://www.github.com/kokoserver">
              <img :src="githubIcon" alt="" />
            </a>
            <a href="mailto:owonikokoolaoluwa@hotmail.com">
              <img :src="mailIcon" alt="" />
            </a>
          </div>
        </div>

        <div class="mt-4 md:mt-0 text-center md:text-left pt-10">
          <p class="font-light text-gray-500 md:text-lg dark:text-gray-400">
            hello i'm a
          </p>
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-primary dark:text-gray-50 capitalize"
          >
            fullstack Developer
          </h2>
          <p
            class="mb-6 font-light text-gray-500 md:text-lg md:w-96 dark:text-gray-400"
          >
            Hi, I’m Owonikoko Olaoluwa, a passionate fullstack developer based
            in Lagos, Nigeria, welcome to my world
          </p>
          <div class="space-x-5">
            <a
              href="/contact/?q=hire"
              class="inline-flex items-center text-gray-50 bg-primary hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Hire me
            </a>
            <button
              type="button"
              class="inline-flex items-center text-primary bg-transparent border-2 border-primary hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Download Resume (30kb)
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
