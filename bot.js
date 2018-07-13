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
    msg.reply('** ٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:**');
  }
});


client.on('message', msg => {
  if (msg.content === 'ترحيب') {
    msg.reply('https://i.imgur.com/B5wWkpZ.png');
  }
});





client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:**');
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
    msg.reply('**ۆعـلُـيَـگـم آلُـسـلُآم ۆرحٍـمةّ آلُلُہ ۆبْرگآتٌہ ، منْۆر. :rose: **');
  }
});


client.on('message', message => {
    if (message.content.startsWith("الرابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("by:ོ,$!S7Q | ĦÂмØ |♚#6947")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط 
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:ོ,$!S7Q | ĦÂмØ |♚#6947")
      message.author.sendEmbed(Embed11)
    }
});  




client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("by:ོ,$!S7Q | ĦÂмØ |♚#6947")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط 
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:ོ,$!S7Q | ĦÂмØ |♚#6947")
      message.author.sendEmbed(Embed11)
    }
});  


client.on('message', message => {
    if(message.content === '!'){
        message.channel.send('@here||**ۋڸﮗﻤ ٱطڷڨ مﻦ ډڅڵ مڻۉﮌ ي ؏سڶ**')
    }
});


client.on('message', message => {
    if(message.content === '!!'){
        message.channel.send('**Welcome TO S7Q**||@here')
    }
});


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
