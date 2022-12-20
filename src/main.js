import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/css/style.css'
import App from './App.vue'

// createApp(App).mount('#app')

createApp(App).use(createPinia()).use(router).mount('#app')


// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import router from '@/router'
// import App from "@/App.vue"


