module.exports = {
    name: '!del',
    description: 'Command to delete',
    args: true,
    usage: 'Use this command like this -> !del intNumber',
    execute(message, number) {
        let data = parseInt(number)
        message.channel.bulkDelete(data);
        message.channel.send(`${number} messages were deleted`);
    }
}