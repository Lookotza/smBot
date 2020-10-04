let test = 'gamer'



module.exports = {
    name: 'channel',
    description: "to find out channel id",
    execute(message, args){

        message.channel.send('test' + test);
    }
}