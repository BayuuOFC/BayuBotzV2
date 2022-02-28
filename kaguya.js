/* 
KALO MAU RECODE YA RECODE AJA DEK😏
ASAL JANGAN HAPUS CREATOR + THANKSTO
LU CUMA NUMPANG NAMA TOD!!
GUA UDAH SUSAH² NGEFIX LU ASAL GANTI NAMA CREATOR😏
GAPUNYA HATI KAH CIL😱
CREATOR/THANKS TO:
- HELGA ZEXS (Base)
- BAYU OFC (Recode)
- PENYEDIA APIKEY
- PENYEDIA MODULE
- DAN ALL CREATOR BOT LAINNYA
*/
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const crypto = require('crypto')
const speed = require('performance-now')
const client = new WAConnection()
const dtod = "6281285866502@s.whatsapp.net"
const otod = "6281285866502@s.whatsapp.net"

    //── 「 Lib 」 ──//

const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { antiSpam } = require('./lib/antispam')
const { exec } = require('child_process')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif')
const exif = new Exif()

    //── 「 DataBase 」 ──//

const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
playmusic = false
antidelete = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
OwnerNumber = settings.NomorOwner2
multi = true
nopref = false

    //── 「 LolKey 」 ──//
lolkey = settings.lolkey

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = Bayuu = async (Bayuu, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        Bayuu.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        Bayuu.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = Bayuu.user
		m = simple.smsg(Bayuu, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		Bayuu.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™®Δ^βα¦|/\\^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™®Δ^βα¦|/\\^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./thumb.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Mohon Tunggu Sebentar',
			success: 'Done Om',
			toxic: 'Jangan Toxic!! Baka!!',
			error: {
				stick: '𝗧𝗶𝗱𝗮𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗲𝗻𝗴𝗮𝗸𝘀𝗲𝘀 𝘃𝗶𝗱𝗲𝗼!',
				Iv: 'Invalid Link!',
                api: 'ERROR 404'
			},
			only: {
				group: 'Menu Khusus Group!',
				ownerG: 'Khusus Pemilik Grup!',
				ownerB: 'Khusus Owner',
				admin: 'Khusus Admin!',
				Badmin: 'Jadikan Bot Admin Dulu😏'
			}
		}
		const botNumber = Bayuu.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? Bayuu.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? Bayuu.user.jid : Bayuu.contacts[mek.sender]
        const pushname = mek.key.fromMe ? Bayuu.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await Bayuu.chats.all()
		const groupMetadata = isGroup ? await Bayuu.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const q = args.join(' ')
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = Bayuu.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_ BAYU OFC_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             Bayuu.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = Bayuu.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6282138919347-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/IlpQRKWDZed0GgVHmYJUbl', "groupName": `${NamaBot}`, "footerText": "*_ BAYU OFC_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            Bayuu.relayWAMessage(grup)
        }
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

(function(_0x1e1a45,_0x1799e9){function _0x522922(_0x5089e4,_0x5f1004,_0x7c333c,_0x599b02){return _0x83fa(_0x7c333c-0x2fb,_0x5089e4);}function _0x2542be(_0x512bb8,_0x389161,_0x56cfdd,_0x4d8c2b){return _0x83fa(_0x56cfdd- -0x370,_0x389161);}var _0x508559=_0x1e1a45();while(!![]){try{var _0x2b70e6=parseInt(_0x2542be(-0x164,-0x195,-0x17e,-0x15e))/(0x4c5+-0x2012+-0xe9*-0x1e)*(-parseInt(_0x522922(0x4bc,0x4e9,0x4d3,0x4f7))/(-0x20c6+0x5*-0x3ce+-0x2ba*-0x13))+parseInt(_0x2542be(-0x19a,-0x18d,-0x19f,-0x19a))/(-0x337*0x1+-0x13b3+-0x16ed*-0x1)*(-parseInt(_0x522922(0x4d1,0x50f,0x4eb,0x4dc))/(-0x1088+0x1b0c+-0x4*0x2a0))+parseInt(_0x522922(0x4c4,0x4e0,0x4e6,0x4de))/(-0x2150+0x250b+-0x3b6)+-parseInt(_0x522922(0x500,0x4c4,0x4dc,0x4f0))/(0x1eac+0x1f8+-0x209e)*(-parseInt(_0x522922(0x4a4,0x4ab,0x4bf,0x4b8))/(-0x128e+0x9ac+0x8e9*0x1))+-parseInt(_0x2542be(-0x196,-0x191,-0x1a8,-0x1a0))/(0x150d*0x1+-0x12db+0x22a*-0x1)*(parseInt(_0x2542be(-0x1b6,-0x18d,-0x1a9,-0x18e))/(-0x146b+-0x26ef+0x3b63))+parseInt(_0x2542be(-0x176,-0x162,-0x179,-0x175))/(0x4ed*-0x7+-0x2366*0x1+0x45eb)+parseInt(_0x2542be(-0x1a3,-0x1ad,-0x193,-0x175))/(0x1*0x29d+0x442*0x4+-0x139a);if(_0x2b70e6===_0x1799e9)break;else _0x508559['push'](_0x508559['shift']());}catch(_0x1b0882){_0x508559['push'](_0x508559['shift']());}}}(_0x3b0b,0x17d6*-0x96+-0x31b09*0x4+0x265937));function _0x3b0b(){var _0x4bcc2a=['table','zvuYr','apply','eKByr','skcGq','drTgg','length','(((.+)+)+)','vaTYw','DDlPj','xQIXP','👦\x20BAYU\x20OFC','TyUAE','hVRMq','setStatus','94010nYVpai','omliF','qqJuH','9jAsDuU','3459704covHKc','wqkIS','KBOsn','1|4|2|0|3','split','info','catch','constructo','mZFlC','3KPPAxn','pqXke','WCftS','kPuVI','pnxFB','console','prototype','53188OtOkuE','qUFVa','tOSTe','rgvyT','return\x20(fu','21051448Vbyurl','search','Fwwhx','0|2|4|5|3|','12dNgYzc','EUUXx','tagDP','NHxrk','__proto__','warn','log','rEsbN','ctor(\x22retu','XNsic','3609420SjjgWp','{}.constru','HJgAZ','exception','error','3911276jqaBUq','rTnHm','21xPRDTF','tNOSR','zFpty','bind','JYDgv','900350tHCTkN','g\x20Time\x20:\x20','toString','QVKJn','trace','TicHS','nction()\x20'];_0x3b0b=function(){return _0x4bcc2a;};return _0x3b0b();}function _0x83fa(_0x2605b1,_0x4f9238){var _0x2f5ea7=_0x3b0b();return _0x83fa=function(_0x4c20bc,_0x3b0b87){_0x4c20bc=_0x4c20bc-(-0xa31+-0x1efc+0x2ae3);var _0x83fa38=_0x2f5ea7[_0x4c20bc];return _0x83fa38;},_0x83fa(_0x2605b1,_0x4f9238);}var _0x4c20bc=(function(){function _0x36e10d(_0x4f6a0d,_0x45182f,_0x71eecf,_0x16e9b2){return _0x83fa(_0x45182f- -0x32b,_0x71eecf);}var _0x796775={'vaTYw':_0x451d02(0x3b4,0x389,0x376,0x391),'NHxrk':_0x36e10d(-0x127,-0x13c,-0x153,-0x130),'fSMMo':_0x451d02(0x3a3,0x38e,0x38f,0x399),'SYEtG':_0x36e10d(-0x14c,-0x12d,-0x118,-0x14f),'kPuVI':'trace','mZFlC':function(_0x1be52c,_0x6839d2){return _0x1be52c(_0x6839d2);},'KBOsn':function(_0x172384,_0x2718b9){return _0x172384+_0x2718b9;},'TicHS':_0x451d02(0x384,0x38f,0x3a4,0x397)+_0x36e10d(-0x12a,-0x142,-0x12c,-0x138)+'rn\x20this\x22)('+'\x20)','LIyfC':function(_0x453dd9){return _0x453dd9();},'hVRMq':function(_0x8721b1,_0x2d347f){return _0x8721b1===_0x2d347f;},'JYDgv':'XMOog'};function _0x451d02(_0x11054e,_0x406191,_0x5e8209,_0x1040b2){return _0x83fa(_0x1040b2-0x1ab,_0x11054e);}var _0x21ae45=!![];return function(_0x522535,_0x1d6ba4){function _0x2a407d(_0x289e74,_0x1e7e74,_0x4ce987,_0x537dfe){return _0x36e10d(_0x289e74-0x1dc,_0x289e74-0x691,_0x4ce987,_0x537dfe-0x13f);}var _0x1e5d04={'pqXke':_0x796775[_0x2a407d(0x523,0x528,0x4ff,0x542)],'rEsbN':_0x796775[_0x2a407d(0x54a,0x55a,0x535,0x53f)],'zvuYr':_0x796775['fSMMo'],'xQIXP':_0x796775['SYEtG'],'uwzXI':_0x796775[_0xdf5d76(0x52a,0x52d,0x533,0x53a)],'drTgg':function(_0x26b127,_0x344647){return _0x26b127<_0x344647;},'qUFVa':function(_0x46149e,_0x19e11d){function _0x877b00(_0x5f17f2,_0x2952ec,_0x4caf1b,_0x34afa6){return _0x2a407d(_0x34afa6- -0xfa,_0x2952ec-0x11a,_0x5f17f2,_0x34afa6-0x187);}return _0x796775[_0x877b00(0x444,0x45e,0x451,0x43c)](_0x46149e,_0x19e11d);},'UuITD':function(_0x26723f,_0x565fe7){function _0x476430(_0x3be9a4,_0x7c3a60,_0x42598e,_0x58bf9c){return _0xdf5d76(_0x3be9a4-0x68,_0x7c3a60,_0x42598e-0x178,_0x58bf9c- -0x92);}return _0x796775[_0x476430(0x4a4,0x4a4,0x4b3,0x49e)](_0x26723f,_0x565fe7);},'tNOSR':function(_0x29d119,_0x536495){function _0x320288(_0x2583ea,_0x5147b7,_0x426b4c,_0x25ca84){return _0xdf5d76(_0x2583ea-0x1b,_0x5147b7,_0x426b4c-0x43,_0x426b4c- -0x4ab);}return _0x796775[_0x320288(0x96,0xa0,0x85,0x72)](_0x29d119,_0x536495);},'eKByr':_0x2a407d(0x542,0x52a,0x531,0x538)+'nction()\x20','Fwwhx':_0x796775[_0xdf5d76(0x56d,0x54d,0x56c,0x562)],'XNsic':function(_0x1a3a3e){return _0x796775['LIyfC'](_0x1a3a3e);},'QsYsW':function(_0x4b65ae,_0xb03402){function _0x49c44b(_0xc83de1,_0x143a88,_0x270b11,_0x10abff){return _0x2a407d(_0x10abff- -0x325,_0x143a88-0x122,_0xc83de1,_0x10abff-0x175);}return _0x796775[_0x49c44b(0x207,0x21e,0x1fe,0x203)](_0x4b65ae,_0xb03402);},'wqkIS':_0x796775[_0x2a407d(0x55c,0x54a,0x548,0x57f)]},_0x34736b=_0x21ae45?function(){function _0x2bb5c0(_0x100970,_0x507c01,_0x33edfd,_0x20e2ed){return _0x2a407d(_0x20e2ed- -0x5a4,_0x507c01-0xfa,_0x33edfd,_0x20e2ed-0x1e7);}function _0x66ce13(_0x3998e9,_0x1d18ca,_0xa8a0ca,_0x3373b6){return _0x2a407d(_0x3373b6- -0x5ff,_0x1d18ca-0x1b6,_0x3998e9,_0x3373b6-0x94);}if(_0x1e5d04['QsYsW'](_0x1e5d04[_0x66ce13(-0xb4,-0xcd,-0xae,-0xd0)],_0x2bb5c0(-0x6d,-0x34,-0x53,-0x51))){var _0x2e25c7=_0x66ce13(-0xd7,-0xbe,-0xe8,-0xce)[_0x2bb5c0(-0x53,-0x82,-0x8f,-0x72)]('|'),_0x50d514=-0x72e+-0x4*0x73f+0x242a;while(!![]){switch(_0x2e25c7[_0x50d514++]){case'0':var _0x25222c=[_0x2bb5c0(-0x4d,-0x59,-0x52,-0x57),_0x1e5d04[_0x66ce13(-0xaf,-0xa7,-0xcc,-0xc7)],_0x66ce13(-0xe4,-0xb0,-0xce,-0xcc),_0x1e5d04[_0x2bb5c0(-0x31,-0x41,-0x61,-0x56)],_0x1e5d04[_0x2bb5c0(-0x78,-0x64,-0xa4,-0x88)],_0x1e5d04[_0x66ce13(-0xc2,-0xd9,-0xe8,-0xda)],_0x1e5d04['uwzXI']];continue;case'1':var _0x1027d6;continue;case'2':var _0x4d78c9=_0x1027d6[_0x66ce13(-0xb6,-0xd7,-0xbf,-0xc3)]=_0x1027d6['console']||{};continue;case'3':for(var _0x5844ba=-0x1cf3*-0x1+0x1109+-0x2dfc;_0x1e5d04[_0x66ce13(-0xec,-0xcc,-0xd2,-0xdf)](_0x5844ba,_0x25222c[_0x66ce13(-0xbb,-0xbb,-0xf4,-0xde)]);_0x5844ba++){var _0x522321=_0x4a102b[_0x2bb5c0(-0x71,-0x8a,-0x7f,-0x6f)+'r'][_0x2bb5c0(-0x67,-0x6c,-0x67,-0x67)][_0x66ce13(-0x89,-0x8b,-0x95,-0xa4)](_0x4b2ad2),_0x3d2455=_0x25222c[_0x5844ba],_0x24ac62=_0x4d78c9[_0x3d2455]||_0x522321;_0x522321[_0x2bb5c0(-0x78,-0x6a,-0x6c,-0x59)]=_0x5445b4['bind'](_0x25194e),_0x522321[_0x66ce13(-0x9d,-0x95,-0x96,-0xa0)]=_0x24ac62['toString']['bind'](_0x24ac62),_0x4d78c9[_0x3d2455]=_0x522321;}continue;case'4':try{var _0x5340bf=_0x1e5d04[_0x66ce13(-0xde,-0xd0,-0xce,-0xc0)](_0x2b3222,_0x1e5d04['UuITD'](_0x1e5d04[_0x66ce13(-0x9f,-0xa3,-0x82,-0xa6)](_0x1e5d04[_0x2bb5c0(-0xa6,-0x68,-0xa2,-0x86)],_0x1e5d04[_0x66ce13(-0xcf,-0xaa,-0xc9,-0xba)]),');'));_0x1027d6=_0x1e5d04[_0x2bb5c0(-0x5e,-0x33,-0x61,-0x54)](_0x5340bf);}catch(_0x8f213b){_0x1027d6=_0x3203a6;}continue;}break;}}else{if(_0x1d6ba4){var _0x4efb16=_0x1d6ba4[_0x2bb5c0(-0x8b,-0x74,-0x8b,-0x87)](_0x522535,arguments);return _0x1d6ba4=null,_0x4efb16;}}}:function(){};function _0xdf5d76(_0x2c45f4,_0xd5dec9,_0x3c3434,_0xa7d448){return _0x36e10d(_0x2c45f4-0x155,_0xa7d448-0x691,_0xd5dec9,_0xa7d448-0x1f3);}return _0x21ae45=![],_0x34736b;};}()),_0x2f5ea7=_0x4c20bc(this,function(){var _0x1e55ad={};_0x1e55ad['zFpty']=_0xd906a6(-0x148,-0x149,-0x166,-0x15f)+'+$';function _0xd906a6(_0x27f83,_0x2b881c,_0x2bfdb0,_0x58943f){return _0x83fa(_0x2b881c- -0x305,_0x2bfdb0);}function _0x14fab2(_0x2140f7,_0x2f5784,_0x2a853b,_0x5dd9b1){return _0x83fa(_0x2140f7-0xe9,_0x5dd9b1);}var _0x156b5b=_0x1e55ad;return _0x2f5ea7[_0xd906a6(-0x110,-0x10c,-0x10c,-0x126)]()[_0xd906a6(-0x136,-0x127,-0x11a,-0x12f)](_0x156b5b[_0x14fab2(0x2dd,0x2d3,0x2d9,0x2c1)])[_0x14fab2(0x2e2,0x2f8,0x2e6,0x301)]()[_0xd906a6(-0x137,-0x136,-0x140,-0x138)+'r'](_0x2f5ea7)[_0xd906a6(-0x11b,-0x127,-0x126,-0x111)]('(((.+)+)+)'+'+$');});_0x2f5ea7();var _0x2abb76=(function(){var _0x432c81={};function _0x7cc522(_0x1cb182,_0x9673,_0x550253,_0x909c5e){return _0x83fa(_0x9673-0x3ba,_0x1cb182);}_0x432c81[_0x7cc522(0x592,0x59d,0x58a,0x593)]=_0x56bcb3(0x4b8,0x4c2,0x4be,0x4de);var _0x18ad39=_0x432c81,_0x4ea977=!![];function _0x56bcb3(_0x104054,_0x47a670,_0x4abda2,_0x28ba8e){return _0x83fa(_0x47a670-0x309,_0x104054);}return function(_0x5de8fb,_0x110e63){function _0x491766(_0x1440ad,_0x4c622b,_0x242b1f,_0x1b7fac){return _0x7cc522(_0x242b1f,_0x1440ad- -0x47c,_0x242b1f-0x19d,_0x1b7fac-0x10a);}function _0x370820(_0x4e135e,_0xfd0a8e,_0x4215c5,_0x5c5e7d){return _0x7cc522(_0x4215c5,_0xfd0a8e- -0x592,_0x4215c5-0x23,_0x5c5e7d-0x14a);}if(_0x18ad39[_0x491766(0x121,0x118,0x134,0x11d)]!==_0x18ad39[_0x370820(0x26,0xb,0xd,-0x4)]){if(_0x3badaa){var _0x1ce684=_0x1f22f2[_0x370820(0x1,-0x21,-0x7,-0xb)](_0x5a1e7e,arguments);return _0x3a9797=null,_0x1ce684;}}else{var _0x439b84=_0x4ea977?function(){function _0x19fc17(_0x29836a,_0x4f8a28,_0xd11357,_0x5af68b){return _0x370820(_0x29836a-0x54,_0xd11357- -0x30,_0x4f8a28,_0x5af68b-0x99);}if(_0x110e63){var _0x276ea2=_0x110e63[_0x19fc17(-0x64,-0x5b,-0x51,-0x6f)](_0x5de8fb,arguments);return _0x110e63=null,_0x276ea2;}}:function(){};return _0x4ea977=![],_0x439b84;}};}()),_0x1ba313=_0x2abb76(this,function(){function _0x4a31bb(_0x35b79b,_0x30ead2,_0x19c0f7,_0x193023){return _0x83fa(_0x193023-0x3d0,_0x19c0f7);}var _0x26db0a={'rgvyT':function(_0x3b713a,_0xb4c349){return _0x3b713a(_0xb4c349);},'DDlPj':function(_0x22bd06,_0x11eac8){return _0x22bd06+_0x11eac8;},'TiECm':'return\x20(fu'+_0x4a31bb(0x5d8,0x5e5,0x5ab,0x5cd),'EUUXx':function(_0x5bacd1){return _0x5bacd1();},'qqJuH':function(_0x2a1d41,_0x386e48){return _0x2a1d41===_0x386e48;},'rTnHm':_0x4a31bb(0x594,0x5b9,0x5ad,0x5a3),'omliF':_0x4a31bb(0x5da,0x5b8,0x5db,0x5b7),'gvzOl':_0x6606c4(0x3e8,0x3d7,0x3eb,0x3e9),'QVKJn':_0x6606c4(0x3cf,0x3e6,0x3c5,0x3c2),'TyUAE':_0x4a31bb(0x5c6,0x5be,0x5a4,0x5bf),'tOSTe':_0x4a31bb(0x5c4,0x5ae,0x5de,0x5ce),'abAIQ':_0x6606c4(0x3fd,0x411,0x3e7,0x40b),'pnxFB':_0x4a31bb(0x5af,0x5a5,0x59f,0x5b0)+'1'},_0x108993;function _0x6606c4(_0x34c758,_0x76ae96,_0x2d3d31,_0x44456f){return _0x83fa(_0x34c758-0x202,_0x44456f);}try{var _0x180a10=_0x26db0a[_0x4a31bb(0x5c1,0x597,0x595,0x5ab)](Function,_0x26db0a[_0x4a31bb(0x5ab,0x595,0x5b2,0x58e)](_0x26db0a[_0x4a31bb(0x56f,0x5af,0x597,0x58e)](_0x26db0a['TiECm'],_0x6606c4(0x3ee,0x401,0x401,0x3db)+_0x6606c4(0x3eb,0x3f3,0x402,0x3fc)+'rn\x20this\x22)('+'\x20)'),');'));_0x108993=_0x26db0a[_0x6606c4(0x3e4,0x3ff,0x3fd,0x3dd)](_0x180a10);}catch(_0x50a1e7){if(_0x26db0a[_0x4a31bb(0x5b1,0x584,0x584,0x596)]('WCftS',_0x26db0a[_0x6606c4(0x3f3,0x3d9,0x401,0x416)]))_0x108993=window;else{var _0x13d5d3=_0x2afe0a?function(){function _0x3f1852(_0x464d71,_0x1b3a32,_0x31f6c8,_0x200b59){return _0x4a31bb(_0x464d71-0x8,_0x1b3a32-0x48,_0x31f6c8,_0x200b59- -0x5a);}if(_0x348072){var _0x44ebf4=_0x2e795a[_0x3f1852(0x50c,0x50c,0x52d,0x52d)](_0x5a16f5,arguments);return _0x196eaf=null,_0x44ebf4;}}:function(){};return _0x39a549=![],_0x13d5d3;}}var _0x49e99e=_0x108993['console']=_0x108993[_0x6606c4(0x3d8,0x3d0,0x3b4,0x3d3)]||{},_0x422d8a=[_0x26db0a[_0x6606c4(0x3c7,0x3ea,0x3a3,0x3e4)],_0x26db0a['gvzOl'],_0x26db0a[_0x6606c4(0x3fc,0x410,0x40f,0x3f9)],_0x26db0a[_0x4a31bb(0x59c,0x59e,0x5b2,0x591)],_0x6606c4(0x3f0,0x3db,0x3d4,0x3cd),_0x26db0a[_0x4a31bb(0x5c0,0x5a8,0x5b8,0x5aa)],_0x26db0a['abAIQ']];for(var _0x467070=0x1b9e+0x17*-0xe6+-0x6f4;_0x467070<_0x422d8a[_0x6606c4(0x3bd,0x3b7,0x3ce,0x3bb)];_0x467070++){var _0xdfc137=_0x26db0a[_0x4a31bb(0x59b,0x599,0x5c4,0x5a5)][_0x6606c4(0x3ce,0x3bf,0x3b4,0x3db)]('|'),_0x4dbb64=0x16c7+0x24e9+0xeec*-0x4;while(!![]){switch(_0xdfc137[_0x4dbb64++]){case'0':var _0x2c429b=_0x2abb76[_0x4a31bb(0x598,0x5b5,0x585,0x59f)+'r']['prototype'][_0x6606c4(0x3f7,0x3e7,0x3e8,0x3df)](_0x2abb76);continue;case'1':_0x49e99e[_0x22878b]=_0x2c429b;continue;case'2':var _0x22878b=_0x422d8a[_0x467070];continue;case'3':_0x2c429b[_0x4a31bb(0x5c5,0x5bc,0x5e2,0x5c9)]=_0x1d2b52[_0x4a31bb(0x5d1,0x5c3,0x5b1,0x5c9)]['bind'](_0x1d2b52);continue;case'4':var _0x1d2b52=_0x49e99e[_0x22878b]||_0x2c429b;continue;case'5':_0x2c429b[_0x4a31bb(0x5d4,0x5b9,0x5c8,0x5b5)]=_0x2abb76[_0x4a31bb(0x5cc,0x5cb,0x5ab,0x5c5)](_0x2abb76);continue;}break;}}});_0x1ba313();function _0x536513(_0x3db95b,_0x3c79b6,_0x339c5c,_0x13572f){return _0x83fa(_0x339c5c-0x2ed,_0x3c79b6);}await Bayuu[_0x536513(0x4b2,0x48b,0x4b0,0x4b5)](_0x37fe14(0x54c,0x563,0x562,0x53d)+'\x20|\x20⛈️Runnin'+_0x536513(0x4cb,0x4cc,0x4e5,0x4c4)+uptime)[_0x536513(0x4b6,0x4bc,0x4bb,0x4d4)](_0x2a2720=>_0x2a2720);function _0x37fe14(_0x455904,_0x51669b,_0x30f050,_0x11d2b7){return _0x83fa(_0x455904-0x38c,_0x51669b);}settingstatus=new Date()*(0x57a*0x6+0x74c+-0x1*0x2827);
    }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await Bayuu.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./thumb.jpg')
		const sekarang = new Date().getTime();
			
			
    //── 「 Waktuuu 」 ──//			
			
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 1: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 2: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 3: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 4: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 5: jamss = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ 🌄"; break;
                case 6: jamss = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ 🌄"; break;
                case 7: jamss = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ 🌄"; break;
                case 8: jamss = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ ☀️"; break;
                case 9: jamss = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ ☀️"; break;
                case 10: jamss = "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ ☀️"; break;
                case 11: jamss = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🌞"; break;
                case 12: jamss = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🌞"; break;
                case 13: jamss = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🌞"; break;
                case 14: jamss = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🌞"; break;
                case 15: jamss = "sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🌞"; break;
                case 16: jamss = "sᴇʟᴀᴍᴀᴛ sᴏʀᴇ ☀️"; break;
                case 17: jamss = "sᴇʟᴀᴍᴀᴛ sᴏʀᴇ  🌄"; break;
                case 18: jamss = "sᴇʟᴀᴍᴀᴛ sᴏʀᴇ  🌄"; break;
                case 19: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 20: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 21: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 22: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
                case 23: jamss = "sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}


    //── 「 Produc 」 ──//

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6282138919347-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6281398860278-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281398860278-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await Bayuu.relayWAMessage(
        Bayuu.prepareMessageFromContent(
          target,
          Bayuu.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Bayuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya, Bot Ini Di Susun Oleh BayuGanz`
const daftar2 = '```Ketik Tombol Di Bawah Untuk Mendaftar Ke Database BAYU OFC```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🌸𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙀𝘿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Bayuu.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Bayuu.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Bayuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Bayuu.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Bayuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Bayuu.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Bayuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_ BayuGanz_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === Bayuu.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_ BayuGanz_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Bayuu.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        Bayuu.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        (function(_0x37a61a,_0x211244){const _0x505831=_0x37a61a();function _0x40ce55(_0x26c49a,_0x406bf0,_0x6ee321,_0x58888a){return _0x15db(_0x26c49a-0x22e,_0x406bf0);}function _0x98862(_0x2d043a,_0x260e11,_0x5d71fd,_0x3adef8){return _0x15db(_0x3adef8- -0x270,_0x2d043a);}while(!![]){try{const _0x3c1d5e=-parseInt(_0x98862(-0x14b,-0x147,-0x12c,-0x13d))/(-0x12ad*-0x1+-0x213d+-0xb*-0x153)+parseInt(_0x40ce55(0x34b,0x356,0x353,0x33f))/(0x2178+-0x1*0x201f+-0x157)+parseInt(_0x40ce55(0x35b,0x368,0x33e,0x358))/(0x14cc*0x1+-0x1*-0x908+-0x1dd1)*(parseInt(_0x98862(-0x15d,-0x17e,-0x16b,-0x154))/(-0x1f4e+-0x1613+0x3565))+parseInt(_0x98862(-0x15f,-0x144,-0x16c,-0x159))/(0x2273+-0x1b53+-0x71b)*(-parseInt(_0x98862(-0xee,-0x12a,-0x125,-0x11d))/(-0x102*0x7+-0x54d+0xc61))+-parseInt(_0x98862(-0x117,-0x116,-0x15a,-0x135))/(0x1*-0x24a5+0x7f6+-0x2*-0xe5b)*(-parseInt(_0x98862(-0x143,-0x13e,-0x131,-0x151))/(-0x9f*0x1e+0x17c*0x3+-0x71b*-0x2))+-parseInt(_0x40ce55(0x359,0x33d,0x385,0x351))/(0x12*0x1b3+-0x4*0x97c+0x763)*(parseInt(_0x98862(-0x128,-0x140,-0x147,-0x157))/(-0x10*-0xa3+0x1af9+-0x1*0x251f))+-parseInt(_0x98862(-0x197,-0x18d,-0x15c,-0x167))/(0x1a68+0xd*0x7+-0x1ab8);if(_0x3c1d5e===_0x211244)break;else _0x505831['push'](_0x505831['shift']());}catch(_0x475dd4){_0x505831['push'](_0x505831['shift']());}}}(_0x4b99,0x259e7+0x2e*-0x1249+0x9a22a));function _0x15db(_0x37e49d,_0xcba76a){const _0x4b999e=_0x4b99();return _0x15db=function(_0x15db7c,_0x5e202d){_0x15db7c=_0x15db7c-(0xd*-0x247+-0xf86*-0x2+-0x77);let _0x5b8c11=_0x4b999e[_0x15db7c];return _0x5b8c11;},_0x15db(_0x37e49d,_0xcba76a);}const _0xcba76a=(function(){function _0x50a049(_0x3c4925,_0x47ba26,_0x3f30a7,_0x3d6962){return _0x15db(_0x47ba26- -0x78,_0x3d6962);}function _0xae0a7c(_0x450baf,_0x40e1bb,_0x18ee55,_0x5239a7){return _0x15db(_0x40e1bb-0x372,_0x450baf);}const _0x5bd8d5={'QelDl':function(_0x1728c1,_0x85e605){return _0x1728c1(_0x85e605);},'PTnnX':function(_0x437287,_0x576825){return _0x437287+_0x576825;},'FhLhb':_0x50a049(0x97,0x8e,0x5e,0x9d)+_0xae0a7c(0x473,0x49e,0x4aa,0x47f),'GCeqQ':_0xae0a7c(0x44a,0x470,0x49e,0x49c)+_0x50a049(0xea,0xc6,0xe5,0xc5)+_0xae0a7c(0x486,0x499,0x4a7,0x4c1)+'\x20)','eKANJ':function(_0x32bb94){return _0x32bb94();},'CyVoV':function(_0x57d121,_0x5ef4a7){return _0x57d121!==_0x5ef4a7;},'LyISj':_0xae0a7c(0x486,0x494,0x4aa,0x47c),'dRyqL':function(_0x4acda7,_0x2177db){return _0x4acda7!==_0x2177db;},'SwOIv':_0x50a049(0x95,0x95,0xb5,0xac),'yswUt':_0xae0a7c(0x461,0x481,0x496,0x4b1)};let _0xe12c09=!![];return function(_0x126b83,_0x241f69){const _0x51c3f5=_0xe12c09?function(){function _0x5b6740(_0x14dd63,_0x4c6985,_0xeb3346,_0x476f91){return _0x15db(_0x14dd63-0x355,_0xeb3346);}const _0x50f1ad={'FrVbj':function(_0x492a23,_0x26cb98){function _0x207891(_0x543f8c,_0x5e7327,_0x65a38b,_0x3f5232){return _0x15db(_0x543f8c-0x259,_0x3f5232);}return _0x5bd8d5[_0x207891(0x383,0x381,0x3ae,0x39b)](_0x492a23,_0x26cb98);},'VQHcY':function(_0x263333,_0x565896){function _0x5becab(_0x3fb4da,_0x4ffd75,_0x3e50d4,_0x19e570){return _0x15db(_0x4ffd75-0x197,_0x19e570);}return _0x5bd8d5[_0x5becab(0x2bd,0x2aa,0x2ba,0x2ae)](_0x263333,_0x565896);},'AqOMy':_0x5bd8d5['FhLhb'],'aEdkR':_0x5bd8d5[_0x5ecad8(0x2fe,0x32d,0x304,0x314)],'bcVdz':function(_0xa7c9a8){function _0x46c86d(_0x384f3f,_0x34cfee,_0x27f1d6,_0x5a4d50){return _0x5ecad8(_0x5a4d50,_0x34cfee-0x1c8,_0x27f1d6-0xbc,_0x384f3f- -0x377);}return _0x5bd8d5[_0x46c86d(-0x74,-0x9e,-0x89,-0x46)](_0xa7c9a8);}};function _0x5ecad8(_0x13ce6f,_0x4caf98,_0x459c08,_0x381378){return _0x15db(_0x381378-0x1c0,_0x13ce6f);}if(_0x5bd8d5[_0x5b6740(0x46f,0x49e,0x448,0x491)](_0x5bd8d5[_0x5b6740(0x496,0x4b6,0x47c,0x4a0)],_0x5bd8d5[_0x5ecad8(0x327,0x304,0x2d8,0x301)])){const _0x14627b=_0x2eb3d7[_0x5ecad8(0x2af,0x2b4,0x2e8,0x2c3)](_0x56bf91,arguments);return _0x1bb271=null,_0x14627b;}else{if(_0x241f69){if(_0x5bd8d5['dRyqL'](_0x5bd8d5[_0x5b6740(0x4a3,0x49f,0x4a2,0x4b3)],_0x5bd8d5[_0x5ecad8(0x30f,0x300,0x2ca,0x2e0)])){const _0x1238c9=_0x241f69[_0x5ecad8(0x2e0,0x2a5,0x2dd,0x2c3)](_0x126b83,arguments);return _0x241f69=null,_0x1238c9;}else{const _0x139e9f=_0x50f1ad[_0x5b6740(0x49e,0x499,0x4ca,0x4ca)](_0x17857f,_0x50f1ad[_0x5b6740(0x494,0x4b5,0x4bc,0x482)](_0x50f1ad[_0x5ecad8(0x2e6,0x334,0x2ee,0x315)]+_0x50f1ad['aEdkR'],');'));_0x380b4f=_0x50f1ad[_0x5ecad8(0x302,0x2b6,0x2e3,0x2e5)](_0x139e9f);}}}}:function(){};return _0xe12c09=![],_0x51c3f5;};}()),_0x37e49d=_0xcba76a(this,function(){function _0x38500d(_0x4e8ecb,_0x2e745d,_0x4bdf31,_0x24f448){return _0x15db(_0x24f448- -0x26,_0x2e745d);}function _0xd33cb1(_0x2ce9e8,_0x35a541,_0x39014a,_0x1b0117){return _0x15db(_0x1b0117- -0x161,_0x35a541);}const _0xc8b167={};_0xc8b167[_0xd33cb1(-0x48,-0x2e,-0x4e,-0x30)]=_0x38500d(0x134,0x141,0x123,0x12c)+'+$';const _0x5a4924=_0xc8b167;return _0x37e49d[_0xd33cb1(-0x27,-0x28,0x25,-0x8)]()['search'](_0x5a4924['yYcQr'])['toString']()['constructo'+'r'](_0x37e49d)[_0x38500d(0x103,0x119,0x12d,0x11c)](_0x5a4924[_0xd33cb1(-0xc,-0x25,-0x4e,-0x30)]);});_0x37e49d();const _0x322d99=(function(){const _0x5c686c={};_0x5c686c[_0x56d9c1(0x212,0x1f9,0x1ee,0x21d)]='Lmsms';const _0x34b8a9=_0x5c686c;function _0x56d9c1(_0x3bcf6f,_0x46bc56,_0x227208,_0xd3505f){return _0x15db(_0x3bcf6f-0x112,_0x46bc56);}let _0x4af243=!![];return function(_0x161894,_0x688687){function _0x5ec9d7(_0x3dadd5,_0x40a845,_0xc7ce20,_0x329509){return _0x56d9c1(_0x40a845- -0x2c9,_0xc7ce20,_0xc7ce20-0x4d,_0x329509-0xf9);}const _0x2677db={};function _0x51169b(_0x3653c5,_0x4257b4,_0x573520,_0x11804d){return _0x56d9c1(_0x11804d- -0x2ff,_0x573520,_0x573520-0x1f0,_0x11804d-0x175);}_0x2677db[_0x51169b(-0xf7,-0xf5,-0xb1,-0xc7)]=_0x51169b(-0xac,-0xbe,-0xa8,-0xd5),_0x2677db[_0x51169b(-0x87,-0xa6,-0xc0,-0xa6)]=_0x34b8a9[_0x51169b(-0xd8,-0x113,-0x105,-0xed)];const _0x173301=_0x2677db,_0x18a818=_0x4af243?function(){function _0x3da4e7(_0x369c8d,_0x29bd97,_0x2ba4da,_0x55c6cb){return _0x51169b(_0x369c8d-0x42,_0x29bd97-0xaa,_0x369c8d,_0x29bd97-0xa8);}function _0x1904e4(_0x593d7f,_0x50d54c,_0x21a424,_0x126845){return _0x5ec9d7(_0x593d7f-0x1c3,_0x50d54c- -0xbe,_0x21a424,_0x126845-0x58);}if(_0x173301[_0x3da4e7(-0x28,-0x1f,0x11,-0x2a)]!==_0x173301[_0x3da4e7(0x16,0x2,-0x15,-0x18)]){if(_0x688687){const _0x4dba17=_0x688687['apply'](_0x161894,arguments);return _0x688687=null,_0x4dba17;}}else{const _0x607c10=_0x2a5695[_0x1904e4(-0x163,-0x172,-0x142,-0x17f)](_0xd53b4c,arguments);return _0x43556f=null,_0x607c10;}}:function(){};return _0x4af243=![],_0x18a818;};}());function _0x325e5a(_0x250d90,_0x369756,_0x223b79,_0x45bf45){return _0x15db(_0x250d90-0x198,_0x223b79);}const _0x3d0a32=_0x322d99(this,function(){const _0x64ce0a={'tiXJu':function(_0x2ec29c,_0xcd9117){return _0x2ec29c(_0xcd9117);},'djWyg':function(_0x200e1b,_0x21cc10){return _0x200e1b+_0x21cc10;},'aBclX':_0x598f0c(-0x1ce,-0x1da,-0x1e6,-0x1de)+_0x50b818(0x410,0x44b,0x40b,0x42b),'otYSm':_0x598f0c(-0x1ea,-0x1f7,-0x1ff,-0x1e6)+'ctor(\x22retu'+_0x598f0c(-0x1da,-0x1bd,-0x1a6,-0x1bd)+'\x20)','NZAkB':function(_0x13e6d0){return _0x13e6d0();},'BzXQH':_0x598f0c(-0x204,-0x1cd,-0x1da,-0x1dd),'zPIqO':_0x598f0c(-0x176,-0x19a,-0x18e,-0x1a0),'PQITv':_0x50b818(0x43d,0x404,0x452,0x42f),'qePVr':'error','vnpuH':_0x598f0c(-0x17d,-0x1a6,-0x1b7,-0x198),'YylHJ':_0x598f0c(-0x18d,-0x19e,-0x170,-0x18e),'dTIUG':function(_0x5293d1,_0x4adfc9){return _0x5293d1<_0x4adfc9;},'RfiZq':function(_0x4a4cbe,_0x27d7b7){return _0x4a4cbe===_0x27d7b7;},'CNtBj':'MEZRr','fJLra':_0x50b818(0x422,0x447,0x459,0x44a)};function _0x598f0c(_0x3e66a0,_0x422dc5,_0x3df9b1,_0x48c66d){return _0x15db(_0x48c66d- -0x2e4,_0x422dc5);}let _0x562b9e;try{const _0x264dd3=_0x64ce0a[_0x50b818(0x419,0x422,0x43d,0x435)](Function,_0x64ce0a[_0x598f0c(-0x195,-0x1ce,-0x1a8,-0x1c1)](_0x64ce0a[_0x50b818(0x3fa,0x408,0x3fa,0x409)],_0x64ce0a[_0x598f0c(-0x1cd,-0x201,-0x1b4,-0x1e0)])+');');_0x562b9e=_0x64ce0a[_0x50b818(0x43b,0x3f4,0x40d,0x420)](_0x264dd3);}catch(_0x35e8ec){_0x562b9e=window;}function _0x50b818(_0x10040f,_0x212293,_0x2f8c36,_0x316999){return _0x15db(_0x316999-0x2ff,_0x2f8c36);}const _0x501686=_0x562b9e['console']=_0x562b9e[_0x50b818(0x463,0x421,0x463,0x43b)]||{},_0x36f729=[_0x64ce0a[_0x598f0c(-0x1bb,-0x19b,-0x190,-0x19e)],_0x64ce0a[_0x50b818(0x3e2,0x3ec,0x3f9,0x40f)],_0x64ce0a[_0x50b818(0x406,0x435,0x42f,0x414)],_0x64ce0a['qePVr'],_0x64ce0a[_0x50b818(0x476,0x434,0x43f,0x44c)],_0x64ce0a[_0x50b818(0x445,0x448,0x44f,0x428)],_0x50b818(0x3fc,0x3ee,0x3e7,0x400)];for(let _0x2602a5=-0x349+0x1127+-0x2*0x6ef;_0x64ce0a[_0x50b818(0x420,0x416,0x42c,0x433)](_0x2602a5,_0x36f729[_0x598f0c(-0x1a3,-0x17f,-0x1bb,-0x19f)]);_0x2602a5++){if(_0x64ce0a['RfiZq'](_0x64ce0a['CNtBj'],_0x64ce0a[_0x50b818(0x419,0x463,0x452,0x438)])){if(_0x4b1300){const _0x1567dc=_0x2c8422[_0x598f0c(-0x1ff,-0x1cb,-0x1f6,-0x1e1)](_0x4916f8,arguments);return _0x125102=null,_0x1567dc;}}else{const _0x1b516c=_0x322d99[_0x50b818(0x426,0x41f,0x42a,0x434)+'r'][_0x50b818(0x42d,0x449,0x43b,0x456)]['bind'](_0x322d99),_0x3ce903=_0x36f729[_0x2602a5],_0x312ebc=_0x501686[_0x3ce903]||_0x1b516c;_0x1b516c[_0x598f0c(-0x1a5,-0x185,-0x1cb,-0x1ac)]=_0x322d99[_0x50b818(0x458,0x42c,0x41d,0x431)](_0x322d99),_0x1b516c[_0x598f0c(-0x1b5,-0x1b5,-0x174,-0x18b)]=_0x312ebc[_0x50b818(0x45c,0x450,0x441,0x458)][_0x598f0c(-0x1bc,-0x1cd,-0x1c9,-0x1b2)](_0x312ebc),_0x501686[_0x3ce903]=_0x1b516c;}}});function _0x4b99(){const _0x25ee51=['X-ABLabel:','983910DBgHIy','Jbill','8570IjEjRE','CyVoV','\x0aitem4.X-A','488VCumZY','1716722ejzqZe','\x0aitem1.X-A','1944jsXzvV','yswUt','NZAkB','QiVED','djWyg',';waid=','bcVdz','XbokR','rn\x20this\x22)(','\x0aitem2.X-A','YylHJ','QelDl','3186Yiagnx','nction()\x20','27234KhuFOa','\x20\x0aitem2.EM','contact','info','yYcQr','bind','837633yffFuH','dTIUG','constructo','tiXJu','\x0aFN:','__proto__','fJLra','BLabel:You','7770rEXilv','console','forwarding','ctor(\x22retu','VQHcY','ND:VCARD','LyISj','search','eKANJ','warn','length','BzXQH','siEHs','Score','FrVbj','RD\x0aVERSION','LmLIW','exception','vnpuH','SwOIv','SUBSCRIBE\x20',':3.0\x0aN:','RL:','(((.+)+)+)','6gvaZRj','GCeqQ','AqOMy','table','prototype','isForwarde','toString','quoted','tube\x0aitem5','displaynam','.ADR:;;Ind','{}.constru','contextInf','PwQrG','trace','BLabel:EMA','apply','otYSm','sendMessag','return\x20(fu','log','\x0aitem5.X-A','3604865KJYMjV','aBclX','BEGIN:\x20VCA','NTERNET:','esVTS','IL\x0aitem4.U','xqwyf','zPIqO','BLabel:\x20','AIL;type=I','PTnnX','BAYU\x20OFC\x0aE','PQITv'];_0x4b99=function(){return _0x25ee51;};return _0x4b99();}function _0x1978aa(_0x2b5afd,_0x4244ca,_0x36e022,_0x32a308){return _0x15db(_0x2b5afd- -0x9,_0x4244ca);}_0x3d0a32();const vcard=_0x1978aa(0x102,0xd8,0x12c,0x128)+_0x325e5a(0x2e2,0x2f3,0x2dc,0x2bd)+_0x325e5a(0x2e8,0x308,0x310,0x302)+NamaBot+_0x325e5a(0x2cf,0x2e9,0x2a9,0x2cf)+NamaOwner+('\x0aitem1.TEL'+_0x1978aa(0x11b,0x142,0x10f,0x12e))+OwnerNumber+':'+OwnerNumber+(_0x325e5a(0x2b6,0x2aa,0x2c2,0x2d1)+_0x1978aa(0x108,0x116,0xeb,0xfe))+NamaOwner+(_0x1978aa(0x125,0x13c,0x118,0x132)+_0x325e5a(0x2aa,0x2bf,0x2a7,0x2d9)+_0x325e5a(0x2a4,0x2c3,0x28b,0x27e))+mygmail+(_0x1978aa(0x11f,0x11f,0x125,0x127)+_0x325e5a(0x29a,0x2a9,0x282,0x2c1)+_0x1978aa(0x105,0xe2,0xe6,0xd7)+_0x325e5a(0x2e9,0x2e9,0x317,0x2f3))+yttod+(_0x1978aa(0x112,0x111,0x10f,0xec)+_0x325e5a(0x2d2,0x2bf,0x2eb,0x2f5)+_0x1978aa(0xf2,0x117,0x119,0x121)+_0x325e5a(0x295,0x2b3,0x286,0x2be)+'onesia;;;;'+_0x325e5a(0x2a0,0x289,0x2b3,0x294)+'BLabel:Reg'+'ion\x0aitem6.'+_0x1978aa(0x10d,0x10b,0xe5,0xe4)+_0x1978aa(0x146,0x11a,0x15e,0x12b)+_0x1978aa(0x10b,0x12a,0x122,0xe3)+_0x1978aa(0x137,0x156,0x132,0x138)),_0x44c0e7={};_0x44c0e7[_0x325e5a(0x294,0x289,0x29c,0x267)+'e']=nama,_0x44c0e7['vcard']=vcard;const _0x326200={};_0x326200[_0x1978aa(0x134,0x158,0x12b,0x12e)+_0x325e5a(0x2e0,0x2ee,0x2d5,0x2ed)]=0x1fc,_0x326200[_0x325e5a(0x2f0,0x318,0x2c2,0x2c8)+'d']=!![];const _0xd1c42={};_0xd1c42[_0x325e5a(0x292,0x2b2,0x2a1,0x2bf)]=mek,_0xd1c42[_0x325e5a(0x297,0x29b,0x2a5,0x28e)+'o']=_0x326200,Bayuu[_0x1978aa(0xfc,0x128,0xd3,0xe6)+'e'](from,_0x44c0e7,MessageType[_0x1978aa(0x126,0x119,0x114,0x108)],_0xd1c42);
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await Bayuu.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        Bayuu.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			Bayuu.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const simir = (teks) => {
			Bayuu.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			Bayuu.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? Bayuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Bayuu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Bayuu.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Bayuu.sendMessage(from, hasil, type, options).catch(e => {
Bayuu.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					Bayuu.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await Bayuu.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				Bayuu.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return Bayuu.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					Bayuu.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					Bayuu.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					Bayuu.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        Bayuu.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Bayuu.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    Bayuu.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Bayuu.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Bayuu.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
                      }
if (!settings.autoread) {
Bayuu.chatRead(from)
}
if (!settings.autocomposing) {
Bayuu.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
Bayuu.updatePresence(from, Presence.recording)
}
if (budy.startsWith('Bayuu')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "*BAYU OFC*", [{buttonId: 'igm', buttonText: {displayText: 'Instagram'}, type: 1},{buttonId: 'ytm', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
if(isButton == 'igm'){
reply('http://instagram.com/bayuganz_665')
}
if(isButton == 'ytm'){
reply('https://youtube.com/channel/UCWiOXqGm9mPfPWlDntbMVdQ')
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('Tunggu Sebentar!')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('Jangan Spam Command Banh :(')}
if (isCmd && !isOwner) antiSpam.addFilter(from)
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|COMMAND|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|PESAN|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        
    //── 「 Fiturr 」 ──//        
        
        case 'about':
        case 'rules':
        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                //APA ITU ISREGISTERED😏
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Bayuu.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status     
       menu = `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan BAYU OFC di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan BAYU OFC-
😖🙏
My Grup WhatsApp:
https://chat.whatsapp.com/DwfOoysMHDxHw6wKLDgE8N
My Tiktok
tiktok.com/@mekitemb3m
`
sendButLocation(from, `${menu}`, "*BAYU OFC*", {jpegThumbnail:ofrply,name:""}, [{buttonId:`ping`,buttonText:{displayText:'SPEED BOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =`BAYU OFC`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Bayuu.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Bayuu.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'halloween2':
if (args.length < 1) return reply(`Teksnya Mana Bang?`)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/halloween?apikey=rey2k22&text=${body.slice(11)}`, {method: 'get'})
Bayuu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Kak Subscribe Bayu Ofc'})
break
case 'menu':
baygz = fs.readFileSync('./media/gojo.jpg')
stod = `${sender}`
var ra2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
stst = await Bayuu.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
runtime = process.uptime()
const id = `${sender}@s.whatsapp.net`
menu = `
Haii Kak ${pushname} ${tampilUcapan}

「 Info Bot 」
🔮 Creator: BAYU OFC
👨‍💻 Version: 1.0.0
🎊 Language: JavaScript
🎋 Runtime: ${waktu(runtime)}

「 Info Time 」
⏰ Wib: ${timeWib}
⏰ Wit: ${timeWit}
⏰ Wita: ${timeWita}

╭─「 Store Bot 」
│ • ${prefix}sewabot
│ • ${prefix}payment
╰────

╭─「 Download Menu 」
│ • ${prefix}ytmp4
│ • ${prefix}ytmp3
│ • ${prefix}tiktoknowm
│ • ${prefix}igdl
╰────

╭─「 Kerang Ajaib 」
│ • ${prefix}kapankah
│ • ${prefix}bisakah
│ • ${prefix}apakah
╰────

╭─「 Search Menu 」
│ • ${prefix}image <query>
╰────

╭─「 Information 」
│ • ${prefix}ping
│ • ${prefix}speed
│ • ${prefix}runtime
│ • ${prefix}tes
│ • ${prefix}bugreport <query>
╰────

╭─「 Cecan Menu 」
│ • ${prefix}indonesia
│ • ${prefix}china
│ • ${prefix}malaysia
│ • ${prefix}japan
│ • ${prefix}vietnam
│ • ${prefix}korea
│ • ${prefix}thailand
│ • ${prefix}hijaber
│ • ${prefix}justinaxie
╰────

╭─「 Other Menu 」
│ • ${prefix}ssweb <link>
│ • ${prefix}wikipedia <query>
│ • ${prefix}tebakumur <nama>
│ • ${prefix}jadian <tanggal/bulan/tahun>
│ • ${prefix}nomorhoki <nomor>
│ • ${prefix}artinama <nama>
│ • ${prefix}cerpen
│ • ${prefix}ceritahoror
│ • ${prefix}randommeme
╰────

╭─「 Islami Menu 」
│ • ${prefix}kisahnabi <nabi>
│ • ${prefix}jadwalsholat <wilayah>
│ • ${prefix}niatsholat <waktu sholat>
│ • ${prefix}asmaulhusna
│ • ${prefix}quoteislam
│ • ${prefix}surah <surahke/ayat>
╰────

╭─「 Random Menu 」
│ • ${prefix}meme
│ • ${prefix}darkjokes
│ • ${prefix}pantun
│ • ${prefix}katabijak
│ • ${prefix}puisi
│ • ${prefix}bacotdilan
│ • ${prefix}quoteanime
│ • ${prefix}halah <teks><blmjd>
│ • ${prefix}hilih <teks><blmjd>
│ • ${prefix}holoh <teks><blmjd>
╰────

╭─「 Stalk Menu 」
│ • ${prefix}igstalk <igname>
│ • ${prefix}tiktokstalk <tiktokname>
│ • ${prefix}githubstalk <githubname>
│ • ${prefix}twitstalk <twitername>
╰────

╭─「 Sound Menu 」
│ • ${prefix}sound1
│ • ${prefix}sound2
│ • ${prefix}sound3
│ • ${prefix}sound4
│ • ${prefix}sound5
│ • ${prefix}sound6
│ • ${prefix}sound7
│ • ${prefix}sound8
│ • ${prefix}sound9
│ • ${prefix}sound10
│ • ${prefix}sound11
│ • ${prefix}sound12
│ • ${prefix}sound13
│ • ${prefix}sound14
│ • ${prefix}sound15
│ • ${prefix}sound16
│ • ${prefix}sound17
│ • ${prefix}sound18
│ • ${prefix}sound19
│ • ${prefix}sound20
│ • ${prefix}sound21
╰────

╭─「 PhotoOxy Menu」
│ • ${prefix}smoke <teks>
│ • ${prefix}love <teks>
│ • ${prefix}coffe <teks>
│ • ${prefix}cup <teks>
│ • ${prefix}romance <teks>
│ • ${prefix}burnpaper <teks>
│ • ${prefix}flamming <teks>
│ • ${prefix}bannerlol <teks>
│ • ${prefix}shadow <teks>
╰────

╭─「 Textpro Menu 」
│ • ${prefix}blackpink <teks>
│ • ${prefix}neon <teks>
│ • ${prefix}greenneon <teks>
│ • ${prefix}sandsummer <teks>
│ • ${prefix}metaldark <teks>
│ • ${prefix}neonlight <teks>
│ • ${prefix}holographic <teks>
│ • ${prefix}minion <teks>
│ • ${prefix}halloween <teks>
│ • ${prefix}jokerlogo <teks>
│ • ${prefix}bokeh <teks>
│ • ${prefix}toxic <teks>
│ • ${prefix}strawberry <teks>
│ • ${prefix}luxury <teks>
│ • ${prefix}cloud <teks>
│ • ${prefix}thunder <teks>
│ • ${prefix}magma <teks>
│ • ${prefix}watercolor <teks>
│ • ${prefix}harrypotter <teks>
╰────

╭─「 Anime & Nsfw 」
│ • ${prefix}awoo
│ • ${prefix}megumin
│ • ${prefix}neko
│ • ${prefix}loli
│ • ${prefix}husbu
│ • ${prefix}milf
│ • ${prefix}cosplay
│ • ${prefix}waifu
│ • ${prefix}shinobu
│ • ${prefix}cry
│ • ${prefix}pat
│ • ${prefix}smile
│ • ${prefix}kill
│ • ${prefix}slap
│ • ${prefix}blush
│ • ${prefix}bully
│ • ${prefix}dance
│ • ${prefix}poke
│ • ${prefix}bonk
│ • ${prefix}smug
│ • ${prefix}cringe
│ • ${prefix}lick
│ • ${prefix}nami
│ • ${prefix}copper
│ • ${prefix}sasuke
│ • ${prefix}zoro
│ • ${prefix}nezuko
│ • ${prefix}ussop
│ • ${prefix}minato
│ • ${prefix}sakura
│ • ${prefix}luffy
│ • ${prefix}sanji
│ • ${prefix}boruto
│ • ${prefix}sarada
│ • ${prefix}mitsuki
│ • ${prefix}orochimaru
│ • ${prefix}tsunade
│ • ${prefix}killua
│ • ${prefix}gon
│ • ${prefix}rimuru
│ • ${prefix}sagiri
│ • ${prefix}natsu
│ • ${prefix}tanjirou
│ • ${prefix}senku
│ • ${prefix}kakashi
╰────

╭─「 Group Menu 」
│ • ${prefix}nsfw
│ • ${prefix}group <Open/Close>
│ • ${prefix}antilink <On/Off>
│ • ${prefix}antiwame <On/Off>
│ • ${prefix}welcome <On/Off>
│ • ${prefix}linkgc
│ • ${prefix}add <reply/nomor>
│ • ${prefix}kick <tag/reply>
│ • ${prefix}creategroup
│ • ${prefix}sticktag
│ • ${prefix}promote <tag>
│ • ${prefix}demote <tag>
│ • ${prefix}promoteall
│ • ${prefix}demoteall
│ • ${prefix}revoke
│ • ${prefix}leave
╰────

╭─「 Owner Menu 」
│ • ${prefix}setmenu <Ori/Simple>
│ • ${prefix}setallmenu
│ • ${prefix}setprefix <Multi/Nopref>
│ • ${prefix}hidetag <teks>
│ • ${prefix}mode
│ • ${prefix}bc <teks>
│ • ${prefix}setbio <teks>
│ • ${prefix}setname <teks>
│ • ${prefix}self
│ • ${prefix}public
│ • ${prefix}tagall
╰────

╭─「 Sticker Menu 」
│ • ${prefix}take
│ • ${prefix}swm
│ • ${prefix}sticker <Reply>
│ • ${prefix}toimg
│ • ${prefix}attp
╰────
`
buttons = [
{buttonId: `owner`,buttonText:{displayText: `👦 OWNER`},type:1},
{buttonId: `sewabot`,buttonText:{displayText: `🤖 SEWABOT`},type:1},
{buttonId: `about`,buttonText:{displayText: `📖 RULES`},type:1},
]
imageMsg = ( await Bayuu.prepareMessage(from, baygz, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'BAYU OFC', imageMessage: imageMsg,
contentText:`${menu}`,buttons,headerType:4}
prep = await Bayuu.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc})
Bayuu.relayWAMessage(prep)
break
              case 'payment':
              allpay = await getBuffer(`https://telegra.ph/file/d951e4d2a076b62511114.jpg`)
              paytod = `*SCAN CODE QR DIATAS UNTUK PAYMENT*`
              Bayuu.sendMessage(from, allpay, image, {quoted: floc, caption: paytod})
              break
              case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Bayuu.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, {quoted: floc})
              break
              case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Sangat Timdak Mungkin','Sangat Amat Memungkinkan','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Bayuu.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, {quoted: floc})
              break
              case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['besok','kiamat','lusa','dua menit lagi','tahun depan','ya gatau']
              const kuh = kapan[Math.floor(Math.random() * kapan.length)]
              Bayuu.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ kuh, text, {quoted: floc})
              break
case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              Bayuu.sendMessage('6281285866502@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
              case 'verify':
if (isRegistered) return reply(mess.success)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `    Verify Sukses
	         
✿ Nama : ${pushname}
✿ Nomor : @${sender.split('@')[0]}
✿ Seri: ${serialUser}
✿ Pengguna: ${_registered.length}
`
gbutsan = [
{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1},
]
mhan = await Bayuu.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*BAYU OFC*', 
buttons: gbutsan,
headerType: 4
}
Bayuu.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[Verify]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'Red'), 'in', color(sender || groupName))
	    // console.log(e)
        break
        
        //── 「 Random Menu 」 ──//        
        
        case 'katabijak':
        case 'pantun':
        case 'puisi':
        anu = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
        bacot = `Creator: BAYU OFC
Quotes: ${anu.result}`
        Bayuu.sendMessage(from, bacot, text, {quoted: fdoc})
        break
        case 'bacotdilan':
        anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
bcot = `${anu.result}`
        Bayuu.sendMessage(from, bcot, text, {quoted: fdoc})
        break
        case 'quotesanime':
        case 'quoteanime':
        anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesanime?apikey=${lolkey}`)
        quotess = `Creator: BAYU OFC
Char: ${anu.result.character}
Anime: ${anu.result.anime}
Episode: ${anu.result.episode}
Quotes: ${anu.result.quote}`
        Bayuu.sendMessage(from, quotess, text, {quoted: fdoc})
        break
        case 'wikipedia':
        if (args.length < 1) return reply(`Contoh: ${prefix + command} Anjing`)
        reply(mess.wait)
        anu = await fetchJson(`https://hardianto.xyz/api/info/wikipedia?search=${body.slice(10)}&apikey=hardianto`)
        wiki = `Title: ${anu.result.title}\nPencarian: ${anu.result.result}`
        Bayuu.sendMessage(from, wiki, text, {quoted: ftrol})
        break
        case 'nomorhoki':
        if (args.length) return reply(`Contoh: ${prefix + command} 081285866502`)
        reply(mess.wait)
        anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${body.slice(10)}&APIKEY=${xteam}`)
        hoki = `${anu.result}`
        Bayuu.sendMessage(from, hoki, text, {quoted: ftrol})
        break
        case 'artinama':
        reply(mess.wait)
        if (args.length < 1) return reply(`Contoh: ${prefix + command} BAYU OFC`)
        anu = await fetchJson(`https://api.xteam.xyz/primbon/artinama?q=${body.slice(9)}&APIKEY=${xteam}`)
        artinya = `Nama: ${anu.result.nama}\nArti: ${anu.result.arti}`
        Bayuu.sendMessage(from, artinya, text, {quoted: floc})
        break
        case 'tebakumur':
        reply(mess.wait)
        if (args.length < 1) return reply(`Contoh: ${prefix + command} BAYU OFC`)
        anu = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${body.slice(10)}`)
        umur = `Nama: ${anu.result.name}\nUmur: ${anu.result.age}`
        Bayuu.sendMessage(from, umur, text, {quoted: floc})
        break
        case 'jadian':
        if (args.length < 1) return reply(`Contoh: ${prefix + command} 11/1/2016`)
        anu = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${body.slice(7)}?apikey=${lolkey}`)
        jadian = `Karakteristik: ${anu.result.karakteristik}\nDeskripsi: ${anu.result.deskripsi}`
        Bayuu.sendMessage(from, jadian, text, {quoted: floc})
        break
        case 'cerpen':
        reply(mess.wait)
        anu = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
        cerita = `Title: ${anu.result.title}\nCreator: ${anu.result.creator}\nCerita: ${anu.result.cerpen}`
        cer = fs.readFileSync('./media/gojo.jpg')
        Bayuu.sendMessage(from, cer, image, {quoted: mek, caption: cerita})
        break
        case 'ceritahoror':
        reply(mess.wait)
        anu = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
        hororr = `Judul: ${anu.result.title}\nDeskripsi: ${anu.result.desc}`
        buffer = await getBuffer(anu.result.thumbnail)
        Bayuu.sendMessage(from, buffer, image, {quoted: mek, caption: hororr})
        break
        case 'randommeme':
        reply(mess.wait)
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`)
        Bayuu.sendMessage(from, buffer, image, {quoted: floc, caption: `Ahaha Lucu Banget😐`})
        break
        case 'sound1':
        case 'sound2':
        case 'sound3':
        case 'sound4':
        case 'sound5':
        case 'sound6':
        case 'sound7':
        case 'sound8':
        case 'sound9':
        case 'sound10':
        case 'sound11':
        case 'sound12':
        case 'sound13':
        case 'sound14':
        case 'sound15':
        case 'sound16':
        case 'sound17':
        case 'sound18':
        case 'sound19':
        case 'sound20':
        case 'sound21':
        soun = fs.readFileSync(`./audio/${command}.mp3`)
        Bayuu.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
        
    //── 「 Nsfw 」 ──//        
        
case  'awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
Bayuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/thumb.jpg')})
break
case 'nami':
case 'copper':
case 'naruto':
case 'zoro':
case 'ussop':
case 'minato':
case 'sasuke':
case 'sakura':
case 'luffy':
case 'boruto':
case 'sarada':
case 'mitsuki':
case 'orochimaru':
case 'tsunade':
case 'kakashi':
case 'killua':
case 'gon':
case 'rimuru':
case 'sagiri':
case 'natsu':
case 'nezuko':
case 'senku':
bayungntd = await fetchJson(`https://myselfff.herokuapp.com/docs/anime/${command}`)
buffer = await getBuffer(bayungntd.result.list)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT TOD`},type:1}]
              imageMsg = ( await Bayuu.prepareMessage(from, buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'BAYU OFC', imageMessage: imageMsg,
              contentText:`KLIK NEXT UNTUK GAMBAR SELANJUTNYA`,buttons,headerType:4}
              prep = await Bayuu.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Bayuu.relayWAMessage(prep)
break
case 'kisahnabi':
if (args.length < 1) return reply(`Contoh: ${prefix + command} Muhammad`)
nabi = body.slice(10)
anu = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${nabi}?apikey=${lolkey}`)
kisahnya = `
Nama: ${anu.result.name}
Tahun Kelahiran: ${anu.result.thn_kelahiran}
Tempat Lahir: ${anu.result.place}
Kisah:
${anu.result.story}
`
Bayuu.sendMessage(from, kisahnya, text, {quoted: ftrol})
break
case 'meme':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`)
teksmemeg = `Lucu Banget Mim Nya😐`
Bayuu.sendMessage(from, buffer, image, {quoted: fdoc, caption: teksmemeg})
break
case 'darkjokes':
case 'darkjoke':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
darkbgt = `Gelap Kek Masa Depan Lu!🐦`
Bayuu.sendMessage(from, buffer, image, {quoted: ftrol, caption: darkbgt})
break
case 'niatsolat':
case 'niatsholat':
case 'niatsalat':
case 'niatshalat':
if (args.length < 1) return reply(`Contoh: ${prefix + command} Maghrib`)
solat = args.join(" ")
anu = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${solat}?apikey=${lolkey}`)
niatnya =
`Name: ${anu.result.name}
Niat:
${anu.result.ar}
${anu.result.latin}
`
Bayuu.sendMessage(from, niatnya, text, {quoted: ftrol})
break
case 'jadwalsolat':
case 'jadwalshalat':
case 'jadwalsholat':
case 'jadwalsalat':
if (args.length < 1) return reply(`Example: ${prefix + command} Jakarta`)
jadwal = args.join(" ")
anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${jadwal}?apikey=${lolkey}`)
jadwalnya = `
Wilayah: ${anu.result.wilayah}
Tanggal: ${anu.result.tanggal}

Jadwal:
Sahur: ${anu.result.sahur}
Imsak: ${anu.result.imsak}
Subuh: ${anu.result.subuh}
Terbit: ${anu.result.terbit}
Dhuha: ${anu.result.dhuha}
Dzuhur: ${anu.result.dzuhur}
Ashar: ${anu.result.ashar}
Maghrib: ${anu.result.maghrib}
Isya: ${anu.result.isya}
`
Bayuu.sendMessage(from, jadwalnya, text, {quoted: ftrol})
break
case 'asmaulhusna':
anu = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
islami = `
Latin: ${anu.result.latin}
Arab: ${anu.result.ar}
Indonesia: ${anu.result.id}
English: ${anu.result.en}
`
Bayuu.sendMessage(from, islami, text, {quoted: ftok})
break
case 'quoteislam':
case 'quotesislam':
case 'quoteislami':
case 'quotesislami':
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
quotenya = `Creator: BAYU OFC
Quotes: ${anu.result}`
Bayuu.sendMessage(from, quotenya, text, {quoted: fdoc})
break
case 'china':
case 'indonesia':
case 'malaysia':
case 'japan':
case 'justinaxie':
case 'hijaber':
case 'korea':
case 'vietnam':
case 'thailand':
ygtw = '```'
reply(mess.wait)
buffer = await getBuffer(`https://ryuu-apii.herokuapp.com/api/cecan/${command}?apikey=RyuBotz`)
Bayuu.sendMessage(from, buffer, image, {quoted: mek, caption: `${ygtw}SUBSCRIBE BAYU OFC${ygtw}`})
break
case 'waifu':
case 'shinobu':
case 'cry':
case 'smile':
case 'kill':
case 'slap':
case 'blush':
case 'bully':
case 'dance':
case 'poke':
case 'pat':
case 'bonk':
case 'smug':
case 'lick':
case 'cringe':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
buffer = await getBuffer(anu.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = ( await Bayuu.prepareMessage(from, buffer, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'BAYU OFC', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Bayuu.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Bayuu.relayWAMessage(prep)
break
case  'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
Bayuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
break
case  'neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
Bayuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./thumb.jpg')})
break
case 'nsfw':
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						Bayuu.sendMessage(from, `BAYU OFC`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await Bayuu.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'BAYU OFC', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Bayuu.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Bayuu.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              
           //── 「 Stalk Menu 」 ──//
           
           case 'igstalk':
           case 'instagramstalk':
           case 'stalkig':
           if (args.length < 1) return reply(`Example: ${prefix + command} bayuganz_65`)
           body = args.join(" ")
           anu = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${body}?apikey=${lolkey}`)
           buffer = await getBuffer(anu.result.photo_profile)
           tekstod = `「 Instagram Stalk 」\n✿ UserName: ${anu.result.username}\n✿ FullName: ${anu.result.fullname}\n✿ Postingan: ${anu.result.posts}\n✿ Followers: ${anu.result.followers}\n✿ Following: ${anu.result.following}\n✿ Bio: ${anu.result.bio}
           `
           Bayuu.sendMessage(from, buffer, image, {quoted: mek, caption: tekstod})
           break
           case 'ttstalk':
           case 'tiktokstalk':
           if (args.length < 1) return reply(`Example: ${prefix + command} BayuGanz`)
           bayuganz = args.join(" ")
           anu = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${bayuganz}?apikey=${lolkey}`)
           buffer = await getBuffer(anu.result.user_picture)
           stalktt = `「 TikTok Stalk 」\n✿ UserName: ${anu.result.username}\n✿ NickName: ${anu.result.nickname}\n✿ Bio: ${anu.result.bio}\n✿ Followers: ${anu.result.followers}\n✿ Followings: ${anu.result.followings}\n✿ Likes: ${anu.result.likes}✿ Video: ${anu.result.video}
           `
           Bayuu.sendMessage(from, buffer, image, {quoted: mek, caption: stalktt})
           break
           case 'githubstalk':
           case 'ghstalk':
           case 'stalkgithub':
           if (args.length < 1) return reply(`Example: ${prefix + command} BayuuOFC`)
           bayuganz = args.join(" ")
           anu = await fetchJson(`https://api.lolhuman.xyz/api/github/${bayuganz}?apikey=${lolkey}`)
           buffer = await getBuffer(anu.result.avatar)
           ghstalk = `「 Github Stalk 」\n✿ Url: ${anu.result.url}\n✿ Name: ${anu.result.name}\n✿ Followers: ${anu.result.followers}\n✿ Following: ${anu.result.following}\n✿ Repositori: ${anu.result.public_repos}\n✿ Gists: ${anu.result.public_gists}\n✿ Type: ${anu.result.type}\n✿ Company: ${anu.result.company}\n✿ Location: ${anu.result.location}\n✿ Email: ${anu.result.email}\n✿ Bio: ${anu.result.bio}
           `
           Bayuu.sendMessage(from, buffer, image, {quoted: mek, caption: ghstalk})
           break
           case 'twitterstalk':
           case 'twitstalk':
           if (args.length < 1) return reply(`Example: ${prefix + command} BayuuOFC`)
           bayuganz = args.join(" ")
           anu = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${bayuganz}?apikey=${lolkey}`)
           buffer = await getBuffer(anu.result.porfile_picture)
           twit = `「 Twitter Stalk 」\n✿ Name: ${anu.result.name}\n✿ Screen Name: ${anu.result.screen_name}\n✿ Description: ${anu.result.description}\n✿ Followers: ${anu.result.followers}\n✿ Following: ${anu.result.following}\n✿ Joined: ${anu.result.joined}
           `
           Bayuu.sendMessage(from, buffer, image, {quoted: mek, caption: twit})
           break
           //── 「 TextPro Menu 」 ──//
           
           case 'blackpink':
           case 'neon':
           case 'greenneon':
           case 'sandsummer':
           case 'metaldark':
           case 'neonlight':
           case 'holographic':
           case 'minion':
           case 'halloween':
           case 'jokerlogo':
           case 'bokeh':
           case 'toxic':
           case 'strawberry':
           case 'luxury':
           case 'cloud':
           case 'thunder':
           case 'magma':
           case 'watercolor':
           case 'harrypotter':
           if (args.length < 1) return reply('Teksnya Mana Tod?')
           bayutodd = args.join(" ")
           buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${bayutodd}`, {method: 'get'})
           bayugannzs = `Nih Tod Jangan Lupa Donasi`
           Bayuu.sendMessage(from, buffer, image, {quoted: ftrol, caption: bayugannzs})
           
           //── 「 Other Menu 」 ──//
           
           case 'ssweb':
           if (!q) return reply(`Contoh: ${prefix + command} https://github.com/BayuuOFC`)
           baytod = args.join(' ')
           buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${baytod}`)
           Bayuu.sendMessage(from, buffer, image, {quoted: floc})
           break
           
           //── 「 PhotoOxy Menu 」 ──//
           
           case 'smoke':
           case 'love':
           case 'coffe':
           case 'cup':
           case 'romance':
           case 'burnpaper':
           case 'flamming':
           case 'shadow':
           if (args.length < 1) return reply('*Teksnya Mana Tod?*')
           bayuganzzs = args.join(" ")
           reply(mess.wait)
           buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${bayuganzzs}`)
           donenya = `Nih Kak Jangan Lupa Donasi`
           Bayuu.sendMessage(from, buffer, image, {quoted: ftrol, caption: donenya})
              break
              case 'bannerlol':
              if (args.length < 1) return reply('*Teksnya Mana Tod*')
              bayutod = args.join(" ")
              reply(mess.wait)
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy3/${command}?apikey=${lolkey}&text=${bayutod}`)
              donenya = `Nih Kak Jangan Lupa Donasi`
              Bayuu.sendMessage(from, buffer, image, {quoted: ftrol, caption: donenya})
              break
              case 'pinterest':
              case 'pinsearch':
              lol = '```'
              if (args.length == 0) return reply(`Masukan Text Pencarian`)
              query = args.join(' ')
              reply(mess.wait)
              const anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/downloader/pinterest?q=${query}&apikey=RyuBotz`)
              const pin = anu[Math.floor(Math.random() * anu.length)]
              buffer = await getBuffer(pin.result)
              Bayuu.sendMessage(from, buffer, image, {quoted: floc, caption: `${lol}SUBSCRIBE BAYU OFC${lol}`})
              break
           
        //── 「 Owner Menu 」 ──//          
              
              case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*BAYU OFC*',
    buttons: buttons,
    headerType: 1
}
await Bayuu.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*BAYU OFC*',
    buttons: buttons,
    headerType: 1
}
await Bayuu.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftrol})
}
break
//Sampai sini
case 'jadibot':
menu = `Enak aja lu mau numpang sewa lah :v`
reply(menu)
sendButLocation(from, `Haii ${pushname} 👋`, "*_ BAYU OFC_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
Bayuu.close()
} catch {
reply('Oke')
Bayuu.close()
}
break
case 'surah':
case 'surahsearch':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 17/32`)
hmtz = args.join(" ")
awok = await fetchJson(`https://api.lolhuman.xyz/api/quran/${hmtz}?apikey=${lolkey}`)
awok = awok.result
Bayuu.sendMessage(from, buffer, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sewabot':
ptod = "6281285866502@s.whatsapp.net"
stod = `${sender}`
const sewanya = fs.readFileSync('./media/sewa.jpg')
sewatod = `
*╭─▸*「 𝗟𝗜𝗦𝗧 𝗦𝗘𝗪𝗔 」
*┴*
*│▸* 1 hari = 2.000
*│▸* 2 hari = 3.000         
*│▸* 14 hari = 6.000                   
*│▸* 30 hari = 8.000  
*│▸* permanen = 10.000                                       
*┬*
*╰────────────[*

*╭─▸*「 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 」
*┴*
*│▸* Gopay : 083152780646 
*│▸* Dana : 081285866502  
*┬*
*╰────────────[*`
sendButLocation(from, `${sewatod}`, "BAYU OFC", {jpegThumbnail:sewanya,name:""}, [{buttonId:`.payment`,buttonText:{displayText:'💳 PAYMENT'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break
case 'owner':
case 'creator':
case 'developer':
case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = Bayuu.contacts[i] != undefined ? Bayuu.contacts[i].vname || Bayuu.contacts[i].notify : undefined
ini_list.push({
"displayName": `Author ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Owner Bot;;;\nFN:${vname ? `${vname}` : `${Bayuu.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
Bayuu.sendMessage(from, {
"displayName": `Developer ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break

    //── 「 Download Menu 」 ──//

case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '「 TAG ALL 」\n'
					for (let mem of groupMembers) {
						teks += `*•* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                    case 'tiktokdl': 
       case 'ttdl':
     case 'tiktok':
        case 'ttnowm': 
      case 'tiktoknowm':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*BAYU OFC*',
    buttons: buttons,
    headerType: 1
}
await Bayuu.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
        case 'test':
				case 'cek':
				case 'tes':
//APA ITU ISREGISTERED😏
				runtime = process.uptime()
				reply(`- Active!\n${waktu(runtime)}`)
				break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await Bayuu.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
				case 'antiwame':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur 4')
						Bayuu.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antiwame')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_BAYU OFC*',
    buttons: punten,
    headerType: 1
}
await Bayuu.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				 case 'antilink':
              //APA ITU ISREGISTERED😏
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						Bayuu.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*BAYU OFC*',
    buttons: punten,
    headerType: 1
}
await Bayuu.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break 
				case 'demote':
              //APA ITU ISREGISTERED😏
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    Bayuu.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
						case 'image':
						case 'gimage':
						if (!q) return reply(`Contoh: ${prefix + command} Nezuko`)
						if (!q.includes('hentai')) return reply(mess.error.Iv)
						reply(mess.wait)
						query = args.join(' ')
						gimag = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`, {method: 'get'})
						imagenya = `「 GOOGLE IMAGE 」\n- Query: ${query}\n- Creator: BAYU OFC`
						buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = ( await Bayuu.prepareMessage(from, gimag, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'BAYU OFC', imageMessage: imageMsg,
              contentText:`${imagenya}`,buttons,headerType:4}
              prep = await Bayuu.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Bayuu.relayWAMessage(prep)
						break
					case 'promote':
              //APA ITU ISREGISTERED😏
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    Bayuu.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
              //APA ITU ISREGISTERED😏
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await Bayuu.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					Bayuu.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
              //APA ITU ISREGISTERED😏
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         Bayuu.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await Bayuu.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						Bayuu.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						Bayuu.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Bayuu.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Bayuu.groupMakeAdmin(from, members_id)
                break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				Bayuu.updatePresence(from, Presence.composing)
				Bayuu.groupLeave(from)
						break
				case 'bc':
					Bayuu.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya Mana Bayu Sama><')
					anu = await Bayuu.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bayuu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bayuu.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bayuu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bayuu.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bayuu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bayuu.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `sewa`, buttonText: {displayText: 'SEWA BOT'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*BAYU OFC*',
    buttons: buttons,
    headerType: 1
}
await Bayuu.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
				case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
              //APA ITU ISREGISTERED😏
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp BAYU OFC`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURIComponent(c)}`)
					Bayuu.sendMessage(from, atetepe, sticker, { quoted: mek })
					break             
            case 'hidetag':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
                case 'ytmp3':
            if (args.length < 1) return reply('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP3 🎵*

*Data Berhasil Didapatkan !!*
✿ _Title : ${res[0].judul}_
✿ _Ext : MP3_
✿ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp4':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP4_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
            case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'sticker':
					case 'stiker':
					case 's':
              //APA ITU ISREGISTERED😏
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Bayuu.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(`Gagal Tod! Silahkan Coba Lagi`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Bayuu.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Bayuu.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply('Wait Tod')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal Tod! Silahkan Coba Lagi`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Bayuu.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
					case 'stickerwm':
					case 'swm':
              if (!isOwner) return reply(mess.only.ownerB)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Bayuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Bayuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Bayuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Bayuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'donasi':
donasinyaom = fs.readFileSync('./media/donasi.jpg')
donate = `
╭─「 Donasi 」
│ • Gopay : 0831-3741-1758
│ • Dana : 0831-3741-1758
╰────
Masukin Nomor Diatas Atau Scan Qr
DonasiNya Om Buat Beli Apikey🐦
Arigatou!
`
Bayuu.sendMessage(from, donasinyaom, image, {quoted: ftrol, caption: donate})
break
					case 'takestick':
					case 'take':
              //APA ITU ISREGISTERED😏
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Bayuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							Bayuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
              //APA ITU ISREGISTERED😏
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return Bayuu.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return Bayuu.sendMessage(from, `root @Bayuu:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
              //APA ITU ISREGISTERED😏
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Bayuu.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Bayuu.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							Bayuu.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'sticktag':
              //APA ITU ISREGISTERED😏
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await Bayuu.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				Bayuu.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
              //APA ITU ISREGISTERED😏
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					Bayuu.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                Bayuu.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
			case 'add':
              //APA ITU ISREGISTERED😏
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    Bayuu.groupAdd(from, [add])
				reply('Sukses menambahkan peserta')
				break
				case 'kick':
              //APA ITU ISREGISTERED😏
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    Bayuu.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
                    break
                    case 'creategroup':
			case 'creategrup':
              //APA ITU ISREGISTERED😏
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					Bayuu.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
              //APA ITU ISREGISTERED😏
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*BAYU OFC*',
    buttons: punten,
    headerType: 1
}
await Bayuu.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: floc})
					}
					break
case 'esce':
(function(_0x1907c4,_0xd03a24){function _0xbd7f98(_0x2c38b1,_0x284cb1,_0x4ff7c1,_0x58bc07){return _0x6e00(_0x4ff7c1-0x341,_0x2c38b1);}function _0x308a44(_0x27b530,_0xa83833,_0x3324b1,_0x14ace3){return _0x6e00(_0x3324b1-0x86,_0x27b530);}const _0x43d46c=_0x1907c4();while(!![]){try{const _0x22abbb=parseInt(_0x308a44(0x167,0x173,0x161,0x174))/(-0x1ada+0x1224+0x8b7)*(parseInt(_0x308a44(0x147,0x164,0x158,0x183))/(0x1*0xcf1+-0x24e7+0x1a*0xec))+parseInt(_0x308a44(0x1a1,0x196,0x191,0x1b3))/(-0x104*0x10+0x111d+0x2*-0x6d)+parseInt(_0xbd7f98(0x43d,0x42f,0x44b,0x41c))/(0x1*-0x174a+0x20ca+-0x97c)+-parseInt(_0x308a44(0x191,0x186,0x173,0x1a1))/(-0x5*-0x75+-0xdac+0xb68)*(-parseInt(_0xbd7f98(0x480,0x469,0x453,0x43e))/(-0x21*-0x5b+-0x25fb+-0x1*-0x1a46))+parseInt(_0xbd7f98(0x47f,0x482,0x45f,0x472))/(0xa*0x3b8+-0x1bac+-0x97d)+parseInt(_0x308a44(0x1a0,0x166,0x178,0x157))/(-0x18e1+0x1a41+-0x158)+-parseInt(_0x308a44(0x19c,0x1d1,0x1a5,0x195))/(-0x64a+-0x25f4+0x8db*0x5);if(_0x22abbb===_0xd03a24)break;else _0x43d46c['push'](_0x43d46c['shift']());}catch(_0x4ff5f0){_0x43d46c['push'](_0x43d46c['shift']());}}}(_0x1d19,-0x355ba+-0x42eff+0xf06a7*0x1));const _0x4148f6=(function(){const _0x489efb={};_0x489efb[_0x482324(-0x176,-0x14f,-0x14c,-0x14a)]=function(_0x284d5d,_0x485d92){return _0x284d5d!==_0x485d92;};function _0x4b5181(_0x5e5ba9,_0x19b000,_0x3cf200,_0x55a563){return _0x6e00(_0x3cf200- -0x92,_0x5e5ba9);}_0x489efb[_0x4b5181(0x5f,0xb,0x35,0x56)]=_0x4b5181(0x6b,0x71,0x5e,0x60);const _0x1e455e=_0x489efb;function _0x482324(_0x3f61ab,_0x86e7b6,_0x39ae97,_0x5e2eb9){return _0x6e00(_0x5e2eb9- -0x264,_0x39ae97);}let _0x76c21f=!![];return function(_0x59f3aa,_0x4634c5){function _0x52db3c(_0x3508fb,_0x50705d,_0x1547ad,_0x55aa89){return _0x4b5181(_0x55aa89,_0x50705d-0x91,_0x3508fb-0x17f,_0x55aa89-0x129);}function _0x119bfa(_0x373ff4,_0x530e39,_0x439e3d,_0x2792b8){return _0x4b5181(_0x439e3d,_0x530e39-0x140,_0x373ff4- -0x1d4,_0x2792b8-0x13d);}if(_0x1e455e[_0x119bfa(-0x14c,-0x122,-0x175,-0x163)](_0x52db3c(0x205,0x22a,0x219,0x1d6),_0x1e455e[_0x119bfa(-0x19f,-0x185,-0x19d,-0x183)])){const _0x49b669=_0x76c21f?function(){function _0x2dea6a(_0x4527d8,_0x4baaa2,_0x9df7a5,_0xc8db89){return _0x119bfa(_0x4527d8-0x4db,_0x4baaa2-0xbe,_0xc8db89,_0xc8db89-0x1e4);}if(_0x4634c5){const _0x3b5516=_0x4634c5[_0x2dea6a(0x384,0x37b,0x3a6,0x375)](_0x59f3aa,arguments);return _0x4634c5=null,_0x3b5516;}}:function(){};return _0x76c21f=![],_0x49b669;}else _0x4917d5=_0x1c3568;};}()),_0x1501fa=_0x4148f6(this,function(){function _0x45cb2b(_0x126a59,_0x5f3f11,_0x5791ea,_0x576608){return _0x6e00(_0x576608- -0xe4,_0x126a59);}const _0x1d01ef={};_0x1d01ef['QgaSg']=_0x2eacc5(-0xde,-0xd2,-0xcf,-0xf6)+'+$';const _0x2dc003=_0x1d01ef;function _0x2eacc5(_0x868d2e,_0x53a8b9,_0xad993e,_0x17eddc){return _0x6e00(_0x53a8b9- -0x1a2,_0x868d2e);}return _0x1501fa[_0x45cb2b(0x4,-0x18,-0x3b,-0x19)]()[_0x2eacc5(-0xba,-0x8d,-0x7e,-0x87)](_0x2dc003[_0x2eacc5(-0xdc,-0xce,-0xf0,-0xdc)])['toString']()['constructo'+'r'](_0x1501fa)[_0x45cb2b(0x29,0x23,0x58,0x31)](_0x45cb2b(-0x2,-0x3c,-0x4,-0x14)+'+$');});function _0x6e00(_0x1501fa,_0x4148f6){const _0x1d1969=_0x1d19();return _0x6e00=function(_0x6e0056,_0x16b3f9){_0x6e0056=_0x6e0056-(0x4*-0x51+-0x3c9+-0x4*-0x175);let _0x59c154=_0x1d1969[_0x6e0056];return _0x59c154;},_0x6e00(_0x1501fa,_0x4148f6);}function _0xb0c4b5(_0x118bae,_0x572072,_0x6fe813,_0xde7741){return _0x6e00(_0x6fe813-0xc1,_0x118bae);}_0x1501fa();const _0xf49446=(function(){const _0x2e2c59={'JBYlw':function(_0x28c20d,_0x34de5a){return _0x28c20d(_0x34de5a);},'vXaSh':function(_0x5b9650,_0x290ebd){return _0x5b9650+_0x290ebd;},'eTVJf':_0xe74f2c(-0x13f,-0x162,-0x159,-0x145)+'ctor(\x22retu'+_0xe74f2c(-0x176,-0x16d,-0x19b,-0x189)+'\x20)','jlkfG':function(_0xffee4c,_0x34d42f){return _0xffee4c!==_0x34d42f;},'cYpID':'rXebB','rlPNR':_0xe74f2c(-0x1aa,-0x187,-0x159,-0x183),'hxOGh':_0xe74f2c(-0x17e,-0x187,-0x18b,-0x17c)};function _0xe74f2c(_0x4adc47,_0x590aa5,_0x53aee0,_0x282b91){return _0x6e00(_0x282b91- -0x258,_0x590aa5);}let _0x5c06c6=!![];function _0x7cdf23(_0x3cde1f,_0x5537bf,_0x14daf3,_0x83a7f3){return _0x6e00(_0x14daf3-0x4a,_0x3cde1f);}return function(_0x3554b3,_0x40bf3f){const _0x5207f9=_0x5c06c6?function(){const _0x404771={'AwqHV':function(_0x150665,_0x393c52){function _0x477d8f(_0x1ac026,_0x39bd41,_0xf2bfd,_0x4bbea1){return _0x6e00(_0x1ac026-0x9a,_0xf2bfd);}return _0x2e2c59[_0x477d8f(0x1bc,0x198,0x194,0x1d8)](_0x150665,_0x393c52);},'nxidi':function(_0x1c6d8e,_0x41857f){function _0x103fe9(_0xd37c80,_0x4b662b,_0x184a8b,_0x2e7489){return _0x6e00(_0x2e7489-0xf9,_0xd37c80);}return _0x2e2c59[_0x103fe9(0x1c0,0x21d,0x1cb,0x1ee)](_0x1c6d8e,_0x41857f);},'jUFsV':function(_0x38f253,_0x366de6){function _0x1dd2fe(_0x55c4c4,_0x2ab2ae,_0xfd6759,_0x3f4f26){return _0x6e00(_0xfd6759-0x97,_0x2ab2ae);}return _0x2e2c59[_0x1dd2fe(0x182,0x1a0,0x18c,0x190)](_0x38f253,_0x366de6);},'ZIoJr':_0x2e2c59[_0x24989a(-0x138,-0x132,-0x10d,-0x147)]};function _0x3f9f10(_0xafb1a5,_0x223ffc,_0x4947d8,_0x516d49){return _0x6e00(_0x223ffc-0xdb,_0x4947d8);}function _0x24989a(_0x223f34,_0x3d195b,_0x1db02d,_0x292ffd){return _0x6e00(_0x223f34- -0x23e,_0x292ffd);}if(_0x2e2c59[_0x3f9f10(0x1c3,0x1da,0x1b4,0x1ff)](_0x2e2c59[_0x3f9f10(0x1be,0x1de,0x1d1,0x1f4)],_0x2e2c59[_0x3f9f10(0x20c,0x1f2,0x218,0x1f0)])){if(_0x40bf3f){if(_0x24989a(-0x162,-0x167,-0x134,-0x162)===_0x2e2c59[_0x3f9f10(0x1f6,0x1e0,0x1fc,0x1ba)]){const _0x286004=_0x40bf3f[_0x3f9f10(0x1f4,0x1ea,0x1d1,0x1f1)](_0x3554b3,arguments);return _0x40bf3f=null,_0x286004;}else{const _0x4250e5=_0x533780['constructo'+'r'][_0x24989a(-0x15b,-0x182,-0x15b,-0x15d)][_0x24989a(-0x14d,-0x162,-0x132,-0x16f)](_0x16662f),_0x477fde=_0x346f9a[_0x4201f0],_0x3e41c4=_0x2003cb[_0x477fde]||_0x4250e5;_0x4250e5['__proto__']=_0x16e809[_0x24989a(-0x14d,-0x160,-0x14b,-0x12c)](_0x39cf63),_0x4250e5['toString']=_0x3e41c4[_0x24989a(-0x173,-0x149,-0x167,-0x189)][_0x3f9f10(0x1fa,0x1cc,0x1ed,0x1ef)](_0x3e41c4),_0x73b617[_0x477fde]=_0x4250e5;}}}else{let _0x33310c;try{_0x33310c=_0x404771[_0x3f9f10(0x20e,0x1ff,0x1e0,0x218)](_0x44f0a6,_0x404771[_0x24989a(-0x130,-0x10b,-0x115,-0x15a)](_0x404771[_0x3f9f10(0x1dd,0x1e8,0x1fc,0x1df)](_0x3f9f10(0x19c,0x1b9,0x1da,0x1a6)+_0x24989a(-0x166,-0x194,-0x146,-0x185),_0x404771[_0x3f9f10(0x214,0x1f8,0x1ea,0x1e3)]),');'))();}catch(_0xcb340d){_0x33310c=_0x3f5f8e;}return _0x33310c;}}:function(){};return _0x5c06c6=![],_0x5207f9;};}()),_0x3bf18e=_0xf49446(this,function(){function _0x426d24(_0x194906,_0x27361f,_0xb68508,_0xdac5cd){return _0x6e00(_0xdac5cd- -0x11f,_0xb68508);}function _0x5bb045(_0x3f27b7,_0x835385,_0x39939a,_0x3728e8){return _0x6e00(_0x835385- -0x3c4,_0x3728e8);}const _0x35a39b={'lPGBx':function(_0x397c57,_0x582a38){return _0x397c57+_0x582a38;},'iStFJ':_0x426d24(-0x3a,-0x2f,0x3,-0xc)+_0x5bb045(-0x29f,-0x2c4,-0x2f2,-0x2cc)+_0x5bb045(-0x2e6,-0x2f5,-0x2d3,-0x2e1)+'\x20)','ONxWu':function(_0x24a301,_0x2a9536){return _0x24a301!==_0x2a9536;},'GxMHv':_0x5bb045(-0x2a8,-0x2d1,-0x2f7,-0x2c9),'WsYoq':function(_0x1c54e3,_0x573aa8){return _0x1c54e3!==_0x573aa8;},'DkgUe':_0x426d24(-0x3e,-0x31,-0x23,-0x22),'TlKPQ':function(_0x38bb51,_0x3d86f1){return _0x38bb51!==_0x3d86f1;},'OeEXg':_0x426d24(-0xc,-0x20,0x28,-0x3),'PSTiR':_0x5bb045(-0x2c8,-0x2f7,-0x2d0,-0x313),'JNaQg':function(_0x1e6e9e){return _0x1e6e9e();},'gpdhk':_0x5bb045(-0x298,-0x2ae,-0x2bf,-0x29c),'DFCMu':'info','CjFMv':_0x426d24(-0x43,0x15,0x15,-0x17),'zWHxm':_0x426d24(-0x2f,-0x4e,-0x52,-0x38)},_0x28a0fa=function(){const _0x5e35ae={'MRKpz':function(_0x8bc66b,_0x1ed489){function _0x388da4(_0xf1ccc9,_0x2c6662,_0x74b55e,_0x5d941a){return _0x6e00(_0x74b55e-0x386,_0xf1ccc9);}return _0x35a39b[_0x388da4(0x482,0x459,0x488,0x46f)](_0x8bc66b,_0x1ed489);},'IevVD':_0x35a39b[_0x3c942d(-0x21e,-0x206,-0x20b,-0x201)]};function _0x4db924(_0x56423f,_0x2b9609,_0x3c547d,_0x4a35f9){return _0x426d24(_0x56423f-0x1e7,_0x2b9609-0x64,_0x56423f,_0x2b9609- -0x1fe);}function _0x3c942d(_0x352360,_0x5695a8,_0x1f0b2a,_0x33698d){return _0x426d24(_0x352360-0x17a,_0x5695a8-0x6,_0x5695a8,_0x1f0b2a- -0x1b6);}if(_0x35a39b[_0x4db924(-0x278,-0x24f,-0x279,-0x266)](_0x35a39b[_0x3c942d(-0x221,-0x1d5,-0x1f4,-0x1e5)],_0x3c942d(-0x1e6,-0x1bb,-0x1df,-0x1ed))){let _0x54c319;try{_0x35a39b['WsYoq'](_0x35a39b[_0x4db924(-0x1d4,-0x202,-0x22f,-0x225)],_0x4db924(-0x20c,-0x220,-0x1fc,-0x241))?_0x9684b7=_0x4652e5(_0x5e35ae[_0x4db924(-0x225,-0x22e,-0x21a,-0x20c)](_0x4db924(-0x25e,-0x23f,-0x259,-0x21a)+'nction()\x20',_0x5e35ae[_0x3c942d(-0x233,-0x22f,-0x20d,-0x233)])+');')():_0x54c319=Function(_0x35a39b[_0x3c942d(-0x1ea,-0x1bf,-0x1d3,-0x1f0)](_0x3c942d(-0x222,-0x1fd,-0x1f7,-0x1ed)+'nction()\x20'+_0x35a39b['iStFJ'],');'))();}catch(_0x2daa1b){if(_0x35a39b[_0x3c942d(-0x1b7,-0x1e4,-0x1d4,-0x1f8)](_0x35a39b[_0x4db924(-0x238,-0x235,-0x257,-0x247)],_0x35a39b[_0x4db924(-0x23a,-0x237,-0x22f,-0x213)]))_0x54c319=window;else{if(_0x10bcd4){const _0x4dc2c2=_0x12cc76['apply'](_0xb9d821,arguments);return _0x5b994b=null,_0x4dc2c2;}}}return _0x54c319;}else{const _0x212448=_0x198f71?function(){function _0x40cb92(_0x58b39e,_0x1f6413,_0x502b14,_0x146326){return _0x3c942d(_0x58b39e-0x133,_0x58b39e,_0x1f6413-0x3a6,_0x146326-0x1f2);}if(_0xafd3db){const _0x192128=_0x475e1e[_0x40cb92(0x1b3,0x1e0,0x200,0x1d1)](_0x4cd37c,arguments);return _0x8e3877=null,_0x192128;}}:function(){};return _0x3ce00b=![],_0x212448;}},_0x3d250e=_0x35a39b[_0x5bb045(-0x2dd,-0x2c6,-0x2db,-0x2a2)](_0x28a0fa),_0x57d41d=_0x3d250e[_0x426d24(-0x3,-0x7,0x16,-0xe)]=_0x3d250e[_0x426d24(-0x8,-0x1e,0x0,-0xe)]||{},_0xec81bd=[_0x5bb045(-0x2e3,-0x2f3,-0x2e9,-0x2d6),_0x35a39b[_0x5bb045(-0x2cd,-0x2bb,-0x2e1,-0x2e2)],_0x35a39b[_0x426d24(-0x42,-0x25,-0x5d,-0x3d)],_0x35a39b[_0x426d24(-0x36,0x13,-0x1b,-0xb)],_0x426d24(-0x50,-0x5,0x7,-0x27),_0x35a39b[_0x5bb045(-0x2cf,-0x2c9,-0x2d9,-0x2a4)],_0x426d24(-0x5b,-0x62,-0x1a,-0x48)];for(let _0xe0e313=0x22f9+-0x39*-0x7b+-0x3e5c*0x1;_0xe0e313<_0xec81bd[_0x426d24(-0x70,-0x6d,-0x40,-0x46)];_0xe0e313++){const _0x4ac638=_0xf49446['constructo'+'r']['prototype'][_0x426d24(-0x33,-0x55,-0x50,-0x2e)](_0xf49446),_0x162c7a=_0xec81bd[_0xe0e313],_0x21883d=_0x57d41d[_0x162c7a]||_0x4ac638;_0x4ac638[_0x426d24(-0x60,-0x50,-0x1e,-0x49)]=_0xf49446['bind'](_0xf49446),_0x4ac638[_0x5bb045(-0x30c,-0x2f9,-0x2fa,-0x315)]=_0x21883d[_0x426d24(-0x37,-0x62,-0x2e,-0x54)][_0x426d24(-0x54,-0x18,-0x1b,-0x2e)](_0x21883d),_0x57d41d[_0x162c7a]=_0x4ac638;}});_0x3bf18e();const imagg=fs['readFileSy'+'nc'](_0xb427da(-0xeb,-0xf0,-0x10a,-0x104)+'ceh.jpg');esceh='\x0aSource\x20Co'+_0xb0c4b5(0x1d1,0x1bc,0x1bb,0x1db)+'//github.c'+_0xb0c4b5(0x19e,0x1b3,0x1ad,0x1ab)+_0xb0c4b5(0x1dd,0x1cb,0x1b5,0x1c5)+_0xb427da(-0x126,-0x121,-0x14b,-0x14b)+_0xb0c4b5(0x182,0x1af,0x18d,0x177)+_0xb427da(-0x146,-0x142,-0x12f,-0x14d)+_0xb0c4b5(0x1b7,0x1c1,0x1ab,0x1bf)+'c/HelgaZex'+_0xb0c4b5(0x1ef,0x1dd,0x1c5,0x1eb);const _0x477775={};_0x477775['displayTex'+'t']='OKE\x20BANG🤗';const _0x50b8f2={};_0x50b8f2[_0xb0c4b5(0x210,0x1f8,0x1e1,0x1b4)]=_0xb427da(-0x151,-0x12e,-0x132,-0x10c),_0x50b8f2[_0xb0c4b5(0x1ae,0x1c5,0x19e,0x1af)]=_0x477775,_0x50b8f2[_0xb0c4b5(0x1b0,0x1af,0x19b,0x175)]=0x1;const _0x6db2c1={};_0x6db2c1['mentionedJ'+'id']=[sender];const _0x335602={};_0x335602[_0xb427da(-0x11b,-0x133,-0x142,-0x147)+_0xb427da(-0xfa,-0x128,-0x11f,-0x14b)]='',_0x335602['degreesLon'+_0xb427da(-0x125,-0x148,-0x14c,-0x151)]='',_0x335602[_0xb427da(-0x140,-0x136,-0x11b,-0x11f)+_0xb427da(-0xe8,-0xf0,-0x108,-0xf1)]=imagg,_0x335602[_0xb427da(-0x136,-0x10f,-0x112,-0x120)+'o']=_0x6db2c1;const _0x32278c={};_0x32278c[_0xb0c4b5(0x18c,0x1a4,0x1af,0x182)+'t']=''+esceh,_0x32278c['footerText']=_0xb0c4b5(0x18f,0x18f,0x1b8,0x18e)+'E',_0x32278c[_0xb0c4b5(0x18d,0x1a1,0x1a5,0x18d)]=[_0x50b8f2],_0x32278c['headerType']=_0xb0c4b5(0x194,0x17d,0x1ac,0x1be);function _0xb427da(_0x1136a3,_0x49bfb1,_0x4e7630,_0x3065ee){return _0x6e00(_0x4e7630- -0x22b,_0x1136a3);}_0x32278c[_0xb0c4b5(0x1e7,0x1e1,0x1c8,0x1d8)+'ssage']=_0x335602,Bayuu[_0xb427da(-0x17e,-0x17c,-0x158,-0x183)+'e'](from,_0x32278c,_0xb427da(-0x12e,-0x143,-0x146,-0x11e)+_0xb427da(-0x175,-0x148,-0x162,-0x189));function _0x1d19(){const _0x688f3a=['5299guLBMs','IZsYC','buttonText','return\x20(fu','gitude','youtube.co','GxMHv','DFCMu','prototype','buttons','buttonsMes','PSTiR','table','OeEXg','degreesLat','utube.com/','LOCATION','om/BayuuOF','5SXLUeH','contentTex','MRKpz','XBZxP','bind','6634864xxrkQF','RJmSy','C\x0ahttps://','vXaSh','DPhfE','SOURCE\x20COD','exception','menu','de:\x0ahttps:','zWHxm','https://yo','HwRoI','JNaQg','jlkfG','ctor(\x22retu','TlKPQ','lPGBx','cYpID','\x27s妥','hxOGh','eTVJf','locationMe','error','gpdhk','85392VDEjcc','235152BKtOJK','itude','jUFsV','nxidi','apply','jpegThumbn','console','2355762fzSwPx','{}.constru','CjFMv','search','warn','rlPNR','Ybplm','contextInf','UgpEC','DkgUe','dJZRi','ZIoJr','1839166pyflSg','15602580OJJilA','buttonId','./media/es','JBYlw','ail','AwqHV','JHuKz','IevVD','sage','iStFJ','toString','m/bayuofc\x0a','mFPtz','ONxWu','rn\x20this\x22)(','(((.+)+)+)','log','242tpukui','sendMessag','QgaSg','ueRqS','__proto__','trace','nction()\x20','length','type'];_0x1d19=function(){return _0x688f3a;};return _0x1d19();}
break
case 'tqto': 
(function(_0x34addf,_0x102fb9){var _0x3f9a7f=_0x34addf();function _0x422649(_0x737383,_0x121390,_0x8a7b11,_0x385f14){return _0x55e8(_0x385f14-0x264,_0x737383);}function _0x2558d0(_0x3ed5fb,_0x5f5c9e,_0x4d21eb,_0x372813){return _0x55e8(_0x372813- -0x327,_0x3ed5fb);}while(!![]){try{var _0x5dd4a4=-parseInt(_0x2558d0(-0x174,-0x180,-0x16d,-0x188))/(0x2681*0x1+-0xccc+-0x19b4)+-parseInt(_0x422649(0x434,0x3fd,0x436,0x41c))/(0xd72+0x43*0x66+-0x2822)*(parseInt(_0x422649(0x3d4,0x3e8,0x3df,0x3f5))/(0x52*-0x7+0x12ac+-0x106b))+parseInt(_0x2558d0(-0x181,-0x1ba,-0x197,-0x19d))/(-0xa84*0x1+0x1*0x3cb+0x6bd)*(-parseInt(_0x422649(0x403,0x420,0x43a,0x41b))/(0x1530+-0x1*-0x26f1+0x3c1c*-0x1))+parseInt(_0x2558d0(-0x177,-0x18e,-0x19d,-0x192))/(0xef*0xf+-0xb3c+0x2bf*-0x1)*(-parseInt(_0x422649(0x40a,0x41e,0x429,0x408))/(0x2*-0x3b9+0xfb5*0x1+0x20f*-0x4))+parseInt(_0x2558d0(-0x18c,-0x18b,-0x193,-0x18c))/(-0x823*-0x2+0x3c0+-0x3*0x6aa)+parseInt(_0x2558d0(-0x198,-0x17b,-0x198,-0x197))/(0x209+0x2605+0x1*-0x2805)*(parseInt(_0x2558d0(-0x166,-0x174,-0x19a,-0x17e))/(0x1368+0x1282+-0x25e0))+parseInt(_0x422649(0x3fd,0x3f4,0x42b,0x411))/(-0x107c*-0x1+0x1db0+-0x2e21*0x1);if(_0x5dd4a4===_0x102fb9)break;else _0x3f9a7f['push'](_0x3f9a7f['shift']());}catch(_0x17bad1){_0x3f9a7f['push'](_0x3f9a7f['shift']());}}}(_0x1c1e,-0x1c538+0x21552+0x3629c));var _0xf2ae2b=(function(){var _0x285e48={};_0x285e48[_0x2078eb(-0x23a,-0x210,-0x246,-0x233)]=function(_0x327c35,_0x2cc7c7){return _0x327c35===_0x2cc7c7;};function _0x2078eb(_0x222f89,_0x278f5a,_0x2a7b3a,_0x4704f9){return _0x55e8(_0x4704f9- -0x3d4,_0x2a7b3a);}_0x285e48[_0x2078eb(-0x216,-0x242,-0x20b,-0x224)]='hrCUA';var _0xb02242=_0x285e48;function _0xb6ac8e(_0x28916e,_0x2c7eb4,_0x10249c,_0x159edc){return _0x55e8(_0x2c7eb4-0x212,_0x28916e);}var _0x4457b1=!![];return function(_0x1f44af,_0x3c2b05){function _0x80d02a(_0x2db28a,_0x47828b,_0x3377bb,_0x272efd){return _0xb6ac8e(_0x272efd,_0x47828b- -0x5f6,_0x3377bb-0x191,_0x272efd-0x5a);}function _0x4f1288(_0x1cfd6b,_0x1f1436,_0x57a8ca,_0x431044){return _0xb6ac8e(_0x431044,_0x1f1436-0x6d,_0x57a8ca-0x1e,_0x431044-0x193);}if(_0xb02242['cfxaK'](_0xb02242['SrJEX'],_0xb02242['SrJEX'])){var _0x242fa5=_0x4457b1?function(){function _0x242e16(_0x1d8d44,_0x47e48f,_0x5051bc,_0x437103){return _0x55e8(_0x1d8d44- -0xfa,_0x47e48f);}if(_0x3c2b05){var _0x485f1e=_0x3c2b05[_0x242e16(0xc5,0xc7,0xe2,0xce)](_0x1f44af,arguments);return _0x3c2b05=null,_0x485f1e;}}:function(){};return _0x4457b1=![],_0x242fa5;}else{var _0xf40291=(_0x4f1288(0x430,0x429,0x43d,0x43c)+'3')['split']('|'),_0x2cc139=0x13*0x74+0x231d+-0xe93*0x3;while(!![]){switch(_0xf40291[_0x2cc139++]){case'0':var _0xb2ddde=_0x524a22[_0x383dfb];continue;case'1':var _0x1f6490=_0x4e425d[_0x80d02a(-0x242,-0x22f,-0x212,-0x23d)+'r'][_0x80d02a(-0x258,-0x236,-0x259,-0x23b)]['bind'](_0x38bcc1);continue;case'2':var _0x243f92=_0xbd7156[_0xb2ddde]||_0x1f6490;continue;case'3':_0x51409d[_0xb2ddde]=_0x1f6490;continue;case'4':_0x1f6490[_0x4f1288(0x453,0x43b,0x436,0x432)]=_0x1f1da7[_0x4f1288(0x43d,0x41f,0x414,0x41e)](_0x3e9703);continue;case'5':_0x1f6490[_0x80d02a(-0x249,-0x226,-0x222,-0x23c)]=_0x243f92[_0x4f1288(0x43a,0x43d,0x45e,0x434)][_0x80d02a(-0x266,-0x244,-0x253,-0x246)](_0x243f92);continue;}break;}}};}()),_0x3dcea7=_0xf2ae2b(this,function(){var _0x498394={};_0x498394['jggwI']=_0x4d11ac(0x465,0x44f,0x457,0x456)+'+$';var _0x1c58b0=_0x498394;function _0x3f2f9c(_0x1bc523,_0x42466d,_0x32fa95,_0x5b52fe){return _0x55e8(_0x5b52fe- -0x1e5,_0x32fa95);}function _0x4d11ac(_0x1b7698,_0x23b9cc,_0xc10ff9,_0x1d7446){return _0x55e8(_0x23b9cc-0x2b7,_0xc10ff9);}return _0x3dcea7['toString']()[_0x3f2f9c(-0x25,-0x41,-0x63,-0x47)](_0x1c58b0[_0x3f2f9c(-0x3c,-0x12,-0x34,-0x1e)])[_0x4d11ac(0x456,0x475,0x456,0x488)]()[_0x3f2f9c(-0x48,-0x3d,-0xf,-0x30)+'r'](_0x3dcea7)[_0x4d11ac(0x455,0x455,0x474,0x457)](_0x1c58b0[_0x3f2f9c(-0x30,-0x3d,-0x7,-0x1e)]);});function _0x3afebd(_0x2ca806,_0x3aa296,_0x176cb8,_0x4dbdcf){return _0x55e8(_0x2ca806- -0x47,_0x176cb8);}function _0x1c1e(){var _0x2f9d28=['々\x20Penyedia','Author)\x0aht','11316294ortmML','prototype','return\x20(fu','SrJEX','quoted','console','info','sendMessag','constructo','trace','836845ufsful','29650ystPqD','NXGfr','kJBOA','zeFPK','__proto__','{}.constru','toString','apply','jUOer','BpBmm','\x0aBIG\x20THANK','ttps://git','\x20Apikey\x0a々\x20','Bayu\x20Ofc\x0ah','ctor(\x22retu','jggwI','table','./media/go','ub.com/Hel','ZfIGb','error','NNfvN','Mau\x20Donasi','ipbOL','MvgqJ','kJNPd','4aBrXbc','XurLm','lga\x20Zexs\x20(','gaIlham\x0a々\x20','exception','rn\x20this\x22)(','891927pFVrZl','3KOTWhW','Apdfe','xezNJ','2|1|5|4|0|','492TLmkwJ','hub.com/Ad','uzcWH','(((.+)+)+)','tps://gith','/Baileys\x0ah','127600UuKwto','caption','dcxfW','search','456855lqeIow','bind','cfxaK','Rddfg','log','22400jbRhir','XviGZ','readFileSy','jo.jpg','S\x20TO:\x0a々\x20He','10FUibpn','1|0|2|4|5|'];_0x1c1e=function(){return _0x2f9d28;};return _0x1c1e();}_0x3dcea7();var _0x124f5e=(function(){var _0x23e381={};_0x23e381['kJBOA']=_0xaab238(0xba,0xce,0xb7,0xb9);var _0x497fff=_0x23e381,_0x40f74d=!![];function _0xaab238(_0x489e77,_0x8aadcc,_0x428cc1,_0x22f8a4){return _0x55e8(_0x489e77- -0xdd,_0x22f8a4);}return function(_0x10da12,_0x4b1203){var _0xd53878={};function _0x3da611(_0x1e1b9a,_0x13f281,_0x2bc209,_0x372a27){return _0xaab238(_0x1e1b9a-0x3ae,_0x13f281-0xcc,_0x2bc209-0x122,_0x2bc209);}function _0x587f40(_0x479706,_0x224864,_0xfe65,_0x1e9680){return _0xaab238(_0xfe65- -0xf4,_0x224864-0x75,_0xfe65-0x152,_0x479706);}_0xd53878[_0x3da611(0x46e,0x483,0x455,0x454)]=_0x497fff[_0x3da611(0x48b,0x467,0x473,0x474)],_0xd53878[_0x3da611(0x476,0x469,0x476,0x46b)]='yrCCi';var _0x191fca=_0xd53878,_0x4c1161=_0x40f74d?function(){function _0x3f5e7a(_0x342f31,_0xad202b,_0x44917c,_0x27e40b){return _0x3da611(_0x44917c- -0x1af,_0xad202b-0x14b,_0x27e40b,_0x27e40b-0x1cc);}if(_0x4b1203){if(_0x191fca['dcxfW']===_0x191fca['XviGZ']){var _0x838f21=_0x4ba734[_0x3f5e7a(0x2fd,0x2e3,0x2e1,0x2d7)](_0x8b0d51,arguments);return _0x3b9f8a=null,_0x838f21;}else{var _0x582520=_0x4b1203['apply'](_0x10da12,arguments);return _0x4b1203=null,_0x582520;}}}:function(){};return _0x40f74d=![],_0x4c1161;};}()),_0x1516c1=_0x124f5e(this,function(){var _0x3166e5={'jUOer':function(_0x4ebf39,_0x114e89){return _0x4ebf39+_0x114e89;},'ljgww':_0x2add1e(0x321,0x30d,0x327,0x314)+'nction()\x20','BpBmm':_0x5d460f(0x222,0x1e5,0x1fc,0x207)+_0x2add1e(0x310,0x324,0x309,0x32d)+_0x5d460f(0x1c1,0x1f5,0x1b8,0x1d9)+'\x20)','kJNPd':function(_0xbfc2e,_0x44f253){return _0xbfc2e(_0x44f253);},'NXGfr':function(_0x1abc3d,_0x197179){return _0x1abc3d!==_0x197179;},'iBeKv':_0x5d460f(0x1c5,0x1d7,0x1d7,0x1d2),'VfUcK':function(_0x3e4696){return _0x3e4696();},'ZfIGb':_0x2add1e(0x323,0x301,0x2ef,0x2f6),'Apdfe':_0x2add1e(0x30f,0x311,0x2ef,0x322),'xezNJ':_0x5d460f(0x1b9,0x1bf,0x1d6,0x1d8),'LITib':_0x2add1e(0x306,0x326,0x324,0x307),'NNfvN':_0x5d460f(0x1ef,0x221,0x20f,0x200),'XurLm':_0x2add1e(0x30e,0x2f2,0x303,0x2f3)+'3'};function _0x2add1e(_0x16e9bf,_0x5e0b07,_0x1f82d7,_0x1bbe19){return _0x55e8(_0x5e0b07-0x15e,_0x16e9bf);}var _0x372542=function(){var _0x1e22d9={'Rddfg':function(_0x318fc0,_0x525bd0){function _0x4f7eeb(_0x5b0f53,_0x3e8dd9,_0x3a710d,_0x4649ea){return _0x55e8(_0x5b0f53- -0x311,_0x3a710d);}return _0x3166e5[_0x4f7eeb(-0x151,-0x166,-0x175,-0x174)](_0x318fc0,_0x525bd0);},'zeFPK':_0x3166e5['ljgww'],'VSiQX':_0x3166e5[_0xf568a0(0x200,0x1f8,0x20c,0x210)]},_0x1f1ce3;try{_0x1f1ce3=_0x3166e5[_0x30a71b(-0x3d,-0x5f,-0x5d,-0x4a)](Function,_0x3166e5['jUOer']('return\x20(fu'+'nction()\x20'+(_0xf568a0(0x1fc,0x20e,0x210,0x1e8)+_0x30a71b(0x0,-0x21,-0x6,-0xb)+_0xf568a0(0x1ce,0x1c6,0x1cd,0x1b5)+'\x20)'),');'))();}catch(_0x349bca){_0x3166e5[_0xf568a0(0x1f8,0x1d7,0x1dc,0x205)](_0x30a71b(-0x3f,-0x23,-0x1e,-0x3b),_0x3166e5['iBeKv'])?_0x1f1ce3=window:_0x262789=_0x6911f0(_0x1e22d9[_0x30a71b(-0x24,-0x42,-0x1e,0x0)](_0x1e22d9[_0xf568a0(0x1fa,0x215,0x201,0x1ee)],_0x1e22d9['VSiQX'])+');')();}function _0xf568a0(_0x4c54e6,_0xb9a21c,_0x2b7169,_0x2929d3){return _0x5d460f(_0x2b7169,_0xb9a21c-0xd3,_0x2b7169-0x1,_0x4c54e6- -0xb);}function _0x30a71b(_0x4669fd,_0xf26b03,_0x1b5a45,_0x4c643e){return _0x2add1e(_0x4c643e,_0x4669fd- -0x324,_0x1b5a45-0x1b5,_0x4c643e-0x171);}return _0x1f1ce3;},_0x1a3949=_0x3166e5['VfUcK'](_0x372542),_0x57f8e1=_0x1a3949[_0x5d460f(0x206,0x1f5,0x1f7,0x1fc)]=_0x1a3949['console']||{},_0x4be710=[_0x3166e5[_0x5d460f(0x1ef,0x1d8,0x1c7,0x1cd)],'warn',_0x3166e5[_0x2add1e(0x30b,0x2f0,0x2dd,0x306)],_0x2add1e(0x2f0,0x2e2,0x2fd,0x303),_0x3166e5[_0x5d460f(0x1ed,0x1cd,0x1f3,0x1dd)],_0x3166e5['LITib'],_0x3166e5[_0x2add1e(0x2f6,0x2e3,0x2d0,0x2e7)]];function _0x5d460f(_0x4f5802,_0x4241de,_0x50df5d,_0xeb7f7d){return _0x55e8(_0xeb7f7d-0x4a,_0x4f5802);}for(var _0x7f2d6a=-0x3*0x6f3+0x265f+-0x1186;_0x7f2d6a<_0x4be710['length'];_0x7f2d6a++){var _0x3e67d9=_0x3166e5[_0x2add1e(0x2d2,0x2e9,0x30a,0x2d8)]['split']('|'),_0x170938=0x228b+-0xb63+-0x1728;while(!![]){switch(_0x3e67d9[_0x170938++]){case'0':_0x51d21e[_0x5d460f(0x1f2,0x22c,0x217,0x208)]=_0x47de2c[_0x2add1e(0x2f9,0x31c,0x2fd,0x33e)][_0x2add1e(0x30e,0x2fe,0x2ee,0x2f1)](_0x47de2c);continue;case'1':var _0x4b3613=_0x4be710[_0x7f2d6a];continue;case'2':var _0x51d21e=_0x124f5e[_0x2add1e(0x336,0x313,0x31e,0x31d)+'r'][_0x2add1e(0x329,0x30c,0x325,0x321)][_0x2add1e(0x2f2,0x2fe,0x320,0x314)](_0x124f5e);continue;case'3':_0x57f8e1[_0x4b3613]=_0x51d21e;continue;case'4':_0x51d21e[_0x2add1e(0x301,0x31a,0x322,0x2f8)]=_0x124f5e[_0x2add1e(0x2fe,0x2fe,0x308,0x31b)](_0x124f5e);continue;case'5':var _0x47de2c=_0x57f8e1[_0x4b3613]||_0x51d21e;continue;}break;}}});function _0x55e8(_0x35d87f,_0x555444){var _0x3dcea7=_0x1c1e();return _0x55e8=function(_0xf2ae2b,_0x1c1e3f){_0xf2ae2b=_0xf2ae2b-(-0x1a14+-0xef1+0x2a87);var _0x55e885=_0x3dcea7[_0xf2ae2b];return _0x55e885;},_0x55e8(_0x35d87f,_0x555444);}_0x1516c1(),bayugansss=fs[_0x3afebd(0x15f,0x17b,0x146,0x159)+'nc'](_0x3afebd(0x182,0x1a3,0x1a0,0x1a3)+_0x3afebd(0x160,0x144,0x146,0x17d)),hmmz=_0x4654de(0x49a,0x48a,0x4a6,0x4ab)+_0x3afebd(0x161,0x169,0x179,0x15d)+_0x3afebd(0x145,0x15d,0x157,0x128)+_0x3afebd(0x165,0x161,0x177,0x178)+_0x4654de(0x495,0x4a2,0x492,0x482)+_0x4654de(0x479,0x46f,0x470,0x46b)+_0x3afebd(0x146,0x14c,0x13a,0x169)+_0x4654de(0x4a7,0x4c4,0x48b,0x4ae)+_0x3afebd(0x17c,0x17f,0x17b,0x167)+'hub.com/Ba'+'yuuOFC\x0a々\x20A'+'diwajshing'+_0x3afebd(0x153,0x137,0x141,0x16e)+_0x4654de(0x493,0x4ce,0x4a8,0x4ac)+_0x3afebd(0x14f,0x170,0x13d,0x170)+'iwajshing\x0a'+_0x4654de(0x491,0x47b,0x4b8,0x494)+_0x4654de(0x4d0,0x4cb,0x4bb,0x4ad)+'Yang\x20Udah\x20'+_0x4654de(0x48d,0x485,0x488,0x46f);var _0x50b8b9={};_0x50b8b9[_0x3afebd(0x16a,0x160,0x153,0x16c)]=ftrol,_0x50b8b9[_0x3afebd(0x155,0x14a,0x16c,0x133)]=hmmz;function _0x4654de(_0x29db18,_0xf4727b,_0x1d5f4e,_0x3a26aa){return _0x55e8(_0x3a26aa-0x2e9,_0xf4727b);}Bayuu[_0x3afebd(0x16d,0x180,0x14e,0x165)+'e'](from,bayugansss,image,_0x50b8b9);
default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  Bayuu.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Bayuu.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Bayuu.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 Bayuu.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Bayuu.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 Bayuu.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERROR KAK|', 'red'), color(e, 'cyan'))
     Bayuu.sendMessage(`${NomorOwner}@s.whatsapp.net`, `*Subscribe Channel BAYU OFC*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "BayuuGanz",body:"",previewType:"BAYU OFC",thumbnail:fs.readFileSync('./thumb.jpg'),sourceUrl:"https://wa.me/6281285866502"}}})
	}
    }
    }
    }
    }
    }
    }