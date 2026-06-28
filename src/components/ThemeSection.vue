<template>
  <section class="exercise">
    <div class="ex-header">
      <span class="ex-badge">Exercise 5</span>
      <h2>Theme Store</h2>
      <p class="ex-desc">
        Global dark/light mode via <code>darkMode</code> state and <code>toggleTheme()</code> action.
      </p>
    </div>

    <div class="theme-demo">
      <!-- Mini preview window -->
      <div class="theme-preview" :class="themeStore.darkMode ? 'preview-dark' : 'preview-light'">
        <div class="preview-header">
          <div class="preview-dots"><span></span><span></span><span></span></div>
          <span class="preview-title">Preview</span>
        </div>
        <div class="preview-body">
          <div class="preview-bar w-2-3"></div>
          <div class="preview-bar w-1-2"></div>
          <div class="preview-bar w-3-4"></div>
        </div>
      </div>

      <!-- Controls -->
      <div class="theme-controls">
        <div class="theme-status">
          <span class="theme-icon">{{ themeStore.darkMode ? '🌙' : '☀️' }}</span>
          <div>
            <div class="theme-mode">{{ themeStore.darkMode ? 'Dark Mode' : 'Light Mode' }}</div>
            <div class="theme-sub">darkMode: <code>{{ themeStore.darkMode }}</code></div>
          </div>
        </div>
        <button
          :class="['btn', 'btn-xl', themeStore.darkMode ? 'btn-warning' : 'btn-dark']"
          @click="themeStore.toggleTheme()"
        >
          {{ themeStore.darkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useThemeStore } from '../stores/themeStore'

const themeStore = useThemeStore()
</script>