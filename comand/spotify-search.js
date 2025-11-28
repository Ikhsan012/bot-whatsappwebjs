const axios = require('axios');

async function spotify(judul) {
    try {
        let url = `https://api.ryzumi.vip/api/search/spotify?query=${judul}`
        const response = await axios.get(url)
        const res = response.data.tracks

        if (!res) {
            return `⚠️ Maaf, data musik untuk judul *${judul}* tidak ditemukan.`;
        }

        let message = `Berikut Hasil Pencarian Dari ${judul}\n\n`
        res.forEach((data, index) => {
            message += `Judul : ${data.name}\n`
            message += `Artis : ${data.artists[0]}\n`
            message += `Tanggal Rilis : ${data.album.release_date}\n`
            message += `Durasi : ${data.duration_ms}\n`
            message += `URL : ${data.url}\n\n`
        });
        return message
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = spotify