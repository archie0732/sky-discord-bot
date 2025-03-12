import {  SlashCommandBuilder } from '@discordjs/builders';
import {  SkyBotCommand } from '../../class/command';
import { resolve } from 'path'
import { readdirSync } from 'fs'
import logger from '@/class/logger';


export default new SkyBotCommand({
  builder: new SlashCommandBuilder()
    .setName('test')
    .setDescription('just for developer!'),
  defer: false,
  ephemeral: false,
  async execute(interaction) {
    const folder = readdirSync(resolve('data','sky_quotes'))

    for(const file of folder){
        logger.debug(file)
    }

    await interaction.reply('debug success!')
  },
});