<template>
  <div class="animate-fade-in">
    <!-- Header -->
    <div class="relative py-24 bg-brand-surface border-b border-gray-800 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
            <span class="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">Tentang Kami</span>
            <h1 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Profil Pesantren</h1>
            <p class="text-brand-muted max-w-2xl mx-auto text-lg">Mengenal lebih dekat sejarah, visi, dan nilai-nilai luhur yang menjadi pondasi pendidikan kami.</p>
        </div>
    </div>

    <!-- Sejarah & Visi -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div class="relative">
                <div class="absolute top-4 left-4 w-full h-full border-2 border-brand-gold/30 rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
                <img src="@/assets/images/hero_bg.jpg" alt="Masjid Pesantren" class="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-500 w-full">
            </div>
            <div>
                <h2 class="font-heading text-3xl font-bold mb-6 text-white">Sejarah Singkat</h2>
                <p class="text-brand-muted mb-6 leading-relaxed text-justify">
                    Didirikan pada tahun 1995 oleh <strong class="text-brand-gold">KH. Ahmad Dahlan Al-Hafidz</strong>, Pesantren Al-Ikhlas Global bermula dari sebuah majelis taklim kecil di pinggiran Yogyakarta. Dengan semangat *Ikhlas Beramal*, pesantren ini tumbuh menjadi lembaga pendidikan holistik.
                </p>
                <p class="text-brand-muted mb-8 leading-relaxed text-justify">
                    Kini, di atas lahan seluas 5 hektar, kami mendidik lebih dari 1.200 santri dari seluruh nusantara, mengintegrasikan kurikulum salaf dengan sistem pendidikan modern bertaraf internasional.
                </p>
                
                <div class="bg-brand-surface p-6 rounded-xl border-l-4 border-brand-emerald">
                    <h3 class="font-heading text-xl font-bold mb-2 text-brand-gold">Visi Kami</h3>
                    <p class="text-gray-300 italic">
                        "Menjadi pusat peradaban Islam yang melahirkan generasi pemimpin berkarakter Qur'ani, menguasai IPTEK, dan berdaya saing global."
                    </p>
                </div>
            </div>
        </div>

        <!-- Panca Jiwa -->
        <div class="mb-24">
            <div class="text-center mb-12">
                <h2 class="font-heading text-3xl font-bold mb-4">Panca Jiwa Pondok</h2>
                <div class="h-1 w-24 bg-brand-gold mx-auto"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                <div v-for="nilai in values" :key="nilai.title" class="bg-brand-surface p-6 rounded-xl text-center border border-gray-800 hover:border-brand-emerald transition group hover:-translate-y-2">
                    <div class="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold group-hover:bg-brand-emerald group-hover:text-white transition">
                        <i :class="nilai.icon"></i>
                    </div>
                    <h4 class="font-bold text-white mb-2">{{ nilai.title }}</h4>
                    <p class="text-xs text-brand-muted">{{ nilai.desc }}</p>
                </div>
            </div>
        </div>

        <!-- Struktur Organisasi (NEW) -->
        <div class="mb-24 bg-brand-dark p-8 md:p-12 rounded-3xl border border-gray-800">
            <div class="text-center mb-12">
                <h2 class="font-heading text-3xl font-bold mb-4">Struktur Pengasuh</h2>
                <p class="text-brand-muted">Tokoh-tokoh dibalik pendidikan santri.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <!-- Pimpinan -->
                <div class="md:col-start-2">
                        <img src="@/assets/images/pimpinan.jpg" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-gold object-cover grayscale hover:grayscale-0 transition">
                        <h4 class="font-bold text-lg text-white">KH. Ahmad Dahlan</h4>
                        <p class="text-brand-emerald text-sm">Pimpinan Pondok</p>
                </div>
                <!-- Next row -->
                <div class="md:col-start-1 md:row-start-2">
                        <img src="@/assets/images/zakaria.jpg" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-600 object-cover grayscale hover:grayscale-0 transition">
                        <h4 class="font-bold text-white">Ust. H. Zakaria, Lc.</h4>
                        <p class="text-brand-muted text-xs">Kepala Kepengasuhan</p>
                </div>
                <div class="md:col-start-2 md:row-start-2">
                        <img src="@/assets/images/fauzan.jpg" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-600 object-cover grayscale hover:grayscale-0 transition">
                        <h4 class="font-bold text-white">Dr. H. Fauzan, M.Pd.</h4>
                        <p class="text-brand-muted text-xs">Direktur Pendidikan</p>
                </div>
                <div class="md:col-start-3 md:row-start-2">
                        <img src="@/assets/images/aminah.jpg" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-600 object-cover grayscale hover:grayscale-0 transition">
                        <h4 class="font-bold text-white">Hj. Siti Aminah</h4>
                        <p class="text-brand-muted text-xs">Pengasuh Putri</p>
                </div>
            </div>
        </div>

        <!-- Fasilitas -->
        <div>
            <div class="flex items-center justify-between mb-8">
                <h2 class="font-heading text-3xl font-bold flex items-center gap-4">
                    <span class="w-2 h-8 bg-brand-gold rounded"></span> Fasilitas Pendukung
                </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="fasilitas in facilities" :key="fasilitas.name" class="group relative overflow-hidden rounded-xl h-64 border border-gray-800">
                    <img :src="fasilitas.img" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
                    <div class="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                        <h4 class="text-white font-bold text-lg mb-1 border-l-4 border-brand-gold pl-3">{{ fasilitas.name }}</h4>
                        <p class="text-gray-400 text-xs pl-4 opacity-0 group-hover:opacity-100 transition delay-100">{{ fasilitas.desc }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Maps (NEW) -->
        <div class="mt-24 pt-12 border-t border-gray-800">
            <h2 class="font-heading text-2xl font-bold mb-8 text-center">Lokasi Pesantren</h2>
            <div class="w-full h-96 bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden relative">
                    <img src="@/assets/images/map_placeholder.jpg" class="w-full h-full object-cover opacity-50">
                    <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                        <i class="fas fa-map-marked-alt text-5xl text-brand-gold mb-4 animate-bounce"></i>
                        <p class="text-white font-bold text-lg mb-4">Jl. Kaliurang Km 12, Sleman, Yogyakarta</p>
                        <a href="#" class="px-6 py-2 bg-brand-emerald text-white rounded-full text-sm font-bold hover:bg-brand-emerald/80 transition">Buka Google Maps</a>
                    </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

// Image Helper
const getImageUrl = (name) => new URL(`../assets/images/${name}`, import.meta.url).href

useHead({
  title: 'Profil | Pesantren Modern Al-Ikhlas Global',
  meta: [
    { name: 'description', content: 'Sejarah, Visi Misi, dan Struktur Organisasi Pesantren Modern Al-Ikhlas Global Yogyakarta.' },
    { property: 'og:title', content: 'Profil Pesantren - Al-Ikhlas Global' },
  ],
})

const values = ref([
    { icon: 'fas fa-heart', title: 'Keikhlasan', desc: 'Berbuat semata karena Allah.' },
    { icon: 'fas fa-leaf', title: 'Kesederhanaan', desc: 'Hidup wajar dan bersahaja.' },
    { icon: 'fas fa-user-shield', title: 'Kemandirian', desc: 'Berdiri di atas kaki sendiri.' },
    { icon: 'fas fa-users', title: 'Ukhuwah', desc: 'Persaudaraan sesama muslim.' },
    { icon: 'fas fa-globe', title: 'Kebebasan', desc: 'Berpikir luas dan terbuka.' }
])

const facilities = ref([
    { name: 'Masjid Jami Al-Falah', desc: 'Pusat ibadah & kajian berkapasitas 2000 jamaah', img: getImageUrl('hero_bg.jpg') },
    { name: 'Laboratorium Terpadu', desc: 'Lab Komputer, Fisika, Biologi, & Bahasa', img: getImageUrl('fasilitas_lab.jpg') },
    { name: 'Asrama Modern', desc: 'AC, Lemari Pribadi, & Kamar Mandi Dalam', img: getImageUrl('fasilitas_asrama.jpg') },
    { name: 'Perpustakaan Digital', desc: 'Ribuan koleksi kitab kuning & buku sains', img: getImageUrl('fasilitas_perpus.jpg') },
    { name: 'Sport Center', desc: 'Lapangan Futsal, Basket, & Panahan', img: getImageUrl('fasilitas_sport.jpg') },
    { name: 'Klinik Santri', desc: 'Layanan kesehatan 24 jam dokter jaga', img: getImageUrl('fasilitas_klinik.jpg') }
])
</script>
