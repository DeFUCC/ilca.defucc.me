<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template lang="pug">
header.text-center.flex.flex-col.items-center
  .flex.flex-col.leading-none.gap-0.text-center.p-4
    .text-30vw.mx-auto.font-bold ILCA
    .text-8vw.leading-tight International Letter 
      RouterLink(to="/") Count
      span &nbsp;and&nbsp;
      RouterLink(to="/account") Account
RouterView
</template>

<style scoped>
.router-link-active {
  --at-apply: bg-light-900/30;
}
</style>
