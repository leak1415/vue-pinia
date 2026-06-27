import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const name = ref('Alex Morgan')
  const age = ref(29)
  const email = ref('alex.morgan@example.com')

  function updateName(value: string) {
    name.value = value.trim()
  }

  function updateAge(value: number) {
    const nextAge = Number.isFinite(value) ? Math.max(0, Math.trunc(value)) : 0

    age.value = nextAge
  }

  function updateEmail(value: string) {
    email.value = value.trim()
  }

  return {
    name,
    age,
    email,
    updateName,
    updateAge,
    updateEmail,
  }
})
