import {
    ChatInputApplicationCommandData,
    CommandInteraction,
    CommandInteractionOptionResolver,
    GuildMember,
    PermissionResolvable
} from "discord.js";
import { ExtendedClient } from "../structure/client";

interface RunOptions {
    client: ExtendedClient,
    interaction: CommandInteraction,
    args: CommandInteractionOptionResolver;

}

type RunFunc = (options: RunOptions) => any;

export type CommandType = { 
    userPermissions?: PermissionResolvable[];
    
    run: RunFunc
} & ChatInputApplicationCommandData