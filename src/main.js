import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import './assets/main.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
