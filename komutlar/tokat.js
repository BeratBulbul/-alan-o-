const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();


  
    if (message.mentions.users.size < 1) return message.reply('**https://media.giphy.com/media/J07H1nnjD6I6i18ouB/giphy.gif**').catch(console.error);

    const CodeAmey =new Discord.RichEmbed()
        .setTimestamp()
    .setDescription( message.author.username + ` ${user}` + '**https://media.giphy.com/media/J07H1nnjD6I6i18ouB/giphy.gif**')
    .setImage('https://media.giphy.com/media/J07H1nnjD6I6i18ouB/giphy.gif')
    .setFooter("Amey")
    .setTimestamp()
    return message.channel.send();

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tokat-at','tokatat'],
  permLevel: 0
};

exports.help = {
  name: "tokat",
  description: "Tokat",
  usage: "tokat"
};