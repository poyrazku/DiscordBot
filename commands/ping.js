module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message,args, cmd, client, Discord){
        message.channel.send('pong!');
    }
}