import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './routes/index.js'

import 'commCSS'
import 'compCSS'

//const routes = []

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
