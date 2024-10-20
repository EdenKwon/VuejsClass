const { createWebHistory } = require("vue-router");

const router = createRouter(
    {
        history: createWebHistory(),
        routes : [
            {
                path: '/:pathMath(.*)*', name: "NotFound", component:NotFound
            },
            {
                path: '/user=:afterUser(*)', component: UserGeneric
            }
        ],
    }
)