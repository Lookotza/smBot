module.exports = {
    name: 'help',
    description: "to find out channel id",
    execute(message, args){
        // console.log(message.channel.id)
        // message.channel.id = '692184931274719263'
        // message.channel.parentID = '692184655650226186'
         message.channel.send('there is no help\ntake of your clothes');
    }
}


