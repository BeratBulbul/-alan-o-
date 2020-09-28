const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription("Bir şehir yaz!")
            .setColor("RANDOM")
        message.channel.send({embed})
        return
    }

    const konum = args.join(" ")
    message.channel.send("", {
        files: [
            `https://www.accuweather.com/tr/tr/{konum}/316938/daily-weather-forecast/316938`
        ]
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hava', 'hava-durumu', 'havabilgisi', 'hava-bilgisi', 'weather', 'weatherforecast'],
    permLevel: 0
}

exports.help = {
    name: 'havadurumu',
    description: 'Yazılan konumun hava durumu bilgisini gösterir.',
    usage: 'havadurumu <konum>'
}