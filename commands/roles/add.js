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
        let karina = message.guild.roles.cache.get("778586926956544020");
        let giselle = message.guild.roles.cache.get("778587393128529920");
        let winter = message.guild.roles.cache.get("778587522883256341");
        let ningning = message.guild.roles.cache.get("778587286538289162");

        if (args.option === 'karina') {
            message.member.roles.add(karina)
            // remove
            message.member.roles.remove(giselle)
            message.member.roles.remove(winter)
            message.member.roles.remove(ningning)

            message.channel.send('Karina foi adicionada como bias :]')
        };

        if (args.option === 'giselle') {
            message.member.roles.add(giselle)
            // remove
            message.member.roles.remove(karina)
            message.member.roles.remove(winter)
            message.member.roles.remove(ningning)

            message.channel.send('Giselle foi adicionada como bias :]')
        };

        if (args.option === 'winter') {
            message.member.roles.add(winter)
            // remove
            message.member.roles.remove(giselle)
            message.member.roles.remove(karina)
            message.member.roles.remove(ningning)

            message.channel.send('Winter foi adicionada como bias :]')
        };

        if (args.option === 'ningning') {
            message.member.roles.add(ningning)
            // remove
            message.member.roles.remove(giselle)
            message.member.roles.remove(winter)
            message.member.roles.remove(karina)

            message.channel.send('Ningning foi adicionada como bias :]')
        };
    }
}

module.exports = PokemonCommand;