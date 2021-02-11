const { group } = require('console');
var fs = require('fs');
var foo = fs.readdirSync('./box_items');

module.exports = {
    name: 'open',
    description: "now",
    execute(message, args){

        let rarity = Math.ceil(Math.random() * 1000);

        if(rarity <= 650){
            rarity = 0;
        }else{
            rarity = 1;
        }

        console.log(rarity);
        console.log(foo[rarity]);
        console.log(foo);
        
        var types = fs.readdirSync('./box_items' +'/' + foo[rarity]);

        let type = Math.ceil(Math.random() * 6) - 1;
        console.log(type);
        console.log(types[type]);

        var items = fs.readdirSync('./box_items'+'/'+ foo[rarity] + '/' + types[type]);

        console.log('./box_items'+'/'+ foo[rarity] + '/' + types[type] + '/' + items[Math.ceil(Math.random() * items.length) - 1])

        message.channel.send({files: ['./box_items'+'/'+ foo[rarity] + '/' + types[type] + '/' + items[Math.ceil(Math.random() * items.length) - 1]] });

    }
}

