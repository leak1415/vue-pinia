<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const { name, age, email } = storeToRefs(userStore)
const userForm = reactive({
  name: name.value,
  age: String(age.value),
  email: email.value,
})

function saveUser() {
  userStore.updateName(userForm.name)
  userStore.updateAge(Number(userForm.age))
  userStore.updateEmail(userForm.email)

  userForm.name = name.value
  userForm.age = String(age.value)
  userForm.email = email.value
}
</script>

<template>
  <section class="panel">
    <div class="panel-head">
      <p class="panel-kicker">Exercise 2</p>
      <h2>User Store</h2>
    </div>

    <dl class="info-grid">
      <div class="info-card">
        <dt>Name</dt>
        <dd>{{ name }}</dd>
      </div>
      <div class="info-card">
        <dt>Age</dt>
        <dd>{{ age }}</dd>
      </div>
      <div class="info-card">
        <dt>Email</dt>
        <dd>{{ email }}</dd>
      </div>
    </dl>

    <form class="form-grid" @submit.prevent="saveUser">
      <label class="field">
        <span>Name</span>
        <input v-model="userForm.name" type="text" autocomplete="name" />
      </label>

      <label class="field">
        <span>Age</span>
        <input v-model="userForm.age" type="number" min="0" inputmode="numeric" />
      </label>

      <label class="field">
        <span>Email</span>
        <input v-model="userForm.email" type="email" autocomplete="email" />
      </label>

      <button class="button primary" type="submit">Update user</button>
    </form>
  </section>
</template>
