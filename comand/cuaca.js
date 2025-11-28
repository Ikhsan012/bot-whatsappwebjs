const axios = require('axios');

async function cuaca(data) {
    try {
        let url = `https://api.ryzumi.vip/api/search/weather?city=${data}`
        const response = await axios.get(url)
        const res = response.data

        if (!res || !res.weather || res.weather.length === 0) {
            return `⚠️ Maaf, data cuaca untuk kota *${data}* tidak ditemukan.`;
        }

        const formatTime = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });
};

        const desc = res.weather[0].description;
        const weatherDesc = desc.charAt(0).toUpperCase() + desc.slice(1);

        const textForSend = `
🌍 *Laporan Cuaca: ${res.name}, ${res.sys.country}*
━━━━━━━━━━━━━━━━━━
☁️ *Kondisi:* ${weatherDesc}
🌡️ *Suhu:* ${res.main.temp}°C
🥵 *Terasa Seperti:* ${res.main.feels_like}°C
💧 *Kelembaban:* ${res.main.humidity}%
🌬️ *Angin:* ${res.wind.speed} m/s

☀️ *Sunrise:* ${formatTime(res.sys.sunrise)}
🌑 *Sunset:* ${formatTime(res.sys.sunset)}
━━━━━━━━━━━━━━━━━━
_Powered by OpenWeatherMap_
`.trim();
        return textForSend
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            
        }
    }
}

module.exports = cuaca