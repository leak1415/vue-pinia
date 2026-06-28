<template>
  <section class="exercise">
    <div class="ex-header">
      <span class="ex-badge">Exercise 3</span>
      <h2>Todo List</h2>
      <p class="ex-desc">
        Full CRUD with <code>completedTodos</code>, <code>pendingTodos</code>,
        <code>totalTodos</code> getters.
      </p>
    </div>

    <!-- Stats -->
    <div class="card-grid-3">
      <div class="card stat-card mini">
        <div class="stat-label">Total <span class="getter-tag">getter</span></div>
        <div class="stat-value">{{ todoStore.totalTodos }}</div>
      </div>
      <div class="card stat-card mini">
        <div class="stat-label">Completed <span class="getter-tag">getter</span></div>
        <div class="stat-value positive">{{ todoStore.completedTodos.length }}</div>
      </div>
      <div class="card stat-card mini">
        <div class="stat-label">Pending <span class="getter-tag">getter</span></div>
        <div class="stat-value accent">{{ todoStore.pendingTodos.length }}</div>
      </div>
    </div>

    <!-- Add todo -->
    <div class="card">
      <div class="add-row">
        <input
          v-model="newTodo"
          class="input flex-1"
          placeholder="Add a new todo…"
          @keyup.enter="addTodo"
        />
        <button class="btn btn-primary" @click="addTodo">＋ Add</button>
      </div>
    </div>

    <!-- Progress bar -->
    <div v-if="todoStore.totalTodos > 0" class="card">
      <div class="progress-header">
        <span>Progress</span>
        <span>{{ progressPercent }}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </div>

    <!-- Todo list -->
    <div class="card todo-list">
      <div v-if="todoStore.todos.length === 0" class="empty">
        No todos yet. Add one above! 🎉
      </div>
      <div
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :class="['todo-item', { done: todo.completed }]"
      >
        <button class="todo-check" @click="todoStore.toggleTodo(todo.id)">
          {{ todo.completed ? '✅' : '⬜' }}
        </button>
        <span class="todo-title">{{ todo.title }}</span>
        <button class="todo-delete" @click="todoStore.deleteTodo(todo.id)">🗑️</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()
const newTodo   = ref('')

const progressPercent = computed(() =>
  Math.round((todoStore.completedTodos.length / todoStore.totalTodos) * 100)
)

function addTodo() {
  if (!newTodo.value.trim()) return
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>