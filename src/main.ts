import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia' // pinia

import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router  from './router'


const app = createApp(App)

axios.defaults.baseURL = `http://localhost:3001`    // axios 기본 주소 지정

app.use(createPinia( ))   // pinia

app.use(ElementPlus)    // elementplus

app.use(router)             // router

app.mount('#app')