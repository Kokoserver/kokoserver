<script setup>
import frontEndIcon from "@/assets/frontEndIcon.svg"
import backEndIcon from "../../assets/backEndIcon.svg"
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
        <a
          href="/contact/?q=backend"
          class="inline-flex items-center text-gray-50 hover:underline"
        >
          hire me
          <svg
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            ></path>
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            ></path>
          </svg>
        </a>
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
        <a
          href="/contact/?q=backend"
          class="inline-flex items-center text-gray-50 hover:underline"
        >
          hire me
          <svg
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            ></path>
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            ></path>
          </svg>
        </a>
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
        <a
          href="/contact/?q=database_Design"
          class="inline-flex items-center text-gray-50 hover:underline"
        >
          hire me
          <svg
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            ></path>
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            ></path>
          </svg>
        </a>
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
        <a
          href="/contact/?q=research"
          class="inline-flex items-center text-gray-50 hover:underline"
        >
          hire me
          <svg
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            ></path>
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
