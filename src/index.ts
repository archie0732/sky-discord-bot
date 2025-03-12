import 'dotenv/config';
import { SkyBotClient } from '@/class/client';
import { GatewayIntentBits } from 'discord.js';

import type { ClientOptions } from 'discord.js';


const options = {
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent],
} satisfies ClientOptions;


const client = new SkyBotClient(options);

client.login(process.env['DISCORD_DEV_TOKEN']).catch(console.error);