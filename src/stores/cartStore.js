import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [
      { id: 1, name: 'Wireless Headphones', price: 89.99, image: '🎧' },
      { id: 2, name: 'Mechanical Keyboard', price: 129.99, image: '⌨️' },
      { id: 3, name: 'USB-C Hub', price: 49.99, image: '🔌' },
      { id: 4, name: 'Webcam HD', price: 74.99, image: '📷' },
      { id: 5, name: 'Mouse Pad XL', price: 24.99, image: '🖱️' }
    ],
    cart: []
  }),
  getters: {
    totalItems: (state) => state.cart.length,
    totalPrice: (state) => state.cart.reduce((sum, item) => sum + item.price, 0)
  },
  actions: {
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== id)
    },
    clearCart() {
      this.cart = []
    }
  }
})
