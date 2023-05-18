import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
// import { VueMaskDirective } from 'v-mask'
// app.directive('mask', VueMaskDirective);
createApp(App).use(router).mount('#app')
