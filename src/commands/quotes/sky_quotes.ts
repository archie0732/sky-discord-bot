import { SlashCommandBuilder } from '@discordjs/builders';
import { SkyBotCommand } from '../../class/command';
import fs from 'fs';
import { join, resolve } from 'path';
import { AttachmentBuilder } from 'discord.js';

const STICKER_DIR = resolve('data','sky_quotes');

export default new SkyBotCommand({
  builder: new SlashCommandBuilder()
    .setName('sky_quotes')
    .setNameLocalization('zh-TW', '搜尋貼圖')
    .setDescription('選擇一個天空哥的經典語錄')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('輸入貼圖名稱')
        .setRequired(true).setAutocomplete(true)
    ),

  defer: false,
  ephemeral: false,

  async execute(interaction) {
    const fileName = interaction.options.getString('name', true);
    const filePath = join(STICKER_DIR, fileName);

    if (!fs.existsSync(filePath)) {
       await interaction.reply({content:`❌ 找不到貼圖：${fileName}`,flags:1 << 6});
       return;
    }

    const attachment = new AttachmentBuilder(filePath);
    await interaction.reply({ files: [attachment] });
  },

 async onAutocomplete(interaction) {
  const focused = interaction.options.getFocused(true).value.toLocaleLowerCase();

  const files = fs.readdirSync(STICKER_DIR).filter(file =>
    /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
  );

  const filtered = files
    .filter(name => name.toLowerCase().includes(focused))
    .slice(0, 25);

  return filtered.map(name => ({
    name: name.split('.')[0].slice(0, 100),
    value: name
  }));
}

});
