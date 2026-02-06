# 🕌 Web Pesantren Modern Al-Ikhlas Global

![Status Project](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Vue Version](https://img.shields.io/badge/Vue-3.x-42b883?style=for-the-badge&logo=vue.js)
![Vite Version](https://img.shields.io/badge/Vite-6.x-646cff?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

> Platform web profil pesantren modern yang dirancang dengan antarmuka premium, responsif, dan performa tinggi untuk merepresentasikan citra lembaga pendidikan Islam bertaraf internasional.

---

## 📋 Daftar Isi

- [Tentang Project](#-tentang-project)
- [Fitur Unggulan](#-fitur-unggulan)
- [Teknologi](#-teknologi)
- [Struktur Folder](#-struktur-folder)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Panduan Deployment](#-panduan-deployment)
- [Kontak Pengembang](#-kontak-pengembang)

---

## 📖 Tentang Project

Project ini adalah refactoring total dari website pesantren tradisional menjadi Modern Web Application (SPA). Dibangun menggunakan ekosistem **Vue 3** dan **Vite**, website ini menawarkan pengalaman pengguna yang mulus (seamless), waktu muat yang instan, dan desain visual yang estetik menggunakan **Tailwind CSS**.

Tujuan utama project ini adalah:

1.  **Modernisasi Citra**: Menampilkan wajah pesantren yang adaptif terhadap teknologi.
2.  **Efisiensi Informasi**: Memudahkan wali santri dan calon pendaftar mengakses info akademik dan pendaftaran.
3.  **Optimasi SEO**: Struktur kode yang ramah mesin pencari untuk menjangkau audiens lebih luas.

---

## ✨ Fitur Unggulan

### 1. Antarmuka Premium (UI/UX)

- **Hero Section Sinematik**: Animasi halus dan tipografi _Cinzel_ yang elegan.
- **Fully Responsive**: Tampilan adaptif sempurna di Desktop, Tablet, dan Mobile.
- **Glassmorphism & Dark Mode Aesthetic**: Sentuhan desain modern dengan nuansa warna _Brand Gold_ & _Emerald_.

### 2. Performa Tinggi

- **Lazy Loading Routes**: Halaman hanya diunduh saat dibutuhkan, menghemat data pengguna.
- **Image Optimization**: Aset gambar terkompresi dan dimuat secara efisien.
- **Vite Powered**: Hot Module Replacement (HMR) super cepat untuk development.

### 3. Fungsionalitas Cerdas

- **Smart WhatsApp Link**: Template pesan otomatis untuk Pendaftaran dan Info Umum.
- **SEO Meta Tags**: Setiap halaman memiliki _meta description_ dan _Open Graph_ dinamis menggunakan `@unhead/vue`.
- **Back-to-Top Navigation**: Tombol navigasi intuitif untuk kenyamanan membaca.

---

## 🛠 Teknologi

Project ini dibangun di atas stack teknologi modern yang **Future-Proof**:

| Kategori           | Teknologi      | Deskripsi                                                             |
| :----------------- | :------------- | :-------------------------------------------------------------------- |
| **Core Framework** | `Vue.js 3`     | Composition API (`<script setup>`) untuk manajemen state yang bersih. |
| **Build Tool**     | `Vite`         | Next Generation Frontend Tooling, build time super cepat.             |
| **Styling**        | `Tailwind CSS` | Utility-first CSS framework untuk desain custom yang presisi.         |
| **Routing**        | `Vue Router 4` | Manajemen navigasi SPA (Single Page Application).                     |
| **SEO**            | `@unhead/vue`  | Manajemen `head` tag dinamis untuk SEO.                               |
| **Icons**          | `FontAwesome`  | Koleksi ikon vektor yang lengkap dan scalable.                        |

---

## 📂 Struktur Folder

Struktur project disusun rapi untuk skalabilitas (Scalability) dan kemudahan maintenance:

```bash
c:/web-pesantren/
├── public/              # Aset statis publik (robots.txt, sitemap.xml)
├── src/
│   ├── assets/          # Aset terkompilasi (Images, SVG, Fonts)
│   ├── components/      # Komponen UI Reusable (Navbar, Footer, BackToTop)
│   ├── router/          # Konfigurasi Routing & Lazy Loading
│   ├── views/           # Halaman Utama (Home, Profil, Akademik, dll)
│   ├── App.vue          # Root Component & Global Transition
│   └── main.js          # Entry Point & Plugin Registration
├── .gitignore           # Konfigurasi Git Ignore
├── netlify.toml         # Konfigurasi Deployment Netlify
├── index.html           # Entry Point HTML
├── tailwind.config.js   # Konfigurasi Tema & Warna
└── vite.config.js       # Konfigurasi Build & Optimasi
```

---

## 🚀 Instalasi & Penggunaan

Ikuti langkah-langkah berikut untuk menjalankan project di komputer lokal Anda:

### Prasyarat

- Node.js (Versi 18+ direkomendasikan)
- NPM atau Yarn

### Langkah-langkah

1.  **Clone Repository** (atau unduh source code):

    ```bash
    git clone https://github.com/rivanalamsyah/web-pesantren.git
    cd web-pesantren
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Jalankan Mode Development**:

    ```bash
    npm run dev
    ```

    Buka `http://localhost:5173` di browser Anda.

4.  **Build untuk Produksi**:
    ```bash
    npm run build
    ```
    Hasil build akan tersedia di folder `dist/`.

---

## ☁️ Panduan Deployment (Netlify)

Project ini sudah dikonfigurasi 100% untuk **Netlify**. File `netlify.toml` telah disertakan untuk menangani routing SPA.

1.  Push kode ke GitHub repository Anda.
2.  Login ke [Netlify](https://www.netlify.com/).
3.  Klik **"New site from Git"**.
4.  Pilih repository GitHub Anda.
5.  Netlify akan otomatis mendeteksi setting:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
6.  Klik **Deploy Site**.

_Catatan: File `netlify.toml` di root folder akan otomatis menangani redirect routing agar halaman tidak 404 saat di-refresh._

---

## 👨‍💻 Kontak Pengembang

Jika Anda memiliki pertanyaan teknis, penawaran kerjasama, atau ingin mengembangkan fitur lebih lanjut, silakan hubungi saya:

**Rivan Alamsyah**  
_Full Stack Web Developer_

- 📧 **Email**: [alamsyahrivan14@gmail.com](mailto:alamsyahrivan14@gmail.com)
- 📱 **WhatsApp**: [+62 855-9114-2923](https://wa.me/6285591142923)
- 💻 **GitHub**: [rivanalamsyah](https://github.com/rivanalamsyah)

---

<center>Made by Rivan Alamsyah</center>
