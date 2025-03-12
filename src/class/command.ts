import type {
  AnySelectMenuInteraction,
  ApplicationCommandOptionChoiceData,
  AutocompleteInteraction,
  Awaitable,
  ButtonInteraction,
  ChatInputCommandInteraction,
  ModalBuilder,
  ModalSubmitInteraction,
  SharedSlashCommand,
  SlashCommandSubcommandBuilder,
} from 'discord.js';
import type {  SkyBotClient } from '@/class/client';

export interface SkyBotCommandOptions {
  builder: SharedSlashCommand;
  defer: boolean;
  ephemeral: boolean;
  modals?: Record<string, ModalBuilder>;
  execute: (
    this: SkyBotClient,
    interaction: ChatInputCommandInteraction<'cached'>
  ) => Awaitable<void>;
  onAutocomplete?: (
    this: SkyBotClient,
    interaction: AutocompleteInteraction<'cached'>
  ) => Awaitable<readonly ApplicationCommandOptionChoiceData[]>;
  onButton?: (
    this: SkyBotClient,
    interaction: ButtonInteraction<'cached'>,
    buttonId: string
  ) => Awaitable<void>;
  onModalSubmit?: (
    this: SkyBotClient,
    interaction: ModalSubmitInteraction<'cached'>,
    modalId: string
  ) => Awaitable<void>;
  onSelectMenu?: (
    this: SkyBotClient,
    interaction: AnySelectMenuInteraction<'cached'>,
    menuId: string
  ) => Awaitable<void>;
}

export class SkyBotCommand implements SkyBotCommandOptions {
  builder: SharedSlashCommand;
  defer: boolean;
  ephemeral: boolean;
  modals?: Record<string, ModalBuilder>;
  execute: (
    this: SkyBotClient,
    interaction: ChatInputCommandInteraction<'cached'>
  ) => Awaitable<void>;

  onAutocomplete?: (
    this: SkyBotClient,
    interaction: AutocompleteInteraction<'cached'>
  ) => Awaitable<readonly ApplicationCommandOptionChoiceData[]>;

  onButton?: (
    this: SkyBotClient,
    interaction: ButtonInteraction<'cached'>,
    buttonId: string
  ) => Awaitable<void>;

  onModalSubmit?: (
    this: SkyBotClient,
    interaction: ModalSubmitInteraction<'cached'>,
    modalId: string
  ) => Awaitable<void>;

  onSelectMenu?: (
    this: SkyBotClient,
    interaction: AnySelectMenuInteraction<'cached'>,
    menuId: string
  ) => Awaitable<void>;

  constructor(options: SkyBotCommandOptions) {
    this.builder = options.builder;
    this.defer = options.defer;
    this.ephemeral = options.ephemeral;
    this.modals = options.modals;
    this.execute = options.execute;
    this.onAutocomplete = options.onAutocomplete;
    this.onButton = options.onButton;
    this.onModalSubmit = options.onModalSubmit;
    this.onSelectMenu = options.onSelectMenu;
  }
}

export interface SkyBotSubCommand<T = undefined> {
  builder: SlashCommandSubcommandBuilder;
  execute(
    this: SkyBotClient,
    interaction: ChatInputCommandInteraction<'cached'>,
    ..._: T extends undefined ? [undefined?] : [data: T]
  ): Awaitable<boolean | void>;
  onAutocomplete?: (
    this: SkyBotClient,
    interaction: AutocompleteInteraction<'cached'>
  ) => Awaitable<readonly ApplicationCommandOptionChoiceData[]>;
  onButton?: (
    this: SkyBotClient,
    interaction: ButtonInteraction<'cached'>,
    buttonId: string
  ) => Awaitable<void>;
  onModalSubmit?: (
    this: SkyBotClient,
    interaction: ModalSubmitInteraction<'cached'>,
    modalId: string
  ) => Awaitable<void>;
  onSelectMenu?: (
    this: SkyBotClient,
    interaction: AnySelectMenuInteraction<'cached'>,
    menuId: string
  ) => Awaitable<void>;
}