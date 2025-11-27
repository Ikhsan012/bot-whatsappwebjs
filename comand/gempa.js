const axios = require('axios');

async function Gempa() {
    try {
        const url = 'https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json'
        const respon = await axios.get(url)
        const data = respon.data.Infogempa
        const shakeMap = `https://data.bmkg.go.id/DataMKG/TEWS/${data.gempa.Shakemap}`
        const text = `🔔 INFO GEMPA TERKINI 🔔
----------------------------------
⏱ Waktu: ${data.gempa.Tanggal}, Pukul ${data.gempa.Jam} WIB
💥 Magnitude: M ${data.gempa.Magnitude}
📍 Pusat Gempa: ${data.gempa.Wilayah}
⚠ Potensi: ${data.gempa.Potensi}
----------------------------------

✨ INTISARI & PERINGATAN ✨

▶ Penting! Gempa M ${data.gempa.Magnitude} baru saja terdeteksi di ${data.gempa.Wilayah}
📝 LANGKAH AMAN (WAJIB DILAKUKAN):

1. TETAP TENANG dan jangan panik.
2. Waspada bahaya gempa susulan (aftershock).
3. Segera periksa kondisi bangunan di sekitar Anda.
4. Utamakan Keselamatan!
`
        return { data: text, shakemap: shakeMap }
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = Gempa