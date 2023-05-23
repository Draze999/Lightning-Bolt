const Discord = require('discord.js');
const fs = require('fs');
const Error = require("./error.js")
const Stats = require('../Stats/stats.js')
const IDlist = ['CR','DO','R6','JT','RI','HA','WG','MS','BW','NU','HO','EI','KR','MI','PA','BU','NE','IL','OA','LI','AN','CO','ES','QS']
module.exports = class Scoring 
{

    // ██████╗  █████╗ ███████╗██╗ ██████╗
    // ██╔══██╗██╔══██╗██╔════╝██║██╔════╝
    // ██████╔╝███████║███████╗██║██║     
    // ██╔══██╗██╔══██║╚════██║██║██║     
    // ██████╔╝██║  ██║███████║██║╚██████╗
    // ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝

    /**
    * @param msg { Discord.Message }
    * @param ScoreA { Int }
    * @param ScoreB { Int }
    * @param Mapy { String }
    * @param Won { String }
    */
    static SingleScore(msg, ScoreA, ScoreB, Mapy, Won)
    {
        var color = "#088c2c"
        if (Won == "L" && ScoreA == ScoreB) {
            color = "#8c0808"
        }
        if (ScoreA < ScoreB) {
            color = "#8c0808"
        }
        const ScoreEmbed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle("`" + ScoreA + " - " + ScoreB + "  |  " + Mapy + "`")
        msg.channel.send(ScoreEmbed)
    }

    /**
    * @param msg { Discord.Message }
    */
    static PrintHelp(msg)
    {
        var EscortCodes = "CR\nDO\nR6\nJT\nRI\nHA\nWG\nMS"
        var EscortNames = "Circuit Royal\nDorado\nRoute 66\nJunkertown\nRialto\nLa Havane\nObservatoire : Gibraltar\nMonastère Shambali"
        var HybridCodes = "BW\nNU\nHO\nEI\nKR\nMI\nPA"
        var HybridNames = "Blizzard World\nNumbani\nHollywood\nEichenwalde\nKing's Row\nMidtown\nParaiso"
        var ControlCodes = "BU\nNE\nIL\nOA\nLI\nAN"
        var ControlNames = "Busan\nNépal\nIlios\nOasis\nTour de Lijiang\n Péninsulte Antartique"
        var PushCodes = "CO\nES\nQS"
        var PushNames = "Colosseo\nEspéranca\nNew Queen Street"
        const CodesEmbed = new Discord.MessageEmbed()
            .setColor('#2050ed')
            .setTitle('ID des Maps')
            .setDescription("\u200B")
            .addFields(
                { name: "Escort ID", value: EscortCodes, inline: true },
                { name: "Escort Maps", value: EscortNames, inline: true },
                { name: "\u200B", value: "\u200B" },
                { name: "Hybrid ID", value: HybridCodes, inline: true },
                { name: "Hybrid Maps", value: HybridNames, inline: true },
                { name: "\u200B", value: "\u200B" },
                { name: "Control ID", value: ControlCodes, inline: true },
                { name: "Control Maps", value: ControlNames, inline: true },
                { name: "\u200B", value: "\u200B" },
                { name: "Push ID", value: PushCodes, inline: true },
                { name: "Push Maps", value: PushNames, inline: true },
            )
        msg.author.send(CodesEmbed)
    }

    /**
    * @param msg { Discord.Message }
    */
        static PrintErrorChannel(msg)
        {
            const ErrorEmbed = new Discord.MessageEmbed()
                .setColor('#FF3923')
                .setTitle('Erreur')
                .addFields(
                    { name: "Channel non reconnu", value: "Veuillez mettre la commande dans un des channels de review."},
                )
            msg.channel.send(ErrorEmbed)
        }

    /**
    * @param msg { Discord.Message }
    */
    static CheckIDs(msg, items)
    {
        
        for (let index = 2; index < ((items.length - 2 / 4)); index += 4) {
            if (!IDlist.includes(items[2 + index])) {
                this.PrintHelp(msg)
                return true
            }
        }
        return false
    }

    // ███████╗ ██████╗ █████╗ ██████╗ ██╗     ███████╗████████╗    ██████╗ ███████╗██████╗ 
    // ██╔════╝██╔════╝██╔══██╗██╔══██╗██║     ██╔════╝╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗
    // ███████╗██║     ███████║██████╔╝██║     █████╗     ██║       ██████╔╝█████╗  ██║  ██║
    // ╚════██║██║     ██╔══██║██╔══██╗██║     ██╔══╝     ██║       ██╔══██╗██╔══╝  ██║  ██║
    // ███████║╚██████╗██║  ██║██║  ██║███████╗███████╗   ██║       ██║  ██║███████╗██████╔╝
    // ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝       ╚═╝  ╚═╝╚══════╝╚═════╝ 

    /**
    * @param msg { Discord.Message }
    */
    static async SCPutScore(msg)
    {
        var items = msg.content.split(" ").slice(1)
        if (items.length < 2 || (((items.length - 2) % 4) != 0))
        {
            msg.channel.send(Error.WrongParameterError())
            return
        }
        if (this.CheckIDs(msg, items)) {
            return
        }
        var dat = fs.readFileSync("Stats/statsred.json", { encoding: 'utf-8' },  (err) => { if (err) throw err; } )
        var Mappy = JSON.parse(dat)
        
        var color = "#4848fc"
        var Wins = 0
        var Defeat = 0
        var desc = "**[2k6 - " + items[1] +"]**"

        const ScoreEmbed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle("Red Lightning VS " + items[0] + "\n\t\t\t\t\t" + desc)
        
        msg.channel.send(ScoreEmbed)
        for (let index = 2; index < ((items.length - 2 / 4)); index += 4) {
            var ScoreA = items[index]
            var ScoreB = items[1 + index]
            var Won = items[3 + index]
            if ((Won == "L" && ScoreA == ScoreB) || ScoreA < ScoreB) {
                Defeat++
                Mappy = await Stats.AddJSON(Mappy, items[2 + index], false)
            } else {
                Wins++
                Mappy = await Stats.AddJSON(Mappy, items[2 + index], true)
            }
            var namerd = await Stats.GetName(Mappy, items[2 + index])
            if (items[2 + index] == "AN") {
                namerd = namerd.substring(17)
            } else {
                namerd = namerd.substring(10)
            }
            this.SingleScore(msg, ScoreA, ScoreB, namerd, Won)
        }
        if (msg.attachments.size == 1) {
            msg.channel.send(msg.attachments.first())
        }
        var currentdate = new Date();
        var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear()
        const FinalEmbed = new Discord.MessageEmbed()
            .setColor("#4848fc")
            .setTitle("Scrim du " + date + "\nScore : [ " + Wins + " - " + Defeat + " ]")
        msg.channel.send(FinalEmbed)
        fs.writeFile('Stats/statsred.json', JSON.stringify(Mappy, null, 2), 'utf8', (err) => { if (err) throw err; })
    }

    // ██╗     ██╗███╗   ███╗███████╗     ██████╗ ██████╗ ███████╗███████╗███╗   ██╗
    // ██║     ██║████╗ ████║██╔════╝    ██╔════╝ ██╔══██╗██╔════╝██╔════╝████╗  ██║
    // ██║     ██║██╔████╔██║█████╗      ██║  ███╗██████╔╝█████╗  █████╗  ██╔██╗ ██║
    // ██║     ██║██║╚██╔╝██║██╔══╝      ██║   ██║██╔══██╗██╔══╝  ██╔══╝  ██║╚██╗██║
    // ███████╗██║██║ ╚═╝ ██║███████╗    ╚██████╔╝██║  ██║███████╗███████╗██║ ╚████║
    // ╚══════╝╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝

    /**
    * @param msg { Discord.Message }
    */
        static async LGPutScore(msg)
        {
            var items = msg.content.split(" ").slice(1)
            if (items.length < 2 || (((items.length - 2) % 4) != 0))
            {
                msg.channel.send(Error.WrongParameterError())
                return
            }
            if (this.CheckIDs(msg, items)) {
                return
            }
            var dat = fs.readFileSync("Stats/statsgreen.json", { encoding: 'utf-8' },  (err) => { if (err) throw err; } )
            var Mappy = JSON.parse(dat)
            
            var color = "#4848fc"
            var Wins = 0
            var Defeat = 0
            var desc = "**[3k8 - " + items[1] +"]**"
    
            const ScoreEmbed = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle("Lime Green VS " + items[0] + "\n\t\t\t\t\t" + desc)
            
            msg.channel.send(ScoreEmbed)
            for (let index = 2; index < ((items.length - 2 / 4)); index += 4) {
                var ScoreA = items[index]
                var ScoreB = items[1 + index]
                var Won = items[3 + index]
                if ((Won == "L" && ScoreA == ScoreB) || ScoreA < ScoreB) {
                    Defeat++
                    Mappy = await Stats.AddJSON(Mappy, items[2 + index], false)
                } else {
                    Wins++
                    Mappy = await Stats.AddJSON(Mappy, items[2 + index], true)
                }
                var namerd = await Stats.GetName(Mappy, items[2 + index])
                if (items[2 + index] == "AN") {
                    namerd = namerd.substring(17)
                } else {
                    namerd = namerd.substring(10)
                }
                this.SingleScore(msg, ScoreA, ScoreB, namerd, Won)
            }
            if (msg.attachments.size == 1) {
                msg.channel.send(msg.attachments.first())
            }
            var currentdate = new Date();
            var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear()
            const FinalEmbed = new Discord.MessageEmbed()
                .setColor("#4848fc")
                .setTitle("Scrim du " + date + "\nScore : [ " + Wins + " - " + Defeat + " ]")
            msg.channel.send(FinalEmbed)
            fs.writeFile('Stats/statsgreen.json', JSON.stringify(Mappy, null, 2), 'utf8', (err) => { if (err) throw err; })
        }

    // ███╗   ██╗ █████╗ ██╗   ██╗██╗   ██╗    ██████╗ ██╗     ██╗   ██╗███████╗
    // ████╗  ██║██╔══██╗██║   ██║╚██╗ ██╔╝    ██╔══██╗██║     ██║   ██║██╔════╝
    // ██╔██╗ ██║███████║██║   ██║ ╚████╔╝     ██████╔╝██║     ██║   ██║█████╗  
    // ██║╚██╗██║██╔══██║╚██╗ ██╔╝  ╚██╔╝      ██╔══██╗██║     ██║   ██║██╔══╝  
    // ██║ ╚████║██║  ██║ ╚████╔╝    ██║       ██████╔╝███████╗╚██████╔╝███████╗
    // ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝     ╚═╝       ╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝

    /**
    * @param msg { Discord.Message }
    */
    static async NBPutScore(msg)
    {
        var items = msg.content.split(" ").slice(1)
        if (items.length < 2 || (((items.length - 2) % 4) != 0))
        {
            msg.channel.send(Error.WrongParameterError())
            return
        }
        if (this.CheckIDs(msg, items)) {
            return
        }
        var dat = fs.readFileSync("Stats/statsblue.json", { encoding: 'utf-8' },  (err) => { if (err) throw err; } )
        var Mappy = JSON.parse(dat)
        
        var color = "#4848fc"
        var Wins = 0
        var Defeat = 0
        var desc = "**[4k4 - " + items[1] +"]**"

        const ScoreEmbed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle("Navy Blue VS " + items[0] + "\n\t\t\t\t\t" + desc)
        
        msg.channel.send(ScoreEmbed)
        for (let index = 2; index < ((items.length - 2 / 4)); index += 4) {
            var ScoreA = items[index]
            var ScoreB = items[1 + index]
            var Won = items[3 + index]
            if ((Won == "L" && ScoreA == ScoreB) || ScoreA < ScoreB) {
                Defeat++
                Mappy = await Stats.AddJSON(Mappy, items[2 + index], false)
            } else {
                Wins++
                Mappy = await Stats.AddJSON(Mappy, items[2 + index], true)
            }
            var namerd = await Stats.GetName(Mappy, items[2 + index])
            if (items[2 + index] == "AN") {
                namerd = namerd.substring(17)
            } else {
                namerd = namerd.substring(10)
            }
            this.SingleScore(msg, ScoreA, ScoreB, namerd, Won)
        }
        if (msg.attachments.size == 1) {
            msg.channel.send(msg.attachments.first())
        }
        var currentdate = new Date();
        var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear()
        const FinalEmbed = new Discord.MessageEmbed()
            .setColor("#4848fc")
            .setTitle("Scrim du " + date + "\nScore : [ " + Wins + " - " + Defeat + " ]")
        msg.channel.send(FinalEmbed)
        fs.writeFile('Stats/statsblue.json', JSON.stringify(Mappy, null, 2), 'utf8', (err) => { if (err) throw err; })
    }
}