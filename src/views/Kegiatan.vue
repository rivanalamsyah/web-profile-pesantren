<template>
  <div class="animate-fade-in">
    <div class="bg-brand-surface py-24 border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <span class="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">Aktualitas</span>
            <h1 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Berita & Kegiatan</h1>
            <p class="text-brand-muted">Kabar terkini, artikel inspiratif, dan dokumentasi aktivitas santri.</p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <!-- Main Content (News List) -->
            <div class="lg:col-span-2 space-y-12">
                <h3 class="font-heading text-xl font-bold text-white border-l-4 border-brand-emerald pl-3 mb-8">Berita Terbaru</h3>
                <div v-for="news in newsList" :key="news.id" class="flex flex-col md:flex-row gap-6 bg-brand-surface p-4 rounded-2xl border border-gray-800 hover:border-brand-gold/30 transition group">
                    <div class="w-full md:w-1/3 h-48 rounded-xl overflow-hidden relative">
                        <img :src="news.image" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                        <span class="absolute top-2 left-2 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded">{{ news.category }}</span>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <div class="flex items-center gap-3 text-xs text-brand-muted mb-2">
                            <span><i class="far fa-calendar-alt text-brand-gold"></i> {{ news.date }}</span>
                            <span><i class="far fa-user text-brand-gold"></i> Admin</span>
                        </div>
                        <h2 class="text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition cursor-pointer">{{ news.title }}</h2>
                        <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ news.excerpt }}</p>
                        <button class="text-brand-emerald text-sm font-bold flex items-center gap-2 hover:text-white transition self-start">
                            Baca Selengkapnya <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                  <!-- Pagination -->
                <div class="flex gap-2 mt-8">
                    <button class="w-10 h-10 rounded-full bg-brand-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-dark transition"><i class="fas fa-chevron-left"></i></button>
                    <button class="w-10 h-10 rounded-full bg-brand-gold text-brand-dark font-bold flex items-center justify-center">1</button>
                    <button class="w-10 h-10 rounded-full bg-brand-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-dark transition">2</button>
                    <button class="w-10 h-10 rounded-full bg-brand-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-dark transition"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1 space-y-12">
                <!-- Upcoming Events (NEW) -->
                <div class="bg-brand-dark p-6 rounded-2xl border border-gray-800">
                    <h3 class="font-heading text-lg font-bold text-white mb-6 flex items-center gap-2"><i class="far fa-calendar-check text-brand-gold"></i> Agenda Mendatang</h3>
                    <div class="space-y-6">
                        <div v-for="event in upcomingEvents" :key="event.title" class="flex gap-4 items-start">
                            <div class="bg-brand-surface border border-gray-700 rounded-lg p-2 text-center min-w-[60px]">
                                <div class="text-xs text-brand-emerald font-bold uppercase">{{ event.month }}</div>
                                <div class="text-xl font-bold text-white">{{ event.date }}</div>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-white hover:text-brand-gold transition cursor-pointer">{{ event.title }}</h4>
                                <p class="text-xs text-gray-500 mt-1"><i class="far fa-clock"></i> {{ event.time }}</p>
                            </div>
                        </div>
                    </div>
                    <button class="w-full mt-6 py-2 border border-gray-600 text-gray-400 text-xs font-bold rounded hover:bg-gray-800 transition">Lihat Semua Agenda</button>
                </div>

                <!-- Gallery Preview (NEW) -->
                <div>
                    <h3 class="font-heading text-lg font-bold text-white mb-6 border-l-4 border-brand-gold pl-3">Galeri Aktivitas</h3>
                    <div class="grid grid-cols-2 gap-2">
                        <div v-for="n in 4" :key="n" class="aspect-square rounded-lg overflow-hidden cursor-pointer relative group">
                            <img :src="'https://source.unsplash.com/random/300x300/?islamic,school&sig=' + n" class="w-full h-full object-cover transition duration-300 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                <i class="fas fa-search text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

// Image Helper
const getImageUrl = (name) => new URL(`../assets/images/${name}`, import.meta.url).href

useHead({
  title: 'Berita & Kegiatan | Pesantren Modern Al-Ikhlas Global',
  meta: [
    { name: 'description', content: 'Berita terkini, liputan kegiatan, dan dokumentasi aktivitas santri Pesantren Al-Ikhlas Global.' },
  ],
})

const newsList = ref([
    { id: 1, title: 'Kunjungan Grand Syekh Al-Azhar Mesir ke Pesantren', category: 'Internasional', date: '12 Okt 2023', excerpt: 'Pesantren menerima kunjungan kehormatan untuk mempererat kerjasama pendidikan dan beasiswa timur tengah bagi santri berprestasi.', image: getImageUrl('news_jurnal.jpg') },
    { id: 2, title: 'Tim Robotik Santri Sabet Emas di Jepang', category: 'Prestasi', date: '05 Sep 2023', excerpt: 'Membanggakan! Tim Santri Al-Ikhlas berhasil menyabet medali emas dalam kompetisi robotik internasional kategori Creative Design.', image: getImageUrl('news_robot.jpg') },
    { id: 3, title: 'Wisuda Akbar Tahfidz 30 Juz Angkatan Ke-20', category: 'Akademik', date: '20 Aug 2023', excerpt: 'Sebanyak 50 santri wisudawan telah menyelesaikan hafalan 30 juz dengan predikat mumtaz dan siap mengabdi di masyarakat.', image: getImageUrl('news_robot.jpg') },
    { id: 4, title: 'Pelatihan Jurnalistik Santri Bersama Republika', category: 'Pelatihan', date: '15 Aug 2023', excerpt: 'Mengembangkan literasi digital santri melalui workshop penulisan berita dan fotografi jurnalistik.', image: getImageUrl('news_jurnal.jpg') }
])

const upcomingEvents = ref([
    { title: 'Ujian Tengah Semester Ganjil', date: '12', month: 'Okt', time: '07:00 WIB' },
    { title: 'Kajian Akbar Wali Santri', date: '25', month: 'Okt', time: '08:00 WIB' },
    { title: 'Penerimaan Santri Baru Gel. 1', date: '01', month: 'Nov', time: '24 Jam' }
])
</script>
