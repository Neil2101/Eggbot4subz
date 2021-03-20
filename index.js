function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "/";
const token = 'NzkwNzUyMjI3ODU3MDA2NjEy.X-FLZg.Ggaowbmb6Ib5oio6PEq1M561y-4';
array = ['Egg-celent',"eggy","pegg","peggapig"]
bot.on('ready',() => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('the commands',({type:"LISTINING"}))
})

bot.on('message',message=>{
    let egg = message.content.toLowerCase()
    if (egg.includes('egg')){
        message.react('🥚')}
    
})
bot.on('message',message=>{
    let egg=message.content.toLowerCase()
    if (egg.includes('plant'))
    message.react('🍆')
    
})
bot.on('message',message=>{
    let egg=message.content.toLowerCase()
    if (egg.includes('^egg-puns'))
    message.channel.send(array[getRandomInt(3)]);
    
})

bot.login(token);