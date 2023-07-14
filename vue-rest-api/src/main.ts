import './assets/main.css'

import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const icons = createVuetify({
    icons: {
        iconfont: 'fa' || 'md' || 'mdi'
    },
    theme:
    {
        themes: {
            dark: {
                background:'#111111'
            },
            default:{
                background:'#ffffff'
            },
            green:{
                background:'#169870'
            },
            orange:{
                background:'#f39f19'
            }
        }
    }
  })

createApp(App).use(router).use(vuetify).use(icons).mount('#app')
