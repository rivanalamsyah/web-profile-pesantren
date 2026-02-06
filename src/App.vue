<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content (Router View) -->
    <main class="flex-grow pt-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <BackToTop />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
</script>
