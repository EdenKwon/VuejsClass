import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.provide('globalMessage', 'SSG-Java-developer-class-4th');
// key : globalMessage, value : SSG-Java-developer-class-4th
app.mount('#app');

//main.js provide 기능을 사용하여 모든 컴포넌트에서 provide() 함수로 정의한 데이터를 공유함
