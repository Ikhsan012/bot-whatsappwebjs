const axios = require('axios');

async function bilibili(judul) {
    try {
        let api_endpoint = `https://api.ryzumi.vip/api/search/bilibili?query=${judul}`
        const request = await axios.get(api_endpoint)
        const response = request.data
        let message = `Hasil Pencarian Dari Film Berjudul ${judul}\n\n`
        response.forEach((data, index) => {
            message += `Judul : ${data.title}\n`
            message += `URL : ${data.url}\n`
            message += `Duration : ${data.duration}\n`
            message += `Uploader : ${data.uploader}\n\n`
        });
        return message
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = bilibili