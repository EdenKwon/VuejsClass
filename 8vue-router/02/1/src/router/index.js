import { createRouter, createWebHistory } from "vue-router";
import UserView from "@/views/UserView.vue";

const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            //path:'/:user/:id',   /john/1    /mypage/setting       /product/list  
            path:'/user/:id',
            name: 'user',
            component: UserView, 
        },
    ],
})