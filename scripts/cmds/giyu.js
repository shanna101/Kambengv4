const axios = require('axios');
const { GoatWrapper } = require('fca-liane-utils');


module.exports = {
  config: {
    name: "giyu",
    aliases: ["tomioka"],
    author: "AkhiroDEV",
    shortDescription: "Interact with the Giyu Tomioka, an water hashira from the anime Demon Slayer.",
    category: "AkhiroAIs",
  },
  async onStart({ message, args }) {
    const query = args.join(" ");
    if (!query) {
      return message.reply("Please provide a query.");
    }
    try {
      const AkhiroAIs = await axios.get(`https://akhiroai.onrender.com/api?model=giyu&q=${encodeURIComponent(query)}`);
      const response = AkhiroAIs.data.message;
      message.reply(response);
    } catch (error) {
      console.log(error);
      await message.reply(`ERROR: ${error.message}`);
    }
  }
}

const wrapper = new GoatWrapper(module.exports);

wrapper.applyNoPrefix({ allowPrefix: true });
