<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <section class="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="@/assets/images/hero_bg.jpg" alt="Pesantren Background" class="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_20s_infinite]">
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>
        </div>
        
        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
            <div class="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6 animate-bounce">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                Penerimaan Santri Baru 2024/2025
            </div>
            <h1 class="font-heading text-4xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Membangun <span class="text-brand-gold">Adab</span>,<br> 
                Menguasai <span class="italic font-light text-brand-emerald">Ilmu</span>
            </h1>
            <p class="text-brand-muted text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Lembaga pendidikan Islam modern yang memadukan kedalaman ilmu agama (Tafaqquh Fiddin) dengan keunggulan sains & teknologi untuk mencetak pemimpin masa depan.
            </p>
            <div class="flex flex-col sm:flex-row gap-5 justify-center">
                <router-link to="/pendaftaran" class="px-8 py-4 bg-brand-gold text-brand-dark font-bold text-sm uppercase tracking-wider rounded shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 transition duration-300">
                    Daftar Sekarang
                </router-link>
                <router-link to="/profil" class="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-white/5 hover:border-white transition duration-300 flex items-center justify-center gap-3">
                    <i class="far fa-play-circle text-xl"></i> Tonton Profil
                </router-link>
            </div>
        </div>
    </section>

    <!-- Sambutan Pimpinan (NEW) -->
    <section class="py-24 bg-brand-dark relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/3 relative">
                    <div class="absolute -inset-4 bg-brand-gold/20 rounded-full blur-xl"></div>
                    <img src="@/assets/images/pimpinan.jpg" loading="lazy" alt="Pimpinan Pesantren" class="relative rounded-full border-4 border-brand-gold/50 shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover mx-auto grayscale hover:grayscale-0 transition duration-500">
                    <div class="text-center mt-6">
                        <h3 class="font-heading text-xl font-bold text-white">KH. Ahmad Dahlan Al-Hafidz</h3>
                        <p class="text-brand-emerald text-sm uppercase tracking-widest">Pengasuh Pondok</p>
                    </div>
                </div>
                <div class="md:w-2/3 text-center md:text-left">
                    <i class="fas fa-quote-left text-4xl text-brand-gold/30 mb-6"></i>
                    <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">"Pendidikan bukan sekadar mengisi wadah, tetapi menyalakan api."</h2>
                    <p class="text-brand-muted text-lg leading-relaxed mb-6">
                        Di Al-Ikhlas Global, kami percaya bahwa setiap anak memiliki potensi luar biasa yang dianugerahkan Allah. Tugas kami adalah membimbing mereka menemukan potensi tersebut melalui disiplin, kasih sayang, dan lingkungan yang qur'ani. Kami tidak hanya mencetak penghafal Qur'an, tapi penghafal yang paham teknologi dan siap memimpin peradaban.
                    </p>
                    <router-link to="/profil" class="text-brand-gold hover:text-white font-bold text-sm uppercase tracking-wider border-b border-brand-gold pb-1 hover:border-white transition">Baca Selengkapnya</router-link>
                </div>
            </div>
        </div>
    </section>

    <!-- Highlights -->
    <section class="py-20 bg-brand-surface relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <span class="text-brand-emerald font-bold tracking-widest uppercase text-xs">Keunggulan Kami</span>
                <h2 class="font-heading text-3xl md:text-4xl font-bold mt-2">Mengapa Memilih Al-Ikhlas?</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(feature, index) in features" :key="index" class="bg-brand-dark p-8 rounded-xl border border-gray-800 hover:border-brand-gold/50 transition duration-300 group hover:-translate-y-2">
                    <div class="w-14 h-14 bg-brand-surface rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition duration-300 border border-gray-700">
                        <i :class="feature.icon + ' text-2xl text-brand-gold group-hover:text-brand-dark'"></i>
                    </div>
                    <h3 class="text-xl font-heading font-bold mb-3 text-white">{{ feature.title }}</h3>
                    <p class="text-brand-muted text-sm leading-relaxed">{{ feature.desc }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats & Achievements -->
    <section class="py-20 bg-brand-dark border-y border-gray-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800/50">
                <div v-for="stat in stats" :key="stat.label" class="p-4">
                    <h2 class="text-4xl md:text-5xl font-heading font-bold text-brand-emerald mb-2">{{ stat.number }}</h2>
                    <p class="text-brand-muted text-xs uppercase tracking-widest">{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-brand-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-end mb-12">
                <div>
                    <h2 class="font-heading text-3xl md:text-4xl font-bold mb-2">Suara Wali Santri</h2>
                    <p class="text-brand-muted">Kepercayaan adalah amanah terbesar kami.</p>
                </div>
                <div class="hidden md:flex gap-2">
                    <button class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition"><i class="fas fa-arrow-left"></i></button>
                    <button class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition"><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(testi, index) in testimonials" :key="index" class="bg-brand-dark p-8 rounded-br-3xl rounded-tl-3xl border border-gray-800 hover:border-brand-gold/30 transition">
                    <div class="flex gap-1 text-brand-gold text-xs mb-4">
                        <i class="fas fa-star" v-for="n in 5"></i>
                    </div>
                    <p class="text-gray-300 mb-6 italic leading-relaxed text-sm">"{{ testi.text }}"</p>
                    <div class="flex items-center gap-4 border-t border-gray-800 pt-4">
                        <div class="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-xs font-bold text-brand-emerald border border-brand-emerald/20">{{ testi.initials }}</div>
                        <div>
                            <h5 class="font-bold text-white text-sm">{{ testi.name }}</h5>
                            <span class="text-xs text-brand-muted">{{ testi.role }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Partners (NEW) -->
    <section class="py-12 bg-brand-dark border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="text-brand-muted text-xs uppercase tracking-widest mb-8">Bekerjasama Dengan</p>
            <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
                <!-- Placeholder logos -->
                <div class="text-2xl font-heading font-bold text-white flex items-center gap-2"><i class="fas fa-university"></i> Al-Azhar Cairo</div>
                <div class="text-2xl font-heading font-bold text-white flex items-center gap-2"><i class="fas fa-book"></i> Cambridge Int.</div>
                <div class="text-2xl font-heading font-bold text-white flex items-center gap-2"><i class="fas fa-mosque"></i> Kemenag RI</div>
                <div class="text-2xl font-heading font-bold text-white flex items-center gap-2"><i class="fas fa-robot"></i> Kominfo</div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-brand-emerald opacity-5"></div>
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 class="font-heading text-4xl font-bold mb-6 text-white">Siap Bergabung?</h2>
            <p class="text-brand-muted mb-10 text-lg">Jadilah bagian dari generasi emas yang hafal Al-Qur'an dan menguasai dunia.</p>
            <router-link to="/pendaftaran" class="inline-block bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded shadow-lg hover:bg-white hover:text-brand-emerald transition duration-300 transform hover:scale-105">
                Daftar Online Sekarang
            </router-link>
        </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Home | Pesantren Modern Al-Ikhlas Global',
  meta: [
    { name: 'description', content: 'Lembaga pendidikan Islam modern terbaik di Yogyakarta yang memadukan kurikulum pesantren salaf, nasional, dan internasional Cambridge.' },
    { name: 'keywords', content: 'pesantren modern, islamic boarding school, sekolah islam terbaik, tahfidz quran, cambridge curriculum, yogyakarta' },
    { property: 'og:title', content: 'Pesantren Modern Al-Ikhlas Global' },
    { property: 'og:description', content: 'Mencetak generasi pemimpin Qur\'ani berwawasan global.' },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop' },
  ],
})

const features = ref([
    { icon: 'fas fa-book-quran', title: 'Kurikulum Terpadu', desc: 'Sinergi antara kurikulum Nasional (K13/Merdeka), Pesantren Salaf (Kitab Kuning), dan Cambridge Curriculum untuk wawasan global.' },
    { icon: 'fas fa-mosque', title: 'Lingkungan Islami', desc: 'Kampus yang asri, aman, dan kondusif. Memisahkan area putra dan putri untuk menjaga pandangan dan fokus belajar.' },
    { icon: 'fas fa-user-graduate', title: 'Character Building', desc: 'Prioritas utama kami adalah adab sebelum ilmu. Membentuk pribadi santun, jujur, disiplin, dan berintegritas tinggi.' }
])

const stats = ref([
    { number: '1.2k', label: 'Santri Aktif' },
    { number: '85', label: 'Guru & Syaikh' },
    { number: '5k+', label: 'Alumni Tersebar' },
    { number: '100%', label: 'Lulusan PTN/Timur Tengah' }
])

const testimonials = ref([
    { text: "Luar biasa perubahannya. Anak saya yang dulu manja, sekarang sangat mandiri dan bacaan Al-Qur'annya membuat saya menangis haru.", name: "Bpk. H. Supriyanto", role: "Wali Santri Kls 8", initials: "HS" },
    { text: "Saya memilih Al-Ikhlas karena keseimbangan dunianya dapet, akhiratnya apalagi. Fasilitas lab sains-nya sangat mendukung minat anak saya.", name: "Ibu Rina Wati, M.Si", role: "Dosen & Wali Santri", initials: "RW" },
    { text: "Awalnya ragu melepas anak ke pesantren, tapi melihat pengasuhan ustadz yang seperti orang tua sendiri, saya jadi tenang.", name: "Bpk. Dedi Kurniawan", role: "Wali Santri Kls 10", initials: "DK" },
])
</script>
