const { Bot } = require("grammy");
const config = require("../config/config");

const bot = new Bot(config.bot);

bot.api.setMyCommands([
    { command: "start", description: "Запуск бота" },
    { command: "help", description: "Помощь" },
    { command: "apply", description: "Вступить в группу" },
]);
module.exports = bot;

