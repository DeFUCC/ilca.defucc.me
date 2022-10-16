<script setup>
import { lettersToNum, numToLetters, colorize, cleanLetters } from '../use/ilca';

const number = ref(0)
const letters = ref('')


function convertNL(n) {
	letters.value = numToLetters(n)
}

function convertLN(l) {
	number.value = lettersToNum(l)
}

watch(letters, l => {
	letters.value = cleanLetters(l)
})

watch(number, n => {
	if (n < 0)
		number.value = 0
})

</script>

<template lang="pug">
main.p-2.md-p-4.flex.flex-col.gap-8.p-4.items-center
	.text-xl Convert numbers and letters 
	input.text-5xl.font-bold.p-2(
		v-model.number="number"
		type="number"
		@input="convertNL($event.target.value)"
		)
	input.text-5xl.p-2(
		v-model="letters" 
		@input="convertLN($event.target.value)"
		:style="{backgroundColor: colorize(letters)}"
		)
</template>
