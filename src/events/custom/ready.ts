import { Events } from 'discord.js';
import {  SkyBotEventHandler } from '../../class/event';

import logger from '@/class/logger';

export default new SkyBotEventHandler({
  event: Events.ClientReady,
  async on(client) {
    logger.info(`Logged in as ${client.user.tag}`);
    await this.updateCommands();
  },
});