<template>
  <div class="animate-fade-in">
    <div class="bg-brand-surface py-24 border-b border-gray-800 relative">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -right-10 -top-10 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
            <span class="bg-brand-gold text-brand-dark px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 inline-block">Gelombang 1 Dibuka</span>
            <h1 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Pendaftaran Santri Baru</h1>
            <p class="text-brand-muted max-w-2xl mx-auto">Bergabunglah bersama keluarga besar Al-Ikhlas Global. Proses mudah, transparan, dan dapat dilakukan secara online.</p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Left Column -->
            <div class="lg:col-span-7">
                <!-- Alur -->
                <div class="mb-16">
                    <h3 class="font-heading text-2xl font-bold mb-8 text-white flex items-center gap-3">
                        <i class="fas fa-shoe-prints text-brand-gold"></i> Alur Pendaftaran
                    </h3>
                    <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-5 before:h-full before:w-0.5 before:bg-gray-800">
                        <div v-for="(step, idx) in steps" :key="idx" class="relative flex items-center gap-6 group">
                            <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark bg-brand-surface text-brand-gold font-bold shadow z-10 group-hover:bg-brand-gold group-hover:text-brand-dark transition">
                                {{ idx + 1 }}
                            </div>
                            <div class="flex-1 bg-brand-surface p-6 rounded-xl border border-gray-800 group-hover:border-brand-gold/30 transition shadow-sm">
                                <div class="font-bold text-white text-lg mb-1">{{ step.title }}</div>
                                <div class="text-gray-400 text-sm">{{ step.desc }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                  <!-- Rincian Biaya (NEW) -->
                <div class="mb-16">
                    <h3 class="font-heading text-2xl font-bold mb-6 text-white">Transparansi Biaya (Awal Masuk)</h3>
                    <div class="bg-brand-surface rounded-xl border border-gray-700 overflow-hidden">
                        <table class="w-full text-left text-sm text-gray-400">
                            <thead class="bg-brand-dark text-white uppercase font-bold">
                                <tr>
                                    <th class="px-6 py-4">Komponen Biaya</th>
                                    <th class="px-6 py-4 text-right">Nominal (Rp)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-700">
                                <tr v-for="fee in fees" :key="fee.item" class="hover:bg-gray-800/50 transition">
                                    <td class="px-6 py-4">{{ fee.item }}</td>
                                    <td class="px-6 py-4 text-right font-mono text-white">{{ fee.amount }}</td>
                                </tr>
                                <tr class="bg-brand-emerald/10 text-brand-emerald font-bold text-base">
                                    <td class="px-6 py-4">Total Estimasi</td>
                                    <td class="px-6 py-4 text-right">Rp 15.200.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-gray-500 mt-4 italic">* Biaya dapat berubah sewaktu-waktu. Belum termasuk SPP bulan pertama.</p>
                </div>

                <!-- FAQ -->
                <div>
                    <h3 class="font-heading text-2xl font-bold mb-6 text-white">Pertanyaan Umum (FAQ)</h3>
                    <div class="space-y-4">
                        <div v-for="(faq, i) in faqs" :key="i" class="bg-brand-surface rounded-lg border border-gray-700 overflow-hidden">
                            <button @click="toggleFaq(i)" class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-800 transition">
                                <span class="font-semibold text-gray-200">{{ faq.q }}</span>
                                <i class="fas transition-transform duration-300" :class="activeFaq === i ? 'fa-minus text-brand-gold rotate-180' : 'fa-plus text-gray-500'"></i>
                            </button>
                            <div v-show="activeFaq === i" class="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-gray-700 pt-4 bg-gray-800/30">
                                {{ faq.a }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column (Sticky) -->
            <div class="lg:col-span-5">
                <div class="sticky top-24 space-y-6">
                    <!-- Contact Card -->
                    <div class="bg-brand-surface p-8 rounded-2xl border border-brand-gold/30 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                        <div class="text-center mb-8">
                            <div class="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold text-2xl border border-gray-700">
                                <i class="fas fa-headset"></i>
                            </div>
                            <h3 class="font-heading text-xl font-bold text-white">Pusat Bantuan</h3>
                            <p class="text-sm text-gray-400 mt-2">Admin kami siap membantu Anda Senin - Sabtu, 08.00 - 16.00 WIB</p>
                        </div>

                        <div class="space-y-4 mb-8">
                            <a :href="whatsappLink" target="_blank" class="block w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                <i class="fab fa-whatsapp text-2xl"></i>
                                Chat WhatsApp
                            </a>
                            <a href="tel:+6285591142923" class="block w-full bg-brand-dark border border-gray-600 hover:border-brand-gold text-white font-bold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-3">
                                <i class="fas fa-phone-alt text-sm"></i>
                                Telepon Kantor
                            </a>
                        </div>

                        <div class="border-t border-gray-700 pt-6">
                            <h4 class="font-bold text-brand-gold mb-3 text-sm uppercase tracking-wide">Dokumen Persyaratan</h4>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li class="flex items-center gap-2"><i class="fas fa-check text-brand-emerald"></i> KK & Akta Kelahiran</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-brand-emerald"></i> Ijazah / Rapor Terakhir</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-brand-emerald"></i> Pas Foto 3x4 Background Merah</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Download Brosur (NEW) -->
                    <div class="bg-brand-emerald/10 border border-brand-emerald/30 p-6 rounded-2xl flex items-center justify-between">
                        <div>
                            <h4 class="font-bold text-brand-emerald">Brosur PSB 2024</h4>
                            <p class="text-xs text-gray-400">Format PDF (2.5 MB)</p>
                        </div>
                        <button class="w-10 h-10 bg-brand-emerald text-white rounded-full flex items-center justify-center hover:bg-white hover:text-brand-emerald transition shadow-lg">
                            <i class="fas fa-download"></i>
                        </button>
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

useHead({
  title: 'Pendaftaran | Pesantren Modern Al-Ikhlas Global',
  meta: [
    { name: 'description', content: 'Informasi lengkap pendaftaran santri baru (PSB), biaya pendidikan, dan beasiswa.' },
  ],
})

const activeFaq = ref(0)
const whatsappLink = ref('https://wa.me/6285591142923?text=Assalamualaikum%2C%20saya%20tertarik%20untuk%20mendaftar%20sebagai%20calon%20santri%20baru%20di%20Pesantren%20Al-Ikhlas%20Global.%20Mohon%20informasi%20lebih%20lanjut%20mengenai%20persyaratan%20dan%20tahapan%20selanjutnya.%20Terima%20kasih.')

const steps = ref([
    { title: 'Registrasi Online', desc: 'Buat akun dan isi formulir biodata lengkap melalui website pendaftaran kami.' },
    { title: 'Pembayaran Formulir', desc: 'Transfer biaya pendaftaran sebesar Rp 300.000 ke Virtual Account yang tersedia.' },
    { title: 'Ujian Seleksi', desc: 'Ikuti tes baca Al-Quran, Wawancara Psikotes, dan Tes Akademik secara daring/luring.' },
    { title: 'Pengumuman & Daftar Ulang', desc: 'Cek hasil kelulusan di website. Jika lulus, segera lakukan pembayaran daftar ulang.' }
])

const fees = ref([
    { item: 'Uang Pangkal (Gedung)', amount: 'Rp 10.000.000' },
    { item: 'Seragam (4 Stel) & Buku Paket', amount: 'Rp 2.500.000' },
    { item: 'Sewa Ranjang & Lemari (3 Tahun)', amount: 'Rp 1.500.000' },
    { item: 'Kesehatan & Ekskul (1 Tahun)', amount: 'Rp 1.200.000' }
])

const faqs = ref([
    { q: 'Kapan pendaftaran dibuka?', a: 'Pendaftaran Gelombang 1 dibuka mulai 1 Oktober s/d 31 Desember. Gelombang 2 mulai 1 Januari s/d 31 Maret (jika kuota masih ada).' },
    { q: 'Apakah wajib tinggal di asrama?', a: 'Ya, seluruh santri wajib tinggal di asrama (boarding) untuk mengikuti program pendidikan karakter secara penuh 24 jam.' },
    { q: 'Berapa SPP bulanan?', a: 'SPP bulanan (syahriah) sebesar Rp 1.500.000, sudah mencakup makan 3x sehari, laundry seragam, dan biaya pendidikan.' },
    { q: 'Bagaimana prosedur kunjungan orang tua?', a: 'Wali santri diperbolehkan menjenguk setiap hari Ahad pekan ke-2 dan ke-4 setiap bulannya, pukul 09.00 - 15.00 WIB.' }
])

const toggleFaq = (index) => {
    activeFaq.value = activeFaq.value === index ? -1 : index
}
</script>
