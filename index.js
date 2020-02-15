var Botkit = require('./node_modules/botkit/lib/Botkit.js');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: 'seu token aqui'
}).startRTM();


controller.hears(['oi', 'olá'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "Olá, humano, como posso ajudar?";

    bot.reply(message, helloText);
});

controller.hears(['tchau'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "Já está indo?";

    bot.reply(message, helloText);
});
