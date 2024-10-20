import { createApp } from 'vue';
import App from './App.vue';
import router from './router'       //src/router/index.js 파일을 불러오라는 의미
const app = createApp(App);

app.use(router);
app.mount('#app');
