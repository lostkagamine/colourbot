module.exports = {
    name: 'eval',
    description: 'evaluates',
    owner: true,
    async code(ctx, args) {
        let j = args.join(' ')
        let code = `(async () => {${j}})()` // nasty closure hack
        let r = await eval(code);
        if (r) {
            return await ctx.send(`\`\`\`\n${r}\`\`\``)
        } else {
            return await ctx.send('```\nNo output.```')
        }
    }
}