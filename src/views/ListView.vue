<script setup>
import { numToLetters, colorize } from '../use/ilca'

const props = defineProps({
	letters: { type: String, default: 'root' }
})

const list = useStorage(props.letters, {})

const count = computed(() => Object.keys(list.value).length)
const item = ref('')
</script>

<template lang='pug'>
.p-2
	.text-2xl {{letters}}
	.flex.flex-col.gap-2.p-2
		.flex.gap-2 
			.p-2.font-bold(
				:style="{color:colorize(numToLetters(count+1))}"
			) {{numToLetters(count+1)}}
			input.flex-1.p-2.bg-light-900.bg-opacity-20.rounded-xl(v-model="item")
			button.p-2.bg-light-900.bg-opacity-20.rounded-xl(@click="list[numToLetters(count+1)] = item; item=''") ADD ITEM
		.flex(
			v-for="(line,key) in list" :key="line"
			)
			.p-2(
				:style="{backgroundColor:colorize(key)}"
			) {{key}}
			.p-2 {{line}}

	RouterView
</template>