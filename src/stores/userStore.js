import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Ya Phorn',
    age: 22,
    email: 'phornya26@gmail.com'
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
