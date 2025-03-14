import { Events } from 'discord.js';
import { SkyBotEventHandler } from '../../class/event';

export default new SkyBotEventHandler({
  event: Events.InteractionCreate,
  async on(interaction) {
    if (!interaction.inCachedGuild()) return;
    if (!interaction.isChatInputCommand()) return;

    const command = this.commands.get(interaction.commandName);

    if (!command) return;

    if (command.defer && !command.modals) {
      await interaction.deferReply({
        ephemeral: command.ephemeral,
      });
    }

    await command.execute.call(this, interaction);
  },
});