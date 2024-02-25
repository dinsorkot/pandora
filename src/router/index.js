import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Sign from '../views/LoginView.vue'
import FaceId from "../views/RegisterFaceIdView.vue"
import Post from "../views/PostView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/',
      name: 'sign_in',
      component: Sign
    },
    {
      path: '/faceID',
      name: 'faceID',
      component: FaceId
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
  ]
})

export default router
