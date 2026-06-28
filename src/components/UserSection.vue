<template>
  <section class="exercise">
    <div class="ex-header">
      <span class="ex-badge">Exercise 2</span>
      <h2>User Store</h2>
      <p class="ex-desc">
        Global user profile with reactive
        <code>updateName</code>, <code>updateAge</code>, <code>updateEmail</code> actions.
      </p>
    </div>

    <div class="card-grid-2">
      <!-- Current Profile -->
      <div class="card">
        <h3 class="card-title">👤 Current Profile</h3>
        <div class="info-row">
          <span class="info-label">Name</span>
          <span class="info-value">{{ userStore.name }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Age</span>
          <span class="info-value">{{ userStore.age }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">{{ userStore.email }}</span>
        </div>
      </div>

      <!-- Update Profile -->
      <div class="card">
        <h3 class="card-title">✏️ Update Profile</h3>
        <div class="form-group">
          <label>Name</label>
          <input v-model="form.name" type="text" class="input" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input v-model="form.age" type="number" class="input" placeholder="Enter age" min="1" max="120" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" class="input" placeholder="Enter email" />
        </div>
        <button class="btn btn-primary w-full" @click="saveUser">💾 Save Changes</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()

const form = reactive({
  name:  userStore.name,
  age:   userStore.age,
  email: userStore.email,
})

function saveUser() {
  userStore.updateName(form.name)
  userStore.updateAge(form.age)
  userStore.updateEmail(form.email)
}
</script>