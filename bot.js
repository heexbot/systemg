const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});






var ss = 0;

client.on('voiceStateUpdate', (o,n) => {
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("489800301021233163").edit({
            name : "4 Ever Online : [" + ss+ "]"
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("489800301021233163").edit({
            name : "4 Ever Online : [" + ss+ "]"
        })
    }
})
client.on("ready", () => {
    client.guilds.get("483960386693890058").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("489800301021233163").edit({
            name : "4 Ever Online : [" + ss+ "]"
        })
    });
    client.user.setGame("Community©", "");
});
// جميع الحقوق محفوظة لدى : ! M, ♪ ♡#6456










client.on('message', function(msg) {
  if(msg.content.startsWith ('معلومات السيرفر')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${"EGYPT"} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});






client.on('message', message => {
        var prefix = ''; // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + 'رسالة') { // الكوماند !bc
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**{ :incoming_envelope: رسالة { كلامك ** ${prefix} `);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`**:mailbox_with_mail: هل انت متأكد انك تريد ارسال رسالتك **`)
		.setThumbnail(client.user.avatarURL)
		.setColor('GREEN')
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى اعضاء السيرفر**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});











client.on('message', message => {
    var prefix = "";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'اسحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("" +prefix+ "** يجب أن تمنشن العضو  ❌**")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 
 
var embed = new Discord.RichEmbed()

 
.setDescription(`**<@${message.author.id}>لقد تم سحب العضو إليك ✅**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send(""+ message.mentions.members.first() +"**❌ أن العضو ليس بروم صوتي**")
}
} else {
 message.channel.send("**أنت لست متواجد في روم صوتي لسحب العضو إليك ❌**")
}
} else {
message.react("")
 }}});










client.on("message", message => {
    if (message.author.bot || !message.guild) return;
    const prefix ="all top"
    let score;
   
    if (message.guild) {
      score = client.getScore.get(message.author.id, message.guild.id);
      if (!score) {
        score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 };
      }
      score.points++;
      const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
      client.setScore.run(score);
    }
    if (message.content.indexOf(prefix) !== 0) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "points") {
      return message.reply(`You currently have ${score.points} points and are level ${score.level}!`);
    }
   
    if(command === "give") {
      if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");
      const user = message.mentions.users.first() || client.users.get(args[0]);
      if(!user) return message.reply("You must mention someone or give their ID!");
      const pointsToAdd = parseInt(args[1], 10);
      if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...");
          let userscore = client.getScore.get(user.id, message.guild.id);      
      if (!userscore) {
        userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 };
      }
      userscore.points += pointsToAdd;
      let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
      userscore.level = userLevel;
      client.setScore.run(userscore);
   
      return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
    }
   
    if(command === "leaderboard") {
      const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);
      const embed = new Discord.RichEmbed()
        .setTitle("**TOP 10 TEXT** :speech_balloon:")
        .setAuthor('📋 Guild Score Leaderboards', message.guild.iconURL)
        .setColor(0x00AE86);
 
      for(const data of top10) {
        embed.addField(client.users.get(data.user).tag, `XP: \`${data.points}\` | LVL: \`${data.level}\``);
      }
      return message.channel.send({embed});
    }
   
  });









client.login(process.env.BOT_TOKEN);
