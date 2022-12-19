<script setup>
import { RouterView } from "vue-router"

import Navbar from "./components/layouts/Navbar.vue"
import Footer from "./components/layouts/Footer.vue"
</script>

<template>
  <Navbar />
  <main><RouterView /></main>
  <Footer />
</template>
