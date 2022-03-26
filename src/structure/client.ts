import { Client, Collection } from "discord.js";
import { CommandType } from "../typings/command";

export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();
     
    constructor() {
        super({intents: 32767});
    }

    statr() {
        this.registerModules();
        this.login(process.env.botToken);
    }

    async registerModules() {

    }
}