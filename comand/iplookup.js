const { default: axios } = require("axios")

async function GetIP(ip) {
    if (!ip) {
        console.log('Kirim IP Nya Woy');
        return
    }
    try {
        const url = `https://api.ryzumi.vip/api/tool/iplocation?ip=${ip}`
        const data = await axios.get(url)
        const info = data.data.ipInfo
        const textForSend = `🔍 *IP LOOKUP RESULT* 🔍
━━━━━━━━━━━━━━━━━━
💻 *IP Address:* ${info.ip}
📡 *Provider (ISP):* ${info.org}
🌐 *ASN:* ${info.asn}

📍 *Lokasi:* ${info.city}, ${info.region}
🏳️ *Negara:* ${info.country_name} (${info.country_code})
timezone: ${info.timezone}

🗺️ *Google Maps:*
https://www.google.com/maps?q=${info.latitude},${info.longitude}

_Requested by User_`
        // console.log(respon);
        return textForSend
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = GetIP