const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send(':arrow_down:شعار دسكورد جنب اسمك الاصلي')
    }
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('``!S7Q |``')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send(':arrow_down:شعار العبه')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('``ζ͡𝒮𝟳𝒬``')
    }
});



client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('**:disappointed:**');
  }
});








client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('** ۗ :rose::wave:**');
  }
});


client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('**يلبى الى ينقط كمل يا حلو **');
  }
});



client.on('message', msg => {
  if (msg.content === '..') {
    msg.reply('**لسا بدك تنقط كمل خلينا نشوف نقطك**');
  }
});



client.on('message', msg => {
  if (msg.content === '...') {
    msg.reply('**ما اجمل نقطك كمل كمان  **');
  }
});



client.on('message', msg => {
  if (msg.content === '....') {
    msg.reply('**خلاص ما بكمل كمل لوحدك **');
  }
});



client.on('message', msg => {
  if (msg.content === '.....') {
    msg.reply('**انت حمار لسا  بتسمع كلامى :joy: **');
  }
});


client.on('message', msg => {
  if (msg.content === '......') {
    msg.reply('**خلاص يا ابن الحلال وقف **');
  }
});


client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('** :rose: **');
  }
});


client.on('message', message => {
    if (message.content.startsWith("الرابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")

    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
});






client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")

    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
});





    client.on('message', msg => {//msg
    if (msg.content === 'باك') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/465394725390778368/467992746469228545/ProBot_35e.png"})
    }
  });;
  
    client.on('message', msg => {//msg
    if (msg.content === 'السلام عليكم') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/465394725390778368/467993687301947392/ProBot_35e.png"})
    }
  });;

    client.on('message', msg => {//msg
    if (msg.content === 'برب') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/465394725390778368/467994526900813825/ProBot_35e.png"})
    }
  });;

    client.on('message', msg => {//msg
    if (msg.content === 'قوانين') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/465394725390778368/468092429325565962/6b5faded5f982862.png"})
    }
  });;

    client.on('message', msg => {//msg
    if (msg.content === '!') {
      msg.channel.send({file : "**__Welcome To  S7Q...__**:dove: :heart:"})
    }
  });;


    client.on('message', msg => {//msg
    if (msg.content === '!!') {
      msg.channel.send({file : "**يرحب بكوم S7Q باسمي واسم الادارة كلان  :dove: :fire: **"})
    }
  });;



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`S7Q,~THE BEST`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
