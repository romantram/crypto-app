import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

const emitter = mitt()
const app = createApp(App)
app.use(VueChartkick)

app.config.globalProperties.emitter = emitter
app.mount('#app')
