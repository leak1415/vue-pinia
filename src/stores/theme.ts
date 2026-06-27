import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('themeStore', () => {
  const darkMode = ref(false)

  function toggleTheme() {
    darkMode.value = !darkMode.value
  }

  return {
    darkMode,
    toggleTheme,
  }
})
