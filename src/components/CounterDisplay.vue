<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { count } = storeToRefs(store)
</script>

<template>
<h1>{{ count }}</h1>
</template>