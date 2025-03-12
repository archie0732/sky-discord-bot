import { Events } from 'discord.js';
import {  SkyBotEventHandler } from '../../class/event';

import logger from '@/class/logger';

export default new SkyBotEventHandler({
  event: Events.MessageCreate,
  async on(message) {
    if(message.content ==='天空'){
        await message.reply('在狗叫甚麼')
    }
    logger.info(`the message has been reply`)
  },
});