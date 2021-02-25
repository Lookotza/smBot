const fetch = require('node-fetch');
const apiURL = 'http://workshop-unlimited.web.app/items';
const myItemsPack = require('../items-again.json');
const Discord = require('discord.js');
const arenaBuffs = require('../arenaBuffs.js');
const e = require('express');



let items = myItemsPack.items;
let value
let multiplier = {}

for (const item of items) {
  item.image = item.image.replace('%url%', '');
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


  if (item.name.toLowerCase() === args.join(' ').toLowerCase()) {
              return true;
            }
        });

        
    
    
    
        console.log(item);
    if(item) {
      let response = [];

            for (const statName in item.stats) {

              const stat = statsMap[statName];

        
        if(item.stats[statName].length > 0){
          response += stat.name +': `' + Math.ceil(arenaBuffs(statName, item.stats[statName][0])) + '-' + Math.ceil(arenaBuffs(statName, item.stats[statName][1])) + '`\n';
        }else{
          response += stat.name + ': `' + Math.ceil(arenaBuffs(statName, item.stats[statName])) + '`\n';
        }
        }


        
        
        const exampleEmbed = new Discord.MessageEmbed()
          .attachFiles('./items/' + item.image)
          .setImage('attachment://' + item.image)
          exampleEmbed.addField(item.name, response)
          

      if(item.element === 'PHYSICAL'){
        exampleEmbed.setColor('#FFB81C')
      }if(item.element === 'ELECTRIC'){
        exampleEmbed.setColor('#4D4DFF')
      }if(item.element === 'EXPLOSIVE'){
        exampleEmbed.setColor('#BB0000')
      }


message.channel.send(exampleEmbed);


// message.react('🇩').then(r => {
//   message.react('🇦').then(r => {
//           message.react('🇧');
//   });
// });



      
//       const messagePromise = message.channel.send(exampleEmbed);

//       // "then" method is used to run code when the promise is resolved
//       // "catch" method is used to handle promise rejections
//       messagePromise
//         .then(botMsg => {

//               message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '🇩' || reaction.emoji.name == '🇦' || reaction.emoji.name == '🇧'),
//               { max: 1, time: 30000 }).then(collected => {
//                       if (collected.first().emoji.name == '🇩') {


//                         response = []
//                         for (const statName in item.stats) {
                          
//                           const stat = statsMap[statName];

//                           if(item.divine[statName] && item.stats[statName]){
//                             value = item.divine[statName]
//                           }else{
//                             value = item.stats[statName]
                  
//                           }
                          
//                           if(value.length > 0){
//                             response += stat.name +': `' + value[0] + '-' + value[1] + '`\n';
//                           }else{
//                             response += stat.name + ': `' + value + '`\n';
//                           }
//                             }
                          
//                           exampleEmbed.fields = []
//                           exampleEmbed.addField(item.name, response) 
//                           botMsg.edit(exampleEmbed);
//                           message.delete();


                        
                                
//                       }
//                       else if (collected.first().emoji.name == '🇦') {

//                         response = []

//                         for (const statName in item.stats) {

//                           const stat = statsMap[statName];
        
//                           if(item.stats[statName].length > 0){
//                             response += stat.name +': `' + Math.ceil(arenaBuffs(statName, item.stats[statName][0])) + '-' + Math.ceil(arenaBuffs(statName, item.stats[statName][1])) + '`\n';
//                           }else{
//                             response += stat.name + ': `' + Math.ceil(arenaBuffs(statName, item.stats[statName])) + '`\n';
//                           }
//                           } 

                        
//                         exampleEmbed.fields = []
//                         exampleEmbed.addField(item.name, response) 
//                         botMsg.edit(exampleEmbed);
//                         message.delete();
//                       }
//                       else{

//                         response = []

//                         for (const statName in item.stats) {

//                           const stat = statsMap[statName];

//                           if(item.divine[statName] && item.stats[statName]){
//                             value = item.divine[statName]
//                           }else{
//                             value = item.stats[statName]
                  
//                           }
                          
//                           if(value.length > 0){
//                             response += stat.name +': `' + Math.ceil(arenaBuffs(statName, value[0])) + '-' + Math.ceil(arenaBuffs(statName, value[1])) + '`\n';
//                           }else{
//                             response += stat.name + ': `' + Math.ceil(arenaBuffs(statName, value)) + '`\n';
//                           }
//                             }


//                         exampleEmbed.fields = []
//                         exampleEmbed.addField(item.name, response) 
//                         botMsg.edit(exampleEmbed);
//                         message.delete();
//                       }
//               })
              



//         })
//         .catch(error => {
//           // Bot failed to send the message
//           console.log('no reaction')
//         });







    }else{
      message.channel.send('not a real item')
    }
  }
  }


  const statsMap = {
    weight: {
      key: 'weight',
      name: 'Weight',
      type: 'number',
      buff: null
    }, 
    health: {
      key: 'health',
      name: 'Health',
      type: 'number',
      buff: {
        mode: 'add',
        amount: 350
      }
    }, 
    eneCap: {
      key: 'eneCap',
      name: 'Energy Capacity',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    eneReg: {
      key: 'eneReg',
      name: 'Energy Regeneration',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    heaCap: {
      key: 'heaCap',
      name: 'Heat Capacity',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    heaCol: {
      key: 'heaCol',
      name: 'Cooling',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    phyRes: {
      key: 'phyRes',
      name: 'Physical Resistance',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.4
      }
    }, 
    expRes: {
      key: 'expRes',
      name: 'Explosive Resistance',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.4
      }
    }, 
    eleRes: {
      key: 'eleRes',
      name: 'Electric Resistance',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.4
      }
    }, 
    phyDmg: {
      key: 'phyDmg',
      name: 'Physical Damage',
      type: 'range',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    phyResDmg: {
      key: 'phyResDmg',
      name: 'Physical Resistance Damage',
      type: 'number',
      buff: null
    }, 
    eleDmg: {
      key: 'eleDmg',
      name: 'Electric Damage',
      type: 'range',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    eneDmg: {
      key: 'eneDmg',
      name: 'Energy Damage',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    eneCapDmg: {
      key: 'eneCapDmg',
      name: 'Energy Capacity Damage',
      type: 'number',
      buff: null
    }, 
    eneRegDmg: {
      key: 'eneRegDmg',
      name: 'Energy Regeneration Damage',
      type: 'number',
      buff: null
    }, 
    eleResDmg: {
      key: 'eleResDmg',
      name: 'Electric Resistance Damage',
      type: 'number',
      buff: null
    }, 
    expDmg: {
      key: 'expDmg',
      name: 'Explosive Damage',
      type: 'range',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    heaDmg: {
      key: 'heaDmg',
      name: 'Heat Damage',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 1.2
      }
    }, 
    heaCapDmg: {
      key: 'heaCapDmg',
      name: 'Heat Capacity Damage',
      type: 'number',
      buff: null
    }, 
    heaColDmg: {
      key: 'heaColDmg',
      name: 'Cooling Damage',
      type: 'number',
      buff: null
    }, 
    expResDmg: {
      key: 'expResDmg',
      name: 'Explosive Resistance Damage',
      type: 'number',
      buff: null
    }, 
    walk: {
      key: 'walk',
      name: 'Walking Distance',
      type: 'number',
      buff: null
    }, 
    jump: {
      key: 'jump',
      name: 'Jumping Distance',
      type: 'number',
      buff: null
    }, 
    range: {
      key: 'range',
      name: 'Range',
      type: 'range',
      buff: null
    }, 
    push: {
      key: 'push',
      name: 'Knockback',
      type: 'number',
      buff: null
    }, 
    pull: {
      key: 'pull',
      name: 'Pull',
      type: 'number',
      buff: null
    }, 
    recoil: {
      key: 'recoil',
      name: 'Recoil',
      type: 'number',
      buff: null
    }, 
    advance: {
      key: 'advance',
      name: 'Advance',
      type: 'number',
      buff: null
    }, 
    retreat: {
      key: 'retreat',
      name: 'Retreat',
      type: 'number',
      buff: null
    }, 
    uses: {
      key: 'uses',
      name: 'Uses',
      type: 'number',
      buff: null
    }, 
    backfire: {
      key: 'backfire',
      name: 'Backfire',
      type: 'number',
      buff: {
        mode: 'mul',
        amount: 0.8
      }
    }, 
    heaCost: {
      key: 'heaCost',
      name: 'Heat Generation',
      type: 'number',
      buff: null
    }, 
    eneCost: {
      key: 'eneCost',
      name: 'Energy Consumption',
      type: 'number',
      buff: null
    }
  };
  