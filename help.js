const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = ["h"],
        this.usage = "**q.help"
    }

    async run(client, message, args) {
      message.delete();
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Commands**__")
            .setDescription(`
            
          
            
            **q.help**    --    Shows this message
            **q.info**    --         Get Information about Cjyn
            **q.invite**    --    Invite Cjyn
            **q.leave**    --       Let the bot leave
            **q.ping**    --       Pong
            **q.nuke**    --     Nukes a channel. 
            **q.whois**    --     Shows a users info. 
            **q.serverinfo**     --     Shows a servers info. 
          
          
            
            `)
            .setFooter(`Use \`**q.help [command]\` for more info on a command.
            You can also use \`**q.help [category]\` for more info on a category.`)
            .setColor("#00ff00")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**q.backup**

                  __**Commands**__
`)
                    .setDescription(`
                q.backup create        Create a backup
                q.backup delete        Delete one of your backups
                q.backup info          Get information about a backup
                q.backup list          Get a list of your backups
                q.backup load          Load a backup
                q.backup purge         Delete all your backups`)
                    .addBlankField()
                    .setFooter(`Use \`q.help [command]\` for more info on a command.
You can also use \`q.help [category]\` for more info on a category.`)
                    .setColor("#00ff00")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**q.help [command]**")
                    .setDescription("Shows this message")
                    .addBlankField()
                    .setFooter(`Use \`q.help [command]\` for more info on a command.
You can also use \`q.help [category]\` for more info on a category.`)
                    .setColor("#00ff00")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**q.info**")
                    .setDescription("Get Information about Xenon")
                    .addBlankField()
                    .setFooter(`Use \`q.help [command]\` for more info on a command.
You can also use \`q.help [category]\` for more info on a category.`)
                    .setColor("#00ff00")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**q.invite**")
                    .setDescription("Invite Xenon")
                    .addBlankField()
                    .setFooter(`Use \`q.help [command]\` for more info on a command.
You can also use \`q.help [category]\` for more info on a category.`)
                    .setColor("#00ff00")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**q.leave**")
                    .setDescription("Let the bot leave")
                    .addBlankField()
                    .setFooter(`Use \`q.help [command]\` for more info on a command.
You can also use \`q.help [category]\` for more info on a category.`)
                    .setColor("#00ff00")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**q.ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`q.help [command]\` for more info on a command.
You can also use \`q.help [category]\` for more info on a category.`)
                    .setColor("#00ff00")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "nuke") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**q.nuke**")
                    .setDescription("Make the bot nuke a channel. Required permissions [ADMINISTRATOR]")
                    .addBlankField()
                    .setFooter(`Use \`q.help [command]\` for more info on a command.
You can also use \`q.help [category]\` for more info on a category.`)
                    .setColor("#00ff00")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}
