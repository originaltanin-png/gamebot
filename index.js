const { Telegraf } = require('telegraf');
const http = require('http');

// توکن ربات شما
const BOT_TOKEN = '8202840322:AAHKy__CS5ZtiK9BjFWHHKYWhRVI3ztPZo8';
const bot = new Telegraf(BOT_TOKEN);

// پاسخ به استارت
bot.start((ctx) => {
  ctx.reply('ربات درحال اجراس');
});

// روشن شدن ربات
bot.launch().then(() => {
  console.log('Bot is running online!');
});

// سرور کمکی برای فعال ماندن سرویس در Koyeb
const PORT = process.env.PORT || 8000;
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is active');
}).listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
