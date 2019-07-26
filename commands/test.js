module.exports = {
    name: 'test',
    description: 'test command',
    hidden: true,
    async code(ctx, args) {
        await ctx.send('holy hell it worked')
    }
}