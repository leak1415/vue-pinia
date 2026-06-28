<template>
  <section class="exercise">
    <div class="ex-header">
      <span class="ex-badge">Exercise 4</span>
      <h2>Shopping Cart</h2>
      <p class="ex-desc">
        Products, cart management with <code>totalItems</code> and <code>totalPrice</code> getters.
      </p>
    </div>

    <div class="cart-layout">
      <!-- Products -->
      <div class="products-col">
        <h3 class="col-title">🛍️ Products</h3>
        <div v-for="p in cartStore.products" :key="p.id" class="product-card">
          <span class="product-emoji">{{ p.image }}</span>
          <div class="product-info">
            <div class="product-name">{{ p.name }}</div>
            <div class="product-price">${{ p.price.toFixed(2) }}</div>
          </div>
          <button class="btn btn-sm btn-primary" @click="cartStore.addToCart(p)">＋ Add</button>
        </div>
      </div>

      <!-- Cart -->
      <div class="cart-col">
        <h3 class="col-title">
          🛒 Cart
          <span v-if="cartStore.totalItems > 0" class="cart-badge">{{ cartStore.totalItems }}</span>
        </h3>

        <div v-if="cartStore.cart.length === 0" class="empty">Your cart is empty.</div>

        <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
          <span class="product-emoji sm">{{ item.image }}</span>
          <div class="cart-item-info">
            <div class="product-name">{{ item.name }}</div>
            <div class="cart-item-sub">{{ item.qty }} × ${{ item.price.toFixed(2) }}</div>
          </div>
          <div class="cart-item-total">${{ (item.qty * item.price).toFixed(2) }}</div>
          <button class="btn btn-sm btn-danger" @click="cartStore.removeFromCart(item.id)">✕</button>
        </div>

        <div v-if="cartStore.cart.length > 0" class="cart-summary">
          <div class="summary-row">
            <span>Items <span class="getter-tag">getter</span></span>
            <span>{{ cartStore.totalItems }}</span>
          </div>
          <div class="summary-row total">
            <span>Total <span class="getter-tag">getter</span></span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <button class="btn btn-ghost w-full" @click="cartStore.clearCart()">🗑️ Clear Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>