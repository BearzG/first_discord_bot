module.exports = {
    name: '!greet',
    description: 'Command to say hi',
    args: false,
    execute: (message) => {
        message.reply('Hey, good afternoon');
    }
}