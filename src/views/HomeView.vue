<script setup>
import { lettersToNum, numToLetters, colorize } from '../use/ilca';

const number = ref(0)
const letters = ref('')

watch(number, n => {
	letters.value = numToLetters(n)
})



</script>

<template lang="pug">
main.p-2.md-p-4.flex.flex-col.gap-2
	.text-xl Convert numbers and letters 
	input.text-xl.font-bold.p-2(v-model="number" type="number")
	input.text-xl.p-2(v-model="letters" :style="{backgroundColor: colorize(letters)}")
</template>
