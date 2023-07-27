const { Bot } = require("grammy");
const config = require("../config/config");

const bot = new Bot(config.bot);

bot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "help", description: "Show help text" },
    { command: "apply", description: "Open settings" },
]);
module.exports = bot;

