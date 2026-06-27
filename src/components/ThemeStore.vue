<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const label = computed(() => (themeStore.darkMode ? 'Dark Mode' : 'Light Mode'))
</script>

<template>
  <section class="panel">
    <div class="panel-head">
      <p class="panel-kicker">Exercise 5</p>
      <h2>Theme Store</h2>
    </div>

    <div class="theme-card" :class="{ dark: themeStore.darkMode }">
      <p class="theme-label">Current mode</p>
      <strong>{{ label }}</strong>
      <span class="theme-swatch" />
    </div>
  </section>
</template>
