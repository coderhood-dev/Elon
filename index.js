import Discord from "discord.js";
import dotenv from "dotenv";

// Importing this allows you to access the environment variables of the running node process
dotenv.config();

const client = new Discord.Client();

client.on("message", function (message) {
  if (message.author.bot) return;

  if (message.content.startsWith("/elon server")) {
    message.reply(`we are ${message.guild.memberCount} devs!`);
  }
});

client.login();
