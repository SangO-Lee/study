import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'

import './assets/main.css'

const app = createApp(App)
app.component('food-item',FoodItem)
app.mount('#app')
