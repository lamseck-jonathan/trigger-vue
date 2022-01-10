import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router, mdiVue, {
    icons: mdijs        
}).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
import router from './router'