// =============================================================
// Entry point khusus untuk Vercel Serverless Functions.
// Vercel otomatis mendeteksi setiap file di dalam folder "api/"
// sebagai satu function. Di sini kita hanya mengambil (require)
// aplikasi Express yang sudah didefinisikan di server.js pada
// folder root project, lalu mengekspornya kembali.
// =============================================================

const app = require("../server");

module.exports = app;
