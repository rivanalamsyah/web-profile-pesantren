<template>
  <footer class="bg-brand-surface border-t border-brand-gold/10 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div class="col-span-1">
                  <div class="flex items-center gap-3 mb-6">
                       <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-emerald to-brand-gold flex items-center justify-center text-white font-heading font-bold text-lg">A</div>
                       <h3 class="font-heading text-xl text-brand-gold font-bold">Al-Ikhlas Global</h3>
                  </div>
                  <p class="text-brand-muted text-sm leading-relaxed mb-6">
                      Mewujudkan generasi Qur'ani yang cerdas, berakhlak mulia, dan berwawasan global di era digital. Berkomitmen mencetak pemimpin masa depan.
                  </p>
                  <div class="flex space-x-4">
                      <a href="#" class="w-10 h-10 rounded-full bg-brand-dark border border-gray-700 flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition"><i class="fab fa-facebook-f"></i></a>
                      <a href="#" class="w-10 h-10 rounded-full bg-brand-dark border border-gray-700 flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition"><i class="fab fa-instagram"></i></a>
                      <a href="#" class="w-10 h-10 rounded-full bg-brand-dark border border-gray-700 flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition"><i class="fab fa-youtube"></i></a>
                  </div>
              </div>
              
              <div>
                  <h4 class="font-bold text-white mb-6 font-heading">Tautan Cepat</h4>
                  <ul class="space-y-3 text-sm text-brand-muted">
                      <li><router-link to="/profil" class="hover:text-brand-gold transition flex items-center gap-2"><i class="fas fa-chevron-right text-xs"></i> Tentang Kami</router-link></li>
                      <li><router-link to="/akademik" class="hover:text-brand-gold transition flex items-center gap-2"><i class="fas fa-chevron-right text-xs"></i> Kurikulum</router-link></li>
                      <li><router-link to="/kegiatan" class="hover:text-brand-gold transition flex items-center gap-2"><i class="fas fa-chevron-right text-xs"></i> Prestasi Santri</router-link></li>
                      <li><router-link to="/pendaftaran" class="hover:text-brand-gold transition flex items-center gap-2"><i class="fas fa-chevron-right text-xs"></i> Informasi PSB</router-link></li>
                      <li><a href="#" class="hover:text-brand-gold transition flex items-center gap-2"><i class="fas fa-chevron-right text-xs"></i> Karir Guru</a></li>
                  </ul>
              </div>

              <div>
                  <h4 class="font-bold text-white mb-6 font-heading">Unit Pendidikan</h4>
                  <ul class="space-y-3 text-sm text-brand-muted">
                      <li class="flex items-start gap-3">
                          <i class="fas fa-school text-brand-emerald mt-1"></i>
                          <span>SMP Islam Terpadu<br><small class="text-gray-500">Akreditasi A</small></span>
                      </li>
                      <li class="flex items-start gap-3">
                          <i class="fas fa-university text-brand-emerald mt-1"></i>
                          <span>SMA Sains Tahfidz<br><small class="text-gray-500">Akreditasi A</small></span>
                      </li>
                      <li class="flex items-start gap-3">
                          <i class="fas fa-book-open text-brand-emerald mt-1"></i>
                          <span>Ma'had Aly (S1)<br><small class="text-gray-500">Studi Islam</small></span>
                      </li>
                  </ul>
              </div>

              <div>
                  <h4 class="font-bold text-white mb-6 font-heading">Hubungi Kami</h4>
                  <ul class="space-y-4 text-sm text-brand-muted">
                      <li class="flex items-start gap-3">
                          <i class="fas fa-map-marker-alt mt-1 text-brand-gold text-lg"></i>
                          <span>Jl. Kaliurang Km 12, Ngaglik, Sleman, Yogyakarta, Indonesia 55581</span>
                      </li>
                      <li class="flex items-center gap-3">
                          <a href="https://wa.me/6285591142923?text=Assalamualaikum%2C%20saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut%20mengenai%20Pesantren%20Al-Ikhlas%20Global." target="_blank" class="flex items-center gap-3 hover:text-brand-gold transition group">
                              <i class="fab fa-whatsapp text-brand-gold text-lg group-hover:scale-110 transition-transform"></i>
                              <span class="text-lg font-semibold text-white">+62 855-9114-2923</span>
                          </a>
                      </li>
                      <li class="flex items-center gap-3">
                          <i class="far fa-envelope text-brand-gold text-lg"></i>
                          <span>alamsyahrivan14@gmail.com</span>
                      </li>
                  </ul>
              </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted">
              <div>
                  <p>&copy; 2024 Pesantren Modern Al-Ikhlas Global. All Rights Reserved.</p>
                  <p class="mt-1">Developed by <a href="https://github.com/rivanalamsyah" target="_blank" class="text-brand-gold hover:underline">Rivan Alamsyah</a></p>
              </div>
              <div class="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" class="hover:text-white">Privacy Policy</a>
                  <a href="#" class="hover:text-white">Terms of Service</a>
              </div>
          </div>
      </div>
  </footer>
</template>

<script setup>
</script>
