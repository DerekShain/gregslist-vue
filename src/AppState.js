import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  /** @type {import('./models/Car.js').Car[]} */
  cars: [],
  /** @type {import('./models/Car.js').Car} */
  car: null
})
