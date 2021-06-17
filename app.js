require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const { cursorTo } = require('readline');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.login(process.env.TOKEN)

bot.once('ready', () => {
    console.log('Bot is ready...');
});

const set_cmd = () => {
    const files = fs.readdirSync('./commands').filter(cur => cur.endsWith('.js'));
    for (let elm in files) {
        const command = require(`./commands/${files[elm]}`);
        bot.commands.set(command.name, command);
    }
    console.log('Commands were setted...');
}

set_cmd();

bot.on('message', message => {
    console.log('Message received...');
    if (message.author.bot) return;

    let args = message.content.split(' ');
    let command = args.shift();

    // console.log(command, args);
    let cmd_obj = bot.commands.get(command);
    if (!cmd_obj) {
        return message.channel.send('There is not a command for that');
    }

    if (cmd_obj.args && !args.length) {
        return message.channel.send(cmd_obj.usage);
    } else if (!cmd_obj.args) {
        return cmd_obj.execute(message);
    }

    return cmd_obj.execute(message, args);
});