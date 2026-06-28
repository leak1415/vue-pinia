import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Leak',
    age: 21,
    email: 'leak@gmail.com'
  }),
  actions: {
    updateName(name) {
      this.name = name
    },
    updateAge(age) {
      this.age = Number(age)
    },
    updateEmail(email) {
      this.email = email
    }
  }
})
