🎁 HANDCASTING WEB SHOP - BIDAN MOTRET
═══════════════════════════════════════════════════════════════════════════════

Platform web modern untuk custom order handcasting 3D & 2D. Build dengan HTML/CSS/JS murni,
zero external dependencies (kecuali Google Fonts), siap untuk multi-mitra.

📦 FITUR UTAMA
─────────────────────────────────────────────────────────────────────────────

✨ Halaman Katalog Produk (index.html)
   • Grid responsif 6 paket handcasting
   • Filter kategori (3D, 2D, Promo)
   • Search real-time
   • Hero stats & trust badges
   • Promo banner
   • Mobile-optimized

🛒 Form Custom Order Multi-Step (handcasting-custom-order.html)
   • 4 tahap form dengan progress indicator
   • Auto-kalkulator harga real-time
   • Color preview live
   • Validasi form dengan error state
   • Modal konfirmasi dengan nomor referensi
   • Sticky floating total (mobile)
   • Custom a la carte builder
   • Tanggal jadwal dengan min-date validation
   • Auto-format nomor WhatsApp

🔗 Mitra Link Generator (mitra-generator.html)
   • Generate link unik per mitra
   • QR code generator dengan download
   • Share via WhatsApp
   • Database mitra management

📊 Data Terpusat (data-harga.js)
   • Semua harga, produk, mitra di satu file
   • Mudah customize tanpa edit HTML
   • Template lengkap untuk penambahan

🔐 TANPA BACKEND
   • Tidak butuh server (bisa static hosting)
   • Tidak butuh database
   • Tidak butuh API
   • Sepenuhnya client-side
   • Data harga & mitra di JavaScript
   • Pesanan via WhatsApp
   • Optional: Google Sheet untuk tracking (dengan Apps Script)

═══════════════════════════════════════════════════════════════════════════════
📋 STRUKTUR FILE
═══════════════════════════════════════════════════════════════════════════════

handcasting-web/
├── index.html                      ← Halaman shop (katalog paket)
├── handcasting-custom-order.html   ← Halaman order (form multi-step)
├── mitra-generator.html            ← Tool generate link mitra
├── data-harga.js                   ← Database harga, produk, mitra (EDIT INI!)
├── assets/                         ← [Optional] Folder untuk foto produk
│   ├── paket-unyu.jpg
│   ├── paket-gemes.jpg
│   └── ...
└── [Optional] Google Sheet IDs     ← Untuk tracking pesanan

═══════════════════════════════════════════════════════════════════════════════
🚀 QUICK START
═══════════════════════════════════════════════════════════════════════════════

1️⃣ Download & Setup Lokal
   ─────────────────────
   • Download semua file
   • Buka terminal di folder project
   • Jalankan: python -m http.server 8000
   • Akses: http://localhost:8000

2️⃣ Customize Data
   ─────────────────
   • Edit data-harga.js
   • Update harga, produk, mitra data
   • Simpan, refresh browser
   • Lihat perubahan langsung

3️⃣ Test Fitur
   ─────────────
   • Buka index.html di browser
   • Klik filter (3D, 2D, Promo)
   • Klik "Pesan Sekarang" di paket
   • Isi form order, lihat harga auto-update
   • Test modal konfirmasi
   • Test kirim via WhatsApp

4️⃣ Upload ke Hosting
   ─────────────────
   • Pilih GitHub Pages (gratis) atau Netlify
   • Upload semua file
   • Selesai! Siap production

═══════════════════════════════════════════════════════════════════════════════
🎨 CUSTOMIZE
═══════════════════════════════════════════════════════════════════════════════

HARGA PAKET
   File: data-harga.js
   Cari: products: [{ price: 1150000 ... }]
   Ubah: price: [HARGA BARU]

PAKET BARU
   File: data-harga.js
   Copy template di products array
   Paste & ubah data

ADD-ON
   File: data-harga.js
   Cari: biayaAddon: [{ ... }]
   Tambah item baru

MITRA
   File: data-harga.js
   Cari: mitra: { '001': { ... } }
   Update atau tambah mitra baru

WARNA & BRANDING
   File: index.html atau handcasting-custom-order.html
   Cari: :root { --pink: #FF69B4; ... }
   Ubah hex color
   
   Ubah logo/emoji di <div class="logo">💎 Bidan Motret</div>

TEKS & COPY
   File: index.html
   Cari: <h1>, <p>, hero text
   Ubah sesuai keinginan

═══════════════════════════════════════════════════════════════════════════════
💰 PRICING LOGIC
═══════════════════════════════════════════════════════════════════════════════

PAKET STANDAR (3D/2D)
   Total = Harga Paket Dasar + Opsi Usia + Add-on + Layanan
   
   Contoh Paket Gemes:
   • Base Price: Rp 1.450.000
   • Usia 3-6 Bulan: + Rp 250.000
   • Add-on Lampu LED: + Rp 125.000
   • Home Service: + Rp 250.000
   ──────────────────────────────
   TOTAL: Rp 2.075.000

CUSTOM A LA CARTE
   Total = (Harga Cetakan × Qty) + Bingkai + Background + Add-on
   
   Contoh Custom:
   • 3D Bayi (4 qty): Rp 200.000 × 4 = Rp 800.000
   • 2D Kakak (2 qty): Rp 150.000 × 2 = Rp 300.000
   • Bingkai Premium: Rp 850.000
   • Velvet Background: Rp 120.000
   ──────────────────────────────
   TOTAL: Rp 2.070.000

═══════════════════════════════════════════════════════════════════════════════
📱 MOBILE RESPONSIVE
═══════════════════════════════════════════════════════════════════════════════

✓ Semua halaman responsive
✓ Floating total bar di mobile
✓ Touch-friendly buttons
✓ Mobile-first design
✓ Tested di: iOS Safari, Chrome Android, Firefox

═══════════════════════════════════════════════════════════════════════════════
🔗 LINK STRUKTUR
═══════════════════════════════════════════════════════════════════════════════

Halaman Shop (dengan mitra ID)
   https://yourdomain.com/index.html?mitra=001
   https://yourdomain.com/index.html?mitra=002
   https://yourdomain.com/index.html?mitra=pusat

Halaman Order Paket Tertentu
   https://yourdomain.com/handcasting-custom-order.html?product=paket-gemes&mitra=001

Halaman Order Custom
   https://yourdomain.com/handcasting-custom-order.html?custom=true&mitra=002

Mitra Link Generator
   https://yourdomain.com/mitra-generator.html

═══════════════════════════════════════════════════════════════════════════════
⚙️ TECHNICAL SPECS
═══════════════════════════════════════════════════════════════════════════════

Framework:         HTML/CSS/JavaScript (No framework)
Dependencies:      Google Fonts (only)
Database:          JavaScript object (data-harga.js)
Backend:           None (Static site)
Hosting:           Any static hosting (GitHub Pages, Netlify, Vercel, etc)
Browser Support:   Modern browsers (Chrome, Firefox, Safari, Edge)
Mobile:            Fully responsive
Performance:       < 500KB total size
Load Time:         < 1 second (cached)

═══════════════════════════════════════════════════════════════════════════════
🎯 OPTIONAL: GOOGLE SHEET INTEGRATION (NANTI)
═══════════════════════════════════════════════════════════════════════════════

Jika ingin tracking pesanan di Google Sheet:
1. Setup Google Apps Script di setiap mitra sheet
2. Deploy as Web App
3. Copy URL ke data-harga.js (config.gasWebhookUrl)
4. Form order auto-save ke Google Sheet

Status: Belum terintegrasi
Alasan: Fokus UI/UX dulu, Apps Script akan di-setup di fase selanjutnya
Waktu: 1-2 jam untuk setup Apps Script lengkap

═══════════════════════════════════════════════════════════════════════════════
📖 DOKUMENTASI LENGKAP
═══════════════════════════════════════════════════════════════════════════════

• SETUP-GUIDE-LENGKAP.md  ← Panduan step-by-step lengkap
• CHECKLIST-IMPLEMENTASI.md ← Checklist deployment
• data-harga.js ← Comments lengkap di setiap section

═══════════════════════════════════════════════════════════════════════════════
🆘 TROUBLESHOOTING
═══════════════════════════════════════════════════════════════════════════════

Tombol "Pesan Sekarang" tidak berfungsi?
→ Cek browser console (F12) ada error?
→ Cek data-harga.js syntax (koma, semicolon)
→ Refresh browser (Ctrl+Shift+R)

Form tidak muncul?
→ Cek file handcasting-custom-order.html ada?
→ Cek nama file tepat (case-sensitive)
→ Check browser console ada error

WhatsApp tidak terbuka?
→ Nomor WA di data-harga.js format benar? (628xxxx)
→ Browser block pop-up? Izinkan di settings
→ Test di browser lain

Data tidak update?
→ Cek data-harga.js disimpan?
→ Hard refresh: Ctrl+Shift+R
→ Bersihkan cache browser

═══════════════════════════════════════════════════════════════════════════════
📊 ANALYTICS & TRACKING (FUTURE)
═══════════════════════════════════════════════════════════════════════════════

Bisa ditambahkan:
• Google Analytics untuk traffic
• Google Sheet + Apps Script untuk pesanan
• Email notifications ke mitra
• Dashboard admin untuk monitoring
• Customer feedback & rating

═══════════════════════════════════════════════════════════════════════════════
✨ NEXT STEPS SETELAH SELESAI
═══════════════════════════════════════════════════════════════════════════════

PHASE 2: Apps Script Integration
 • Auto-save pesanan ke Google Sheet
 • Multi-sheet routing per mitra
 • Email notification
 • Order tracking

PHASE 3: Payment Gateway
 • Midtrans / Stripe integration
 • Invoice generation
 • Payment confirmation

PHASE 4: Admin Dashboard
 • Mitra dashboard
 • Order management
 • Analytics & reports

═══════════════════════════════════════════════════════════════════════════════
🎓 BELAJAR LEBIH LANJUT
═══════════════════════════════════════════════════════════════════════════════

File HTML       → MDN Web Docs
CSS Styling     → CSS Tricks
JavaScript      → javascript.info
Google Fonts    → fonts.google.com
Hosting         → GitHub Pages, Netlify, Vercel

═══════════════════════════════════════════════════════════════════════════════
📜 LICENSE & CREDITS
═══════════════════════════════════════════════════════════════════════════════

Built with ❤️ for Bidan Motret
Free to use & customize for your business

═══════════════════════════════════════════════════════════════════════════════

Siap untuk launch? Baca SETUP-GUIDE-LENGKAP.md untuk panduan detail! 🚀
