module.exports = {
config: {
  name: "goiadmin",
  author: "kasta",// ninakaw ni gabyu
   role: 0,
  shortDescription: "hatodgan",
  longDescription: "Gwapo",
  category: "iyot",
  guide: "{pn}"
},
  onChat: async function ({ api, event }) {
  if (event.senderID !== "100079114908948") {
    var aid = ["100079114908948"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Don't tag admin, nag bebe time Yun!", "Admin is currently busy 😌", "Sorry, my handsome admin is busy","ano kailangan mo sa pogi kong admin? 😤","What do you want to my admin⁉️"];
      api.setMessageReaction("❔", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
   }
		}}
},

onStart: async function({ api, event, args }) {
  api.sendMessage("Goiadmin command with sarscam reasons.", event.threadID, event.messageID);
}
};