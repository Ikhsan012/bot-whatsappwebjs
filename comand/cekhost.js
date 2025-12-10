const axios = require('axios');

async function searchHost(link) {
    try {
        let url = `https://api.ryzumi.vip/api/tool/check-hosting?domain=${link}`
        const response = await axios.get(url)
        const datares = response.data.result
        // const datares2 = datares.nameserver.servers
        let message = `Hasil Scan IP Server Dari ${link}\n\n`
        datares.web.ips.forEach((data) => {
            message += `IP Address : ${data.address}\n`
            message += `Lokasi IP : ${data.location.city}\n`
            message += `ISP : ${data.provider.organization}\n\n`
        });
        datares.nameserver.servers.forEach((data, index) => {
            message += `Name Server ${index + 1}: ${data.domain}\n\n`
            data.ips.forEach((data, index) => {
                message += ` - Ip Server : ${data.address}\n\n`
            });
        });

        // console.log(datares2);
        return message
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = searchHost