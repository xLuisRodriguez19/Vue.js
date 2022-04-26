import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import './icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './server'

const app = createApp(App)
app.component('FaIcon', FontAwesomeIcon)
app.mount('#app')
