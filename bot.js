const Discord = require("discord.js");

const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity("at the firelink shrine");
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
    if (message.content === "Knight") {
    	message.channel.send("The Knight Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/knight_small.jpg");
  	}
         if (message.content === "Mercenary") {
    	message.channel.send("The Mercenary CLass  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/mercenary_small.jpg");
  	}
   if (message.content === "Warrior") {
    	message.channel.send("The Warrior Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/warrior_small.jpg");
  	}
   if (message.content === "Herald") {
    	message.channel.send("The Herald Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/herald_small.jpg");
  	}
   if (message.content === "Thief") {
    	message.channel.send("The Thief Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/thief_small.jpg");
  	}
   if (message.content === "Assassin") {
    	message.channel.send("The Assassin Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/assassin_small.jpg");
  	}
   if (message.content === "Sorcerer") {
    	message.channel.send("The Sorcerer Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/sorcerer_small.jpg");
  	}
   if (message.content === "Pyromancer") {
    	message.channel.send("The Pyromancer Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/pyromancer_small.jpg");
  	}
   if (message.content === "Cleric") {
    	message.channel.send("The Cleric Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/cleric_small.jpg");
  	}
   if (message.content === "Deprived") {
    	message.channel.send("The Deprived Class  https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/deprived_small.jpg");
  	}
  if (message.content === "Classes") {
      message.channel.send("Knight  Mercenary  Warrior  Herald  Thief  Assassin  Sorcerer  Pyromancer  Cleric  Deprived ");
    }
  



});









  client.login(process.env.BOT_TOKEN);
