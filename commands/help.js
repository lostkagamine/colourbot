module.exports = {
    name: 'help',
    description: 'help menu',
    async code(ctx, args) {
        let out = 'Hello, I am a small utility bot created by ry00001#3487. My commands are listed below: ```\n'
        for (let i of ctx.bot.commands) {
            if (i.hidden) continue
            out += `${i.name}: ${i.description || 'No description'}\n`
        }
        out += '```'
        await ctx.send(out)
    }
}