import { Events } from 'discord.js';
import {  SkyBotEventHandler } from '../../class/event';

export default new SkyBotEventHandler({
  event: Events.InteractionCreate,
  async on(interaction) {
    if (!interaction.inCachedGuild()) return;
    if (!interaction.isButton()) return;

    const [commandName, buttonId] = interaction.customId.split(':');
    const command = this.commands.get(commandName);

    if (!command) return;
    if (!command.onButton) return;

    if (command.defer) {
      await interaction.deferUpdate();
    }

    await command.onButton.call(this, interaction, buttonId);
  },
});