const express = require('express')
const app = express();
const port = 3001

app.get('/', (req, res) => res.send('Your Bot is online , made by itzQuicksilver (to keep this bot online pls add this url to uptimerobot)'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

require('dotenv').config()


var emojis = require('emoji.json')
const token = ''// bad practice, in production use env


// do not edit below if you dont understand what you are doing



const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons')(client); // yeah fuck the api references
emojis = Object.values(emojis)

function rdm(max) {
    return Math.floor(Math.random() * max);
} // OMG SKID HE SKID OFF STACK OVER LOW..,

client.on('ready', () => {
    client.user.setActivity('!verify', ({type: "WATCHING"}))
})

let acm = {}
client.on('message', async m => {
    if (!m.guild) return;
    if (m.content == '!verify') {
        if (acm[m.author.id]) {
            m.channel.send('❌ **ERROR** ❌ \n YOU ARE BEING RATE LIMITED!.').then(m=>m.delete({timeout:"5000"/*Time until delete in milliseconds*/}));
            return;
        }
        let emoji = emojis[parseInt(Math.random() * emojis.length)]
        let bad = emojis[parseInt(Math.random() * emojis.length)]
        if (bad == emoji) {
            bad = emojis[parseInt(Math.random() * emojis.length)]
            if (bad == emoji) {
                bad = emojis[parseInt(Math.random() * emojis.length)]
                if (bad == emoji) {
                    bad = emojis[parseInt(Math.random() * emojis.length)]
                }
                if (bad == emoji) {
                    bad = {
                        'char': 'ok',
                        'name': 'ok'
                    }
                }
            }
        }
        let button = new disbut.MessageButton()
            .setStyle('gray') //default: blurple
            .setLabel(emoji['char']) //default: NO_LABEL_PROVIDED
            .setID('v_bot')

        let btn2 = new disbut.MessageButton()
            .setStyle('gray') //default: blurple
            .setLabel(bad['char']) //default: NO_LABEL_PROVIDED
            .setID('v_bot_inv')

        var rdmn = rdm(2)
        if (rdmn == 0) {
            m.channel.send('✅ **I\'ve Sent A Verification To Your DMs** ✅ \n **Go Check Your DMs**').then(m=>m.delete({timeout:"5000"/*Time until delete in milliseconds*/}));
            m.author.send('Click the ``' + emoji['name'] + '`` button', {
                buttons: [
                    button, btn2
                ]
            }).catch(() => {
                m.channel.send('❌ **ERROR** ❌ \n Couldnt DM you. Try To Type `!verify1`').then(m=>m.delete({timeout:"5000"/*Time until delete in milliseconds*/}));
                return;
            })
            acm[m.author.id] = {
                'message': m,
                'guild': m.guild.id,
            }
        } else {
            m.author.send('Click the ``' + emoji['name'] + '`` button', {
                buttons: [
                    btn2, button
                ]
            }).catch(() => {
                m.channel.send('❌ **ERROR** ❌ Couldnt DM you. Try To Type `!verify1`').then(m=>m.delete({timeout:"5000"/*Time until delete in milliseconds*/}));
                return;
            })
            acm[m.author.id] = {
                'message': m,
                'guild': m.guild.id,
            }
        }

    }
})

client.on('message', async m => {
    if (!m.guild) return;
    if (m.content == '!verify1') {
        if (acm[m.author.id]) {
            m.channel.send('❌ **ERROR** ❌ \n YOU ARE BEING RATE LIMITED!.').then(m=>m.delete({timeout:"5000"/*Time until delete in milliseconds*/}));
            return;
        }
        let emoji = emojis[parseInt(Math.random() * emojis.length)]
        let bad = emojis[parseInt(Math.random() * emojis.length)]
        if (bad == emoji) {
            bad = emojis[parseInt(Math.random() * emojis.length)]
            if (bad == emoji) {
                bad = emojis[parseInt(Math.random() * emojis.length)]
                if (bad == emoji) {
                    bad = emojis[parseInt(Math.random() * emojis.length)]
                }
                if (bad == emoji) {
                    bad = {
                        'char': 'ok',
                        'name': 'ok'
                    }
                }
            }
        }
        let button = new disbut.MessageButton()
            .setStyle('gray') //default: blurple
            .setLabel(emoji['char']) //default: NO_LABEL_PROVIDED
            .setID('v_bot')

        let btn2 = new disbut.MessageButton()
            .setStyle('gray') //default: blurple
            .setLabel(bad['char']) //default: NO_LABEL_PROVIDED
            .setID('v_bot_inv')

        var rdmn = rdm(2)
        if (rdmn == 0) {
            m.channel.send('✅ **I\'ve Sent A Verification To Your DMs** ✅ \n **Go Check Your DMs**').then(m=>m.delete({timeout:"5000"/*Time until delete in milliseconds*/}));
            m.channel.send('Click the ``' + emoji['name'] + '`` button', {
                buttons: [
                    button, btn2
                ]
            }).catch(() => {
                return;
            })
            acm[m.author.id] = {
                'message': m,
                'guild': m.guild.id,
            }
        } else {
            m.channel.send('Click the ``' + emoji['name'] + '`` button', {
                buttons: [
                    btn2, button
                ]
            }).catch(() => {
                return;
            })
            acm[m.author.id] = {
                'message': m,
                'guild': m.guild.id,
            }
        }

    }
})

client.on('clickButton', async (button) => {
    if (button.id === 'v_bot') {
        if (acm[button.clicker.user.id.toString()]) {
            var m = acm[button.clicker.user.id.toString()]['message']
            var role = m.guild.roles.cache.find(role => role.name === "Verified");//edit this to the name of your verify role(including emoji if the role has it)
            await m.member.roles.add(role)
            button.channel.send(`**✅ Successfully Verified! ✅** \n **You can now enter Server!** `)
            button.message.delete()

            console.log(acm[button.clicker.user.id.toString()])
            setTimeout(() => {
                acm[button.clicker.user.id.toString()] = null
            }, 30000);
        } else {
            button.channel.send('Invalid verification request, try again.')
        }
    } else {
        if (acm[button.clicker.user.id.toString()]) {

            console.log('failed')
            button.message.delete()
            button.channel.send('Verification Failed - Wait 30 seconds to try again after rejoining.')
            var men = acm[button.clicker.user.id.toString()]['message'].member
            men.kick('**🔶 Verification Failed! 🔶** \n **Wait 30 seconds to try again after rejoining.**').then(m=>m.delete({timeout:"5000"/*Time until delete in milliseconds*/}));
            setTimeout(() => {
                acm[button.clicker.user.id.toString()] = null
            }, 30000);
        } else {
            button.channel.send('Invalid verification request, try again.')
        }
    }
});
client.on('ready', () => {
console.log(`⚡ ${client.user.tag} is Ready To Work`)
})
client.login(process.env.TOKEN)
