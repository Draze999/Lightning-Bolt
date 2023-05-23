const Discord = require('discord.js');
const fs = require('fs');
class Map {
    constructor(ID,Nom,Played,Won)
    {
        this.ID = ID
        this.Nom = Nom
        this.Played = Played
        this.Won = Won
    }
}

module.exports = class Stats 
{

    // ██████╗  █████╗ ███████╗██╗ ██████╗
    // ██╔══██╗██╔══██╗██╔════╝██║██╔════╝
    // ██████╔╝███████║███████╗██║██║     
    // ██╔══██╗██╔══██║╚════██║██║██║     
    // ██████╔╝██║  ██║███████║██║╚██████╗
    // ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝

    static sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    static async AddJSON(Mappy, MapID, Won)
    {
        var temp = 0
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[0].escort.length; index++) {
                const Eq = new Map(Mappy.maps[0].escort[index].ID)
                if (Eq.ID == MapID) {
                    Mappy.maps[0].escort[index].Played++
                    temp = 1
                    if (Won == true)
                        Mappy.maps[0].escort[index].Won++
                }
                if (Eq.ID == "TO" && temp == 1) {
                    Mappy.maps[0].escort[index].Played++
                    if (Won == true)
                        Mappy.maps[0].escort[index].Won++
                }
            }
        }
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[1].hybrid.length; index++) {
                const Eq = new Map(Mappy.maps[1].hybrid[index].ID)
                if (Eq.ID == MapID) {
                    Mappy.maps[1].hybrid[index].Played++
                    temp = 1
                    if (Won == true)
                        Mappy.maps[1].hybrid[index].Won++
                }
                if (Eq.ID == "TO" && temp == 1) {
                    Mappy.maps[1].hybrid[index].Played++
                    if (Won == true)
                        Mappy.maps[1].hybrid[index].Won++
                }
            }
        }
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[2].control.length; index++) {
                const Eq = new Map(Mappy.maps[2].control[index].ID)
                if (Eq.ID == MapID) {
                    Mappy.maps[2].control[index].Played++
                    temp = 1
                    if (Won == true)
                        Mappy.maps[2].control[index].Won++
                }
                if (Eq.ID == "TO" && temp == 1) {
                    Mappy.maps[2].control[index].Played++
                    if (Won == true)
                        Mappy.maps[2].control[index].Won++
                }
            }
        }
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[3].push.length; index++) {
                const Eq = new Map(Mappy.maps[3].push[index].ID)
                if (Eq.ID == MapID) {
                    Mappy.maps[3].push[index].Played++
                    temp = 1
                    if (Won == true)
                        Mappy.maps[3].push[index].Won++
                }
                if (Eq.ID == "TO" && temp == 1) {
                    Mappy.maps[3].push[index].Played++
                    if (Won == true)
                        Mappy.maps[3].push[index].Won++
                }
            }
        }
        return Mappy
    }

    static async GetName(Mappy, MapID)
    {
        var temp = 0
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[0].escort.length; index++) {
                const Eq = new Map(Mappy.maps[0].escort[index].ID)
                if (Eq.ID == MapID) {
                    return Mappy.maps[0].escort[index].Nom
                }
            }
        }
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[1].hybrid.length; index++) {
                const Eq = new Map(Mappy.maps[1].hybrid[index].ID)
                if (Eq.ID == MapID) {
                    return Mappy.maps[1].hybrid[index].Nom
                }
            }
        }
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[2].control.length; index++) {
                const Eq = new Map(Mappy.maps[2].control[index].ID)
                if (Eq.ID == MapID) {
                    return Mappy.maps[2].control[index].Nom
                }
            }
        }
        if (temp == 0) {
            for (let index = 0; index < Mappy.maps[3].push.length; index++) {
                const Eq = new Map(Mappy.maps[3].push[index].ID)
                if (Eq.ID == MapID) {
                    return Mappy.maps[3].push[index].Nom
                }
            }
        }
        return ""
    }

    static Other(msg)
    {
        const StatsEmbed = new Discord.MessageEmbed()
                    .setColor('#FF3923')
                    .setTitle('Error')
                    .addFields(
                        { name: "Veuillez utiliser l'une des possibilité ci-dessous", value: '\u200B' },
                        { name: 'stats -m <Team Initials>', value: "Renvoie les statistiques liées aux Maps" },
                        { name: 'Initiales disponibles : ', value: "LG : Lime Green\nNB : Navy Blue\nSR : Scarlet Red" },
                    )
                    .setTimestamp()
        msg.channel.send(StatsEmbed)
    }

    /**
    * @param msg { Discord.Message }
    */
    static async MainStats(msg)
    {
        var items = msg.content.split(" ")
        if ((items.length < 3) || (items.length > 3) || ((items[1]!="-m")))
        {
            Stats.Other(msg)
        }
        else if (items[1]=="-m")
        {
            if (items[2] == "SR")
                Stats.SCWinrate(msg)
            else if (items[2] == "NB")
                Stats.NBWinrate(msg)
            else if (items[2] == "LG")
                Stats.LGWinrate(msg)
            else
                Stats.Other(msg)
        }
    }
    
    // ███████╗ ██████╗ █████╗ ██████╗ ██╗     ███████╗████████╗    ██████╗ ███████╗██████╗
    // ██╔════╝██╔════╝██╔══██╗██╔══██╗██║     ██╔════╝╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗
    // ███████╗██║     ███████║██████╔╝██║     █████╗     ██║       ██████╔╝█████╗  ██║  ██║
    // ╚════██║██║     ██╔══██║██╔══██╗██║     ██╔══╝     ██║       ██╔══██╗██╔══╝  ██║  ██║
    // ███████║╚██████╗██║  ██║██║  ██║███████╗███████╗   ██║       ██║  ██║███████╗██████╔╝
    // ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝       ╚═╝  ╚═╝╚══════╝╚═════╝ 

    static SCWinrate(msg)
    {
        var dat = fs.readFileSync("Stats/statsred.json", { encoding: 'utf-8' })
        var Mappy = JSON.parse(dat)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[0].escort.length; index++) {
            Name+=Mappy.maps[0].escort[index].Nom +"\n"
            if (Mappy.maps[0].escort[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[0].escort[index].Won / Mappy.maps[0].escort[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[0].escort[Mappy.maps[0].escort.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[0].escort[index].Played / Mappy.maps[0].escort[Mappy.maps[0].escort.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[0].escort[index].Played + ")**\n"
        }
        const EscortEmbed = new Discord.MessageEmbed()
                .setColor('#ffcc33')
                .setTitle("__**Statistiques en Escorte de la Scarlet Red Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(EscortEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[1].hybrid.length; index++) {
            Name+=Mappy.maps[1].hybrid[index].Nom +"\n"
            if (Mappy.maps[1].hybrid[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[1].hybrid[index].Won / Mappy.maps[1].hybrid[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[1].hybrid[Mappy.maps[1].hybrid.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[1].hybrid[index].Played / Mappy.maps[1].hybrid[Mappy.maps[1].hybrid.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[1].hybrid[index].Played + ")**\n"
        }
        const HybridEmbed = new Discord.MessageEmbed()
                .setColor('#ff8888')
                .setTitle("__**Statistiques en Hybride de la Scarlet Red Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(HybridEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[2].control.length; index++) {
            Name+=Mappy.maps[2].control[index].Nom +"\n"
            if (Mappy.maps[2].control[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[2].control[index].Won / Mappy.maps[2].control[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[2].control[Mappy.maps[2].control.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[2].control[index].Played / Mappy.maps[2].control[Mappy.maps[2].control.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[2].control[index].Played + ")**\n"
        }
        const ControlEmbed = new Discord.MessageEmbed()
                .setColor('#33ccff')
                .setTitle("__**Statistiques en Contrôle de la Scarlet Red Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(ControlEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[3].push.length; index++) {
            Name+=Mappy.maps[3].push[index].Nom +"\n"
            if (Mappy.maps[3].push[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[3].push[index].Won / Mappy.maps[3].push[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[3].push[Mappy.maps[3].push.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[3].push[index].Played / Mappy.maps[3].push[Mappy.maps[3].push.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[3].push[index].Played + ")**\n"
        }
        const PushEmbed = new Discord.MessageEmbed()
                .setColor('#33ff88')
                .setTitle("__**Statistiques en Push de la Scarlet Red Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(PushEmbed)
    }

    // ██╗     ██╗███╗   ███╗███████╗     ██████╗ ██████╗ ███████╗███████╗███╗   ██╗
    // ██║     ██║████╗ ████║██╔════╝    ██╔════╝ ██╔══██╗██╔════╝██╔════╝████╗  ██║
    // ██║     ██║██╔████╔██║█████╗      ██║  ███╗██████╔╝█████╗  █████╗  ██╔██╗ ██║
    // ██║     ██║██║╚██╔╝██║██╔══╝      ██║   ██║██╔══██╗██╔══╝  ██╔══╝  ██║╚██╗██║
    // ███████╗██║██║ ╚═╝ ██║███████╗    ╚██████╔╝██║  ██║███████╗███████╗██║ ╚████║
    // ╚══════╝╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝

    static LGWinrate(msg)
    {
        var dat = fs.readFileSync("Stats/statsgreen.json", { encoding: 'utf-8' })
        var Mappy = JSON.parse(dat)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[0].escort.length; index++) {
            Name+=Mappy.maps[0].escort[index].Nom +"\n"
            if (Mappy.maps[0].escort[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[0].escort[index].Won / Mappy.maps[0].escort[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[0].escort[Mappy.maps[0].escort.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[0].escort[index].Played / Mappy.maps[0].escort[Mappy.maps[0].escort.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[0].escort[index].Played + ")**\n"
        }
        const EscortEmbed = new Discord.MessageEmbed()
                .setColor('#ffcc33')
                .setTitle("__**Statistiques en Escorte de la Lime Green Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(EscortEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[1].hybrid.length; index++) {
            Name+=Mappy.maps[1].hybrid[index].Nom +"\n"
            if (Mappy.maps[1].hybrid[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[1].hybrid[index].Won / Mappy.maps[1].hybrid[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[1].hybrid[Mappy.maps[1].hybrid.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[1].hybrid[index].Played / Mappy.maps[1].hybrid[Mappy.maps[1].hybrid.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[1].hybrid[index].Played + ")**\n"
        }
        const HybridEmbed = new Discord.MessageEmbed()
                .setColor('#ff8888')
                .setTitle("__**Statistiques en Hybride de la Lime Green Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(HybridEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[2].control.length; index++) {
            Name+=Mappy.maps[2].control[index].Nom +"\n"
            if (Mappy.maps[2].control[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[2].control[index].Won / Mappy.maps[2].control[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[2].control[Mappy.maps[2].control.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[2].control[index].Played / Mappy.maps[2].control[Mappy.maps[2].control.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[2].control[index].Played + ")**\n"
        }
        const ControlEmbed = new Discord.MessageEmbed()
                .setColor('#33ccff')
                .setTitle("__**Statistiques en Contrôle de la Lime Green Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(ControlEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[3].push.length; index++) {
            Name+=Mappy.maps[3].push[index].Nom +"\n"
            if (Mappy.maps[3].push[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[3].push[index].Won / Mappy.maps[3].push[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[3].push[Mappy.maps[3].push.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[3].push[index].Played / Mappy.maps[3].push[Mappy.maps[3].push.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[3].push[index].Played + ")**\n"
        }
        const PushEmbed = new Discord.MessageEmbed()
                .setColor('#33ff88')
                .setTitle("__**Statistiques en Push de la Lime Green Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(PushEmbed)
    }

    // ███╗   ██╗ █████╗ ██╗   ██╗██╗   ██╗    ██████╗ ██╗     ██╗   ██╗███████╗
    // ████╗  ██║██╔══██╗██║   ██║╚██╗ ██╔╝    ██╔══██╗██║     ██║   ██║██╔════╝
    // ██╔██╗ ██║███████║██║   ██║ ╚████╔╝     ██████╔╝██║     ██║   ██║█████╗  
    // ██║╚██╗██║██╔══██║╚██╗ ██╔╝  ╚██╔╝      ██╔══██╗██║     ██║   ██║██╔══╝  
    // ██║ ╚████║██║  ██║ ╚████╔╝    ██║       ██████╔╝███████╗╚██████╔╝███████╗
    // ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝     ╚═╝       ╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝

    static NBWinrate(msg)
    {
        var dat = fs.readFileSync("Stats/statsblue.json", { encoding: 'utf-8' })
        var Mappy = JSON.parse(dat)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[0].escort.length; index++) {
            Name+=Mappy.maps[0].escort[index].Nom +"\n"
            if (Mappy.maps[0].escort[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[0].escort[index].Won / Mappy.maps[0].escort[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[0].escort[Mappy.maps[0].escort.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[0].escort[index].Played / Mappy.maps[0].escort[Mappy.maps[0].escort.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[0].escort[index].Played + ")**\n"
        }
        const EscortEmbed = new Discord.MessageEmbed()
                .setColor('#ffcc33')
                .setTitle("__**Statistiques en Escorte de la Navy Blue Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(EscortEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[1].hybrid.length; index++) {
            Name+=Mappy.maps[1].hybrid[index].Nom +"\n"
            if (Mappy.maps[1].hybrid[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[1].hybrid[index].Won / Mappy.maps[1].hybrid[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[1].hybrid[Mappy.maps[1].hybrid.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[1].hybrid[index].Played / Mappy.maps[1].hybrid[Mappy.maps[1].hybrid.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[1].hybrid[index].Played + ")**\n"
        }
        const HybridEmbed = new Discord.MessageEmbed()
                .setColor('#ff8888')
                .setTitle("__**Statistiques en Hybride de la Navy Blue Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(HybridEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[2].control.length; index++) {
            Name+=Mappy.maps[2].control[index].Nom +"\n"
            if (Mappy.maps[2].control[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[2].control[index].Won / Mappy.maps[2].control[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[2].control[Mappy.maps[2].control.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[2].control[index].Played / Mappy.maps[2].control[Mappy.maps[2].control.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[2].control[index].Played + ")**\n"
        }
        const ControlEmbed = new Discord.MessageEmbed()
                .setColor('#33ccff')
                .setTitle("__**Statistiques en Contrôle de la Navy Blue Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(ControlEmbed)

        //-------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------

        var Name = ""
        var WR = ""
        var PR = ""
        for (let index = 0; index < Mappy.maps[3].push.length; index++) {
            Name+=Mappy.maps[3].push[index].Nom +"\n"
            if (Mappy.maps[3].push[index].Played == 0)
                WR +="NO DATA \n"
            else
                WR +=((Mappy.maps[3].push[index].Won / Mappy.maps[3].push[index].Played)*100).toFixed(2) +"%\n"
            if (Mappy.maps[3].push[Mappy.maps[3].push.length-1].Played == 0)
                PR +="NO DATA \n"
            else
                PR +=((Mappy.maps[3].push[index].Played / Mappy.maps[3].push[Mappy.maps[3].push.length-1].Played)*100).toPrecision(3) + "% **(" + Mappy.maps[3].push[index].Played + ")**\n"
        }
        const PushEmbed = new Discord.MessageEmbed()
                .setColor('#33ff88')
                .setTitle("__**Statistiques en Push de la Navy Blue Lightning**__")
                .addFields(
                    { name: 'Map : ', value: Name, inline: true },
                    { name: 'Winrate : ', value: WR, inline: true },
                    { name: 'Pickrate : ', value: PR, inline: true },
                )
                .setTimestamp()
        msg.channel.send(PushEmbed)
    }
}