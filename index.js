const https = require('https');

class fuck {

    constructor(client, debug, subReddit) { // whoa thats a pretty cool constructor
        this.client = client
        this.debug = debug
        this.subReddit = subReddit
    }

    async insultSkid(message) { // The main man for the insults
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
        if (!message.mentions.users.first()) return message.channel.send(`Please include a user to insult.`).catch(e => {});
        if (!this.subReddit) {
            https.get('https://insult.mattbas.org/api/insult/logan', (result) => {
                var body = ''
                result.on('data', (chunk) => {
                    body += chunk
                })

                result.on('end', () => {
                    message.channel.send(`<@${message.mentions.users.first().id}>, ${body}`).catch(e => { if (this.debug) return console.log(e); })
                })
            })

        } else {
            https.get(`https://www.reddit.com/r/${this.subReddit}/hot/.json?limit=100`, (result) => {
                var body = ''
                result.on('data', (chunk) => {
                    body += chunk
                })

                result.on('end', () => {
                    var response = JSON.parse(body)
                    var index = response.data.children[Math.floor(Math.random() * 99) + 1].data
                    var title = index.title

                    message.channel.send(`<@${message.mentions.users.first().id}>, ${title}`).catch(e => { if (this.debug) return console.log(e); })
                }).on('error', function(e) {
                    if (this.debug) return console.log(e);
                })
            })
        }
    }
}

module.exports = fuck;