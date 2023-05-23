            // // ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗     ██████╗██████╗ ███████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
            // // ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║    ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
            // // ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║    ██║     ██████╔╝█████╗  ███████║   ██║   ██║██║   ██║██╔██╗ ██║
            // // ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║    ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
            // // ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║    ╚██████╗██║  ██║███████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
            // // ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

            // else if (msg.content.startsWith(Prefix + "epicgamescestvraimentcoololalapersonneconnaitracettecommande")) {
            //     msg.delete()
            //     let Rageon = new disbut.MessageButton()
            //         .setStyle('red')
            //         .setLabel('JE RAGE !')
            //         .setID('RageButton')
            //     msg.channel.send("Ce bouton est dédicacé à la connexion de Yazøxe.", Rageon)
            // }

//██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗███████╗    ██╗   ██╗███████╗███████╗
//██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝    ██║   ██║██╔════╝██╔════╝
//██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║███████╗    ██║   ██║███████╗█████╗  
//██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║╚════██║    ██║   ██║╚════██║██╔══╝  
//██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║███████║    ╚██████╔╝███████║███████╗
//╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝     ╚═════╝ ╚══════╝╚══════╝

bot.on('clickButton', onClickButton);
/**
 * @param button { disbut.MessageComponent }
 */
async function onClickButton(button) {
    var currentdate = new Date();
    await button.clicker.fetch();

    let result = "Erreur, demandez plus d'informations au développeur.";
    switch (button.id) {
        case 'RageButton':
            result = "Tkt, tout va bien se passer :heart:";
            break;
    }
    const buttondate = ("[" + currentdate.getHours() + "h" + currentdate.getMinutes() + "mn" + currentdate.getSeconds() + "s" + "] " + button.id + " [" + button.clicker.user.username + "] " + " : " + result)
    console.log(buttondate)
    fs.appendFile('./logs/' + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + ".log", buttondate + "\n", (err) => { if (err) throw err; })
    button.reply.send(result, true);
}