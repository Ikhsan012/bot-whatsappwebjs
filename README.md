# 🤖 Bot WhatsApp WebJS

Selamat datang di **Bot WhatsAppWebJS**!  
Bot ini dibuat dengan menggunakan `whatsapp-web.js` yang memungkinkan Anda untuk mengotomatisasi berbagai interaksi di WhatsApp melalui antarmuka Web WhatsApp.

---

## ✨ Fitur Utama

- **Otomatisasi Pesan:** Bot bisa mengirim dan membalas pesan WhatsApp secara otomatis.
- **Mudah Dikembangkan:** Struktur kode sederhana, dapat dengan mudah menambah perintah/custom command.  
- **Modular Command:** Folder `comand/` berisi perintah-perintah bot yang dapat Anda modifikasi sesuai kebutuhan.
- **Pengelolaan Otomatis:** Proses login, QR code otomatis (barcode login).
- **Gratis & Open Source:** Silakan kembangkan dan gunakan sesuai kebutuhan!

---

## 🚀 Instalasi & Penggunaan

1. **Kloning repositori**
   ```bash
   git clone https://github.com/Ikhsan012/bot-whatsappwebjs.git
   cd bot-whatsappwebjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Bot**
   ```bash
   node main.js
   ```
   Scan barcode yang muncul pada terminal dengan aplikasi WhatsApp Anda.

---

## 📂 Struktur Folder

```
.
├── main.js             # File utama bot WhatsApp
├── comand/             # Folder untuk custom command/perintah bot
├── .wwebjs_cache/      # Cache session WhatsApp
├── package.json        # Konfigurasi dan dependencies
└── package-lock.json   # Lockfile NPM
```

---

## 🛠️ Cara Menambah Command

1. Tambahkan file JS baru pada folder `comand/`.
2. Export fungsi sesuai format pada command yang sudah ada.

---

## 💌 Kontribusi

Kontribusi sangat terbuka!  
Silakan fork, buat branch dan pull request jika Anda ingin menambahkan fitur atau memperbaiki bug.

---

## 👤 Author

- [Ikhsan012](https://github.com/Ikhsan012)

---

> **Repo ini bertujuan untuk eksperimen dan edukasi penggunaan WhatsApp Bot dengan `whatsapp-web.js`. Gunakan secara bijak!**