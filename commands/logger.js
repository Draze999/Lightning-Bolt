const Discord = require('discord.js');
const fs = require('fs');

module.exports = class Logger 
{
    /**
    * @param numa { number }
    */
    static formatter(numa)
    {
        var numb = String(numa)
        while (numb.length < 2) {
            numb = '0' + numb
        }
        return numb
    }

    /**
    * @param msg { Discord.Message }
    */
    static Logger(msg)
    {
        var currentdate = new Date();
        if (msg.guild == null) {
            const logg = ("[" + this.formatter(currentdate.getHours()) + "h" + this.formatter(currentdate.getMinutes()) + "mn" + this.formatter(currentdate.getSeconds()) + "s" + "] " + "[Private Message] @" + msg.author.username + " : " + msg.content)
            console.log(logg)
            fs.appendFile('./logs/' + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + ".log", logg + "\n", (err) => { if (err) throw err; })
        }
        else {
            const logg = ("[" + this.formatter(currentdate.getHours()) + "h" + this.formatter(currentdate.getMinutes()) + "mn" + this.formatter(currentdate.getSeconds()) + "s" + "] " + "[" + msg.guild.name + "/#" + msg.channel.name + "] @" + msg.author.username + " : " + msg.content)
            console.log(logg)
            fs.appendFile('./logs/' + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + ".log", logg + "\n", (err) => { if (err) throw err; })
        }
    }
}
