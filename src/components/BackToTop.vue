<template>
  <button 
    @click="scrollToTop" 
    :class="['fixed bottom-8 right-8 z-50 p-4 rounded-full bg-brand-gold text-brand-dark shadow-lg hover:bg-white hover:text-brand-emerald transition-all duration-300 transform', showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0']"
    aria-label="Kembali ke atas"
  >
    <i class="fas fa-arrow-up text-lg"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
    showButton.value = window.scrollY > 500
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
})
</script>
