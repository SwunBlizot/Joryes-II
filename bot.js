const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == '!ping') {
        //message.reply('pong');
        message.channel.sendMessage('Pong')
    }
   
});

bot.on('message', (message) => {

    if(message.content == 'XD') {
        //message.reply('pong');
        message.channel.sendMessage('SEMI STOP DOING THAT!')
    }
   
});

bot.on('message', (message) => {

    if(message.content == '!jordi') {
        //message.reply('pong');
        message.channel.sendMessage('Do you want a date ? (only boys :smirk:)')
    }
   
});

bot.on('message', (message) => {

    if(message.content == 'facepalm') {
        //message.reply('pong');
        message.channel.sendMessage('JORDI STOP DOING THAT!')
    }
   
});

bot.login(process.env.BOT_TOKEN);
