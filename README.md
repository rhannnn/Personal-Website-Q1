# Raihan NAufal — Website Personal Statis (Tema DKI Jakarta)

Tugas Quiz 1 Webpro: website personal statis (HTML, CSS, JavaScript) dengan
backend Node.js/Express untuk routing dan static file. Desain menggunakan
**Bootstrap 5** dan **Bootstrap Icons**.

## 1. Struktur Folder

Letakkan seluruh isi folder ini persis di:

```
C:\Users\Raihan Naufal R\OneDrive\Documents\Webpro\Quiz1
```

Struktur akhirnya harus seperti ini:

```
Quiz1/
├── server.js              <- Backend Express (routing & static folder)
├── package.json
├── image/                 <- SEMUA gambar diletakkan di sini (lihat daftar di bawah)
│   ├── logo.png
│   ├── profile-photo.jpg
│   ├── jakarta-hero.jpg
│   ├── jakarta-landscape.jpg
│   ├── monas.jpg
│   ├── kota-tua.jpg
│   ├── tmii.jpg
│   ├── kerak-telor.jpg
│   ├── soto-betawi.jpg
│   └── nasi-uduk.jpg
├── pages/                 <- File HTML tiap halaman
│   ├── homepage.html
│   ├── profile.html
│   ├── hometown.html
│   ├── food.html
│   └── tourist.html
└── public/
    ├── css/
    │   └── style.css      <- Stylesheet bersama (tema navy-amber Jakarta)
    └── js/
        └── script.js       <- Script bersama (navbar, animasi, back-to-top)
```

> **Penting:** folder `image` sudah diatur di `server.js` sebagai *static folder*,
> jadi gambar yang Anda taruh di sana otomatis bisa diakses lewat URL
> `http://localhost:3000/image/nama-file.jpg` — sesuai dengan path yang sudah
> dipakai di semua tag `<img>` pada file HTML.

## 2. Daftar Gambar yang Perlu Disiapkan

Siapkan file-file berikut dan taruh di dalam folder `image/` (nama file harus
persis sama, huruf kecil semua):

| Nama File               | Digunakan di Halaman     | Keterangan / Rekomendasi Ukuran                     |
|--------------------------|--------------------------|------------------------------------------------------|
| `logo.png`               | Semua halaman (navbar)   | Logo bulat kecil, 64×64 px, latar transparan          |
| `profile-photo.jpg`      | Profile                  | Foto diri (potret), rasio 1:1, minimal 500×500 px     |
| `jakarta-hero.jpg`       | Homepage, Profile        | Foto skyline Jakarta (malam/senja), landscape lebar   |
| `jakarta-landscape.jpg`  | Homepage, Hometown       | Foto lanskap kota Jakarta (siang hari), landscape     |
| `monas.jpg`              | Tourist                  | Foto Monumen Nasional (Monas)                         |
| `kota-tua.jpg`           | Tourist                  | Foto kawasan Kota Tua Jakarta                         |
| `tmii.jpg`               | Tourist                  | Foto Taman Mini Indonesia Indah                       |
| `kerak-telor.jpg`        | Food, Tourist banner     | Foto makanan Kerak Telor                              |
| `soto-betawi.jpg`        | Food                     | Foto makanan Soto Betawi                              |
| `nasi-uduk.jpg`          | Food                     | Foto makanan Nasi Uduk                                |

Semua gambar sebaiknya berformat `.jpg` atau `.png`, ukuran file wajar
(disarankan di bawah 1 MB per gambar) agar halaman tetap ringan saat dimuat.
Jika sebuah gambar belum tersedia, halaman tetap akan tampil (hanya area
gambar akan kosong/rusak) — tidak akan membuat server error.

## 3. Instalasi & Menjalankan Project

Jalankan langkah-langkah berikut menggunakan **Command Prompt / PowerPoint / Terminal VS Code**,
setelah masuk ke folder project:

```bash
cd "C:\Users\Raihan Naufal R\OneDrive\Documents\Webpro\Quiz1"
```

### Langkah 1 — Pastikan Node.js sudah terinstal

Cek versi Node.js dan npm:

```bash
node -v
npm -v
```

Jika belum terinstal, unduh dan instal terlebih dahulu dari
[https://nodejs.org](https://nodejs.org) (pilih versi **LTS**).

### Langkah 2 — Inisialisasi project (jika belum ada `package.json`)

> Karena file `package.json` sudah disediakan di project ini, langkah ini
> **boleh dilewati**. Namun jika Anda ingin membuat project dari nol, gunakan:

```bash
npm init -y
```

### Langkah 3 — Install Express

```bash
npm install express
```

(Opsional, untuk auto-restart saat development)

```bash
npm install --save-dev nodemon
```

### Langkah 4 — Jalankan server

Jalankan dengan Node.js biasa:

```bash
node server.js
```

Atau, jika sudah menginstal `nodemon` dan ingin server otomatis restart saat
ada perubahan kode:

```bash
npm run dev
```

Jika berhasil, akan muncul pesan di terminal seperti berikut:

```
=================================================
  JakartaFolio server berjalan di port 3000
  Buka: http://localhost:3000/quiz1
=================================================
```

### Langkah 5 — Buka di Browser

Akses URL berikut sesuai kebutuhan:

- Homepage → `http://localhost:3000/quiz1`
- Profile → `http://localhost:3000/quiz1/profile`
- Hometown → `http://localhost:3000/quiz1/hometown`
- Local Food → `http://localhost:3000/quiz1/food`
- Tourist Places → `http://localhost:3000/quiz1/tourist`

Untuk menghentikan server, tekan `Ctrl + C` di terminal.

## 4. Kustomisasi

- **Ganti data diri**: buka `pages/profile.html`, cari bagian nama, bio,
  pendidikan, dan sesuaikan dengan data Anda.
- **Ganti warna tema**: seluruh warna diatur lewat variabel CSS di bagian
  paling atas file `public/css/style.css` (`:root { --jf-navy: ...; }`).
- **Tambah konten**: setiap halaman murni HTML + Bootstrap, tinggal duplikasi
  blok `<div class="card-jf">` atau `<section>` yang sudah ada untuk menambah
  konten baru.

Selamat mengerjakan! 🎉
