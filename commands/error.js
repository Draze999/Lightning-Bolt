const Discord = require('discord.js')

module.exports = class Error {

    static UnknownError()
    {
        const ErrorEmbed = new Discord.MessageEmbed()
            .setColor('#FF3923')
            .setTitle("Error")
            .setDescription("Cette commande est inconnue.")
        return ErrorEmbed
    }
    static WrongParameterError()
    {
        const ErrorEmbed = new Discord.MessageEmbed()
            .setColor('#FF3923')
            .setTitle("Error")
            .setDescription("Veuillez respecter les paramètres.")
        return ErrorEmbed
    }
}
