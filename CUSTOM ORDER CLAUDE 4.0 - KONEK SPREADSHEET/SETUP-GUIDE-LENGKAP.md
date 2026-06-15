📖 SETUP GUIDE - HANDCASTING WEB SHOP
═══════════════════════════════════════════════════════════════════════════════

Panduan lengkap untuk setup, customize, dan launch web shop handcasting Anda.
Estimasi waktu: 1-2 jam untuk setup lengkap.

═══════════════════════════════════════════════════════════════════════════════
🎯 CHECKLIST SETUP
═══════════════════════════════════════════════════════════════════════════════

STEP 1: PERSIAPAN FILE (10 menit)
─────────────────────────────────────
□ Download semua file dari folder output
□ Struktur folder yang benar:
  /handcasting-web/
    ├── index.html (halaman shop/kategori)
    ├── handcasting-custom-order.html (halaman order)
    ├── mitra-generator.html (tool generate link mitra)
    ├── data-harga.js (data terpusat)
    └── [OPSIONAL] assets/ (folder untuk foto/gambar)

STEP 2: CUSTOMIZE DATA HARGA (15 menit)
─────────────────────────────────────
□ Buka file: data-harga.js
□ Update harga paket sesuai kebutuhan:
  - Cari: products: [{ price: 1150000 ...}]
  - Ubah semua harga dengan nilai Anda
□ Update data mitra:
  - Cari: mitra: { '001': { ... } }
  - Ubah nama, wa, lokasi, sheetId untuk setiap mitra
□ Tambah mitra baru jika ada (lihat template di bagian akhir data-harga.js)
□ Update add-on dan opsi layanan sesuai produk Anda

STEP 3: UPDATE BRANDING (20 menit)
─────────────────────────────────────
□ Buka file: index.html
  - Line ~55: Ubah logo/emoji "💎" jika ingin
  - Line ~275: Update hero title
  - Line ~277: Update hero description
  - Line ~285-301: Update hero stats (500+, 4.9★, dll)
  - Line ~545: Update footer text
□ Buka file: handcasting-custom-order.html
  - Line ~38: Update logo/emoji
  - Tidak perlu ubah, sudah auto-load dari data-harga.js

STEP 4: SETUP GOOGLE SHEET & APPS SCRIPT (30 menit) [OPTIONAL UNTUK SEKARANG]
─────────────────────────────────────
□ Buat Google Sheet baru untuk setiap mitra
  - Nama sheet: "Calon_MitraHC" (sesuai dengan konfigurasi)
  - Kolom: Timestamp | Nama Lengkap | No. WhatsApp | Email | Paket Pilihan | Kota/Wilayah | Profesi | Pengalaman
□ Copy Sheet ID ke dalam data-harga.js:
  - Buka sheet → URL: https://docs.google.com/spreadsheets/d/[SHEET_ID_DISINI]/...
  - Kopi paste [SHEET_ID_DISINI] ke dalam mitra.sheetId
□ Setup Apps Script (NANTI - fokus UI/UX dulu)
  - Akan dijelaskan di STEP terakhir setelah UI/UX final

STEP 5: TEST LOKAL (15 menit)
─────────────────────────────────────
□ Terminal: Buka folder project, jalankan:
  python -m http.server 8000
  (atau gunakan Live Server di VSCode)
□ Browser: Buka http://localhost:8000
□ Test halaman:
  - ✓ Klik tombol filter (Semua, 3D, 2D, Promo)
  - ✓ Klik "Pesan Sekarang" di salah satu paket
  - ✓ Test form order (fill semua field, klik next step)
  - ✓ Test color preview (pilih warna berbeda, lihat preview berubah)
  - ✓ Klik "Buat Paket Custom" di halaman shop
  - ✓ Buka mitra-generator.html, test generate link
□ Cek console (F12) tidak ada error

STEP 6: CUSTOMIZE TAMPILAN (OPTIONAL, 30 menit)
─────────────────────────────────────
□ Warna: Buka index.html atau custom-order.html
  - Cari `:root { --pink:...}` di <style>
  - Ubah hex color sesuai brand Anda
  - Contoh: --pink: #FF69B4 → --pink: #FF1493
□ Font: Sudah menggunakan Google Fonts (Poppins, Fredoka)
  - Cukup ubah di line <link href="...fonts.googleapis.com...">
□ Logo/Emoji: Ubah 💎 menjadi emoji pilihan Anda

STEP 7: UPLOAD KE HOSTING (15 menit)
─────────────────────────────────────
Pilih salah satu opsi:

OPSI A: GitHub Pages (GRATIS, recommended untuk awal)
  1. Buat akun GitHub (gratis)
  2. Buat repository baru: "handcasting-web"
  3. Upload semua file (.html, .js)
  4. Settings → Pages → Branch: main → Save
  5. Link: https://username.github.io/handcasting-web/
  6. Done! Gratis hosting & custom domain later

OPSI B: Netlify (GRATIS, mudah)
  1. Sign up di netlify.com
  2. Drag-drop folder project ke Netlify
  3. Auto-generate URL
  4. Done!

OPSI C: Shared Hosting / Domain Sendiri
  1. Beli domain (cth: bidanmotret.com)
  2. Beli shared hosting
  3. Upload files via FTP
  4. Akses via domain Anda

STEP 8: TEST LIVE & MONITORING (10 menit)
─────────────────────────────────────────
□ Akses link live website
□ Test semua fitur:
  - Filter produk
  - Form order
  - Klik "Kirim Pesanan via WhatsApp"
  - Modal konfirmasi muncul dengan order number
  - WhatsApp terbuka dengan pesan terisi otomatis
□ Test link mitra:
  - Buka mitra-generator.html
  - Generate link untuk mitra 001
  - Copy-paste link, cek mitra name terlihat di header
□ Test mobile (F12 → Toggle device toolbar):
  - Floating total bar muncul di bawah
  - Sticky header bekerja
  - Form responsive

═══════════════════════════════════════════════════════════════════════════════
🔧 CUSTOMIZE YANG PALING SERING DIMINTA
═══════════════════════════════════════════════════════════════════════════════

1️⃣ MENGUBAH HARGA PAKET
   File: data-harga.js
   Cari: products: [
   Ubah: price: 1150000 → price: [HARGA BARU]
   Save & refresh browser

2️⃣ MENAMBAH PAKET BARU
   File: data-harga.js
   Copy block ini ke products array:
   {
       id: 'paket-nama-unik',
       name: 'Nama Paket di Web',
       category: '3d', // atau '2d' atau 'promo'
       type: '3D', // 3D atau 2D
       age: '0-1 Bulan',
       price: 2000000,
       desc: 'Deskripsi singkat paket',
       image: '🎁', // emoji pilihan
       includes: [
           'Feature 1',
           'Feature 2',
           'Feature 3'
       ],
       badge: 'Populer' // atau 'Best Seller', 'Premium', dll
   }

3️⃣ MENAMBAH ADD-ON BARU
   File: data-harga.js
   Cari: biayaAddon: [
   Tambah:
   { id: "addon-nama", nama: "Nama Add-on", harga: 99000, icon: "🎁" }

4️⃣ MENAMBAH MITRA BARU
   File: data-harga.js
   Cari: mitra: {
   Copy template dan paste:
   '003': {
       id: '003',
       nama: 'Nama Mitra Baru',
       wa: '628xxxxxxxxxxxx',
       lokasi: 'Kota',
       sheetId: 'GANTI_DENGAN_SHEET_ID_BARU',
       email: 'email@mitra.com',
       instagramHandle: 'instagram_handle',
       operasionalJam: '08:00 - 18:00'
   }

5️⃣ MENGUBAH WARNA BRAND
   File: index.html atau handcasting-custom-order.html
   Cari: :root {
   Ubah:
   --pink: #FF69B4;        → ubah hex code
   --teal: #00A699;        → ubah hex code
   --yellow: #FFD700;      → ubah hex code
   (Gunakan https://color-picker.org untuk pilih warna)

6️⃣ MENGUBAH LOGO/EMOJI UTAMA
   File: index.html (line 380)
   Cari: <div class="logo">💎 Bidan Motret</div>
   Ubah: 💎 → emoji pilihan Anda
   
   Juga di: handcasting-custom-order.html (line 140)
   Cari: <div class="header-title">💎 Bidan Motret</div>

7️⃣ MENGUBAH HERO TEXT / JUDUL UTAMA
   File: index.html
   Cari: <h1>Handcasting 3D & 2D<br>Kenangan Seumur Hidup</h1>
   Ubah teks sesuai keinginan

8️⃣ MENGUBAH FOTO PRODUK (DARI EMOJI KE FOTO ASLI)
   File: index.html, handcasting-custom-order.html
   Cari: <img> atau style dengan background atau image property
   Ganti emoji dengan:
   - <img src="assets/paket-unyu.jpg"> untuk foto
   - Atau upload foto ke folder assets/

═══════════════════════════════════════════════════════════════════════════════
📱 FITUR UTAMA YANG SUDAH SIAP
═══════════════════════════════════════════════════════════════════════════════

✅ HALAMAN SHOP (index.html)
   - Grid produk dengan filter kategori
   - Search functionality
   - Hero stats (trust badges)
   - Promo banner
   - Custom package CTA
   - Product cards dengan hover effect
   - Mobile responsive

✅ HALAMAN CUSTOM ORDER (handcasting-custom-order.html)
   - Progress steps indicator (4 langkah)
   - Form validation dengan error state
   - Live color preview (ubah warna, gambar berubah)
   - Kalkulator harga real-time
   - Summary box otomatis update
   - Floating sticky total bar (mobile)
   - Modal konfirmasi order dengan nomor referensi
   - Field tanggal jadwal dengan min-date validation
   - WhatsApp number formatter otomatis (08xxx → 628xxx)
   - Custom a la carte builder (tambah cetakan per orang)
   - Sticky gallery preview (desktop)

✅ MITRA LINK GENERATOR (mitra-generator.html)
   - Generate unik link per mitra
   - QR code generator (download-able)
   - Share via WhatsApp
   - Copy to clipboard
   - Mitra database management
   - Template pesan sudah siap

✅ FITUR TEKNIS
   - Auto-format nomor WhatsApp
   - Form validation lengkap
   - Responsive design (mobile-first)
   - No hard-refresh needed (SPA-like)
   - Zero external dependencies (except Google Fonts)
   - URL parameter routing (?mitra=001)
   - Data centralized di data-harga.js

═══════════════════════════════════════════════════════════════════════════════
⚡ TIPS & TRICKS
═══════════════════════════════════════════════════════════════════════════════

TIP 1: TEST SETIAP PERUBAHAN
   - Selalu refresh browser setelah ubah file
   - Ctrl+Shift+R untuk hard refresh (clear cache)
   - Console F12 untuk cek error

TIP 2: BACKUP FILE SEBELUM EDIT
   - Copy file asli dengan nama "filename-backup.html"
   - Jika ada error, bisa restore dari backup

TIP 3: SHARE LINK MITRA
   - Gunakan mitra-generator.html untuk buat link unik
   - Bagikan link ke WhatsApp mitra
   - Atau print QR code untuk flyer/banner

TIP 4: MONITOR PESANAN
   - Setelah Apps Script setup, lihat pesanan langsung di Google Sheet
   - Bisa add column untuk tracking status (Konfirmasi, Proses, Selesai, dll)

TIP 5: PROMO & FLASH SALE
   - Edit promo-banner di index.html line ~110
   - Ubah teks dan jadwal promo
   - Update harga di data-harga.js

═══════════════════════════════════════════════════════════════════════════════
❓ FAQ - PERTANYAAN UMUM
═══════════════════════════════════════════════════════════════════════════════

Q: Bagaimana jika saya ingin ubah logo text "Bidan Motret" ke logo image?
A: Ganti <div class="logo">💎 Bidan Motret</div>
   Dengan: <img src="assets/logo.png" alt="Logo" style="height:40px;">
   Upload logo.png ke folder assets/

Q: Bisa pakai foto produk real daripada emoji?
A: Bisa! Ganti emoji dengan <img src="assets/paket-gemes.jpg">
   Atau set background image di CSS

Q: Bagaimana kalau mitra tidak ada Google Sheet?
A: Tetap bisa pakai. Form order langsung ke WhatsApp mitra.
   Google Sheet opsional untuk tracking (setup nanti dengan Apps Script)

Q: Bisa pakai paket custom dengan harga tetap?
A: Bisa! Tambah field di form untuk input harga custom, atau
   Buat paket baru di data-harga.js dengan custom flag

Q: Bagaimana handle multiple currency?
A: Semua harga dalam IDR. Untuk currency lain, ubah di
   data-harga.js → config.currency

Q: Bisa pakai analytics / tracking?
A: Bisa tambah Google Analytics nanti. Atau tracking via Google Sheet.

═══════════════════════════════════════════════════════════════════════════════
🚀 NEXT STEPS (SETELAH UI/UX SELESAI)
═══════════════════════════════════════════════════════════════════════════════

1. Setup Apps Script untuk auto-save ke Google Sheet
2. Setup multi-mitra dashboard untuk monitoring pesanan
3. Auto-reply email untuk order confirmation
4. Integrasi payment gateway (Midtrans, Stripe, dll)
5. Review system & testimonial dari customer
6. Email newsletter signup
7. Referral program untuk mitra

═══════════════════════════════════════════════════════════════════════════════
📞 SUPPORT
═══════════════════════════════════════════════════════════════════════════════

Jika ada error atau pertanyaan:
1. Buka browser console (F12 → Console tab)
2. Copy-paste error message
3. Check file structure - pastikan semua file ada
4. Cek data-harga.js tidak ada syntax error
5. Clear browser cache (Ctrl+Shift+Del)

═══════════════════════════════════════════════════════════════════════════════
✨ SELESAI!
═══════════════════════════════════════════════════════════════════════════════

Web Anda sudah siap! Kini saatnya:
1. Share link ke mitra via WhatsApp
2. Promote di Instagram / TikTok
3. Masukkan di Google Business Profile
4. Print QR code untuk offline marketing

Goodluck! 🚀
