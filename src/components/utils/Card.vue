<script setup>
props = defineProps({
  backgroundDark: {
    type: Boolean,
    default: false,
  },
  backgroundLight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="max-w-sm p-6 bg-primary text-gray-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center md:text-left"
  >
    <div>
      <slot name="icon"></slot>
    </div>

    <div>
      <slot name="title"></slot>
    </div>
    <p class="mb-3 font-normal text-gray-400">
      <span><slot name="body"></slot></span>
    </p>
    <slot name="body"></slot>
    <slot name="link"><!-- optional fallback --></slot>
  </div>
</template>
