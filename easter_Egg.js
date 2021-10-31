const { RichEmbed } = require("discord.js");
module.exports = class extra {
    constructor() {
        this.name = "easter-egg",
        this.alias = ["ee"],
        this.usage = "q.ee"
    }

    async run(client, message, args) {
      message.delete();
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Easter Egg`)
            .setDescription(`**This bot was made by help of the __Js coding community__, we tried to make it better.**
[Discord Javascript Coding Community](https://discord.gg/djs)`)
            .setColor("#00ff00")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}
