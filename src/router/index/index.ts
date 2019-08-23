export default [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '@/views/index/index.vue')
    }
]
