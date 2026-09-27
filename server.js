// =============================================================
// JakartaFolio — Backend Server (Node.js + Express)
// =============================================================
// Menangani routing halaman statis sesuai format:
//   /quiz1            -> Homepage
//   /quiz1/profile     -> Profile
//   /quiz1/hometown    -> Hometown
//   /quiz1/food        -> Local Food
//   /quiz1/tourist     -> Tourist Places
// Serta menyediakan folder "image" sebagai static folder agar
// gambar dapat diakses melalui path "/image/nama-gambar.jpg".
// =============================================================

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------------------------------------------------
// Static folders
// -------------------------------------------------------------
// Folder "image" -> diakses via /image/...
app.use("/image", express.static(path.join(__dirname, "image")));

// Folder "public/css" -> diakses via /css/...
app.use("/css", express.static(path.join(__dirname, "public", "css")));

// Folder "public/js" -> diakses via /js/...
app.use("/js", express.static(path.join(__dirname, "public", "js")));

// -------------------------------------------------------------
// Routing halaman (sesuai format yang diwajibkan)
// -------------------------------------------------------------
app.get("/quiz1", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "homepage.html"));
});

app.get("/quiz1/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "profile.html"));
});

app.get("/quiz1/hometown", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "hometown.html"));
});

app.get("/quiz1/food", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "food.html"));
});

app.get("/quiz1/tourist", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "tourist.html"));
});

// Redirect root "/" ke "/quiz1" agar lebih mudah diakses
app.get("/", (req, res) => {
  res.redirect("/quiz1");
});

// -------------------------------------------------------------
// 404 handler (harus diletakkan paling akhir)
// -------------------------------------------------------------
app.use((req, res) => {
  res
    .status(404)
    .send(
      "<h1>404 - Halaman Tidak Ditemukan</h1><p>Silakan kembali ke <a href='/quiz1'>Beranda</a>.</p>"
    );
});

// -------------------------------------------------------------
// Jalankan server
// -------------------------------------------------------------
// PENTING: app.listen() HARUS dipanggil langsung tanpa syarat apa pun.
// Saat berjalan lokal, ini benar-benar membuka port 3000 di komputer Anda.
// Saat di-deploy ke Vercel, Vercel mendeteksi panggilan listen() ini
// secara otomatis (fitur "zero-config Node.js server") dan mengarahkan
// semua traffic ke server ini -- port yang ditulis di bawah ini TIDAK
// dipakai sebagai port publik di Vercel, hanya dipakai saat lokal.
app.listen(PORT, () => {
  console.log("=================================================");
  console.log(`  Raihannaufal server berjalan di port ${PORT}`);
  console.log(`  Buka: http://localhost:${PORT}/quiz1`);
  console.log("=================================================");
});
