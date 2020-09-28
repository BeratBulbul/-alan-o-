const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("EvoBot v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:AFK:744595926412165140> EvoBot Logo Komutları <a:AFK:744595926412165140>")
 .setTimestamp()
.setDescription("<a:AFK:744595926412165140>**-dinamik** = Dinamik logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-altın** = Altın logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-banner** = Banner logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-basit** = Basit logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-elmas** = Elmas logo oluşturur <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-sarı** = Sarı logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-neonmavi** = Neon mavi logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-kalın** = Kalın logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-anime** = Anime yazı tipinde logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-habbo** = Habbo yazı tipinde logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-arrow** = Ok işaretli logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-green** = Yeşil logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-alev** = Alevli logo oluşturur. <a:AFK:744595926412165140> \n <a:AFK:744595926412165140> **-red** = Kırmızı logo oluşturur. <a:AFK:744595926412165140>")
.setImage("https://i.hizliresim.com/9IN8vl.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}