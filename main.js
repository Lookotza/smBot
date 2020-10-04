const Discord = require('discord.js');
const client = new Discord.Client();


const app = require('express')();
const server = require('http').createServer(app);
app.get('/', (req, res) => res.send('Placeholder!'));
server.listen(process.env.PORT || 3000);





const prefix = '`';

const fs = require('fs');
const channel = require('./commands/channel');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('kaT is online!');
});




client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.id === client.user.id) return;
    
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(args)

   if(command === 'roll'){
        client.commands.get('roll').execute(message, args);
    }else if(command === 'channel'){
        client.commands.get('channel').execute(message, args);
    }else if(command === 'stats'){
        client.commands.get('stats').execute(message, args);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
});

client.login(process.env.BOT_TOKEN);
