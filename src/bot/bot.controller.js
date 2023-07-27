const {userService} = require("../services");
const bot = require('./bot');


const start = bot.command("start", async (ctx) => {
    console.log(ctx.message);
    const userRequest = {
        tgUid: ctx.from.id,
        userName: ctx.from.username,
    };
    const user = await userService.getUserByTgUid(userRequest.tgUid);
    if (!user) {
        await userService.createUser(userRequest);
    }
    await ctx.api.sendMessage(ctx.chat.id, `Hey ${ctx.chat.first_name}`);
});

const help = bot.command("help", async (ctx) => {
    console.log(ctx.message);
    await ctx.api.sendMessage(ctx.chat.id, `Hey ${ctx.chat.first_name}`);
});

const apply = bot.command("apply", async (ctx) => {
    console.log(ctx.message);
    await ctx.api.sendMessage(ctx.chat.id, `Hey ${ctx.chat.first_name}`);
});

const message = bot.on("message", async (ctx) => {
    console.log("MESSAGE", ctx.message);
    console.log("FROM", ctx.from);
    console.log("CHAT", ctx.chat);
    await ctx.api.sendMessage(ctx.chat.id, `${ctx.from.first_name}, Я вас не понимаю. Выберите пожалуйста команду`);
});

module.exports = {
    start,
    message,
    help,
    apply,
};
