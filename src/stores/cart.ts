import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface Product {
  id: number
  title: string
  price: number
}

export interface CartItem extends Product {
  quantity: number
}

const seedProducts: Product[] = [
  { id: 1, title: 'Laptop', price: 899.99 },
  { id: 2, title: 'Headphones', price: 129.99 },
  { id: 3, title: 'Wireless Mouse', price: 39.99 },
  { id: 4, title: 'Keyboard', price: 79.99 },
]

export const useCartStore = defineStore('cartStore', () => {
  const products = ref<Product[]>(seedProducts)
  const cart = ref<CartItem[]>([])

  const totalItems = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0),
  )

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  )

  function addToCart(product: Product) {
    const existingItem = cart.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
      return
    }

    cart.value.push({
      ...product,
      quantity: 1,
    })
  }

  function removeFromCart(productId: number) {
    const index = cart.value.findIndex((item) => item.id === productId)

    if (index === -1) {
      return
    }

    const currentItem = cart.value[index]

    if (!currentItem) {
      return
    }

    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1
      return
    }

    cart.value.splice(index, 1)
  }

  function clearCart() {
    cart.value = []
  }

  return {
    products,
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  }
})
