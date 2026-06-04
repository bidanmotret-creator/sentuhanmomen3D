// ═══════════════════════════════════════════════════════════════════════════
// 📋 DATA HARGA & CONFIG TERPUSAT - VERSI LENGKAP DENGAN 30 PRODUK
// ═══════════════════════════════════════════════════════════════════════════

const WEB_CONFIG = {

    // ═══════════════════════════════════════════════════════════════════
    // 1️⃣ PRODUK UTAMA (30+ Pilihan)
    // ═══════════════════════════════════════════════════════════════════
    products: [
        // ▬▬▬ NEWBORN 3D (0-1 Bulan) ▬▬▬
        // ▬▬▬ NEWBORN 3D (0-1 Bulan) ▬▬▬
        {
            id: 'paket-unyu',
            name: 'Paket Unyu',
            category: '3d',
            type: '3D Newborn',
            age: '0-1 Bulan',
            price: 1150000,
            desc: '2 Cetakan Tangan & Kaki',
            // 🌟 image: HANYA 1 LINK untuk KARTU DEPAN (Index)
            image: 'https://ik.imagekit.io/sentuhanmomen/2%20CETAKAN/photo_6129446548404899452_w.jpg?updatedAt=1780580367808',
            // 🌟 images: ARRAY BANYAK LINK untuk GALERI (Order Form)
            images: [
                'https://ik.imagekit.io/sentuhanmomen/2%20CETAKAN/photo_6129446548404899452_w.jpg?updatedAt=1780580367808',
                'https://ik.imagekit.io/sentuhanmomen/2%20CETAKAN/photo_6129446548404899453_w.jpg?updatedAt=1780580400083', 
                'https://ik.imagekit.io/sentuhanmomen/2%20CETAKAN/photo_6129446548404899454_w.jpg?updatedAt=1780580346472'
            ],
            includes: ['Bingkai Minimalis', 'Label Nama Logam', '2 Foto 4R atau 1 Foto 5R'],
            badge: 'Populer'
        },
        
        {
            id: 'paket-gemes',
            name: 'Paket Gemes',
            category: '3d',
            type: '3D Newborn',
            age: '0-1 Bulan',
            price: 1450000,
            desc: '4 Cetakan Tangan & Kaki',
            // 🌟 Tambahkan 'image' tunggal di sini
            image: 'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899412_w.jpg?updatedAt=1780579217353',
            images: [
                'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899404_w.jpg?updatedAt=1780577487529',
                'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899409_w.jpg?updatedAt=1780577487545', 
                'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899411_w.jpg?updatedAt=1780577487519',
                'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899406_w.jpg?updatedAt=1780577487473',
                'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899413_w.jpg',
                'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899414_w.jpg?updatedAt=1780577486842',
                'https://ik.imagekit.io/sentuhanmomen/4%20CETAKAN%203D/photo_6129446548404899412_w.jpg'
            ],
            includes: ['Bingkai Minimalis', 'Label Nama Logam', '2 Foto 5R'],
            badge: 'Best Seller'
        },
        {
            id: 'paket-full-usg',
            name: 'Paket Full USG',
            category: '3d',
            type: '3D Newborn',
            age: '0-1 Bulan',
            price: 1950000,
            desc: '4 Cetakan + 9 Kolom USG',
            // 🌟 Jika belum ada foto, Anda tetap BISA pakai emoji untuk kartu depan
            image: 'https://ik.imagekit.io/sentuhanmomen/FULL%20USG%204%20CETAKAN/photo_6129446548404899447_w.jpg?updatedAt=1780580026987',
            // 🌟 Tapi tetap sediakan 'images' (placeholder) untuk galeri order
            images: [
                'https://ik.imagekit.io/sentuhanmomen/FULL%20USG%204%20CETAKAN/photo_6129446548404899447_w.jpg?updatedAt=1780580026987',
                'https://ik.imagekit.io/sentuhanmomen/FULL%20USG%204%20CETAKAN/photo_6129446548404899445_w.jpg?updatedAt=1780579902244',
                'https://ik.imagekit.io/sentuhanmomen/FULL%20USG%204%20CETAKAN/photo_6129446548404899444_w.jpg?updatedAt=1780580075407',
                'https://ik.imagekit.io/sentuhanmomen/FULL%20USG%204%20CETAKAN/photo_6129446548404899446_w.jpg?updatedAt=1780579752060',
                'https://ik.imagekit.io/sentuhanmomen/FULL%20USG%204%20CETAKAN/photo_6129446548404899444_w.jpg?updatedAt=1780580075407'
            ],
            includes: ['Bingkai Minimalis', 'Full Frame USG 9 Bulan', 'Extra Area Barang Kenangan', 'Label Nama Logam'],
            badge: 'Premium'
        },
        {
            id: 'paket-sibling',
            name: 'Paket Sibling',
            category: '3d',
            type: '3D Newborn',
            age: '0-1 Bulan + Kakak',
            price: 2150000,
            desc: '4 cetakan Bayi + 2 cetakan Kakak',
            image: 'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899457_w.jpg',
            images: [
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899455_w.jpg',
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899466_w.jpg',
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899457_w.jpg',
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899463_w.jpg?updatedAt=1780581553048',
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899468_w.jpg?updatedAt=1780581458647',
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899467_w.jpg?updatedAt=1780581459221',
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899464_w.jpg?updatedAt=1780581459271',
                'https://ik.imagekit.io/sentuhanmomen/SIBLING%203D/photo_6129446548404899465_w.jpg?updatedAt=1780581458687'
            ],
            includes: ['Bingkai Khusus', '4 Cetakan Bayi', '2 Cetakan Kakak', '2 pcs Label Nama Logam'],
            badge: 'Istimewa'
        },

        

        
    ],

    // ═══════════════════════════════════════════════════════════════════
    // 2️⃣ OPSI USIA BAYI
    // ═══════════════════════════════════════════════════════════════════
    biayaUsia: [
        { nama: "0 - 1 Bulan", harga: 0 },
        { nama: "1 - 3 Bulan", harga: 150000 },
        { nama: "3 - 6 Bulan", harga: 250000 },
        { nama: "6 - 12 Bulan", harga: 400000 },
        { nama: "1 - 2 Tahun", harga: 550000 },
        { nama: "2 - 5 Tahun", harga: 700000 }
    ],

    // ═══════════════════════════════════════════════════════════════════
    // 3️⃣ AKSESORIS / ADD-ON
    // ═══════════════════════════════════════════════════════════════════
    biayaAddon: [
        { id: "addon-plakat", nama: "Plakat Logam Timbul", harga: 100000, icon: "🏷️" },
        { id: "addon-boks", nama: "Boks Tali Pusar", harga: 50000, icon: "📦" },
        { id: "addon-gantungan", nama: "Gantungan Gelang RS", harga: 35000, icon: "📿" },
        { id: "addon-uv", nama: "Cetak Foto UV Kaca", harga: 150000, icon: "🖼️" },
        { id: "addon-lampu", nama: "Lampu LED Bingkai", harga: 125000, icon: "💡" },
        { id: "addon-album", nama: "Album Foto Premium", harga: 200000, icon: "📖" },
        { id: "addon-digital", nama: "QR Digital Album", harga: 75000, icon: "📱" },
        { id: "addon-box", nama: "Luxury Gift Box", harga: 150000, icon: "🎁" },
        { id: "addon-certificate", nama: "Certificate Premium", harga: 50000, icon: "📜" },
        { id: "addon-washing", nama: "Layanan Restorasi", harga: 100000, icon: "🧼" }
    ],

    // ═══════════════════════════════════════════════════════════════════
    // 4️⃣ OPSI LAYANAN
    // ═══════════════════════════════════════════════════════════════════
    biayaLayanan: [
        { nama: "Datang ke Studio", harga: 0 },
        { nama: "Home Service / Panggilan", harga: 250000 },
        { nama: "Professional Photography Session", harga: 500000 }
    ],

    // ═══════════════════════════════════════════════════════════════════
    // 5️⃣ CUSTOM A LA CARTE - HARGA CETAKAN
    // ═══════════════════════════════════════════════════════════════════
    customCetakan: [
        { nama: "3D - Bayi (0-12 Bulan)", harga: 200000 },
        { nama: "3D - Anak (1-5 Tahun)", harga: 350000 },
        { nama: "3D - Dewasa", harga: 500000 },
        { nama: "2D - Bayi/Anak", harga: 150000 },
        { nama: "2D - Dewasa", harga: 250000 },
        { nama: "2D - Couple", harga: 400000 }
    ],

    // ═══════════════════════════════════════════════════════════════════
    // 6️⃣ CUSTOM A LA CARTE - JENIS BINGKAI
    // ═══════════════════════════════════════════════════════════════════
    customBingkai: [
        { nama: "Tanpa Bingkai (Cetakan Saja)", harga: 0 },
        { nama: "Bingkai Minimalis (Muat 2)", harga: 350000 },
        { nama: "Bingkai Medium (Muat 4)", harga: 500000 },
        { nama: "Bingkai Premium (Muat 4-6)", harga: 750000 },
        { nama: "Bingkai Luxury Gold", harga: 1200000 },
        { nama: "Bingkai Custom Design", harga: 1500000 }
    ],

    // ═══════════════════════════════════════════════════════════════════
    // 7️⃣ CUSTOM A LA CARTE - BACKGROUND
    // ═══════════════════════════════════════════════════════════════════
    customBackground: [
        { nama: "Kertas Mat (Warna Polos)", harga: 0 },
        { nama: "Kain Bludru Premium", harga: 85000 },
        { nama: "Custom Tema Cetak", harga: 150000 },
        { nama: "Velvet Hitam Premium", harga: 120000 },
        { nama: "Satin Gold", harga: 175000 }
    ],

    // ═══════════════════════════════════════════════════════════════════
    // 8️⃣ DATABASE MITRA
    // ═══════════════════════════════════════════════════════════════════
    mitra: {
        '001': {
            id: '001',
            nama: 'SentuhanMomen.3D',
            wa: '6282177272512',
            lokasi: 'Bandar Lampung',
            sheetId: '128alf1AMVblAw2WRkLM78DlZmjxN_I5UAkkYhI3pi0M',
            email: 'bidanmotret@gmail.com',
            instagramHandle: 'sentuhanmomen.3d',
            operasionalJam: '08:00 - 17:00'
        },

       

        'pusat': {
            id: 'pusat',
            nama: 'Bidan Motret Pusat',
            wa: '6282177272512',
            lokasi: 'Bandar Lampung',
            sheetId: '128alf1AMVblAw2WRkLM78DlZmjxN_I5UAkkYhI3pi0M',
            email: 'bidanmotret@gmail.com',
            instagramHandle: 'bidanmotret',
            operasionalJam: '08:00 - 20:00'
        }
    },

    // ═══════════════════════════════════════════════════════════════════
    // 9️⃣ KONFIGURASI UMUM
    // ═══════════════════════════════════════════════════════════════════
    config: {
        gasWebhookUrl: 'https://script.google.com/macros/s/AKfycbwY-7GjkQgzoFjJDLnhsK8kdKuEkqIrDv4QgTRhayMgydeAK5XyCdHAc1sKFBC4HD304w/exec',
        currency: 'IDR',
        timezone: 'Asia/Jakarta',
        minOrder: 100000,
        contactEmail: 'info@bidanmotret.com',
        companyName: 'SENTUHAN MOMEN 3D',
        foundedYear: 2024
    }
};
