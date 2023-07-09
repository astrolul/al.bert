const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
        .setTitle('🟢 Bot Is Currently Online')
        .setImage('https://i.imgur.com/uAPCTuO.jpeg')
        .setColor(0x78B159)
        
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('A Simple Command to check if the Bot is online or not.'),
    async execute(interaction)  {
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};