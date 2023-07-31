const {userService} = require("../services");
const bot = require('./bot');

function checkUserStatus(user, userName) {
    const user_id = user._id;
    const test_link = `http://127.0.0.1:4200/test/${user_id}`;
    let message_test = "";
    if (user.status === "INITIAL") {
        message_test = ` <i>${userName}</i>, Добро пожаловать в Tengri Securities! \nВот ваша ссылка на тест:  <a href="${test_link}">Пройти тест</a>`;
    } else if (user.status === "PASSED") {
        message_test = `<i>${userName}</i>, вы уже успешно прошли тестирование!`
    } else if (user.status === "FAILED") {
        message_test = `<i>${userName}</i>, к сожалению вы не прошли тестирование, свяжитесь с менеджером`
    }
    return message_test;
}

const start = bot.command("start", async (ctx) => {
    const userRequest = {
        tgUid: ctx.from.id,
        userName: ctx.from.username,
        status: "INITIAL",
    };
    let user = await userService.getUserByTgUid(userRequest.tgUid);
    if (!user) {
        user = await userService.createUser(userRequest);
    }
    const message = checkUserStatus(user, ctx.from.first_name);

    await ctx.api.sendMessage(ctx.chat.id, message, {parse_mode: "HTML"});
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
