import CartSection    from '../components/CartSection.vue'
import TodoSection    from '../components/TodoSection.vue'
import CounterSection from '../components/CounterSection.vue'
import ThemeSection   from '../components/ThemeSection.vue'
import UserSection    from '../components/UserSection.vue'

export const routes = [
  { path: '/',        redirect: '/counter' },
  { path: '/counter', name: 'Counter', component: CounterSection },
  { path: '/user',    name: 'User',    component: UserSection },
  { path: '/todo',    name: 'Todo',    component: TodoSection },
  { path: '/cart',    name: 'Cart',    component: CartSection },
  { path: '/theme',   name: 'Theme',   component: ThemeSection },
]
export default routes