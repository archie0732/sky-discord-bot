import type { ClientEvents } from 'discord.js';
import type {  SkyBotClient } from './client';

type Events = keyof ClientEvents;

export interface SkyBotEventHandlerOptions<Event extends Events = Events> {
  event: Event;
  on?: (this: SkyBotClient, ...args: ClientEvents[Event]) => void | Promise<void>;
  once?: (this: SkyBotClient, ...args: ClientEvents[Event]) => void | Promise<void>;
}

export class SkyBotEventHandler<Event extends Events = Events> {
  event: Event;
  on?: (this: SkyBotClient, ...args: ClientEvents[Event]) => void | Promise<void>;
  once?: (this: SkyBotClient, ...args: ClientEvents[Event]) => void | Promise<void>;
  constructor(options: SkyBotEventHandlerOptions<Event>) {
    this.event = options.event;
    this.on = options.on;
    this.once = options.once;
  }
}