const axios = require('axios');
require('dotenv').config();


async function Lirik(data) {
    try {
        const apikey = process.env.APIKEY_FERDEV
        const url = `https://api.ferdev.my.id/search/lirik?judul=${data}&apikey=${apikey}`
        const req = await axios.get(url)
        const data1 = req.data.data
        const textForSend = `
🎵 INFO TRACK MUSIK 🎧
----------------------------------
Judul Track: ${data1.judul}
Artis: ${data1.artis}
----------------------------------

📝 FULL LIRIK LAGU:

${data1.lirik}

----------------------------------
💡 CATATAN:
Lirik ditampilkan utuh. Pastikan platform chat mendukung pesan panjang.
`;
        // console.log(textForSend);
        // console.log(data1.artis);
        // console.log(data);
        return textForSend
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = Lirik