const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:ayar:756419060824145976> yardım menüsüne hoşgeldin! <a:ayar:756419060824145976>")
 .setTimestamp()
.setDescription("<a:ayar:756419060824145976> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:ayar:756419060824145976> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:ayar:756419060824145976> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:ayar:756419060824145976> **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://i.hizliresim.com/9IN8vl.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}