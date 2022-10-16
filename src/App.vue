<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template lang="pug">
header.text-center.flex.flex-col.items-center
  .flex.flex-col.leading-none.gap-0.text-center.p-4
    .text-30vw.mx-auto.font-bold ILCA
    .text-8vw.leading-tight International Letter 
      RouterLink(to="/") Count 
      span and 
      RouterLink(to="/about") Account
RouterView
</template>

<style scoped>

</style>
