module.exports = {
    name: 'clear',
    description: "Clear messages",
    async execute(message,args, cmd, client, Discord){
        if(!args[0]) return message.reply("Kaç mesaj sileceğini söyle hırt.");
        if(isNaN(args[0])) return message.reply("Düzgün sayı gir piç.");
        if(args[0] > 100) return message.reply("100'den küçük gir hayvan.");
        if(args[0] < 1) return message.reply("Akıllımısın olm sen, adam gibi sayı gir.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}