<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { count, doubleCount } = storeToRefs(store)

const { increment, decrement } = store
</script>

<template>

<h2>Counter : {{ count }}</h2>

<h2>Double : {{ doubleCount }}</h2>

<button @click="increment">
+
</button>

<button @click="decrement">
-
</button>

</template>