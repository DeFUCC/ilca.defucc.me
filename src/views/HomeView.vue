<script setup>
const qna = {
	"What is ILCA?": "It's a system for using letters for duodecimal counting and unique items accounting.",
	"What letters are used?": "It's the 12 letters that are common in English and Cyrillic alphabets. This is the list: ABCEHKMOPTXY.",
	"When is it useful?": "Numbers are convenient, but sequential and fungible. If we need to assign some identifiers to a list of unique items, we can use plain numbers, but it pulls along the significance of the order and interchangeability of the items. But if we just have a bunch of tools, tables or even people - it's better to have letters assigned to them, then numbers."
}
</script>

<template lang='pug'>
.p-4.flex.flex-col.gap-2.items-center.max-w-60ch.mx-auto
	.text-3xl.font-bold.w-full Welcome!
	.flex.flex-col.gap-2(v-for="(a,q) in qna" :key="q")
		.text-xl.font-bold {{q}}
		.text-md  {{a}}


</template>