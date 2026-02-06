import { createRouter, createWebHistory } from 'vue-router'

// Views will be lazy-loaded for better performance
const Home = () => import('../views/Home.vue')
const Profil = () => import('../views/Profil.vue')
const Akademik = () => import('../views/Akademik.vue')
const Kegiatan = () => import('../views/Kegiatan.vue')
const Pendaftaran = () => import('../views/Pendaftaran.vue')

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/profil', component: Profil, name: 'Profil' },
    { path: '/akademik', component: Akademik, name: 'Akademik' },
    { path: '/kegiatan', component: Kegiatan, name: 'Kegiatan' },
    { path: '/pendaftaran', component: Pendaftaran, name: 'Pendaftaran' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router
