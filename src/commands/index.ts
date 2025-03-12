import type { SkyBotCommand } from '../class/command';

import ping from './tools/ping'
import sky_quotes from './quotes/sky_quotes';
import test from './tools/test';



export default [ ping, sky_quotes,test ] as SkyBotCommand[];