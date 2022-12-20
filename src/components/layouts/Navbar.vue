<script setup>
import Logo from "@/assets/logo.svg"
import { RouterLink } from "vue-router"
const props = defineProps({
  navMenu: {
    type: Array,
    default: [
      { name: "about me", url: "/#aboutMe" },
      { name: "services", url: "/#services" },
      { name: "Portfolio", url: "/#portfolio" },
    ],
  },
})
</script>
<template>
  <header class="fixed min-w-full md:absolute top-0">
    <nav
      class="bg-white h-16 md:mt-3 border-gray-200 md:border-none px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 border-b relative"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto h-full"
      >
        <RouterLink to="/" class="flex items-center">
          <img
            :src="Logo"
            class="h-12 mr-3 md:mr-12 sm:h-12"
            alt="kokoserver Logo"
          />
        </RouterLink>
        <div class="flex md:order-2">
          <RouterLink
            :to="{name:'contact', params:{q:'contacting'} }"
            type="button"
            class="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-3 capitalize text-center mr-3 md:mr-0"
          >
            say hello
          </RouterLink>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:mr-auto"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col p-4 border border-gray-100 rounded-lg text-gray-50 md:text-gray-primary md:hover:font-semibold bg-primary md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 absolute md:relative top-[4rem] left-0 right-0 md:top-0 w-full md:w-auto"
          >
            <li v-for="link in props.navMenu">
              <RouterLink
                :to="link.url"
                class="block py-3 pl-3 pr-4 text-gray-50 md:text-primary hover:text-primary hover:bg-gray-50 rounded md:rounded-none md:hover:text-gray-50 md:hover:font-medium capitalize md:hover:bg-[url('/linkBg.svg')] md:h-full md:w-full md:bg-cover md:bg-no-repeat md:transition-[hover] duration-300"
                >{{ link.name }}</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
