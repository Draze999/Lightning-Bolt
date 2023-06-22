const Discord = require('discord.js');
const fs = require('fs');
const Error = require("./error.js")
const Logger = require('./logger.js');
//bf8dff Couleur de dingue
module.exports = class Pantheon 
{
    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static LGL(msg, bot)
    {
        const NBEmbed = new Discord.MessageEmbed()
            .setColor('#17ff00')
            .setAuthor('𝑳𝒊𝒎𝒆 𝑮𝒓𝒆𝒆𝒏', bot.user.displayAvatarURL())
            .setThumbnail("https://i.postimg.cc/bJFr2dTd/vertgif.gif")
            .setDescription('᲼*Elo Scrim : 3800*')
            .addFields(
                { name: "᲼᲼᲼__Manager᲼:__", value: "> <@535553983675105280>" },
                { name: "\u200B\n᲼᲼᲼__Co-Manager᲼:__\n", value: "> <@471316708527964160>" },
                { name: "\u200B\n᲼᲼᲼__Coach᲼:__\n", value: "> ..." },
                { name: "\u200B\n:shield:᲼__Main Tank᲼:__\n", value: "> <@535553983675105280>᲼:crown:" },
                { name: "\u200B\n:shield:᲼__Off Tank᲼:__\n", value: "> <@377139260979019786>" },
                { name: "\u200B\n:crossed_swords:᲼__Hitscan DPS 1᲼:__\n", value: "> <@985203536977625118>" },
                { name: "\u200B\n:crossed_swords:᲼__Hitscan DPS 2᲼:__\n", value: "> <@446302417634721812>" },
                { name: "\u200B\n:crossed_swords:᲼__Flex DPS᲼:__\n", value: "> <@472133287649869834>" },
                { name: "\u200B\n:crossed_swords:᲼__Proj DPS᲼:__\n", value: "> <@366308649389522944>" },
                { name: "\u200B\n:syringe:᲼__Main Support᲼:__\n", value: "> <@302878080245170187>" },
                { name: "\u200B\n:syringe:᲼__Flex Support᲼:__\n", value: "> <@388380557089832968>" },
            )
        msg.channel.send(NBEmbed)
    }

    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static NBL(msg, bot)
    {
        const NBEmbed = new Discord.MessageEmbed()
            .setColor('#000080')
            .setAuthor('𝑵𝒂𝒗𝒚 𝑩𝒍𝒖𝒆', bot.user.displayAvatarURL())
            .setThumbnail("https://i.postimg.cc/rmpzm55v/bleugif.gif")
            .setDescription('᲼*Elo Scrim : 4400*')
            .addFields(
                { name: "᲼᲼᲼__Manager᲼:__", value: "> <@471316708527964160>" },
                { name: "\u200B\n᲼᲼᲼__Assistant Manager᲼:__\n", value: "> <@373374216088715265>" },
                { name: "\u200B\n᲼᲼᲼__Coach᲼:__\n", value: "> ..." },
                { name: "\u200B\n:shield:᲼__Tank᲼:__\n", value: "> <@477457697734918154>" },
                { name: "\u200B\n:crossed_swords:᲼__Flex DPS 1᲼:__\n", value: "> <@331138687976865792>᲼:crown:" },
                { name: "\u200B\n:crossed_swords:᲼__Flex DPS 2᲼:__\n", value: "> <@925735436058505246>" },
                { name: "\u200B\n:syringe:᲼__Main Support᲼:__\n", value: "> <@413410367398477824>" },
                { name: "\u200B\n:syringe:᲼__Flex Support᲼:__\n", value: "> <@363409061519294464>" },
            )
        msg.channel.send(NBEmbed)
    }

    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static SRL(msg, bot)
    {
        const NBEmbed = new Discord.MessageEmbed()
            .setColor('#ed0000')
            .setAuthor('𝑺𝒄𝒂𝒓𝒍𝒆𝒕 𝑹𝒆𝒅', bot.user.displayAvatarURL())
            .setThumbnail("https://i.postimg.cc/PJpxbh3y/rougegif.gif")
            .setDescription('᲼*Elo Scrim : 2600*')
            .addFields(
                { name: "᲼᲼᲼__Manager᲼:__", value: "> <@471316708527964160>" },
                { name: "\u200B\n᲼᲼᲼__Assistant Manager᲼:__\n", value: "> <@373374216088715265>" },
                { name: "\u200B\n᲼᲼᲼__Coach᲼:__\n", value: "> <@377139260979019786>" },
                { name: "\u200B\n᲼᲼᲼__Assistant Coach᲼:__\n", value: "> <@302878080245170187>" },
                { name: "\u200B\n:shield:᲼__Tank᲼:__\n", value: "> <@364074058343776256>᲼:crown:" },
                { name: "\u200B\n:crossed_swords:᲼__Hitscan DPS᲼:__\n", value: "> <@321164350377164802>" },
                { name: "\u200B\n:crossed_swords:᲼__Flex DPS᲼:__\n", value: "> <@221330215714947072>" },
                { name: "\u200B\n:syringe:᲼__Main Support᲼:__\n", value: "> <@349854256301604866>" },
                { name: "\u200B\n:syringe:᲼__Flex Support᲼:__\n", value: "> <@204245524394672128>" },
            )
        msg.channel.send(NBEmbed)
    }

    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static Staffy(msg, bot)
    {
        const StaffyEmbed = new Discord.MessageEmbed()
            .setColor('#bf8dff')
            .setAuthor('𝑺𝒕𝒂𝒇𝒇 𝑳𝒊𝒈𝒉𝒕𝒏𝒊𝒏𝒈', bot.user.displayAvatarURL())
            .setThumbnail("https://i.postimg.cc/QNwV89Cy/violetgif.gif")
            .setDescription("᲼*Membres composant l'équipe de direction*")
            .addFields(
                { name: "᲼᲼᲼__Directeur᲼:__", value: "> <@471316708527964160>" },
                { name: "\u200B\n᲼᲼᲼__Co-Directeur᲼:__\n", value: "> <@535553983675105280>" },
                { name: "\u200B\n᲼᲼᲼__Trésorier᲼:__\n", value: "> <@302878080245170187>" },
                { name: "\u200B\n᲼᲼᲼__Co-Trésorier᲼:__\n", value: "> <@471316708527964160>" },
                { name: "\u200B\n᲼᲼᲼__Secrétaire᲼:__\n", value: "> <@373374216088715265>" },
                { name: "\u200B\n᲼᲼᲼__Responsable Communication᲼:__\n", value: "> <@331138687976865792>" },
                { name: "\u200B\n᲼᲼᲼__Responsable Réseaux - Instagram᲼:__\n", value: "> <@331138687976865792>" },
                { name: "\u200B\n᲼᲼᲼__Responsable Réseaux - Twitter᲼:__\n", value: "> <@678908958878072832>" },
            )
        msg.channel.send(StaffyEmbed)
    }

    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static Reseaux(msg, bot)
    {
        const ResEmbed = new Discord.MessageEmbed()
            .setColor('#26b0ff')
            .addFields(
                { name: "𝑹𝒆𝒔𝒆𝒂𝒖𝒙", value: "\u200B\n> :bird:᲼|᲼[**\[Twitter\]**](https://twitter.com/LightningPrjct)\n> \u200B\n> :hibiscus:᲼|᲼[**\[Instagram\]**](https://www.instagram.com/lightning.prjct/)" },
            )
        msg.channel.send(ResEmbed)
    }

    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static CreateSuccess(msg, bot)
    {
        var color = '#ed0000'
        var th = "https://i.postimg.cc/PJpxbh3y/rougegif.gif"
        if (msg.channel.id == "1100947999577886810") {
            color = '#000080'
            th = "https://i.postimg.cc/rmpzm55v/bleugif.gif"
        }
        if (msg.channel.id == "1100947952836558848") {
            color = '#17ff00'
            th = "https://i.postimg.cc/bJFr2dTd/vertgif.gif"
        }
        const ResEmbed = new Discord.MessageEmbed()
            .setColor(color)
            .setAuthor('𝑽𝒊𝒄𝒕𝒐𝒓𝒚 𝑯𝒂𝒍𝒍', bot.user.displayAvatarURL())
            .setThumbnail(th)
            .addFields(
                { name: "\u200B", value: "\u200B" },
            )
        msg.channel.send(ResEmbed)
    }

    //"> [04/06/2023] 🏆 1st, Polaris séries [Div2]\n

    /**
    * @param msg { Discord.Message }
    */
    static GetText(msg)
    {
        var def = "🏆 1st,"
        var items = msg.content.split(" ").slice(1)
        if (items.length <= 1)
            return ""
        if (items[0] == "2")
            def = "🥈 2nd,"
        if (items[0] == "3")
            def = "🥉 3rd,"
        var currentdate = new Date();
        var dater = ("[" + Logger.formatter(currentdate.getDate()) + "/" + Logger.formatter(currentdate.getMonth() + 1) + "/" + (currentdate.getFullYear()) + "] ")
        var res = "\n> " + dater + def
        for (let index = 1; index < items.length; index++)
            res += " " + (items[index])
        return res
    }

    /**
    * @param msg { Discord.Message }
    * @param bot { Discord.Client }
    */
    static async UpdateSuccess(msg, bot)
    {
        var idd = '1115033554901012672'
        if (msg.channel.id == "1100948020494860369") {
            idd = '1115016923944599634'
        }
        if (msg.channel.id == "1100947999577886810") {
            idd = '1115016892546039808'
        }
        if (msg.channel.id == "1100947952836558848") {
            idd = '1115016854843445279'
        }
        var newmsg = await msg.channel.messages.fetch(idd)
        const ResEmbed = new Discord.MessageEmbed(newmsg.embeds[0])
        ResEmbed.fields[0] = { name: ResEmbed.fields[0].name + this.GetText(msg), value: ResEmbed.fields[0].value }
        newmsg.edit([ResEmbed])
    }

    
}