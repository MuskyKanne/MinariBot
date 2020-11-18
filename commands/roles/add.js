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
        let karina = message.guild.roles.cache.find(role => role.name === '「 Karina 」');
        let giselle = message.guild.roles.cache.find("778587393128529920");
        let winter = message.guild.roles.cache.find("778587522883256341");
        let ningning = message.guild.roles.cache.find("778587286538289162");

        if (args.option === 'karina') return message.author.roles.add(karina);
        if (args.option === 'giselle') return message.author.role.add(karina);
        if (args.option === 'winter') return message.reply('squirtle');
        if (args.option === 'ningning') return message.reply('pikachu');
    }
}

module.exports = PokemonCommand;