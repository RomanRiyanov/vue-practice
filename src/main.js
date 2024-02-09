import { createApp } from 'vue'
import UI from '@/components/UI/index';
import App from './App'

const app = createApp(App);

UI.forEach((component) => {
    app.component(component.name, component)
})

app.mount('#app')