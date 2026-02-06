<template>
  <nav class="fixed w-full z-50 transition-all duration-300" :class="isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-surface' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center space-x-3 cursor-pointer" @click="$router.push('/')">
          <img src="@/assets/logo.svg" alt="Logo Al-Ikhlas" class="w-12 h-12 drop-shadow-lg hover-lift" />
          <div class="leading-tight">
            <h1 class="font-heading font-bold text-lg text-brand-gold tracking-wide">Al-Ikhlas</h1>
            <span class="text-xs text-brand-muted uppercase tracking-widest">Global Islamic School</span>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link to="/" class="hover:text-brand-gold transition-colors duration-200 text-sm uppercase tracking-wide">Home</router-link>
            <router-link to="/profil" class="hover:text-brand-gold transition-colors duration-200 text-sm uppercase tracking-wide">Profil</router-link>
            <router-link to="/akademik" class="hover:text-brand-gold transition-colors duration-200 text-sm uppercase tracking-wide">Akademik</router-link>
            <router-link to="/kegiatan" class="hover:text-brand-gold transition-colors duration-200 text-sm uppercase tracking-wide">Berita</router-link>
            <router-link to="/pendaftaran" class="px-5 py-2 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-semibold text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              Pendaftaran
            </router-link>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-brand-text hover:text-brand-gold focus:outline-none">
            <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-brand-surface border-b border-brand-gold/20 absolute w-full">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link @click="isMobileMenuOpen = false" to="/" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-dark hover:text-brand-gold">Home</router-link>
        <router-link @click="isMobileMenuOpen = false" to="/profil" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-dark hover:text-brand-gold">Profil</router-link>
        <router-link @click="isMobileMenuOpen = false" to="/akademik" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-dark hover:text-brand-gold">Akademik</router-link>
        <router-link @click="isMobileMenuOpen = false" to="/kegiatan" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-dark hover:text-brand-gold">Berita & Kegiatan</router-link>
        <router-link @click="isMobileMenuOpen = false" to="/pendaftaran" class="block px-3 py-2 rounded-md text-base font-medium text-brand-gold bg-brand-dark/50 border border-brand-gold/30 mt-4">Pendaftaran Santri</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Scoped styles specific to Navbar if any unique logic needed, 
   but global .router-link-active is handled in style.css */
</style>
