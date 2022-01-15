const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');


module.exports = {
  info: {
    name: "afk",
    description: "24/7",
    usage: "[afk]",
    aliases: ["24/7","awayfromkeyboard"],
  },

  run: async function (client, message, args) {
    let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
       if (!afk[message.guild.id]) afk[message.guild.id] = {
        afk: false,
    };
    var serverQueue = afk[message.guild.id]
       if (serverQueue) {
            serverQueue.afk = !serverQueue.afk;
             message.channel.send({
                embed: {
                    color: "#FED318",
                    description: `💤  **|**  AFK is **\`${serverQueue.afk === true ? "enabled" : "disabled"}\`**`,
                    footer: "https://imgur.com/a/X1Rm7I0.png"
                }
            });
            return  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
        if (err) console.error(err);
    });
        };
    return sendError("no music is playing on this server!", message.channel);
  },
};
