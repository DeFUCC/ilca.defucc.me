<script setup>
const lists = useStorage('my-store', {})
const title = ref('')
</script>

<template lang="pug">
.p-4.flex.flex-col.gap-2
  h1.text-2xl.font-bold My lists
  .flex.flex-col.gap-2 
    .p-2.flex(v-for="(title,key) in lists" :key="title") 
      router-link.text-xl(:to="`/account/${title}`") {{title}}
      .flex-1
      button(@click="lists.splice(key,1)")
        .i-la-times
  .flex.gap-2.my-4
    input.flex-auto.bg-light-900.bg-opacity-20.p-2.rounded-xl(v-model="title")
    button.py-2.px-4.text-2xl.rounded-xl.bg-light-900.bg-opacity-20.active-bg-light-100.transition(@click="lists[++count] = title; title=''") +
</template>

<style scoped>

</style>
