import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(ElementPlus)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
