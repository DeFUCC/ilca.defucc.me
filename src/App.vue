<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template lang="pug">
header.text-center.flex.flex-col.items-center
  .flex.flex-col.leading-none.gap-0.text-center.p-4
    router-link.text-30vw.mx-auto.font-bold(to="/") ILCA
    .text-8vw.leading-tight International Letter 
      RouterLink(to="/count") Count
      span &nbsp;and&nbsp;
      RouterLink(to="/account") Account
RouterView.max-w-60ch.mx-auto
</template>

<style scoped>
.router-link-active {
  --at-apply: bg-light-900/30;
}
</style>
