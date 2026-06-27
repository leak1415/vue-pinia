<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'

const todoStore = useTodoStore()
const { todos, completedTodos, pendingTodos, totalTodos } = storeToRefs(todoStore)
const newTodoTitle = ref('')

function addTodo() {
  const nextTitle = newTodoTitle.value.trim()

  todoStore.addTodo(newTodoTitle.value)

  if (nextTitle) {
    newTodoTitle.value = ''
  }
}
</script>

<template>
  <section class="panel panel-wide">
    <div class="panel-head">
      <p class="panel-kicker">Exercise 3</p>
      <h2>Todo List</h2>
    </div>

    <form class="todo-form" @submit.prevent="addTodo">
      <label class="field field-grow">
        <span>New todo</span>
        <input v-model="newTodoTitle" type="text" placeholder="Add a task" autocomplete="off" />
      </label>

      <button class="button success" type="submit">Add todo</button>
    </form>

    <dl class="stats-grid">
      <div class="metric">
        <dt>Total todos</dt>
        <dd>{{ totalTodos }}</dd>
      </div>
      <div class="metric">
        <dt>Completed</dt>
        <dd>{{ completedTodos.length }}</dd>
      </div>
      <div class="metric">
        <dt>Pending</dt>
        <dd>{{ pendingTodos.length }}</dd>
      </div>
    </dl>

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="todo-copy">
          <span class="todo-title" :class="{ completed: todo.completed }">{{ todo.title }}</span>
          <span class="todo-state">{{ todo.completed ? 'Completed' : 'Pending' }}</span>
        </div>

        <div class="todo-actions">
          <button class="button" type="button" @click="todoStore.toggleTodo(todo.id)">
            {{ todo.completed ? 'Mark pending' : 'Mark complete' }}
          </button>
          <button class="button danger" type="button" @click="todoStore.deleteTodo(todo.id)">Delete</button>
        </div>
      </li>
    </ul>
  </section>
</template>
