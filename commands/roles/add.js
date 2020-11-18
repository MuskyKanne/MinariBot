const { Command } = require('discord-akairo');

class PokemonCommand extends Command {
    constructor() {
        super('add', {
            aliases: ['add'],
            args: [
                {
                    id: 'option',
                    type: ['karina', 'giselle', 'winter', 'ningning'],
                    prompt: {
                        start: '',
                        retry: 'Essa role não existe!',
                        optional: true
                    }
                }
            ]
        });
    }

    exec(message, args) {
        const karina = message.guild.roles.cache.get("778586926956544020");
        if (args.option === 'karina') return message.author.roles.add(karina);
    }
}

module.exports = PokemonCommand;