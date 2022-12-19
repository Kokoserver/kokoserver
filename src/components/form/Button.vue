<script setup>
const props = defineProps({
  url: {
    type: String,
    default: "#",
    required: false,
  },

  link: {
    type: Boolean,
    required: false,
  },

  type: {
    type: String,
    default: "button" | "submit" | "reset",
    required: false,
  },

  outline: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <a
    v-if="props.link"
    :href="props.url"
    class="inline-flex items-center text-gray-50 bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  >
    <slot></slot>
  </a>
  <button
    v-if="!props.link"
    :type="type"
    class="inline-flex items-center text-gray-50 bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    :class="{
      ['bg-transparent !text-primary  border-2 border-primary hover:bg-primary hover:!text-gray-50']:
        props.outline,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
