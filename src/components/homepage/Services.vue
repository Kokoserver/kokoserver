<script setup>
import { RouterLink } from "vue-router"
import frontEndIcon from "@/assets/frontEndIcon.svg"
import backEndIcon from "@/assets/serviceBackEndIcon.svg"
import databaseDesignIcon from "@/assets/databaseDesignIcon.svg"
import projectResearchIcon from "@/assets/projectResearchIcon.svg"
</script>

<template>
  <section class="mb-20 space-y-5" id="services">
    <h1
      class="text-primary text-3xl text-center capitalize font-semibold my-20"
    >
      Services
    </h1>
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <div
        class="max-w-sm p-6 bg-primary text-gray-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center md:text-left"
      >
        <img
          :src="frontEndIcon"
          alt=""
          class="w-10 h-10 mb-2 inline-block md:flex"
        />

        <h5
          class="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white"
        >
          Front-End development
        </h5>

        <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </div>

      <div
        class="max-w-sm p-6 bg-primary text-gray-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center md:text-left"
      >
        <img
          :src="backEndIcon"
          alt=""
          class="w-10 h-10 mb-2 inline-block md:flex"
        />

        <h5
          class="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white"
        >
          Back-End development
        </h5>

        <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <div
        class="max-w-sm p-6 bg-primary text-gray-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center md:text-left"
      >
        <img
          :src="databaseDesignIcon"
          alt=""
          class="w-10 h-10 mb-2 inline-block md:flex"
        />

        <h5
          class="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white"
        >
          Database Design
        </h5>

        <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </div>
      <div
        class="max-w-sm p-6 bg-primary text-gray-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center md:text-left"
      >
        <img
          :src="projectResearchIcon"
          alt=""
          class="w-10 h-10 mb-2 inline-block md:flex"
        />

        <h5
          class="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white"
        >
          Project Research
        </h5>

        <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </div>
    </div>
  </section>
</template>
