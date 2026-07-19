# Khaje Studio - Solusi Digital & Akademik Terbaikmu

![Khaje Studio](public/icon.png)

Sebuah platform *portfolio* dan penyedia layanan digital serta akademik yang dirancang dengan estetika **Neo-Brutalism**. Website ini mengusung filosofi **"Built Not Designed"**—mengutamakan fungsi di atas segalanya, dengan estetika yang mengikuti kejujuran struktur.

---

## 🎨 Rancangan Awal & Perencanaan (Planning)

Pada tahap awal, visi utama proyek ini adalah menciptakan identitas visual yang *bold*, tegas, dan tidak basa-basi. Kami menghindari desain modern yang terlalu *clean* atau *glassmorphism*, dan memilih rute **Neo-Brutalism**.

### Keputusan Desain & Arsitektur:
- **Konsep UI/UX**: Garis batas (border) yang tebal dan tajam, bayangan solid (solid shadows) tanpa blur, serta kontras warna yang tinggi.
- **Tipografi**: Menggunakan kombinasi font **Anton** (untuk *Heading* yang masif dan brutal) dan **Space Mono** (untuk *Body* dan *Label* yang memberikan kesan teknis/mekanis).
- **Tech Stack**: 
  - **Framework**: Next.js (App Router)
  - **Styling**: Tailwind CSS v4 (menggunakan injeksi variabel CSS modern)
  - **Bahasa**: TypeScript untuk keamanan tipe data (*type safety*).

---

## 🚀 Proses Pembangunan Website

Pengembangan dilakukan secara bertahap dengan fokus pada performa dan konsistensi desain:

1. **Fondasi Sistem Desain (Global CSS)**: Mengatur seluruh token desain (warna, tipografi, jarak) ke dalam `globals.css` yang terintegrasi langsung dengan Tailwind v4. Kami juga membuat *utility classes* khusus seperti `.neo-brutalist-border` dan efek transisi `.hover-lift`.
2. **Halaman Utama (Home)**: Membangun *Hero Section* dengan teks *display* raksasa, efek *Marquee* (teks berjalan) otomatis untuk layanan, dan tata letak *Bento Grid* untuk menyoroti pencapaian studio.
3. **Halaman Halaman Pendukung**: Merancang tata letak untuk `/layanan`, `/portfolio`, `/privacy`, dan `/terms` agar tetap selaras dengan panduan gaya brutal.
4. **Halaman Tim (Team)**: Membuat antarmuka profil tim (*The Brains*) yang menampilkan kartu anggota dengan efek *hover* dinamis (dari hitam-putih menjadi berwarna) beserta tautan media sosial.
5. **Manajemen Aset**: Mengintegrasikan logo perusahaan sebagai *Favicon* dan memuat foto-foto tim secara langsung ke dalam *production build*.

---

## 🐛 Perbaikan Bug & Troubleshooting

Selama masa pengembangan, kami menghadapi dan menyelesaikan berbagai kendala teknis agar website mencapai standar *production-ready*:

* **ESLint & Strict HTML Entities**: 
  Next.js menolak kompilasi karena adanya karakter apostrof (kutip satu) yang tidak di-*escape* dengan benar pada teks biasa (seperti kata `don't` atau `Khaje'Studio`). Kami melakukan pembersihan massal di file `/layanan`, `/privacy`, `/terms`, `Navbar`, dan `Footer` dengan menggantinya menjadi *HTML entities* (`&apos;`).
* **TypeScript Inference (Tipe Data Tim)**: 
  Terdapat *error* di mana properti objek tim tidak terbaca sempurna. Kami memperbaikinya dengan mendefinisikan *interface* `TeamMember` secara eksplisit, yang juga mengatasi masalah render kondisional untuk properti opsional seperti `image` dan `socials`.
* **Eksperimen Tekstur Tipografi (Grunge/Stamp Effect)**: 
  Kami sempat melakukan eksperimen iteratif untuk membuat judul terlihat seperti stempel bertekstur (kasar). Mulai dari mencoba injeksi SVG Noise Filter melalui *CSS Masking*, mencoba font *Rubik Dirt*, hingga akhirnya kami kembalikan ke bentuk font **Anton** asli yang solid dan bersih demi menjaga keterbacaan serta otentisitas *brutalism*.
* **Responsivitas Mobile**: 
  Memperbaiki struktur tata letak (seperti penempatan gambar *Gundam*) agar tetap berada di samping elemen teks pada layar *mobile*, tidak terlempar ke bawah.
* **Sinkronisasi Aset Vercel**: 
  Menyelesaikan kendala *delay* pada *caching* *development server* dan memastikan file statis (`icon.png`, `adji-pras.jpeg`) ter- *commit* dengan baik ke GitHub agar Vercel dapat mendeteksinya di *live production*.
* **Konfigurasi SEO Tingkat Lanjut**:
  Menambahkan verifikasi Google Search Console (`google225c45eb0a10bf80.html`), membuat peta situs dinamis (`sitemap.ts`), dan memperbarui spesifikasi metadata *Favicon* (termasuk kelipatan `192x192`, `512x512`, dan `apple-touch-icon`) agar memenuhi standar indeks *Google Search Engine Results Pages* (SERP).
* **Optimalisasi Jarak & Ukuran Hero Section**:
  Mengganti teks judul raksasa di halaman utama dengan logo gambar berdesain kustom (`hero-title.png`). Mengatasi isu ruang kosong (celah berlebih) antara navigasi dan gambar menggunakan teknik modifikasi *padding* nol dan *negative margins* (`-mt`, `-mb`) tingkat tinggi, memaksa seluruh elemen saling merapat sempurna sesuai karakteristik padat *Neo-Brutalism*.

---

## 💻 Panduan Menjalankan Secara Lokal

Untuk menjalankan proyek ini di komputer Anda:

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---
*Built with code, logic, and a brutal philosophy.*
