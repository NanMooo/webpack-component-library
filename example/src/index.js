import { createApp } from 'vue'
import App from './App.vue'
import ComLib, { Button } from '../../src/index.js'
console.log(Button)
import '../../src/styles/index.scss'
createApp(App).use(ComLib).mount('#app')
