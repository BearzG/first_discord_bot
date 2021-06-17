module.exports = {
    name: '!show',
    description: 'Command to show user info',
    usage: 'You have to use this command like this -> !show @username',
    args: true,
    execute(message) {
        let users = message.mentions.users.map(cur => cur.username);
        let imgs = message.mentions.users.map(cur => cur.displayAvatarURL({format: 'jpg'}));
        message.channel.send('Ill show you the pictures of the tagged users');
        for (elm in users) {
            let data = `${users[elm]} \n ${imgs[elm]}`
            message.channel.send(data);
        }
    }
}