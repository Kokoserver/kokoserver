<script setup>
import linkedInWhiteIcon from "@/assets/linkedInWhiteIcon.svg"
import gitHubWhiteIcon from "@/assets/gitHubWhiteIcon.svg"

import mailWhiteIcon from "@/assets/mailWhiteIcon.svg"
</script>

<template>
  <footer
    class="mt-20 bg-primary flex justify-center items-center p-6 relative md:h-96 space-y-20 flex-col"
  >
    <div
      class="text-gray-50 flex flex-col md:flex-row items-center text-center md:text-left gap-5 p-4 md:p-10 bg-primary border-2 border-gray-50 rounded-md md:absolute md:-top-10"
    >
      <h1 class="text-xl font-normal">Start a project</h1>
      <p class="text-gray-50">
        Interested in working together? We should queue up a chat. I’ll buy the
        coffee.
      </p>
      <a
        href="/contact/?q=conversation"
        class="inline-flex items-center text-gray-50 bg-transparent border-2 border-gray-50 hover:bg-primary-800 focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
      >
        Start a conversation
      </a>
    </div>
    <div
      class="flex flex-col justify-center items-center gap-10 text-gray-50 mt-40"
    >
      <p class="text-md font-medium w-72 text-center">
        Living, learning, & leveling up one day at a time.
      </p>
      <div class="flex items-center justify-center space-x-5">
        <!-- <a href="#">
          <img :src="phoneIcon" alt="" />
        </a> -->
        <a href="https://www.linkedin.com/owonikoko-olaoluwa">
          <img :src="linkedInWhiteIcon" alt="" />
        </a>
        <a href="https://www.github.com/kokoserver">
          <img :src="gitHubWhiteIcon" alt="" />
        </a>
        <a href="mailto:owonikokoolaoluwa@hotmail.com">
          <img :src="mailWhiteIcon" alt="" />
        </a>
      </div>
      <p class="capitalize">
        Developed by &copy; owonikoko {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>
