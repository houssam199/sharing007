const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`https://discord.gg/mMtUmyf`,`https://discord.gg/mMtUmyf`,`https://discord.gg/mMtUmyf`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login(process.env.BOT_TOKEN)
