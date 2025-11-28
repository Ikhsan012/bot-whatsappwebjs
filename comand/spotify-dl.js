const axios = require('axios');

async function spotifydl(link) {
    try {
        let url = `https://api.ryzumi.vip/api/downloader/spotify?url=${link}`
        const response = await axios.get(url)
        const res = response.data
    } catch (error) {
        console.error(error.message)
    }
}