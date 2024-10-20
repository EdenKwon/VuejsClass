import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';

// 라우터 구생 객체
const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path:'',
                name: 'home',
                component: HomeView,    //static import : 화면에 렌더링하는 시점을 어플리케이션 시작 지점에서 컴포넌트를 메모리에 로드한다.
            },
            {
                path:'/about',
                name :'about',
                component:() => import('../views/AboutView.vue'),   //dynamic imort : 동적 임포트는 해당 컴포넌트가 요청할 때 로드한다.
            },
            {
                path:'/board',
                name :'board',
                component:() => import('../views/HomeView.vue'),
            }
        ]
    }
);

export default router;