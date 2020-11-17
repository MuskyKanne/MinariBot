require('dotenv').config();
const { MINA_TOKEN, DONO } = process.env;
const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');

const { join } = require('path');

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: DONO
        }, {
            disableMentions: 'everyone'
        });
        this.commandHandler = new CommandHandler(this, {
            directory: join(__dirname, "commands"),
            prefix: 'xx!'
        });

        //final
        this.commandHandler.loadAll();
    }
}

const client = new MyClient();
client.login(MINA_TOKEN);