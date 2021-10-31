const { RichEmbed } = require("discord.js"); 

module.exports = class invite {
    constructor() {
        this.name = "invite",
        this.alias = [],
        this.usage = "q.invite"
    }
    async run(client, message, args) {
      message.delete();
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**Invite Cjyn**
[Cjyn](https://discordapp.com/api/oauth2/authorize?client_id=856932863059820564&permissions=8&scope=bot).`)
            .setColor("#00ff00")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}