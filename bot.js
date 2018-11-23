const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "507585260217958415"; 
var channel = "507586248748040204";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما  ماما جابت اندومي ماما جابت اندومي  **')
    },305);
})








client.login(process.env.BOT_TOKEN);
