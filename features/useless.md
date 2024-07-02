含按鈕指令

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!button') {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('primary')
          .setLabel('Click me!')
          .setStyle('PRIMARY'),
      );

    await message.reply({ content: 'Here is a sentence with a button:', components: [row] });
  }
});

點擊後指令

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'primary') {
    await interaction.reply('Button was clicked!');
  }
});

