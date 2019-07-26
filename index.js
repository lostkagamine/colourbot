const eris = require('eris')
const cfg = require('./config.json')
const Context = require('./src/Context');
const fs = require('fs');

const bot = new eris(cfg.token)

bot.config = cfg;

bot.commands = [];

var dir = fs.readdirSync('./commands')
for (let i of dir) {
    let a = require('./commands/'+i)
    bot.commands.push(a)
}

bot.on('ready', () => {
    console.log('ready')
})

bot.on('messageCreate', async msg => {
    if (msg.author.bot) return;
    let ctx = new Context(msg, bot);
    let content = msg.content;
    if (content.startsWith(cfg.prefix)) {
        let j = content.slice(cfg.prefix.length);
        let split = j.split(' ');
        let cname = split.shift();
        let co = bot.commands.find(a => a.name === cname || (a.aliases || []).includes(cname));
        if (co) {
            if (co.owner && !cfg.owners.includes(ctx.user.id)) return await ctx.send('Unauthorised.')
            await co.code(ctx, split);
        }
    }
})

bot.connect()