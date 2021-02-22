const Discord = require('discord.js');
const client = new Discord.Client();





const app = require('express')();
const server = require('http').createServer(app);
app.get('/', (req, res) => res.send('Placeholder!'));
server.listen(process.env.PORT || 3000);

//setInterval(() => console.log('10 seconds have passed'), 10000);
//setInterval(() => fetch('https://tiamat.thearchives.repl.co'), 600000);




const prefix = '`';

const fs = require('fs');

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
    
        if(message.author.id==='265282521619628043' || '581693518435581957'){
        message.channel.send('shut up n00b');
        return;
        }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(args)

   if(command === 'roll'){
        client.commands.get('roll').execute(message, args);
    }else if(command === 'stats'){
        client.commands.get('stats').execute(message, args);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }else if(command === 'open'){
        client.commands.get('open').execute(message, args);
    }
});

const TOKEN = process.env.BOT_TOKEN || require('./token.json');
client.login(TOKEN);



client.login(TOKEN);