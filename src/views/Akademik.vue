<template>
  <div class="animate-fade-in">
    <div class="bg-brand-surface py-24 border-b border-gray-800 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
            <span class="text-brand-emerald font-bold tracking-widest uppercase text-xs mb-2 block">Pendidikan & Pengajaran</span>
            <h1 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Akademik</h1>
            <p class="text-brand-muted max-w-2xl mx-auto text-lg">Integrasi kurikulum Nasional, Pesantren Salaf, dan Cambridge International.</p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <!-- Jenjang Pendidikan -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div class="bg-gradient-to-br from-brand-surface to-brand-dark border border-gray-700 rounded-3xl p-10 hover:shadow-2xl hover:border-brand-gold/30 transition group">
                <div class="flex items-center justify-between mb-8">
                    <div class="w-16 h-16 rounded-2xl bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold text-2xl border border-blue-500/20 group-hover:scale-110 transition"><i class="fas fa-user-graduate"></i></div>
                    <span class="px-4 py-1 bg-blue-900/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">Akreditasi A</span>
                </div>
                <h2 class="text-3xl font-heading font-bold mb-2 text-white">SMP Islam Terpadu</h2>
                <p class="text-gray-500 mb-6 text-sm">Membentuk pondasi karakter dan hafalan Qur'an.</p>
                <div class="space-y-4">
                    <div class="flex items-start gap-4 p-3 rounded-lg bg-black/20">
                        <i class="fas fa-check-circle text-blue-500 mt-1"></i>
                        <div>
                            <h5 class="font-bold text-white text-sm">Target Tahfidz</h5>
                            <p class="text-xs text-gray-400">Minimal 5 Juz Mutqin saat lulus.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-3 rounded-lg bg-black/20">
                        <i class="fas fa-check-circle text-blue-500 mt-1"></i>
                        <div>
                            <h5 class="font-bold text-white text-sm">Bahasa</h5>
                            <p class="text-xs text-gray-400">Arab & Inggris Harian (Basic).</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-br from-brand-surface to-brand-dark border border-gray-700 rounded-3xl p-10 hover:shadow-2xl hover:border-brand-gold/30 transition group">
                <div class="flex items-center justify-between mb-8">
                    <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-2xl border border-brand-gold/20 group-hover:scale-110 transition"><i class="fas fa-university"></i></div>
                    <span class="px-4 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold rounded-full border border-brand-gold/20">Akreditasi A</span>
                </div>
                <h2 class="text-3xl font-heading font-bold mb-2 text-white">SMA Sains Tahfidz</h2>
                <p class="text-gray-500 mb-6 text-sm">Persiapan menuju universitas terbaik dunia.</p>
                <div class="space-y-4">
                    <div class="flex items-start gap-4 p-3 rounded-lg bg-black/20">
                        <i class="fas fa-check-circle text-brand-gold mt-1"></i>
                        <div>
                            <h5 class="font-bold text-white text-sm">Fokus IPA & Riset</h5>
                            <p class="text-xs text-gray-400">Kurikulum Cambridge Science & Math.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-3 rounded-lg bg-black/20">
                        <i class="fas fa-check-circle text-brand-gold mt-1"></i>
                        <div>
                            <h5 class="font-bold text-white text-sm">Tahfidz 30 Juz</h5>
                            <p class="text-xs text-gray-400">Program khusus takhasus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Daily Routine Timeline (NEW) -->
        <div class="mb-24">
            <div class="text-center mb-12">
                <h2 class="font-heading text-3xl font-bold mb-4">Rutinitas Harian Santri</h2>
                <p class="text-brand-muted">Disiplin waktu adalah kunci kesuksesan.</p>
            </div>
            <div class="relative max-w-4xl mx-auto">
                <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800"></div>
                <div v-for="(item, index) in dailyRoutine" :key="index" class="relative flex items-center justify-between mb-8 w-full">
                    <div class="w-5/12 text-right pr-8" v-if="index % 2 === 0">
                        <h4 class="text-brand-gold font-bold text-lg">{{ item.time }}</h4>
                        <h5 class="text-white font-bold">{{ item.activity }}</h5>
                        <p class="text-gray-500 text-xs">{{ item.desc }}</p>
                    </div>
                    <div class="w-5/12" v-else></div>
                    
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-emerald rounded-full border-4 border-brand-dark z-10"></div>
                    
                    <div class="w-5/12 pl-8" v-if="index % 2 !== 0">
                        <h4 class="text-brand-gold font-bold text-lg">{{ item.time }}</h4>
                        <h5 class="text-white font-bold">{{ item.activity }}</h5>
                        <p class="text-gray-500 text-xs">{{ item.desc }}</p>
                    </div>
                    <div class="w-5/12" v-else></div>
                </div>
            </div>
        </div>

        <!-- Program Unggulan -->
        <div class="mb-24">
              <h3 class="font-heading text-2xl font-bold mb-10 text-center">Kurikulum Unggulan</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="prog in programs" :key="prog.title" class="bg-brand-surface p-8 rounded-xl border border-gray-700 hover:border-brand-gold transition hover:-translate-y-1">
                    <i :class="prog.icon + ' text-4xl text-brand-emerald mb-6 bg-brand-dark p-3 rounded-lg'"></i>
                    <h4 class="text-xl font-bold text-white mb-3">{{ prog.title }}</h4>
                    <p class="text-sm text-gray-400 leading-relaxed">{{ prog.desc }}</p>
                </div>
            </div>
        </div>

        <!-- Prestasi (NEW) -->
        <div class="bg-brand-dark border border-gray-800 rounded-3xl p-10">
            <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div>
                    <h3 class="font-heading text-2xl font-bold text-white">Prestasi Terbaru</h3>
                    <p class="text-brand-muted text-sm">Bukti nyata kualitas pendidikan kami.</p>
                </div>
                <button class="px-6 py-2 border border-brand-gold text-brand-gold rounded-full text-sm font-bold hover:bg-brand-gold hover:text-brand-dark transition">Lihat Semua</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div v-for="win in achievements" :key="win.title" class="bg-brand-surface p-6 rounded-xl text-center group">
                    <i class="fas fa-trophy text-3xl text-yellow-600 mb-4 group-hover:text-yellow-400 transition transform group-hover:scale-125"></i>
                    <h5 class="font-bold text-white text-sm mb-1">{{ win.rank }}</h5>
                    <p class="text-xs text-brand-gold font-bold uppercase mb-2">{{ win.level }}</p>
                    <p class="text-xs text-gray-400">{{ win.title }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Akademik | Pesantren Modern Al-Ikhlas Global',
  meta: [
    { name: 'description', content: 'Program unggulan SMP IT, SMA Sains Tahfidz, dan Ma\'had Aly dengan kurikulum terpadu.' },
  ],
})

const programs = ref([
    { icon: 'fas fa-quran', title: 'Tahfidz Intensif', desc: 'Program unggulan menghafal Al-Quran dengan target 30 juz mutqin bersanad.' },
    { icon: 'fas fa-language', title: 'Bilingual Area', desc: 'Wajib berbahasa Arab dan Inggris dalam percakapan sehari-hari di lingkungan asrama dan sekolah.' },
    { icon: 'fas fa-laptop-code', title: 'ICT & Coding', desc: 'Ekstrakurikuler wajib digital skill meliputi coding web, desain grafis, dan robotika.' }
])

const dailyRoutine = ref([
    { time: '03:00 - 04:30', activity: 'Qiyamul Lail & Sahur', desc: 'Sholat Tahajud berjamaah dilanjutkan persiapan puasa sunnah.' },
    { time: '04:30 - 06:00', activity: 'Subuh & Tahfidz', desc: 'Sholat Subuh, Dzikir Pagi, dan Setoran Hafalan Qur\'an.' },
    { time: '07:00 - 15:00', activity: 'Kegiatan Sekolah (KBM)', desc: 'Pembelajaran kurikulum nasional & kepesantrenan di kelas.' },
    { time: '16:00 - 17:00', activity: 'Ekstrakurikuler', desc: 'Pengembangan minat bakat (Olahraga, Seni, Bahasa).' },
    { time: '18:00 - 20:00', activity: 'Maghrib, Isya & Kajian', desc: 'Sholat berjamaah, baca Al-Qur\'an, dan Kajian Kitab Kuning.' },
    { time: '20:00 - 22:00', activity: 'Belajar Mandiri', desc: 'Mengulang pelajaran sekolah didampingi wali asrama.' }
])

const achievements = ref([
    { rank: 'Juara 1', level: 'Nasional', title: 'Olimpiade Sains (OSN) Biologi 2023' },
    { rank: 'Medali Emas', level: 'Internasional', title: 'ASEAN Robotic Competition 2023' },
    { rank: 'Juara 2', level: 'Provinsi', title: 'Musabaqah Hifdzil Quran 10 Juz' },
    { rank: 'Best Speaker', level: 'Nasional', title: 'Arabic Debating Championship UIN' }
])
</script>
