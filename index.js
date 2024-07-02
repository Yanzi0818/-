const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { handleCommand , handleInteraction , } = require('./features/customCommands');


// 創建一個新的客戶端實例
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

// 當客戶端準備就緒時運行這段代碼（僅運行一次）
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});


// 處理訊息創建事件
client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith('%')) {
    try {
      const replyMessage = await handleCommand(message);
      if (replyMessage) {
        message.reply(replyMessage);
      }
    }
    catch (err) {
      console.error(err);
      message.reply('發生錯誤,指令處理失敗。');
    }
  }
});



client.on('interactionCreate', async (interaction) => {
  await customCommands.handleInteraction(interaction);
});

// 登入到 Discord，使用客戶端的 token
client.login(token);
