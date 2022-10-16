<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template lang="pug">
header.text-center.flex.flex-col.items-center
  .flex.flex-col.leading-none.gap-0.text-center.p-4
    .text-30vw.mx-auto.font-bold ILCA
    .text-8vw.leading-tight International Letter Count and Account
  .flex.gap-2.justify-center
    RouterLink(to="/")
      | Home
    RouterLink(to="/about")
      | About
RouterView
</template>

<style scoped>

</style>
