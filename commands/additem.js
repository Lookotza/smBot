// const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants')
const fs = require('fs')
build = ',{\n' + '"name":' + '"'



// ',/n
// {/n
// "name":' + args[0] + ',/n
// "image":"%url%doG.jpg",/n
// "stats":{
//    "stat1":' + args[1]/n
// }/n
// }/n
// ]/n
// }


module.exports = {
    name: 'additem',
    description: "epic",
    execute(message, args){
      let t = 0
      let x = args.length - 1;
      for(i=1; i<x; i+=2){
        if(isNaN(args[i+1])){
          t++;
        }
      }
    if(t==0){  
        build = build + args[0] + '",\n' + '"image":"%url%doG.jpg",\n' + '"creator":"' + message.author.username +'",\n' + '"stats":{\n'
        message.channel.send('epic')
      let x = args.length - 1;
      for(i=1; i<x; i+=2){
        build = build + '"' + args[i] + '":' + args[i+1] + ',\n';
      }
      build = build.slice(0, build.length - 2);
      build = build + '\n' + '}\n' + '}\n' + ']\n' + '}\n';
      // build = build + '"' + args[0] + '",\n' + '"image":"%url%doG.jpg",\n' + '"stats":{\n' + '"stat1":' + args[1] + '\n' + '}\n' + '}\n' + ']\n' + '}\n'

      fs.readFile('items-pack.json', 'utf-8', (err, data) => { 
        if (err) throw err; 

        if (args.length > 0){
        
            fs.writeFile('items-pack.json', data.slice(0, data.length - 5) + build, err => { //+ build

                console.log('Worked');
                console.error(err);
              });
    
            } 
    }) 


  }else{
    message.channel.send('stats have to be numbers');
  }


        }
    }