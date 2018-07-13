const Discord = require("discord.js");

const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.channel.send('Welcome Home, ashen one. Speak thine heart's desire')
  	}
});

client.on('message', message => {
    if (message.content === 'firekeeper_soul') {
    	message.reply('…Ashen one, this is.. …much like what lies within me… Then let it find its own place, within my bosom. She will understand. We are both Fire Keepers, after all')
  	}
});









  client.login(process.env.BOT_TOKEN);
