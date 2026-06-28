<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <span class="logo-icon">🍍</span>
        <span class="logo-text">Pinia <span class="logo-accent">Exercises</span></span>
      </div>

      <nav class="tabs">
        <RouterLink
          v-for="tab in tabs"
          :key="tab.id"
          :to="'/' + tab.id"
          class="tab"
          active-class="active"
        >
          {{ tab.icon }} {{ tab.label }}
        </RouterLink>
      </nav>

      <button class="theme-btn" @click="themeStore.toggleTheme()">
        {{ themeStore.darkMode ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { useThemeStore } from '../stores/themeStore'

// ✅ no defineProps — tabs and routing are self-contained here
const themeStore = useThemeStore()

const tabs = [
  { id: 'counter', label: 'Counter', icon: '🔢' },
  { id: 'user',    label: 'User',    icon: '👤' },
  { id: 'todo',    label: 'Todo',    icon: '✅' },
  { id: 'cart',    label: 'Cart',    icon: '🛒' },
  { id: 'theme',   label: 'Theme',   icon: '🎨' },
]
</script>