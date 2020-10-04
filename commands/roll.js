const nubmer = 0;
const epic = 0;

function getRandomString(length) {
    var randomChars = '0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

module.exports = {
    name: 'roll',
    description: "idk lol",
    execute(message, args){
        console.log(args)
        if (args.length < 0){
            number = args[0];
        }
        else{
            number = 0;
        }
        if(isNaN(number)){
            message.channel.send("that's not a number you boomer")
        }else{
            if(number < 51){
                message.channel.send(getRandomString(number));
            }else{
                message.channel.send("big numbers are a no no")
            }
        }
    }
}