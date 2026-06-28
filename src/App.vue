<template>
  <div :class="['app', themeStore.darkMode ? 'dark' : 'light']">
    <AppHeader />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useThemeStore } from './stores/themeStore'
import AppHeader from './components/AppHeader.vue'

const themeStore = useThemeStore()
</script>