<script setup>
import { RouterLink } from "vue-router"
</script>
<template id="conversation">
  <section class="bg-primary mb-20 p-10 md:p-20">
    <div
      class="container flex flex-col justify-center items-center text-gray-50"
    >
      <h3 class="text-gray-50 text-2xl mb-5">Start a project</h3>
      <p class="mb-10 text-center">
        Interested in working together? We should queue up a chat. I’ll buy the
        coffee.
      </p>
      <RouterLink
        :to="{ name: 'contact', query: { q: 'chatting' } }"
        class="inline-flex items-center text-gray-50 bg-transparent border-2 border-gray-50 hover:bg-primary-800 focus:ring focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Start a conversation
      </RouterLink>
    </div>
  </section>
</template>
