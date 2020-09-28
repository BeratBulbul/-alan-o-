const Discord = require('discord.js');
const db = require("quick.db")
exports.run = (client, message, params) => {
 let dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == "en"){
   //ingilizce
   const EFHMedia = new Discord.RichEmbed()
  .setTitle("EHMedia en")
  .setDescription('EFHMedia '+ client.ping)
    message.channel.send(EFHMedia);
 }
   if(dil == "tr" || dil == null){
     //türkçe
   const EFHMedia = new Discord.RichEmbed()
  .setTitle("EHMedia tr")
  .setDescription('EFHMedia '+ client.ping)
    message.channel.send(EFHMedia);
 }
   
 };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping'],
  permLevel: 0
};
exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping'
};
 