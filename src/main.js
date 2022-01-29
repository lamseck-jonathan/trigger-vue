import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import 'bootstrap/dist/js/bootstrap.js'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'

import BaseInput from './components/base/BaseInput'
import BaseButton from './components/base/BaseButton'
import BaseIcon from './components/base/BaseIcon'
import BaseSwitch from './components/base/BaseSwitch'

const app = createApp(App).use(
    router,
    mdiVue,
    store,
    { icons: mdijs }
)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.component('BaseInput', BaseInput)
app.component('BaseButton', BaseButton)
app.component('BaseIcon', BaseIcon)
app.component('BaseSwitch', BaseSwitch)

app.mount('#app')