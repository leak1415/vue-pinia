import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

const seedTodos: Todo[] = [
  { id: 1, title: 'Review Pinia state', completed: true },
  { id: 2, title: 'Add a new todo', completed: false },
  { id: 3, title: 'Toggle one item complete', completed: false },
]

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref<Todo[]>(seedTodos)

  const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))
  const pendingTodos = computed(() => todos.value.filter((todo) => !todo.completed))
  const totalTodos = computed(() => todos.value.length)

  function addTodo(title: string) {
    const trimmedTitle = title.trim()

    if (!trimmedTitle) {
      return
    }

    todos.value.unshift({
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    })
  }

  function deleteTodo(id: number) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find((item) => item.id === id)

    if (!todo) {
      return
    }

    todo.completed = !todo.completed
  }

  return {
    todos,
    completedTodos,
    pendingTodos,
    totalTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
  }
})
