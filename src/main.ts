import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './styles/global.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import 'virtual:svg-icons-register'
import Icon from './components/Icon.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
const pinia = createPinia()

app.component('Icon', Icon)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')


// 初始化主题
import { useThemeStore } from './store/theme'
const themeStore = useThemeStore()
themeStore.initTheme()
