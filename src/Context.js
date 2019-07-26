module.exports = class Context {
    constructor(msg, bot) {
        this.message = msg
        this.user = msg.author
        this.member = msg.member
        this.channel = msg.channel
        this.guild = msg.channel.guild
        this.bot = bot
    }

    async send(...arg) {
        return await this.channel.createMessage(...arg);
    }
}