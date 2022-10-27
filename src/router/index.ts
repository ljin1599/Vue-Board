import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Create from '@/views/Create.vue'
import Read from '@/views/Read.vue'
import Detail from '@/views/Detail.vue'
import Update from '@/views/Update.vue'

export const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/create', name: 'Create', component: Create},
    {path:"/read", name: 'Read', component: Read},
    {path:"/detail/:id/:title/:content", name: 'Detail', component: Detail, props: true},   // props 안하면 read에서 detail로 값이 안 넘어감
    {path:'/update', name: 'Update', component: Update, props: true},
    ]

const router = createRouter( {  // 기록모드 HTML5
    history: createWebHistory(), // 페이지를 다시 로드하지 않고 URL을 탐색할 수 있습니다.
    routes
})

export default router