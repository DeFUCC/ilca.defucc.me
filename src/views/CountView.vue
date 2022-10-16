<script setup>
import { lettersToNum, numToLetters, colorize, cleanLetters } from '../use/ilca';

const number = ref(1)
const letters = ref('A')


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
	if (n < 1)
		number.value = 1
})

</script>

<template lang="pug">
main.p-2.md-p-4.flex.flex-col.gap-2.p-4
	.text-xl Convert numbers and letters 
	input.text-5xl.p-2(
		v-model.number="number"
		type="number"
		@input="convertNL($event.target.value)"
		)

	input.text-5xl.p-2.font-bold(
		v-model="letters" 
		@input="convertLN($event.target.value)"
		:style="{color: colorize(letters)}"
		)
	.flex.gap-2.w-full
		button(@click="convertNL(--number)") -
		button(@click="convertNL(++number)") +
</template>

<style scoped>
input {
	--at-apply: bg-light-900/10 rounded-xl;
}

button {
	--at-apply: flex-1 bg-light-900/10 rounded-xl p-4 text-5xl active-bg-light-900/30 transition;
}
</style>
