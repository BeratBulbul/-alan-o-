const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("EvoBot v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:hg:744636410874691696> Eğlence Komutları <a:hg:744636410874691696>")
 .setTimestamp()
.setDescription("<a:emoji_59:744636648716763136> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:emoji_59:744636648716763136> \n <a:emoji_59:744636648716763136> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:emoji_59:744636648716763136> \n <a:emoji_59:744636648716763136> **-fbi** = Bot FBi Gif Atar. <a:emoji_59:744636648716763136> \n <a:emoji_59:744636648716763136> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:emoji_59:744636648716763136> \n <a:emoji_59:744636648716763136> **-düello** = Düello Atarsın. <a:emoji_59:744636648716763136> \n <a:emoji_59:744636648716763136> **-wasted** = Polis tarafından yakalanırsın. <a:emoji_59:744636648716763136> \n <a:emoji_59:744636648716763136> **-atatürk** = Dene ve gör... (1881-1938) <a:emoji_59:744636648716763136>")
.setImage("https://i.hizliresim.com/roU9Qn.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}