const Discord = require('discord.js');
const { Client, Message, RichEmbed } = require("discord.js");
const client = require('discord.js');
module.exports = class nuke {
    constructor() {
        this.name = "nuke",
        this.alias = [""],
        this.usage = "q.nuke"
       }

    async run(client, message, args) {
        if (!message.member.hasPermissions("ADMINISTRATOR")) {
            return message.channel.send("You dont have the permission to use this command!")
        }
         
           message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send(nuked)
        })
        message.channel.delete()

        let nuked = new RichEmbed()
        .setTitle('Nuked')
        .setImage('https://media.giphy.com/media/wKncAzOchpYZib3Tz4/giphy.gif')
  }
}
