<script setup>
import { useStorage } from "@/lib/compossible/useStorage"
</script>
<template>
  <div class="container my-56 space-y-10">
    <div class="flex justify-center">
      <h1 class="text-center font-medium text-2xl w-2/3 md:w-2/6">
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
    </div>
    <form action="#" class="w-3/4 md:w-2/4 mx-auto">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
          >Name</label
        >
        <input
          type="text"
          id="email"
          class="outline-none bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="John Doe"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Email</label
        >
        <input
          type="email"
          id="subject"
          class="outline-none bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5 focus:border-primary"
          placeholder="example@email.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your message</label
        >
        <textarea
          id="message"
          rows="4"
          class="outline-none bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="Your message..."
        ></textarea>
      </div>
      <div class="flex justify-center items-center">
        <button
          type="submit"
          class="text-white bg-primary hover:shadow-md focus:ring-4 focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none inline-block text-center focus:border-primary"
        >
          Send message
        </button>
      </div>
    </form>
  </div>
</template>
