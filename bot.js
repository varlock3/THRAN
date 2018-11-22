const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("muuuuuuuuute,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("497089759831916546");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Ꮃelcome Ꭲo Ꮪerver Throné**`), 2000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "497120866988064778" && ch.type === 'voice').join();

});




client.login(process.env.BOT_TOKEN);
