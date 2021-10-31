const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "q.info"
    }

    async run(client, message, args) {
      message.delete();
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Cjyn**")
         .setThumbnail("https://cdn.discordapp.com/avatars/416358583220043796/8f702ebf579bce2d7a6f0a4419ac5faf.webp?size=1024")
         .setDescription("Just a bot")
         .addField("Invite", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=856932863059820564&scope=bot&permissions=1)", true)
         .addField("Develop with help of Djs discord coding server", "[Click Here](https://discord.club/djs)")
         .addField("Prefix", "q.", true)
         .addField("Guilds", client.guilds.size, true)
         .addField("Users:", 
         client.users.size, true)
         .setColor("#00ff00")   
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}