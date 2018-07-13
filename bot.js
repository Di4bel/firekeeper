const Discord = require("discord.js");

const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    if (message.content === "hello") {
    	message.channel.send("Welcome Home, ashen one. Speak thine heart's desire");
  	}  
    if (message.content === "firekeeper_soul") {
    	message.channel.send("…Ashen one, this is.. …much like what lies within me… Then let it find its own place, within my bosom. She will understand. We are both Fire Keepers, after all");
  	}
     if (message.content === "eyes") {
    	message.channel.send("...Ashen one, are these... Are these eyes? How gracious of thee, ashen one. The very things we Fire Keepers have been missing.");
  	}
if (message.content === "new") {
    	message.channel.send("Welcome to the bonfire, Unkindled One. I am a Fire Keeper. I tend to the flame, and tend to thee. The Lords have left their thrones, and must be deliver'd to them. To this end, I am at thy side");
  	}



});









  client.login(process.env.BOT_TOKEN);
