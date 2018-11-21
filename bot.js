const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

                    

const prefix = '';

client.on('ready', () => {

  client.user.setGame(``,'https://www.twitch.tv/MeeRcY')

  
    console.log(`Logged in as [ Pharaohs]`);

});









const adminprefix = "#";
const devs = ['514938170320748545'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: تم تغير حاله البوت الي  : ${argresult}**`)
}
});
























var ss = 0;

client.on('voiceStateUpdate', (o,n) => {

    if (o.voiceChannel && !n.voiceChannel) {

        ss-=1

        n.guild.channels.get("514170643311362072").edit({

            name : "Angels Online : [ " + ss+ " ]"

        })

    };

    if (n.voiceChannel && !o.voiceChannel) {

        ss+=1

        n.guild.channels.get("514170643311362072").edit({

            name : "Angels Online : [ " + ss+ " ]"

        })

    }

})

client.on("ready", () => {

    client.guilds.get("514170642724290590").members.forEach(m => {

        if (m.voiceChannel) {

            ss+=1

        };

        client.channels.get("514170643311362072").edit({

            name : "Angels Online : [ " + ss+ " ]"

        })

    });

});

// جميع الحقوق محفوظة لدى :@┃HEART┃ ❦  4EVER#9512 













client.on('message', function(msg) {
  if(msg.content.startsWith ('معلومات السيرفر')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ __${msg.guild.name}__ ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ __${"EGYPT"}__ ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ __${msg.guild.roles.size}__ ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ __${msg.guild.memberCount}__ ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ __${msg.guild.channels.filter(m => m.type === 'text').size}__ ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ __${msg.guild.channels.filter(m => m.type === 'voice').size}__ ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ __${msg.guild.owner}__ ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ __${msg.guild.id}__ ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

 




































client.on('message', message => {

    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({ thing: true, maxUses: 5, maxAge: 86400 }).then(invite => {

            message.author.send(`**Link duration: day\n\n\nNumber of uses of the Link: 5**\n\n\n${invite.url}` )

            message.channel.send(`**[ The link has been sent to your user :link: ] <@${message.author.id}> **`).then(msg => msg.delete(3500)); 

        });

    };

});

  

  

  

 



















client.on('message', message => {

    var prefix = "";

if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'اسحب')) {

 if (message.member.hasPermission("MOVE_MEMBERS")) {

 if (message.mentions.users.size === 0) {

 return message.channel.send("" +prefix+ "** ❌  لم يتم العثور على العضو المطلوب **").then(msg => msg.delete(5000));

}

if (message.member.voiceChannel != null) {

 if (message.mentions.members.first().voiceChannel != null) {

 var authorchannel = message.member.voiceChannelID;

 var usermentioned = message.mentions.members.first().id;

  let mentions = message.mentions.members.first();

message.channel.send(`✅ ${mentions.user} **moved to** \`${message.member.voiceChannel.name}\``);

 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))


} else {

message.channel.send("** ❌  العضو يجب أن يكون متواجد بروم صوتي **").then(msg => msg.delete(5000));

}

} else {

 message.channel.send("** ❌  You must be in voice channel !**").then(msg => msg.delete(5000));

}

} else {


 }}});












































client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "اسكت")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**لا يمكنك آعطاء ميوت لآحد آدارة السيرفر ❌**`);
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source:  ${mention.user.username} Already muted! **`);
 
       
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let duration = args[2];
    if(!duration)  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ ** __لاتسب | بدون سبام__** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ])
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000);
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
if(command === `تكلم`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:  ${mention.user.username} تم فك الميوت عنه مسبقاً! **`)
 
  await toMute.removeRole(role)
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});










 

































client.on('message', message => {

if (message.content === 'تكلم') {
if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('');

    
message.channel.send('**:information_source:  ``unmute @Dramex`` يجب تحديد شخص**').then(message => {message.delete(7000)})

}

 });    













client.on('message',async message => {

if(message.content === 'اسكت') {

  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('');

 var embed = new Discord.RichEmbed() 

    .setColor('')

    .setDescription('')

    .setImage('https://cdn.discordapp.com/attachments/495582423430463498/498283222011084810/n4eSIakPew.png')

  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });




















client.on('message',async message => {

if(message.content === 'باند') {

  if(!message.member.hasPermission('BAN_MEMBERS')) return      message.channel.send('');

 var embed = new Discord.RichEmbed() 

    .setColor('')

    .setDescription('')

    .setImage('https://cdn.pg.sa/fjxlms81nk.png')
  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });






















client.on('message', message => {

if (message.content === 'كيك') {
if(!message.member.hasPermission('KICK_MEMBERS')) return      message.channel.send('');

    
message.channel.send('**:information_source: ``kick @Dramex`` يجب تحديد شخص **').then(message => {message.delete(7000)})

}

 });    








 























































































































































client.on('message', message => {
    if(message.content.startsWith(prefix + 'أضافة')) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
       
    let args = message.content.split(' ').slice(1).join(' ');
    if(!args) {
        return;
    }
            let embed = new Discord.RichEmbed()
                .setColor("BLACK")
                .setAuthor("هل تريد أضافة روم كتابي او صوتي ؟")
                .setDescription("**Text:** 📋\n\n**Voice:** 🔊");
 
                message.channel.sendEmbed(embed) .then(m => {
                    m.react('🔊')
                    m.react('📋')
 
 
 
                        let ChatFilter = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
                        let VoiceFilter = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id;
 
 
                        let Chat = m.createReactionCollector(ChatFilter, { time: 10000 });
                        let Voice = m.createReactionCollector(VoiceFilter, { time: 10000 });
                       
 
 
 
                Voice.on('collect', r => {
                    message.guild.createChannel(args, "voice") .then(channel => {
                        channel.setPosition(1);
                        m.delete();
                            message.channel.send(`**تم عمل روم صوتي بأسم [ \`${args}\` ] منشن الروم  [ ${channel} ] ✅**`).then(message => {message.delete(4500)})
                           
                    });
                })
 
                Chat.on('collect', r => {
                    message.guild.createChannel(args, 'text') .then(channel => {
                        channel.setPosition(1);
                        m.delete()
                                .then(channel.setTopic(`A text channel created by, ${message.author.tag}`));
                               
                            message.channel.send(`**تم عمل روم كتابي بأسم [ \`${args}\` ] منشن الروم [ <#${channel.id}> ]  ✅**`).then(message => {message.delete(4500)})
      
                           
                    })
                })
                })
}
if(message.content.startsWith(prefix + 'إزالة')) {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
        let args = message.content.split(' ').slice(1).join(' ');
        if(!args) {
            return;
        }
       
    var channel = message.guild.channels.find("name", args);
        if(channel) {
            channel.delete();
                message.channel.send('**تم مسح الروم بنجاح ✅**').then((x) => {
                    x.delete(5000);
                })
        } else {
            message.channel.send(`**لايوجد روم بآسم [ \`${args}\` ] ❌**`).then(message => {message.delete(3000)})
      
 
        };
}
});























 


























client.on('guildMemberAdd', message =>
          { message.send(`** _Welcome To angels..._ **`)});







            




 








































client.on('message', message => {

  if (message.author.x5bz) return;

  if (!message.content.startsWith(prefix)) return;

 

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

 

  let args = message.content.split(" ").slice(1);

 

  if (command == "باند") {

               if(!message.channel.guild) return message.channel.send('');

         

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("");

  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

  /*let b5bzlog = client.channels.find("name", "5bz-log");

 

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/

  if (message.mentions.users.size < 1) return message.channel.send("");

  if (!message.guild.member(user)

  .bannable) return message.channel.send("**لا يمكنك آعطاء باند لآحد آدارة السيرفر ❌**");

 

  message.guild.member(user).ban(7, user);

 

  const banembed = new Discord.RichEmbed()

 let mention = message.mentions.members.first();

  message.channel.send(`**✅ ${mention.user.username} banned from the server ! ✈ **`);
setTimeout(() => {
    embed : banembed

  })

}

});












































  
  







  






















client.on('guildMemberAdd', member=> {

    member.addRole(member.guild.roles.find("to the best"));

    });
































   



















client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : " + textxt + "\n```").then(m => m.delete(2000));
        }    
    }
}
});






























 
            
 






















 














 
 
 





































































client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '514941777065672716') return;

  let types = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'mp4',
    'avi',
    'mkv',
    'mpeg'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author} ** هذا الروم مخصص للصور فقط**`)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 3000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author} ** هذا الروم مخصص للصور فقط**`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 3000)
      })
    }
  }

})























































































const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
 
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'general');
const w = ['./welcome.png'];
 
         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
         
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(``, 300, 130);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                         
               
                             
welcomer.sendFile(canvas.toBuffer())
 
 
 
     
     
                    }  )  
     
            })
    })
});
  var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "ممكن نتفاهم !")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'general');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "ممكن نتفاهم !")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`**By : ${Invite.inviter} **`)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});





















client.on('message', message => {
        

            if (message.content === 'ولكم') {

              message.channel.send('**_ Welcome To angels 🔥_**');

              

               

            }

});











































client.on("ready", () => { // حقوق سيرفركودز
  function lol() {
    client.guilds.get('514170642724290590').roles.find("name", "to the best").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});






















client.login(process.env.BOT_TOKEN);
