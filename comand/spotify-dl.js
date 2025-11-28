const axios = require('axios');

async function spotifydl(link) {
    try {
        let url = `https://api.ryzumi.vip/api/downloader/spotify?url=${link}`
        const response = await axios.get(url)
        const res = response.data.metadata
        const linkdl = response.data.link
        const textForSend = `
🎵 *Music Found!*
━━━━━━━━━━━━━━━━━━
🎼 *Title:* ${res.title}
🎤 *Artist:* ${res.artists}
📀 *Album:* ${res.album}
📅 *Release:* ${res.releaseDate}

🔗 *Link Download:* ${response.data.link}
━━━━━━━━━━━━━━━━━━
_Downloading audio..._
`.trim();

        return { data: textForSend, linkdl: linkdl }
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = spotifydl