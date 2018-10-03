const Discord = require('discord.js');
const devs = ['466425075487342615','466425075487342615'];
var prefix = "$";
const adminprefix = "$"
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 

,ti={}  
,spee={};



const sWlc = {}
const premium = ['466425075487342615']
client.on('message', message => {
var prefix = "$";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer احط اسم الروم تبي**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'${newChannel} تم عمل ترحيب بي روم **`);
  }
});
 


client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)                  
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['hbot3.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 245, 80);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });


client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help general") {
  const embedss3 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    شيك على الخاص
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss3});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
╭━━━╮╱╱╱╱╭╮╱╭━━━╮╱╱╭╮
╰╮╭╮┃╱╱╱╱┃┃╱┃╭━╮┃╱╱┃┃
╱┃┃┃┣━━┳━┫┃╭┫╰━━┳┳━╯┣━━╮
╱┃┃┃┃╭╮┃╭┫╰╯┻━━╮┣┫╭╮┃┃━┫
╭╯╰╯┃╭╮┃┃┃╭╮┫╰━╯┃┃╰╯┃┃━┫
╰━━━┻╯╰┻╯╰╯╰┻━━━┻┻━━┻━━╯

__General Commands__ =

__1__ = >id - __To See Your ID__ 

__2__ = >user - __To See Your Stats__

__3__ = >sug - __To Suggest Anything__

__4__ = >profile - __To See Your Profile__

__5__ = >credit - __To See Your Credit__

__6__ = >daily - __To Get Your Daily Money__

__7__ = >rep - __To Rep Anyone__

__8__ = >title - __To Change Your Profile Title__

__9__ = >trans - __To Transfer Your Money To Anyone__

__10__ = >members - __To Show Member's Status__

__11__ = >info - __To See Bot info__

__12__ = >avatar - __To Take Avatar of Anyone__

__13__ = >ser-av - __To Get Server Avatar__

__14__ = >bot - __Bot Status__

__15__ = >own - __Bot Owner__

__17__ = >server - __To Showing Details Of Server__

__18__ = >colors - __To Take Any Color__

__19__ = >emoji - __To Take Any Emoji__

__20__ = >mcskin - __To Get Your Minecraft Skin__

__21__ = >fortnite - __Get Fortnite Stats__

__22__ = >ping - __To See Your Ping__

__23__ = >roll - __Using on Any Giveaway__

__24__ = >cc - __To Make Category__

__25__ = >vc - __To Make Voice Channel__

__26__ = >tt - __To Make Text Channel__

__27__ = >perms - __To See Bot Permission's__

__28__ = >invite - __To Invite DarkSide Bot__

__29__ = >link - __Get Invite link__

__30__ = >invites - __To See The People You Invited__

__31__ = >iinv - __To Show Stats of Invite Link__

**
`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 





//MHSTR END NOW THIS IS END
client.login(process.env.BOT_TOKEN);
