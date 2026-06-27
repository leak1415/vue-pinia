<script setup lang="ts">
import { computed, watch } from 'vue'
import { useThemeStore } from './stores/theme'

import Counter from './components/Counter.vue'
import UserProfile from './components/UserProfile.vue'
import TodoList from './components/TodoList.vue'
import ShoppingCard from './components/ShoppingCard.vue'
import ThemeStore from './components/ThemeStore.vue'

const themeStore = useThemeStore()
const themeActionLabel = computed(() =>
  themeStore.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
)

watch(
  () => themeStore.darkMode,
  (isDarkMode) => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
  },
  { immediate: true },
)
</script>

<template>
  <main class="app-shell">
    <header class="page-header">
      <div class="page-copy">
        <p class="eyebrow">Pinia Exercises</p>
        <h1>Vue Pinia Practice Board</h1>
        <p class="lead">
          Counter, user, todo, cart, and theme state working together in one view.
        </p>
      </div>

      <button class="button primary header-button" type="button" @click="themeStore.toggleTheme">
        {{ themeActionLabel }}
      </button>
    </header>

    <section class="workspace">
      <Counter />
      <UserProfile />
      <TodoList />
      <ShoppingCard />
      <ThemeStore />
    </section>
  </main>
</template>

<style>
:root {
  color-scheme: light;
  --page-bg: #f4f7fb;
  --surface-bg: #ffffff;
  --surface-alt: #eef3fa;
  --border-color: #d6deeb;
  --text-color: #182234;
  --muted-color: #5e6a7d;
  --accent: #2563eb;
  --accent-soft: #dbeafe;
  --success: #0f766e;
  --success-soft: #ccfbf1;
  --danger: #b91c1c;
  --danger-soft: #fee2e2;
  --warning: #b45309;
  --warning-soft: #fef3c7;
  --shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

:root[data-theme='dark'] {
  color-scheme: dark;
  --page-bg: #0e1523;
  --surface-bg: #131c2b;
  --surface-alt: #1a2538;
  --border-color: #2a3952;
  --text-color: #e7eefc;
  --muted-color: #a7b4ca;
  --accent: #7dd3fc;
  --accent-soft: #16344a;
  --success: #34d399;
  --success-soft: #12302b;
  --danger: #f87171;
  --danger-soft: #35161a;
  --warning: #fbbf24;
  --warning-soft: #322510;
  --shadow: 0 18px 44px rgba(2, 6, 23, 0.4);
}

* {
  box-sizing: border-box;
}

html {
  background: var(--page-bg);
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--page-bg);
  color: var(--text-color);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

#app {
  min-height: 100vh;
}

.app-shell {
  width: 100%;
  min-height: 100vh;
  padding: 24px;
}

.page-header {
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  width: 100%;
  padding: 20px 0;

  background: var(--page-bg);
  border-bottom: 1px solid var(--border-color);
}

.page-copy {
  min-width: 0;
}

.eyebrow,
.panel-kicker,
.theme-label,
.summary-label,
.field span,
.metric dt,
.info-card dt {
  margin: 0;
  color: var(--muted-color);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  margin-top: 6px;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1.1;
}

.lead {
  margin-top: 10px;
  max-width: 60ch;
  color: var(--muted-color);
}

.workspace {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
}

.panel {
  display: grid;
  gap: 16px;
  padding: 20px;
  background: var(--surface-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: var(--shadow);
  min-width: 0;
}

.panel-wide {
  grid-column: 1 / -1;
}

.panel-head {
  display: grid;
  gap: 6px;
}

.panel-head h2 {
  font-size: 1.15rem;
  line-height: 1.2;
}

.metrics-grid,
.info-grid,
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.metric,
.info-card {
  display: grid;
  gap: 6px;
  padding: 14px;
  background: var(--surface-alt);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  min-width: 0;
}

.metric dd,
.info-card dd {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.form-grid,
.todo-form {
  display: grid;
  gap: 12px;
}

.field {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.field-grow {
  min-width: 0;
}

.field input {
  width: 100%;
  padding: 0.8rem 0.95rem;
  color: var(--text-color);
  background: var(--surface-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  outline: none;
  min-width: 0;
}

.field input::placeholder {
  color: color-mix(in srgb, var(--muted-color) 82%, transparent);
}

.field input:focus-visible {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent);
}

.button-row,
.todo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0.76rem 1rem;
  color: var(--text-color);
  background: var(--surface-alt);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  line-height: 1.2;
  text-decoration: none;
  white-space: normal;
  min-width: 0;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background-color 0.18s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
  transform: none;
}

.button.primary {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
}

.button.success {
  color: #fff;
  background: var(--success);
  border-color: var(--success);
}

.button.danger {
  color: #fff;
  background: var(--danger);
  border-color: var(--danger);
}

.button.ghost {
  background: transparent;
}

.header-button {
  flex-shrink: 0;
}

.todo-list,
.cart-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-item,
.cart-item,
.product-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  padding: 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--surface-alt);
  min-width: 0;
}

.todo-copy,
.cart-copy,
.product-copy {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.todo-title {
  font-weight: 700;
  overflow-wrap: anywhere;
}

.todo-title.completed {
  color: var(--muted-color);
  text-decoration: line-through;
}

.todo-state,
.cart-copy p,
.product-copy p {
  color: var(--muted-color);
}

.cart-copy p {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-subtotal {
  color: var(--text-color);
  font-weight: 700;
}

.catalog-grid {
  display: grid;
  gap: 12px;
}

.summary-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  background: var(--surface-alt);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.summary-bar strong {
  display: block;
  margin-top: 4px;
  font-size: 1.2rem;
}

.theme-card {
  display: grid;
  gap: 8px;
  padding: 18px;
  background: var(--surface-alt);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.theme-card strong {
  font-size: 1.15rem;
}

.theme-swatch {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--success), var(--warning));
}

.theme-card.dark .theme-swatch {
  background: linear-gradient(90deg, var(--success), var(--warning), var(--accent));
}

@media (max-width: 900px) {
  .workspace {
    grid-template-columns: 1fr;
  }

  .panel-wide {
    grid-column: auto;
  }

  .page-header {
    flex-direction: column;
    align-items: stretch;
  }

  .header-button {
    width: 100%;
  }
}
</style>
