
let test = 'gamer'





module.exports = {
    name: 'channel',
    description: "for testing duh",
    execute(message, args){

        message.channel.send('test' + test);
    }
}