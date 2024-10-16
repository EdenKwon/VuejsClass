// main.css 파일을 불러와서 컴포넌트에 스타일을 적용하겠다.
import './assets/main.css'

// vue 패키지에서 함수를 가져온다. 모든 뷰app은 하나의 인스턴스를 가진다. 
// createApp() 함수가 뷰 app의 인스턴스를 생성하는 역할
import { createApp } from 'vue'
// App.vue 파일을 불러온다. root 컴포넌트가 된다. dom 형태를 뷰 컴포넌트 형태로 바꿔서 전달
import App from './App.vue'

// createApp() 함수로 뷰app의 인스턴스가 생성되고, 이 때 매개변수로 App.vue 파일을 전달한다.
createApp(App).mount('#app')
