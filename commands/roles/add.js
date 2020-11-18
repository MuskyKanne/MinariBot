const { Command } = require('discord-akairo');

class PokemonCommand extends Command {
    constructor() {
        super('pokemon', {
            aliases: ['pokemon'],
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
        if (args.option === 'karina') return message.reply('bulbasaur');
        if (args.option === 'giselle') return message.reply('charmander');
        if (args.option === 'winter') return message.reply('squirtle');
        if (args.option === 'ningning') return message.reply('pikachu');
    }
}

module.exports = PokemonCommand;