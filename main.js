const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js')
const axios = require('axios')
const qrcode = require('qrcode-terminal')

const Fitur = require('./comand')

function startBot() {
    const client = new Client({
        authStrategy: new LocalAuth,
        dataPath: 'session',
        puppeteer: {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        }
    })
    
    client.on('ready', () => {
        console.log('Client Ready');
    })
    
    client.on('authenticated', () => {
        console.log('Conneted To Client!!!');
        
    })
    
    client.on('auth_failure', () => {
        console.log('Client Gagal Terkoneksi');
        
    })
    
    client.on('disconnected', (reason) => {
        console.log('Koneksi Terputus', reason);
        client.destroy()
        startBot()
        setTimeout(() => {
            console.log('Restarting');
            
        }, 5000)
    
        
    })
    
    // client.on('')
     
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true })
    })
    
    client.initialize()
    
    client.on('message_create', message => {
        if (message.body === 'ping') {
            client.sendMessage(message.from, 'Pong')
        }
    })
    
    client.on('message_create', async message => {
        if (message.body === 'gempa') {
            const { data, shakemap } = await Fitur.Gempa()
            const media = await MessageMedia.fromUrl(shakemap)
            client.sendMessage(message.from, media, {
                caption: data
            })
            
            
        }
    })
    client.on('message_create', async message => {
        if (message.body.startsWith('lirik')) {
            const args = message.body.trim().split(/\s+/)
            args.shift()
            const parts = args
            const judul = parts.join(' ')
            const data = await Fitur.Lirik(judul)
            client.sendMessage(message.from, data)
        }
    })

    client.on('message_create', async message => {
        if (message.body.startsWith('cuaca')) {
            const args = message.body.trim().split(/\s+/)
            args.shift()
            const parts = args
            const lokasi = parts.join(' ')
            const data = await Fitur.cuaca(lokasi)
            client.sendMessage(message.from, data)            
        }
    })
    client.on('message_create', async message => {
        if (message.body.startsWith('spotify')) {
            const args = message.body.trim().split(/\s+/)
            args.shift()
            const parts = args
            const musik = parts.join(' ')
            const data = await Fitur.spotify(musik)
            client.sendMessage(message.from, data)
        }
    })
    client.on('message_create', async message => {
        if (message.body.startsWith('dlspo')) {
            const args = message.body.trim().split(/\s+/)
            args.shift()
            const parts = args
            const musiklinks = parts.join(' ')
            const { data, linkdl }= await Fitur.spotifydl(musiklinks)
            const media = await MessageMedia.fromUrl(linkdl)
            client.sendMessage(message.from, data)
            client.sendMessage(message.from, media)
        }
    })
    client.on('message_create', async message => {
        if (message.body.startsWith('bstation')) {
            const args = message.body.trim().split(/\s+/)
            args.shift()
            const parts = args
            const filmlinks = parts.join(' ')
            const data = await Fitur.bilibili(filmlinks)
            client.sendMessage(message.from, data)
        }
    })
    client.on('message_create', async message => {
        if (message.body.startsWith('cekhost')) {
            const args = message.body.trim().split(/\s+/)
            args.shift()
            const parts = args
            const linkhost = parts.join(' ')
            const data = await Fitur.searchHost(linkhost)
            client.sendMessage(message.from, data)
        }
    })
    client.on('message_create', async message => {
        if (message.body.startsWith('iplook')) {
            const args = message.body.trim().split(/\s+/)
            args.shift()
            const parts = args
            const ip = parts.join(' ')
            const data = await Fitur.GetIP(ip)
            client.sendMessage(message.from. data)
        }
    })

}    

startBot()


