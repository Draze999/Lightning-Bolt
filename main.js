const Discord = require('discord.js');
const bot = new Discord.Client();
const Prefix = '$'
const Error = require('./commands/error.js');
const login = require("./commands/login.js")
const fs = require('fs');
const disbut = require('discord-buttons');
const Maps = require('./Stats/stats.js');
const Logger = require('./commands/logger.js');
const Scoring = require('./commands/Scoring.js');
const ProfilePic = require('./commands/profile_pic.js');
const Pantheon = require('./commands/pantheon.js');
const ToolBox = require('./commands/toolbox.js');
disbut(bot)
const Commands = [];
const cmdFiles = fs.readdirSync("./slashcommands").filter((file) =>
	file.endsWith(".js"),
);

bot.on('message', function (msg) {
    if (msg.content.startsWith(Prefix)) {
        Logger.Logger(msg)
        if (msg.author.id != "221330215714947072" && msg.author.id != "471316708527964160") {
            msg.author.send("You are not authorized to use this bot.")
            return
        }
        if ((msg.guild != null) && !msg.guild.me.permissionsIn(msg.channel).has(['SEND_MESSAGES'])) {
            msg.author.send("I can't send messages in this channel.")
            return
        }
        if ((msg.guild != null) && !msg.guild.me.permissionsIn(msg.channel).has(['VIEW_CHANNEL'])) {
            msg.author.send("I can't view this channel.")
            return
        }
        if ((msg.guild != null) && !msg.guild.me.permissionsIn(msg.channel).has(['READ_MESSAGE_HISTORY'])) {
            msg.author.send("I can't read this channel's message history.")
            return
        }

        // ███████╗████████╗ █████╗ ████████╗███████╗
        // ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
        // ███████╗   ██║   ███████║   ██║   ███████╗
        // ╚════██║   ██║   ██╔══██║   ██║   ╚════██║
        // ███████║   ██║   ██║  ██║   ██║   ███████║
        // ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝

        if ((msg.content.startsWith(Prefix + "stats"))) {
            Maps.MainStats(msg)
        }

        // ███████╗ ██████╗ ██████╗ ██████╗ ███████╗
        // ██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝
        // ███████╗██║     ██║   ██║██████╔╝█████╗  
        // ╚════██║██║     ██║   ██║██╔══██╗██╔══╝  
        // ███████║╚██████╗╚██████╔╝██║  ██║███████╗
        // ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

        else if ((msg.content.startsWith(Prefix + "sc ")) || (msg.content.startsWith(Prefix + "score "))) {
            if (msg.channel.id == "1157658519047254039")
                Scoring.PutScore(msg, ToolBox.Teams.Red)
            // else if (msg.channel.id == "1075768946382360616")
            //     Scoring.PutScore(msg, Teams.Blue)
            else if (msg.channel.id == "1170437597143781417")
                Scoring.PutScore(msg, ToolBox.Teams.RedOAFO)
            // else if (msg.channel.id == "1182428306432344189") TEST DANS UN CHANNEL RANDOM
            //     Scoring.PutScore(msg, ToolBox.Teams.Blue)
            else
                Scoring.PrintErrorChannel(msg)
        }

        
        else if (msg.content.startsWith(Prefix + 'up')) {
            if (msg.author.id != "221330215714947072")
                msg.author.send("You are not authorized to use this command. Please contact `||DRͥΔZͣEͫ_999||#5158`.")
            else
                Pantheon.UpdateSuccess(msg, bot)
        }

        else if (msg.content.startsWith(Prefix + 'date')) {
            if (msg.author.id != "221330215714947072")
                msg.author.send("You are not authorized to use this command. Please contact `||DRͥΔZͣEͫ_999||#5158`.")
            else
                Pantheon.UpdateDate(msg, bot)
        }

        else {
            msg.content = msg.content.toLowerCase()
            // if (msg.content === Prefix + 'navyblue') {
            //     Pantheon.NBL(msg, bot)
            // }

            // else if (msg.content === Prefix + 'limegreen') {
            //     Pantheon.LGL(msg, bot)
            // }

            // else if (msg.content === Prefix + 'scarletred') {
            //     Pantheon.SRL(msg, bot)
            // }

            // else if (msg.content === Prefix + 'staffy') {
            //     Pantheon.Staffy(msg, bot)
            // }
            
            // else if (msg.content === Prefix + 'reseaux') {
            //     Pantheon.Reseaux(msg, bot)
            // }
            if (msg.content === Prefix + 'reload') {
                if (msg.author.id != "221330215714947072")
                    msg.author.send("You are not authorized to use this command. Please contact `||DRͥΔZͣEͫ_999||#5158`.")
                else {
                    try {
                        process.exit(11)
                        msg.author.send('Le script a été rechargé avec succès.');
                    } catch (err) {
                        console.error('Une erreur est survenue lors du rechargement du script :', err);
                        msg.author.send('Une erreur est survenue lors du rechargement du script.');
                    }
                }
            }

            
            else if (msg.content === Prefix + 'undo') {
                if (msg.author.id != "221330215714947072")
                    msg.author.send("You are not authorized to use this command. Please contact `||DRͥΔZͣEͫ_999||#5158`.")
                else {
                    process.exit(42)
                }
            }

            else if (msg.content === Prefix + "abc") {
                msg.author.send("Test Phase 1")
            }

            
            // ██╗  ██╗███████╗██╗     ██████╗ 
            // ██║  ██║██╔════╝██║     ██╔══██╗
            // ███████║█████╗  ██║     ██████╔╝
            // ██╔══██║██╔══╝  ██║     ██╔═══╝ 
            // ██║  ██║███████╗███████╗██║     
            // ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  

            else if ((msg.content === Prefix + 'help') | (msg.content === Prefix + 'h')) {
                const HelpEmbed = new Discord.MessageEmbed()
                    .setColor('#008E00')
                    .setTitle('Commands List')
                    .setAuthor('Lightning Bo(l)t', msg.author.displayAvatarURL())
                    .setThumbnail(msg.author.displayAvatarURL())
                    .setDescription('\u200B')
                    .addFields(
                        { name: Prefix + 'help', value: 'Ce menu lol.' },
                        { name: Prefix + 'agenda', value: "Renvoie le lien pour l'agenda de scrims." },
                        { name: Prefix + 'score/sc <Team Ennemie> <Elo Ennemi> [<Score RL> <Score Ennemi> <Map> <W/L>] [...]', value: "Créée le score. Les arguments entre crochets sont répétables pour chaque game" },
                        { name: Prefix + 'pp <mention>', value: 'Renvoie la photo de profil de la personne mentionnée' },
                        { name: Prefix + 'suggestion <sugg>', value: 'Permet de faire une suggestion pour améliorer le bot' },
                        { name: Prefix + 'dr <pourcentage>', value: 'Renvoie le pourcentage de vie supplémentaire équivalente au pourcentage de DR choisi.' },
                        { name: Prefix + 'stats <Team Initials>', value: 'Renvoie nos stats de scrims ET tournois en fonction des maps.' },
                        { name: Prefix + 'up <place> <texte>', value: "Rajoute le score dans le Panthéon d'une équipe" },
                        { name: Prefix + 'date <jour> <mois> <année>', value: "Change la date du dernier record ajouté" },
                        { name: '\u200B', value: 'Presques toutes les commandes sont réductibles à leur(s) initiale(s).' },
                    )
                    .setTimestamp()
                msg.channel.send(HelpEmbed)
            }

            //██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗    ██╗███╗   ███╗ █████╗  ██████╗ ███████╗
            //██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝    ██║████╗ ████║██╔══██╗██╔════╝ ██╔════╝
            //██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗      ██║██╔████╔██║███████║██║  ███╗█████╗  
            //██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝      ██║██║╚██╔╝██║██╔══██║██║   ██║██╔══╝  
            //██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗    ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗
            //╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝    ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝

            else if (msg.content.startsWith(Prefix + 'pp ')) {
                ProfilePic.GetPic(msg, bot)
            }
            else if (msg.content === (Prefix + 'pp')) {
                msg.channel.send("Veuillez Mentionner quelqu'un.")
            }

            // ██████╗ ██╗███╗   ██╗ ██████╗ 
            // ██╔══██╗██║████╗  ██║██╔════╝ 
            // ██████╔╝██║██╔██╗ ██║██║  ███╗
            // ██╔═══╝ ██║██║╚██╗██║██║   ██║
            // ██║     ██║██║ ╚████║╚██████╔╝
            // ╚═╝     ╚═╝╚═╝  ╚═══╝ ╚═════╝ 

            else if (msg.content.startsWith(Prefix + 'ping ')) {
                let num = msg.content.split(" ")[2]
                console.log(num)
                let ping = (msg.content.split(" ")[1]).slice(2,-1)
                ping = ping.replace('!', '')
                var regex = /[0-9]{18}/
                if (!regex.test(ping)) {
                    msg.channel.send("Veuillez Mentionner quelqu'un.")
                }
                else {
                    // let userr = bot.users.cache.find(user => user.id === ping)
                    try {
                        for (let index = 0; index < num; index++) {
                            msg.channel.send("<@"+ping+">")
                            //.then(msg => msg.delete())
                        }
                    }
                    catch
                    {
                        console.log("Erreur")
                        msg.channel.send("Cet ID n'est pas associé à un utilisateur.")
                    }
                }

            }

            //███████╗██╗   ██╗ ██████╗  ██████╗ ███████╗███████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
            //██╔════╝██║   ██║██╔════╝ ██╔════╝ ██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
            //███████╗██║   ██║██║  ███╗██║  ███╗█████╗  ███████╗   ██║   ██║██║   ██║██╔██╗ ██║███████╗
            //╚════██║██║   ██║██║   ██║██║   ██║██╔══╝  ╚════██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║
            //███████║╚██████╔╝╚██████╔╝╚██████╔╝███████╗███████║   ██║   ██║╚██████╔╝██║ ╚████║███████║
            //╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

            else if ((msg.content.startsWith(Prefix + "suggestion "))) {
                let args = msg.content.slice(12)
                fs.appendFile('./Suggest/sugg.txt', "- " + args + "\n", (err) => { if (err) throw err; })
                msg.channel.send("suggestion ajoutée.")
            }
            else if ((msg.content.startsWith(Prefix + "s "))) {
                let args = msg.content.slice(3)
                fs.appendFile('./Suggest/sugg.txt', "- " + args + "\n", (err) => { if (err) throw err; })
                msg.channel.send("suggestion ajoutée.")
            }

            // ██████╗  █████╗ ███╗   ███╗ █████╗  ██████╗ ███████╗    ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗
            // ██╔══██╗██╔══██╗████╗ ████║██╔══██╗██╔════╝ ██╔════╝    ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
            // ██║  ██║███████║██╔████╔██║███████║██║  ███╗█████╗      ██████╔╝█████╗  ██║  ██║██║   ██║██║        ██║   ██║██║   ██║██╔██╗ ██║
            // ██║  ██║██╔══██║██║╚██╔╝██║██╔══██║██║   ██║██╔══╝      ██╔══██╗██╔══╝  ██║  ██║██║   ██║██║        ██║   ██║██║   ██║██║╚██╗██║
            // ██████╔╝██║  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗    ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
            // ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

            else if ((msg.content.startsWith(Prefix + "dr "))) {
                let args = msg.content.slice(Prefix.length + 3)
                args = parseFloat(args)
                if ((args >= 0) && (args < 100)) {
                    msg.channel.send(args + "% de réduction de dégâts corresponds à " + ((args / (100 - args)) * 100).toFixed(2) + "% de vie en plus.")
                }
                else if (args == 100) {
                    msg.channel.send("100% de réduction de dégats correspond à ne pas prendre de dégâts.")
                }
                else {
                    msg.channel.send("Veuillez entrer un pourcentage de réduction de dégâts valide : Entre 0 et 100%")
                }

            }

            //  █████╗  ██████╗ ███████╗███╗   ██╗██████╗  █████╗ 
            // ██╔══██╗██╔════╝ ██╔════╝████╗  ██║██╔══██╗██╔══██╗
            // ███████║██║  ███╗█████╗  ██╔██╗ ██║██║  ██║███████║
            // ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║██║  ██║██╔══██║
            // ██║  ██║╚██████╔╝███████╗██║ ╚████║██████╔╝██║  ██║
            // ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝

            else if ((msg.content === Prefix + 'agenda') | (msg.content === Prefix + 'a')) {
                msg.channel.send("https://docs.google.com/spreadsheets/d/1GyAQMevrpJL75YoXQdPBaJM4pWbrQ8_yytfdxuqPPCU/edit#gid=1605958970")

            }

            //███████╗██████╗ ██████╗  ██████╗ ██████╗ 
            //██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
            //█████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
            //██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
            //███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║
            //╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝

            else {
                msg.channel.send(Error.UnknownError());
                console.log("Commande inconnue")

            }
        }

    }
    else {
        if (msg.guild == null) {
            var currentdate = new Date();
            const logg = ("[" + Logger.formatter(currentdate.getHours()) + "h" + Logger.formatter(currentdate.getMinutes()) + "mn" + Logger.formatter(currentdate.getSeconds()) + "s" + "] " + "[Private Message] @" + msg.author.username + " : " + msg.content)
            console.log(logg)
            fs.appendFile('./logs/' + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + ".log", logg + "\n", (err) => { if (err) throw err; })
        }
    }

});

//███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
//██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
//███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
//╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
//███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
//╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝

// bot.on('ready', function () {
//     bot.user.setPresence({
//         status: 'online',
//         activity: {
//             name: ("Le bot des Lightnings. Utilisez moi avec " + Prefix + "help"),
//             type: 'STREAMING',
//             url: 'https://www.twitch.tv/draze999'
//         }
//     }
//     )
// })

bot.on("ready", async () => {
	for (const fileName of cmdFiles) {
		const File = require(`./slashcommands/${fileName}`);
		Commands.push(File);
		await bot.api.applications(bot.user.id).commands.post({
			data: {
				name: File.name,
				description: File.description,
				options: File.options,
			},
		});
	}
	console.info(`Logged in as ${bot.user.username}`);
});

//██╗      ██████╗  ██████╗ ██╗███╗   ██╗
//██║     ██╔═══██╗██╔════╝ ██║████╗  ██║
//██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
//██║     ██║   ██║██║   ██║██║██║╚██╗██║
//███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
//╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝

bot.ws.on("INTERACTION_CREATE", (interaction) => {
	const CMDFile = Commands.find(
		(cmd) => cmd.name.toLowerCase() === interaction.data.name.toLowerCase(),
	);
	if (CMDFile)
		CMDFile.execute(bot, say, interaction, interaction.data.options);
});

login.connect(bot);

async function say(interaction, content) {
	return bot.api
		.interactions(interaction.id, interaction.token)
		.callback.post({
			data: {
				type: 4,
				data: await createAPIMessage(interaction, content),
			},
		});
}

async function createAPIMessage(interaction, content) {
	const apiMessage = await Discord.APIMessage.create(
		bot.channels.resolve(interaction.channel_id),
		content,
	)
		.resolveData()
		.resolveFiles();
	return { ...apiMessage.data, files: apiMessage.files };
}
