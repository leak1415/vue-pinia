<template>
  <section class="exercise">
    <div class="ex-header">
      <span class="ex-badge">Exercise 1</span>
      <h2>Counter Store</h2>
      <p class="ex-desc">Demonstrates <code>state</code>, <code>actions</code>, and <code>getters</code>.</p>
    </div>

    <div class="card-grid-2">
      <div class="card stat-card">
        <div class="stat-label">Current Count</div>
        <div :class="['stat-value', counterStore.count > 0 ? 'positive' : counterStore.count < 0 ? 'negative' : '']">
          {{ counterStore.count }}
        </div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">Double Count <span class="getter-tag">getter</span></div>
        <div class="stat-value accent">{{ counterStore.doubleCount }}</div>
      </div>
    </div>

    <div class="btn-row">
      <button class="btn btn-success" @click="counterStore.increment()">＋ Increment</button>
      <button class="btn btn-danger"  @click="counterStore.decrement()">－ Decrement</button>
      <button class="btn btn-ghost"   @click="counterStore.reset()">↺ Reset</button>
    </div>

    <div class="code-chip">
      <code>counterStore.count = {{ counterStore.count }} · doubleCount = {{ counterStore.doubleCount }}</code>
    </div>
  </section>
</template>

<script setup>
import { useCounterStore } from '../stores/counterStore'

const counterStore = useCounterStore()
</script>