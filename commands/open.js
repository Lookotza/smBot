var fs = require('fs');
var files = fs.readdirSync('./items');

module.exports = {
    name: 'open',
    description: "now",
    execute(message, args){

//         message.channel.send({files: ["./items/UnstablePowerCell.png"]
// });

        message.channel.send({files: ["./items/" + files[Math.ceil(Math.random() * 220)]]
});

    }
}