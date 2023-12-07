const Discord = require('discord.js');
const fs = require('fs');
const ImEmbed = require('./image_embed.js');
module.exports = class Logger 
{
    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static GetPic(msg, bot)
    {
        let ping = msg.content.slice(6, -1)
        ping = ping.replace('!', '')
        var regex = /[0-9]{18}/
        if (!regex.test(ping)) {
            msg.channel.send("Veuillez Mentionner quelqu'un.")
        }
        else {
            let userr = bot.users.cache.find(user => user.id === ping)
            try {
                msg.channel.send(ImEmbed.EmbedGeneric(userr.username, userr.displayAvatarURL({ dynamic: true, size: 512 }), "#00008b"))
            }
            catch
            {
                console.log("Erreur")
                msg.channel.send("Cet ID n'est pas associé à un utilisateur.")
            }
        }
    }
}