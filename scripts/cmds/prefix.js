module.exports = {
	config: {
		name: "prefix",
		version: "1.0.1",
		author: "Kaizenji",//prefix with random gif, mp4 or png
		countDown: 3,
		role: 0,
		shortDescription: "prefix with random gif",
		longDescription: "view chatbot prefix",
		category: "system",
		guide: "{p}prefix",
	},

	onStart: async function ({ message, prefix }) {

	 var link = [ 
     
'https://i.imgur.com/Gg9KhpU.gif',
     'https://i.imgur.com/Gg9KhpU.gif',
     
	];
let img = link[Math.floor(Math.random()*link.length)];
message.send({

	body: `👾 𝖲𝗒𝗌𝗍𝖾𝗆 𝗉𝗋𝖾𝖿𝗂𝗑: [ / ]
🤖 𝖸𝗈𝗎𝗋 𝖻𝗈𝗑 𝖼𝗁𝖺𝗍 𝗉𝗋𝖾𝖿𝗂𝗑: [ ${global.GoatBot.config.prefix} ]

𝖳𝗒𝗉𝖾 ${global.GoatBot.config.prefix}𝗁𝖾𝗅𝗉 𝗍𝗈 𝗌𝖾𝖾 𝖺𝗅𝗅 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌.
𝖳𝗒𝗉𝖾 ${global.GoatBot.config.prefix}𝗁𝖾𝗅𝗉 [𝖼𝗆𝖽 𝗇𝖺𝗆𝖾] 𝗍𝗈 𝗏𝗂𝖾𝗐 𝖽𝖾𝗍𝖺𝗂𝗅𝗌 𝗈𝖿 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.

𝖤𝗇𝗃𝗈𝗒 𝗎𝗌𝗂𝗇𝗀, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖽𝗈𝗇'𝗍 𝗌𝗉𝖺𝗆(⁠っ⁠.⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠)⁠っ`,

attachment: await global.utils.getStreamFromURL(img)
})
},
onChat: async function ({ event, message, getLang, prefix }) {
    if (event.body && event.body.toLowerCase() === 'prefix') {
      this.onStart({ message, prefix });
    }
  }
};