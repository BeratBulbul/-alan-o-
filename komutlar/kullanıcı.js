const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("EvoBot v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:miku_suprised:744636797086203939> Kullanıcı Komutları <a:miku_suprised:744636797086203939>")
 .setTimestamp()
.setDescription("<a:miku_suprised:744636797086203939> **-avatar** = Avatarınıza bakarsınız. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-yetkilerim** = Yetkilerini görürsün. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-profil** = Profilini görürsün. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-sunucuresmi** = Sunucu resmini gösterir. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-ping** = Botun Pingine Bakarsın. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-id** = Birisinin id'sine Bakarsın. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-davet** = Beni Sunucuna Ekle. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-botbilgi** = Bot istatistiklerini görürsünüz. <a:miku_suprised:744636797086203939> \n <a:miku_suprised:744636797086203939> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:miku_suprised:744636797086203939>")
.setImage("https://i.hizliresim.com/9IN8vl.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}