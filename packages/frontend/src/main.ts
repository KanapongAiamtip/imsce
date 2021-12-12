import { createApp } from 'vue'

import App from './App.vue'
import Router from './router'

import './globals.scss'

createApp(App).use(Router).mount('#app')
