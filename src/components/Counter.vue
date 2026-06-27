<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
</script>

<template>
  <section class="panel">
    <div class="panel-head">
      <p class="panel-kicker">Exercise 1</p>
      <h2>Counter Store</h2>
    </div>

    <dl class="metrics-grid">
      <div class="metric">
        <dt>Current count</dt>
        <dd>{{ count }}</dd>
      </div>

      <div class="metric">
        <dt>Double count</dt>
        <dd>{{ doubleCount }}</dd>
      </div>
    </dl>

    <div class="button-row">
      <button class="button primary" type="button" @click="counterStore.increment">
        Increment
      </button>
      <button class="button" type="button" @click="counterStore.decrement">
        Decrement
      </button>
      <button class="button ghost" type="button" @click="counterStore.reset">
        Reset
      </button>
    </div>
  </section>
</template>
