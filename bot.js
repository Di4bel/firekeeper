const Discord = require("discord.js");

const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    if (message.content === "hello") {
    	message.channel.send("Welcome Home, ashen one. Speak thine heart's desire");
  	}
 if(cmd === `hello`){
  return message.channel.send("Welcome Home, ashen one. Speak thine heart's desire");
}
  if(cmd === 'firekeeper_soul'){
  return message.channel.send("…Ashen one, this is.. …much like what lies within me… Then let it find its own place, within my bosom. She will understand. We are both Fire Keepers, after all");
}

});









  client.login(process.env.BOT_TOKEN);
