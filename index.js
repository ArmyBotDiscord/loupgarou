const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = "*";

bot.login(process.env.TOKEN);

bot.on("ready", () => {
    bot.user.setGame("Regarder des mangas");
    console.log("Je suis prêt !");

});

bot.on('message', async message => { 

    if(message.content === "Bonjour"){
        message.reply("Salut");
    }

    if(message.content === "bjr"){
        message.reply("Salut");
    }

    if(message.content === "bonjour"){
        message.reply("Salut");
    }

    if(message.content === "Bjr"){
        message.reply("Salut");
    }
});
