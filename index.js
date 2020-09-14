const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on("message", function (message) {
  if (message.author.bot) return;

  // console.log(message.content);
  if (message.content.startsWith("/elon workforce")) {
    message.reply(
      `there are ${message.guild.memberCount} potential workers here`
    );
  }
});

client.login(config.BOT_TOKEN);
