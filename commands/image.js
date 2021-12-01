var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'sends an image to discord channel',
    async execute(message,args, cmd, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.reply('aramak istediğin şeyi adam gibi gir!')

        const image_results = await google.scrape(image_query, 1);
        message.reply(image_results[0].url);
    }
}