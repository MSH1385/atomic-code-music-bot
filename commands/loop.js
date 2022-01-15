const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "loop",
    description: "Toggle music loop",
    usage: "loop",
    aliases: ["l","repeat"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "#FED318",
                    description: `🔁  **|**  Loop is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`,
                    footer: "https://imgur.com/a/X1Rm7I0.png"
                }
            });
        };
    return sendError("There is nothing playing in this server.", message.channel);
  },
};
