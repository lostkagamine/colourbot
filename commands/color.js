module.exports = {
    name: 'color',
    aliases: ['colour'],
    async code(ctx, args) {
        if (!args[0]) {
            return await ctx.send(`Usage: \`${bot.config.prefix}color <hex colour code>\``)
        }
        let col = parseInt(args[0].toLowerCase(), 16);
        if (isNaN(col)) {
            return await ctx.send('That doesn\'t look like a valid hex colour.')
        }
        let searchS = `${ctx.user.username}#${ctx.user.discriminator}`;
        let role = ctx.guild.roles.find(a => a.name === searchS)
        if (!role) {
            role = await ctx.guild.createRole({
                name: searchS,
                color: col,
                hoist: false
            }, 'Role colour edit by ' + searchS)
            await ctx.member.addRole(role.id, 'Role colour edit by '+searchS)
        } else {
            await role.edit({
                color: col
            }, 'Role colour edit by ' + searchS)
        }
        await ctx.send('Done.')
    }
}