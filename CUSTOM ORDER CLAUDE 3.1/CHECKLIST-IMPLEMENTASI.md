✅ CHECKLIST IMPLEMENTASI - HANDCASTING WEB SHOP
═══════════════════════════════════════════════════════════════════════════════

ESTIMASI: 2-3 jam untuk selesai SEMUA

═══════════════════════════════════════════════════════════════════════════════
🔵 FASE 1: PERSIAPAN DATA (30 menit)
═══════════════════════════════════════════════════════════════════════════════

DATA HARGA PAKET
□ Edit file: data-harga.js
□ Cari: products: [ { ... } ]
□ Update harga setiap paket:
  └─ Paket Unyu (0-1 bulan, 2 cetakan): Rp ______
  └─ Paket Gemes (0-1 bulan, 4 cetakan): Rp ______
  └─ Paket Full USG (0-1 bulan + USG): Rp ______
  └─ Paket Sibling (bayi + sibling): Rp ______
  └─ Paket 2D (1-5 tahun, diskon): Rp ______
  └─ Paket Keluarga Besar (custom mix): Rp ______
□ Update deskripsi paket jika ada perubahan
□ Update badge (Populer, Best Seller, Premium, etc)

DATA MITRA
□ Edit file: data-harga.js
□ Cari: mitra: { ... }
□ Update Mitra Utama (pusat):
  └─ Nama: ________________
  └─ No. WhatsApp: ________________
  └─ Lokasi: ________________
  └─ Email: ________________
  └─ Instagram: ________________
  └─ Jam Operasional: ________________
□ Tambah Mitra Baru (jika ada):
  □ Mitra 001:
    └─ Nama: ________________
    └─ No. WhatsApp: ________________
    └─ Lokasi: ________________
  □ Mitra 002:
    └─ Nama: ________________
    └─ No. WhatsApp: ________________
    └─ Lokasi: ________________
  □ Mitra 003: (tambah jika ada)

ADD-ON & LAYANAN
□ Review biayaAddon (sudah lengkap, optional update)
□ Review biayaLayanan (cek harga home service)
□ Update custom cetakan harga (jika berbeda)
□ Update custom bingkai harga (jika ada bingkai baru)

═══════════════════════════════════════════════════════════════════════════════
🟢 FASE 2: BRANDING & CUSTOMIZATION (45 menit)
═══════════════════════════════════════════════════════════════════════════════

LOGO & JUDUL
□ Edit file: index.html
  └─ Line ~380: Ubah "💎 Bidan Motret" → "🔴 [Pilihan Emoji] [Nama Bisnis]"
□ Edit file: handcasting-custom-order.html
  └─ Line ~140: Ubah logo di header
□ Pilih emoji yang sesuai brand Anda
  └─ Popular: 💎 👶 🎁 🎨 ✨ 🌸 💕 🏥

WARNA BRAND
□ Edit file: index.html (atau handcasting-custom-order.html)
□ Cari: :root { --pink: ... }
□ Update warna utama:
  └─ --pink: #FF69B4 → #[HEX COLOR BARU]
  └─ --teal: #00A699 → #[HEX COLOR BARU]
  └─ --yellow: #FFD700 → #[HEX COLOR BARU]
□ Tools: https://color-picker.org untuk pilih warna
□ Test di browser untuk lihat hasilnya

JUDUL & DESKRIPSI HERO
□ Edit file: index.html
□ Cari section <h1> di hero:
  └─ Update: "Handcasting 3D & 2D" → "________________"
  └─ Update: "Kenangan Seumur Hidup" → "________________"
□ Update deskripsi di <p> hero
□ Update stats (500+ Keluarga, 4.9★, etc):
  └─ Cari: <div class="stat-num">500+</div>
  └─ Update dengan angka Anda

PROMO BANNER (OPTIONAL)
□ Edit file: index.html
□ Cari: <div class="promo-banner">
□ Update teks promo
□ Atau hapus jika tidak ada promo

═══════════════════════════════════════════════════════════════════════════════
🟡 FASE 3: TESTING LOKAL (20 menit)
═══════════════════════════════════════════════════════════════════════════════

SETUP LOKAL SERVER
□ Buka terminal/command prompt
□ Navigate ke folder project
□ Jalankan: python -m http.server 8000
□ Atau gunakan Live Server di VSCode
□ Akses: http://localhost:8000

TEST HALAMAN SHOP
□ Buka index.html
□ Cek tampilan & branding sudah benar
□ Test filter buttons:
  └─ Klik "Semua Paket" → lihat 6 paket
  └─ Klik "Handcasting 3D" → lihat 4 paket 3D
  └─ Klik "Handcasting 2D" → lihat 1 paket 2D
  └─ Klik "Promo" → lihat paket promo
□ Test search: ketik "gemes" → paket gemes muncul
□ Klik "Pesan Sekarang" di salah satu paket

TEST FORM ORDER
□ Halaman custom order terbuka
□ Test Progress Steps:
  └─ Lihat step indicator di atas (1, 2, 3, 4)
  └─ Klik next step → step berubah
□ Isi form Step 1:
  └─ Pilih usia bayi
  └─ Isi nama bayi
  └─ Isi tanggal lahir (optional)
  └─ Klik "Lanjut: Kustomisasi →"
□ Test Step 2 (Kustomisasi):
  └─ Pilih warna cetakan → lihat preview gambar berubah warna
  └─ Centang add-on → harga total update otomatis
  └─ Lihat summary box update live
  └─ Klik "Lanjut: Jadwal →"
□ Test Step 3 (Jadwal):
  └─ Pilih metode (Studio / Home Service)
  └─ Isi tanggal (harus minimal besok)
  └─ Isi nomor WA (cth: 08123456789)
  └─ Lihat WA preview muncul
  └─ Isi nama pemesan
  └─ Klik "Review Pesanan →"
□ Test Step 4 (Review):
  └─ Lihat summary semua data
  └─ Klik "Kirim Pesanan via WhatsApp"
□ Modal konfirmasi muncul:
  └─ Lihat nomor referensi (cth: #BM-XXXXX)
  └─ Lihat ringkasan order
  └─ Klik "Kirim ke WhatsApp ✓"

TEST WHATSAPP INTEGRATION
□ WhatsApp terbuka dengan pesan
□ Cek pesan sudah terisi dengan:
  └─ Nomor referensi
  └─ Data lengkap order
  └─ Harga total
  └─ Nomor pemesan

TEST MOBILE
□ F12 → Toggle device toolbar
□ Pilih iPhone 12 / Galaxy S9
□ Test:
  └─ Filter buttons responsive
  └─ Form input readable
  └─ Floating total bar muncul di bawah
  └─ Tombol "Pesan Sekarang" mudah diklik
  └─ Modal responsive

TEST CUSTOM A LA CARTE (OPTIONAL)
□ Di halaman order, klik "Custom Paket"
□ Test:
  └─ Klik "+ Tambah Cetakan/Orang"
  └─ Pilih jenis cetakan
  └─ Isi jumlah
  └─ Harga update otomatis
  └─ Hapus cetakan → "Hapus ✖"
  └─ Harga update

TEST MITRA LINK GENERATOR
□ Buka mitra-generator.html
□ Isi data mitra:
  └─ Kode: 001
  └─ Nama: Bidan Sari
  └─ Lokasi: Jakarta Selatan
  └─ WhatsApp: 6281234567890
□ Klik "Generate Link Mitra"
□ Link muncul (salin & test)
□ Klik "Generate QR Code"
□ QR code muncul
□ Klik "Download QR Code"

═══════════════════════════════════════════════════════════════════════════════
🟣 FASE 4: UPLOAD KE HOSTING (30 menit)
═══════════════════════════════════════════════════════════════════════════════

PILIH HOSTING (SALAH SATU):

OPTION A: GITHUB PAGES (Recommended untuk awal, GRATIS)
□ Buat akun GitHub.com (jika belum)
□ Buat repository baru "handcasting-web"
□ Upload semua file:
  ├── index.html
  ├── handcasting-custom-order.html
  ├── mitra-generator.html
  └── data-harga.js
□ Settings → Pages → Branch: main
□ Wait 1-2 menit
□ Akses: https://[username].github.io/handcasting-web/
□ Done!

OPTION B: NETLIFY (GRATIS, super mudah)
□ Daftar di netlify.com
□ Drag-drop folder project
□ Auto-generate URL
□ Done!

OPTION C: HOSTING BERBAYAR (Domain sendiri)
□ Beli domain (cth: bidanmotret.com)
□ Beli shared hosting
□ Upload via FTP
□ Done!

═══════════════════════════════════════════════════════════════════════════════
🔵 FASE 5: TEST LIVE & PRODUCTION (15 menit)
═══════════════════════════════════════════════════════════════════════════════

TEST HALAMAN LIVE
□ Akses link live: https://[your-url]/index.html
□ Test semua fitur:
  □ Filter produk
  □ Search
  □ Klik "Pesan Sekarang"
  □ Form order lengkap
  □ WhatsApp integration
  □ Modal konfirmasi
□ Test di 3 browser:
  □ Chrome
  □ Firefox
  □ Safari (jika ada Mac/iPhone)
□ Test mobile:
  □ iPhone (Safari)
  □ Android (Chrome)

TEST MITRA LINKS
□ Generate 3 link mitra berbeda:
  └─ ?mitra=001 → cek mitra name "Bidan Sari"
  └─ ?mitra=002 → cek mitra name "Klinik Bunda"
  └─ ?mitra=pusat → cek mitra name "Bidan Motret Pusat"
□ Pastikan setiap link terbuka benar ke mitra yang tepat
□ Cek WhatsApp nomer benar untuk setiap mitra

TEST PERFORMANCE
□ Google PageSpeed Insights
□ Cek score (target > 80)
□ Cek loading time (target < 2 detik)

═══════════════════════════════════════════════════════════════════════════════
🟢 FASE 6: SHARING & PROMOTION (ONGOING)
═══════════════════════════════════════════════════════════════════════════════

SHARE KE MITRA
□ Generate link untuk setiap mitra (mitra-generator.html)
□ Bagikan via WhatsApp:
  └─ Link shop
  └─ QR code
  └─ Template share message
□ Kontrol: Mitra bisa langsung share ke customer mereka

SHARE KE CUSTOMER
□ Instagram bio / linktree
□ WhatsApp Business
□ Google My Business
□ Flyer / banner (dengan QR code)

MONITOR PESANAN
□ Setup Google Sheet (PHASE 2)
□ Buat order tracking system

═══════════════════════════════════════════════════════════════════════════════
⚠️ COMMON MISTAKES (HINDARI!)
═══════════════════════════════════════════════════════════════════════════════

❌ JANGAN upload ke hosting sebelum test lokal
❌ JANGAN edit file HTML langsung tanpa backup
❌ JANGAN lupa format nomor WA (628xxx)
❌ JANGAN lupa semicolon (;) di akhir data-harga.js
❌ JANGAN mix harga dengan currency symbol (gunakan angka saja)
❌ JANGAN ubah struktur data-harga.js (hanya ubah values)
❌ JANGAN share sheet ID ke semua orang (private!)

═══════════════════════════════════════════════════════════════════════════════
✅ SEBELUM LAUNCH - FINAL CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

□ Semua file ada dan benar
□ data-harga.js sudah update semua harga
□ Mitra data lengkap dan benar
□ Branding/logo sesuai keinginan
□ Warna brand sudah disesuaikan
□ Test lokal: semua fitur bekerja
□ Test mobile: responsive & touchable
□ Upload ke hosting
□ Test live: akses dari berbagai device
□ Mitra links sudah tested
□ WhatsApp integration bekerja
□ Share ke mitra dengan template pesan

═══════════════════════════════════════════════════════════════════════════════
🎯 TIMELINE REKOMENDASI
═══════════════════════════════════════════════════════════════════════════════

Hari 1 (Jam 1-2):     Fase 1 - Data & Harga
Hari 1 (Jam 2-3):     Fase 2 - Branding
Hari 1 (Jam 3-4):     Fase 3 - Testing Lokal
Hari 2 (Jam 1):       Fase 4 - Upload Hosting
Hari 2 (Jam 2):       Fase 5 - Test Live
Hari 2 (Jam 3):       Fase 6 - Share ke Mitra

═══════════════════════════════════════════════════════════════════════════════
❓ PERTANYAAN SEBELUM LAUNCH
═══════════════════════════════════════════════════════════════════════════════

□ Sudah punya Google Sheet untuk tracking? (optional, bisa nanti)
□ Sudah punya logo/branding assets?
□ Sudah tahu mitra mana saja yang akan pakai?
□ Sudah punya foto produk handcasting asli? (optional, bisa pakai emoji dulu)
□ Sudah planning promo/discount?
□ Sudah planning social media posting?

═══════════════════════════════════════════════════════════════════════════════
🚀 READY? LET'S GO!
═══════════════════════════════════════════════════════════════════════════════

Mulai dari FASE 1 checklist di atas.
Baca SETUP-GUIDE-LENGKAP.md jika ada detail yang kurang jelas.
Goodluck! 🎉

═══════════════════════════════════════════════════════════════════════════════
