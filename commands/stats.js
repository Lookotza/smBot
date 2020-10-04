const fetch = require('node-fetch');
const apiURL = 'http://workshop-unlimited.web.app/items';
const myItemsPack = require('../items-pack.json');
const Discord = require('discord.js');
//const exampleEmbed = new Discord.MessageEmbed()



let items = myItemsPack.items;
let value

for (const item of items) {
  item.image = item.image.replace('%url%', '');
//  item.image = item.image.replace('%url%', myItemsPack.config.base_url);
}
//fetch(apiURL).the n(res => {
  // WU api sends json, so get the json data of the response
//  return res.json();
//}).then(itemsPack => {
//    items=itemsPack.items;
  // here you have the items pack, to get the items, you use itemsPack.items
//  console.log(itemsPack.items);
//});
console.log(myItemsPack.config);

module.exports = {
    name: 'stats',
    description: "abc",
    execute(message, args){
        const item = items.find(item => {


//          if(args[args.length - 1] === 'd'){
            if (item.name.toLowerCase() === args.slice(0, -1).join(' ').toLowerCase() || item.name.toLowerCase() === args.join(' ').toLowerCase()) {
              return true;
            }
//          }else{
//            if (item.name === args.join(' ')) {
//                return true;
//            }
//          }
        });
    
    
    
    
        console.log(item);
    if(item) {
      let response = [];


      if(args[args.length - 1] === '+divine'){
      for (const statName in item.stats) {

        if(item.divine[statName] && item.stats[statName]){
          value = item.divine[statName]
        }else{
          value = item.stats[statName]

        }
        
        if(value.length > 0){
          response += statName +': ' + value[0] + '-' + value[1] + '\n';
        }else{
          response += statName + ': ' + value + '\n';
        }
        }
      }else{

      
            for (const statName in item.stats) {

        
        if(item.stats[statName].length > 0){
          response += statName +': ' + item.stats[statName][0] + '-' + item.stats[statName][1] + '\n';
        }else{
          response += statName + ': ' + item.stats[statName] + '\n';
        }
        }
      }
      
      
      
        
        
        
        const exampleEmbed = new Discord.MessageEmbed()
          .attachFiles('./items/' + item.image)
          .setImage('attachment://' + item.image)
          exampleEmbed.addField( item.name, response) 

      if(item.element === 'PHYSICAL'){
        exampleEmbed.setColor('#FFB81C')
      }if(item.element === 'ELECTRIC'){
        exampleEmbed.setColor('#4D4DFF')
      }if(item.element === 'EXPLOSIVE'){
        exampleEmbed.setColor('#BB0000')
      }


      message.channel.send(exampleEmbed);
    }else{
      message.channel.send('not a real item')
    }
  }
}

