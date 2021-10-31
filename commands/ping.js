const { RichEmbed } = require("discord.js");
module.exports = class ping {
    constructor() {
        this.name = "ping",
        this.alias = [],
        this.usage = "q.ping"
    }

    async run(client, message,args) {
        message.delete();
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            let pingEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`I have a **latency** of **${Math.round(client.ping)}ms**.`)
            .setColor("#00ff00")
            message.channel.send(pingEmbed)
        }catch(e) {
            throw e;
        }
    }
} 
