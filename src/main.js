import './assets/main.css'
import router from './router/router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify, {
    iconfont: 'mdi'
})
app.mount('#app')
