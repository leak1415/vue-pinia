<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const { products, cart, totalItems, totalPrice } = storeToRefs(cartStore)

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function formatCurrency(value: number) {
  return currencyFormatter.format(value)
}
</script>

<template>
  <section class="panel panel-wide">
    <div class="panel-head">
      <p class="panel-kicker">Exercise 4</p>
      <h2>Shopping Cart</h2>
    </div>

    <div class="catalog-grid">
      <article v-for="product in products" :key="product.id" class="product-row">
        <div class="product-copy">
          <h3>{{ product.title }}</h3>
          <p>{{ formatCurrency(product.price) }}</p>
        </div>

        <button class="button success" type="button" @click="cartStore.addToCart(product)">Add to cart</button>
      </article>
    </div>

    <div class="summary-bar">
      <div>
        <span class="summary-label">Total items</span>
        <strong>{{ totalItems }}</strong>
      </div>
      <div>
        <span class="summary-label">Total price</span>
        <strong>{{ formatCurrency(totalPrice) }}</strong>
      </div>
      <button class="button ghost" type="button" @click="cartStore.clearCart" :disabled="!cart.length">Clear cart</button>
    </div>

    <ul class="cart-list">
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-copy">
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.quantity }} x {{ formatCurrency(item.price) }}
            <span class="cart-subtotal">{{ formatCurrency(item.price * item.quantity) }}</span>
          </p>
        </div>

        <button class="button danger" type="button" @click="cartStore.removeFromCart(item.id)">Remove one</button>
      </li>
    </ul>
  </section>
</template>
