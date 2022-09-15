import { createApp } from 'vue'
import './style.css'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue';
import Management from './components/Management.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/management', component: Management },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')