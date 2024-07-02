const { Client, GatewayIntentBits, Partials, MessageActionRow, MessageButton, channelMention} = require('discord.js');
const { getCommands } = require('../utils/fileUtils');
const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const { w_k_night_career_exile_frontload1, handleInteraction ,w_k_player_vote_restart,w_k_player_effect_restart,playerEffect} = require('./buttons')

let playerCount = 0;
let players = Array(16).fill("尚未加入");

let wolf_count = 2;
let purely_wolf_count = wolf_count
let wolf_king_ON_OFF = 1;
let wolf_beauty_ON_OFF = 0;
let wolf_whiteking_ON_OFF = 0;
let wolf_inv_ON_OFF = 0;
let wolf_demon_ON_OFF = 0;
let wolf_bloodmoon_ON_OFF = 0;
let prophet_ON_OFF = 1;
let witch_ON_OFF = 1;
let hunter_ON_OFF = 1;
let knight_ON_OFF = 1;
let demon_hunter_ON_OFF = 1;
let guard_ON_OFF = 0;
let idiot_ON_OFF = 0;
let trainer_ON_OFF = 0;
let silencer_ON_OFF = 0;
let sleepwalker_ON_OFF = 0;
let magician_ON_OFF = 0;
let wild_child_ON_OFF = 0;

let bomber_ON_OFF = 0;
let cupid_ON_OFF = 0;
let villager = 3


async function w_k_restart() {
  playerCount = 0;
  wolf_count = 2;
  wolf_king_ON_OFF = 0; // 1 = On 0 = Off
  wolf_beauty_ON_OFF = 0;
  wolf_whiteking_ON_OFF = 0;
  wolf_inv_ON_OFF = 0;
  wolf_demon_ON_OFF = 0;
  wolf_bloodmoon_ON_OFF = 0;
  prophet_ON_OFF = 1;
  witch_ON_OFF = 1;
  hunter_ON_OFF = 1;
  knight_ON_OFF = 1;
  demon_hunter_ON_OFF = 1;
  guard_ON_OFF = 0;
  idiot_ON_OFF = 0;
  trainer_ON_OFF = 0;
  silencer_ON_OFF = 0;
  sleepwalker_ON_OFF = 0;
  magician_ON_OFF = 0;
  wild_child_ON_OFF = 0;

  bomber_ON_OFF = 0;
  cupid_ON_OFF = 0;
  players = Array(16).fill("尚未加入");
}

async function w_k_player(guildId, member) {
  if (playerCount >= 16) {
    return "所有位置已滿，無法加入";
  }

  playerCount++;
  const playerNumber = playerCount;
  players[playerNumber] = member.user.username;


  return `成功加入，序位為 ${playerNumber} 號\n目前序位狀況：\n${getPlayerStatus()}`;
}

function generateList(numPlayers) {
    let list = [];
    for (let i = 1; i <= numPlayers; i++) {
        list.push(i.toString());
    }
    return list;
}  //隨機取數

function getRandomElement(list) {
    if (list.length === 0) {
        throw new Error('The list is empty.');
    }
    // 生成隨機索引
    let randomIndex = Math.floor(Math.random() * list.length);
    // 取出元素
    let element = list[randomIndex];
    // 從清單中移除這個元素
    list.splice(randomIndex, 1);
}  //隨機取數

async function w_k_start(guildId, member) {
  if (playerCount <= 6 || wolf_count === playerCount) {
    return '遊戲人數不足或是職業不平衡';
  }
  if (players[0] !== member.user.username) {
    return '只有序位第一位的玩家可以觸發 start 指令';
  }
  let notIn_career = Array.from(generateList(playerCount))
  w_k_night_career_setting();
  w_k_player_effect_restart()
  w_k_night_first()
  const channel = message.channel;
  return '遊戲開始';
}

async function w_k_night_career_setting() {
  w_k_night_career_exile()
}

async function w_k_night_career_exile() {
  let notIn_career = generateList(playerCount)
  if (wolf_king_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 101
    w_k_night_career_exile_frontload1()
  }
  if (wolf_beauty_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 102
    w_k_night_career_exile_frontload1()
  }
  if (wolf_whiteking_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 103
    w_k_night_career_exile_frontload1()
  }
  if (wolf_inv_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 104
    w_k_night_career_exile_frontload1()
  }
  if (wolf_demon_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 105
    w_k_night_career_exile_frontload1()
  }
  if (wolf_bloodmoon_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 106
    w_k_night_career_exile_frontload1()
  }
  if (prophet_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 200
    w_k_night_career_exile_frontload1()
  }
  if (witch_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 201
    w_k_night_career_exile_frontload1()
  }
  if (hunter_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 202
    w_k_night_career_exile_frontload1()
  }
  if (knight_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 203
    w_k_night_career_exile_frontload1()
  }
  if (demon_hunter_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 204
    w_k_night_career_exile_frontload1()
  }
  if (guard_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 205
    w_k_night_career_exile_frontload1()
  }
  if (idiot_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 206
    w_k_night_career_exile_frontload1()
  }
  if (trainer_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 207
    w_k_night_career_exile_frontload1()
  }
  if (silencer_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 208
    w_k_night_career_exile_frontload1()
  }
  if (sleepwalker_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 209
    w_k_night_career_exile_frontload1()
  }
  if (magician_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 210
    w_k_night_career_exile_frontload1()
  }
  if (wild_child_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 301
    w_k_night_career_exile_frontload1()
  }
  if (bomber_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 303
    w_k_night_career_exile_frontload1()
  }
  if (cupid_ON_OFF === 1) {
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 304
    w_k_night_career_exile_frontload1()
  }
  while (purely_wolf_count > 0 )
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 100
    w_k_night_career_exile_frontload1()
    purely_wolf_count = purely_wolf_count - 1
  while (villager > 0)
    player_sequence = getRandomElement(notIn_career);
    career_sequence = 400
    w_k_night_career_exile_frontload1()
    villager = villager - 1

}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function muteChannel(channel) {
    channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: false }) }
function unmuteChannel(channel) {
  channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: true }) }



async function player_career_return() {
  if (carrer_round_sequence === 100 ) {carrer_round_sequence_c = "狼人"}
  if (carrer_round_sequence === 101 ) {carrer_round_sequence_c = "狼王"}
  if (carrer_round_sequence === 102 ) {carrer_round_sequence_c = "狼美人"}
  if (carrer_round_sequence === 103 ) {carrer_round_sequence_c = "白狼王"}
  if (carrer_round_sequence === 104 ) {carrer_round_sequence_c = "隱狼"}
  if (carrer_round_sequence === 105 ) {carrer_round_sequence_c = "惡靈騎士"}
  if (carrer_round_sequence === 106 ) {carrer_round_sequence_c = "血月使徒"}
  if (carrer_round_sequence === 200 ) {carrer_round_sequence_c = "預言家"}
  if (carrer_round_sequence === 201 ) {carrer_round_sequence_c = "女巫"}
  if (carrer_round_sequence === 202 ) {carrer_round_sequence_c = "獵人"}
  if (carrer_round_sequence === 203 ) {carrer_round_sequence_c = "騎士"}
  if (carrer_round_sequence === 204 ) {carrer_round_sequence_c = "獵魔人"}
  if (carrer_round_sequence === 205 ) {carrer_round_sequence_c = "守衛"}
  if (carrer_round_sequence === 206 ) {carrer_round_sequence_c = "白癡"}
  if (carrer_round_sequence === 207 ) {carrer_round_sequence_c = "馴熊師"}
  if (carrer_round_sequence === 208 ) {carrer_round_sequence_c = "禁言"}
  if (carrer_round_sequence === 209 ) {carrer_round_sequence_c = "攝夢人"}
  if (carrer_round_sequence === 210 ) {carrer_round_sequence_c = "魔術師"}
  if (carrer_round_sequence === 301 ) {carrer_round_sequence_c = "野孩子"}
  if (carrer_round_sequence === 303 ) {carrer_round_sequence_c = "炸彈人"}
  if (carrer_round_sequence === 304 ) {carrer_round_sequence_c = "邱比特"}
  if (carrer_round_sequence === 400 ) {carrer_round_sequence_c = "平民"}
  if (player1_career === carrer_round_sequence) {
      const userId = players[0]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player2_career === carrer_round_sequence) {
      const userId = players[1]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player3_career === carrer_round_sequence) {
      const userId = players[2]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player4_career === carrer_round_sequence) {
      const userId = players[3]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player5_career === carrer_round_sequence) {
      const userId = players[4]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player6_career === carrer_round_sequence) {
      const userId = players[5]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player7_career === carrer_round_sequence) {
      const userId = players[6]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player8_career === carrer_round_sequence) {
      const userId = players[7]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player9_career === carrer_round_sequence) {
      const userId = players[8]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player10_career === carrer_round_sequence) {
      const userId = players[9]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player11_career === carrer_round_sequence) {
      const userId = players[10]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player12_career === carrer_round_sequence) {
      const userId = players[11]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player13_career === carrer_round_sequence) {
      const userId = players[12]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player14_career === carrer_round_sequence) {
      const userId = players[13]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player15_career === carrer_round_sequence) {
      const userId = players[14]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }
  if (player16_career === carrer_round_sequence) {
      const userId = players[15]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你本局的職業為 ${carrer_round_sequence_c}`);
            })
    }

}
async function w_k_night_first() {
  muteChannel(channel)
  carrer_round_sequence = 100
  player_career_return()
  carrer_round_sequence = 101
  player_career_return()
  carrer_round_sequence = 102
  player_career_return()
  career_round_sequence = 103
  player_career_return()
  career_round_sequence = 104
  player_career_return()
  career_round_sequence = 105
  player_career_return()
  career_round_sequence = 106
  player_career_return()
  career_round_sequence = 200
  player_career_return()
  career_round_sequence = 201
  player_career_return()
  career_round_sequence = 202
  player_career_return()
  career_round_sequence = 203
  player_career_return()
  career_round_sequence = 204
  player_career_return()
  career_round_sequence = 205
  player_career_return()
  career_round_sequence = 206
  player_career_return()
  career_round_sequence = 207
  player_career_return()
  career_round_sequence = 208
  player_career_return()
  career_round_sequence = 209
  player_career_return()
  career_round_sequence = 210
  player_career_return()
  career_round_sequence = 301
  player_career_return()
  career_round_sequence = 303
  player_career_return()
  career_round_sequence = 304
  player_career_return()
  career_round_sequence = 400
  player_career_return()

  night = 1 // 1 = 是晚上
  unmuteChannel(channel)
  channel.send('天黑請閉眼')
  channel.send()
  channel.send
  muteChannel(channel)
  playerthinking = 2
  waitTime = 0
  if (cupid_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 邱比特 請睜眼')
    channel.send('請 綁定 兩位玩家')
    muteChannel(channel)
    career_round_sequence = 304
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  if (cupid_ON_OFF === 1) {
    channel.send('被綁定的兩個人的資訊 已私訊兩位玩家')
      let userId = players[cupid1_w]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你是戀人 對象為 ${players[cupid2_w]}`)})
  }
  if (cupid_ON_OFF === 1) {
      let userId = players[cupid2_w]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`你是戀人 對象為 ${players[cupid1_w]}`)})
  }


  waitTime = 0
  playerthinking = 1
  if (wild_child_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 野孩子 請睜眼')
    channel.send('請視一位玩家為 榜樣')
    muteChannel(channel)
    carrer_round_sequence = 301
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }

  }
  playerthinking = 2
  waitTime = 0
  switchPerson2ver = -1
  switchPerson1ver = -1
  if (magician_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 魔術師 請睜眼')
    channel.send('請 交換 兩位玩家')
    muteChannel(channel)
    carrer_round_sequence = 210
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0
  if (guard_ON_OFF === 1) {
    carrer_round_sequence = 205
    unmuteChannel(channel)
    channel.send(' 守衛 請睜眼')
    channel.send('請 守護 一位玩家')
    muteChannel(channel)
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0

  carrer_round_sequence = 100
  playerthinking = wolf_count
  unmuteChannel(channel)
  channel.send(' 狼人 請睜眼')
  channel.send('請 殺害 一位玩家')
  muteChannel(channel)
  w_k_player_vote_restart()
  while (playerthinking > 0) {
    await wait(2000)
    waitTime = waitTime +1
    if (waitTime === 15) {
      playerthinking = 0
      }
  }

  playerthinking = 1
  waitTime = 0
  if (wolf_beauty_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 狼美人 請睜眼')
    channel.send('請 魅惑 一位玩家')
    muteChannel(channel)
    carrer_round_sequence = 102
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0
  if (witch_ON_OFF === 1) {
    carrer_round_sequence = 201
    unmuteChannel(channel)
    channel.send(' 女巫 請睜眼')
    channel.send(' 死亡之人已私訊 女巫')
    muteChannel(channel)
    let witch_who = career.findIndex(element => element === 201);
    let userId = players[witch_who]
    dead = effect.findIndex(element => element % 47 === 0 && element / 47 > 0)
    const witch_health = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('witch_health').setLabel('治癒').setStyle(ButtonStyle.Success))
  ]
    client.users.fetch(userId)
            .then(user => {
              user.send({
                content: `今天晚上 ${players[dead]} 被殺了 
你要使用解藥還是毒藥 (**解藥** 請按以下按鈕 **毒藥** 請至狼人殺頻道內施放技能 點下該處按鈕即自動觸發毒藥)`,
                components: witch_health
              });
            })
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }
  playerthinking = 1
  waitTime = 0
  if (prophet_ON_OFF === 1) {
    carrer_round_sequence = 200
    unmuteChannel(channel)
    channel.send(' 預言家 請睜眼')
    channel.send('請 查驗 一位玩家')
    muteChannel(channel)
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0
  if (demon_hunter_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 獵魔人 請睜眼')
    channel.send('請 射殺 一位玩家')
    muteChannel(channel)
    carrer_round_sequence = 204
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }
  playerthinking = 1
  waitTime = 0
  if (silencer_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 禁言長老 請睜眼')
    channel.send('請使一位玩家 無法發言')
    muteChannel(channel)
    carrer_round_sequence = 208
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }
  night = 0
  unmuteChannel(channel)
  channel.send('天亮請睜眼')
  playerEffect[switchPerson1] = switchPerson1ver
  playerEffect[switchPerson2] = switchPerson2ver
  switchPerson2ver = -1
  switchPerson1ver = -1
  w_k_player_vote_restart()
  w_k_day_none()
}


async function w_k_night_none() {
  night = 1 // 1 = 是晚上
  channel.send('天黑請閉眼')
  muteChannel(channel)
  playerthinking = 2
  waitTime = 0
  switchPerson2ver = -1
  switchPerson1ver = -1
  if (magician_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 魔術師 請睜眼')
    channel.send('請 交換 兩位玩家')
    muteChannel(channel)
    carrer_round_sequence = 210
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0
  if (guard_ON_OFF === 1) {
    carrer_round_sequence = 205
    unmuteChannel(channel)
    channel.send(' 守衛 請睜眼')
    channel.send('請 守護 一位玩家')
    muteChannel(channel)
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0

  carrer_round_sequence = 100
  playerthinking = wolf_count
  unmuteChannel(channel)
  channel.send(' 狼人 請睜眼')
  channel.send('請 殺害 一位玩家')
  muteChannel(channel)
  w_k_player_vote_restart()
  while (playerthinking > 0) {
    await wait(2000)
    waitTime = waitTime +1
    if (waitTime === 15) {
      playerthinking = 0
      }
  }

  playerthinking = 1
  waitTime = 0
  if (wolf_beauty_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 狼美人 請睜眼')
    channel.send('請 魅惑 一位玩家')
    muteChannel(channel)
    carrer_round_sequence = 102
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0
  if (witch_ON_OFF === 1) {
    carrer_round_sequence = 201
    unmuteChannel(channel)
    channel.send(' 女巫 請睜眼')
    channel.send(' 死亡之人已私訊 女巫')
    muteChannel(channel)
    let witch_who = career.findIndex(element => element === 201);
    let userId = players[witch_who]
    dead = effect.findIndex(element => element % 47 === 0 && element / 47 > 0)
    const witch_health = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('witch_health').setLabel('治癒').setStyle(ButtonStyle.Success))
  ]
    client.users.fetch(userId)
            .then(user => {
              user.send({
                content: `今天晚上 ${players[dead]} 被殺了 
你要使用解藥還是毒藥 (**解藥** 請按以下按鈕 **毒藥** 請至狼人殺頻道內施放技能 點下該處按鈕即自動觸發毒藥)`,
                components: witch_health
              });
            })
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }
  playerthinking = 1
  waitTime = 0
  if (prophet_ON_OFF === 1) {
    carrer_round_sequence = 200
    unmuteChannel(channel)
    channel.send(' 預言家 請睜眼')
    channel.send('請 查驗 一位玩家')
    muteChannel(channel)
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0
  if (sleepwalker_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 狼美人 請睜眼')
    channel.send('請使一位玩家 夢遊')
    muteChannel(channel)
    carrer_round_sequence = 209
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }

  playerthinking = 1
  waitTime = 0
  if (demon_hunter_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 獵魔人 請睜眼')
    channel.send('請 射殺 一位玩家')
    muteChannel(channel)
    carrer_round_sequence = 204
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }
  playerthinking = 1
  waitTime = 0
  if (silencer_ON_OFF === 1) {
    unmuteChannel(channel)
    channel.send(' 禁言長老 請睜眼')
    channel.send('請使一位玩家 無法發言')
    muteChannel(channel)
    carrer_round_sequence = 208
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
  }
  night = 0
  unmuteChannel(channel)
  channel.send('天亮請睜眼')
  playerEffect[switchPerson1] = switchPerson1ver
  playerEffect[switchPerson2] = switchPerson2ver
  switchPerson2ver = -1
  switchPerson1ver = -1
  w_k_player_vote_restart()
  w_k_day_none()
}

async function w_k_day_none() {
  day_night_button()
  playerthinking = playerCount
  while (playerthinking > 0) {
    await wait (2000)
  }
  w_k_end_judge()
}

async function day_night_button() {
  const player_1_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_1_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_2_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_2_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_3_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_3_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_4_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_4_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_5_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_5_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_6_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_6_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_7_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_7_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_8_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_8_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_9_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_9_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_10_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_10_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_11_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_11_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_12_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_12_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_13_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_13_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_14_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_14_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_15_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_15_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const player_16_vote_button = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('player_16_vote').setLabel('施放技能 / 投票').setStyle(ButtonStyle.Danger))
  ]
  const skip = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('skip').setLabel('略過 / 不投票').setStyle(ButtonStyle.Secondary))
  ]

  if (!Number.isInteger(playerEffect.slice[0] / 47)) {
    channel.send({ content: `seat1 ${players[0]}` , components: player_1_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 0 || career.findIndex(element => element === 101) === 0) {
    channel.send({ content: `seat1 ${players[0]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[1] / 47)) {
    channel.send({ content: `seat1 ${players[1]}` , components: player_2_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 1 || career.findIndex(element => element === 101) === 1) {
    channel.send({ content: `seat2 ${players[1]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[2] / 47)) {
    channel.send({ content: `seat1 ${players[2]}` , components: player_3_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 2 || career.findIndex(element => element === 101) === 2) {
    channel.send({ content: `seat1 ${players[2]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[3] / 47)) {
    channel.send({ content: `seat1 ${players[3]}` , components: player_4_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 3 || career.findIndex(element => element === 101) === 3) {
    channel.send({ content: `seat1 ${players[3]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[4] / 47)) {
    channel.send({ content: `seat1 ${players[4]}` , components: player_5_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 4 || career.findIndex(element => element === 101) === 4) {
    channel.send({ content: `seat1 ${players[4]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[5] / 47)) {
    channel.send({ content: `seat1 ${players[5]}` , components: player_6_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 5 || career.findIndex(element => element === 101) === 5) {
    channel.send({ content: `seat1 ${players[5]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[6] / 47)) {
    channel.send({ content: `seat1 ${players[6]}` , components: player_7_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 6 || career.findIndex(element => element === 101) === 6) {
    channel.send({ content: `seat1 ${players[6]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[7] / 47)) {
    channel.send({ content: `seat1 ${players[7]}` , components: player_8_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 7 || career.findIndex(element => element === 101) === 7) {
    channel.send({ content: `seat1 ${players[7]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[8] / 47)) {
    channel.send({ content: `seat1 ${players[8]}` , components: player_9_vote_button  })
  }else {
    if (career.findIndex(element => element === 202) === 8 || career.findIndex(element => element === 101) === 8) {
    channel.send({ content: `seat1 ${players[8]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[9] / 47)) {
    channel.send({ content: `seat1 ${players[9]}` , components: player_10_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 9 || career.findIndex(element => element === 101) === 9) {
    channel.send({ content: `seat1 ${players[9]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[10] / 47)) {
    channel.send({ content: `seat1 ${players[10]}` , components: player_11_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 10 || career.findIndex(element => element === 101) === 10) {
    channel.send({ content: `seat1 ${players[10]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[11] / 47)) {
    channel.send({ content: `seat1 ${players[11]}` , components: player_12_vote_button  })
  }else {
    if (career.findIndex(element => element === 202) === 11 || career.findIndex(element => element === 101) === 11) {
    channel.send({ content: `seat1 ${players[11]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[12] / 47)) {
    channel.send({ content: `seat1 ${players[12]}` , components: player_13_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 12 || career.findIndex(element => element === 101) === 12) {
    channel.send({ content: `seat1 ${players[12]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[13] / 47)) {
    channel.send({ content: `seat1 ${players[13]}` , components: player_14_vote_button  })
  }else {
    if (career.findIndex(element => element === 202) === 13 || career.findIndex(element => element === 101) === 13) {
    channel.send({ content: `seat1 ${players[13]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[14] / 47)) {
    channel.send({ content: `seat1 ${players[14]}` , components: player_15_vote_button  })
  }else {
    if (career.findIndex(element => element === 202) === 14 || career.findIndex(element => element === 101) === 14) {
    channel.send({ content: `seat1 ${players[14]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  if (!Number.isInteger(playerEffect.slice[15] / 47)) {
    channel.send({ content: `seat1 ${players[15]}` , components: player_16_vote_button  })
  } else {
    if (career.findIndex(element => element === 202) === 15 || career.findIndex(element => element === 101) === 15) {
    channel.send({ content: `seat1 ${players[15]}  發動技能，可以選擇一人與你共赴黃泉`   })
      carrer_round_sequence = 500
    while (playerthinking === 1) {
      await wait(2000)
      waitTime = waitTime +1
      if (waitTime === 15) {
        playerthinking = 0
      }
    }
    }
    channel.send({ content: `seat1 ${players[0]}   已死亡`   })}
  channel.send({ content: `跳過 / 棄票` , components: skip  })
}

async function w_k_end_judge() {
 if (wolf_count === 0 ) {
   return channel.send('好人獲勝')
 } else if (wolf_count > good  || god ===  0  || villager === 0) {
   return channel.send('狼人獲勝')
 } else if (player === 0) {
   if (bomber_ON_OFF === 1) {
     return channel.send('炸彈人獲勝')
   } else {
     return channel.send("無人生還")
   }
 } else if (cupid_ON_OFF === 1) {
   if(cupid_alive === 1 ) {
     if (lover_alive ===1 && player === 3) {
       return channel.send("戀人獲勝")
     } else if (lover_alive === 1 && player === 2 ) {
       return channel.send("戀人獲勝")
     }
   }
 }
 w_k_night_none()
}

async function w_k_career() {
  if (players[0]) {
    w_k_career_setting()
  } else  {
    w_k_career_view
  }
}

async function w_k_career_setting() {
  const rows = [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wolf_count_minus').setLabel('減少').setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId('wolf_count_add').setLabel('增加').setStyle(ButtonStyle.Success)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wolf_king_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('wolf_king_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wolf_beauty_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('wolf_beauty_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wolf_whiteking_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('wolf_whiteking_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wolf_inv_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('wolf_inv_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wolf_demon_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('wolf_demon_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wolf_bloodmoon_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('wolf_bloodmoon_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('prophet_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('prophet_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('witch_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('witch_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('hunter_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('hunter_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('knight_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('knight_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('demon_hunter_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('demon_hunter_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('guard_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('guard_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('idiot_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('idiot_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('trainer_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('trainer_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('silencer_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('silencer_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('sleepwalker_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('sleepwalker_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('magician_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('magician_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('wild_child_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('wild_child_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('bomber_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('bomber_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('cupid_On').setLabel('開啟').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('cupid_Off').setLabel('關閉').setStyle(ButtonStyle.Danger)
    ),
    new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('villager_minus').setLabel('減少').setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId('villager_count_add').setLabel('增加').setStyle(ButtonStyle.Success)
    )
  ];

  return { content: '設定職業:', components: rows };
}

async function w_k_career_view() {
  let content = `狼人數: ${wolf_count}\n`;
  content += `狼王  目前狀態: **${wolf_king_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `狼美人  目前狀態: **${wolf_beauty_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `白狼王  目前狀態: **${wolf_whiteking_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `隱狼  目前狀態: **${wolf_inv_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `惡靈騎士  目前狀態: **${wolf_demon_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `血月使徒  目前狀態: **${wolf_bloodmoon_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `預言家  目前狀態: **${prophet_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `女巫  目前狀態: **${witch_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `獵人  目前狀態: **${hunter_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `騎士  目前狀態: **${knight_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `獵魔者  目前狀態: **${demon_hunter_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `守衛  目前狀態: **${guard_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `白癡  目前狀態: **${idiot_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `馴熊師  目前狀態: **${trainer_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `禁言長老  目前狀態: **${silencer_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `攝夢人  目前狀態: **${sleepwalker_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `魔術師  目前狀態: **${magician_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `野孩子  目前狀態: **${wild_child_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `盜賊  目前狀態: **${thief_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `炸彈人  目前狀態: **${bomber_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `邱比特  目前狀態: **${cupid_ON_OFF === 1 ? '開啟' : '關閉'}**\n`;
  content += `村民: ${villager}\n`;

  return { content };
}



async function handleCommand(command, guildId, member) {
  switch (command) {
    case 'player':
      return await w_k_player(guildId, member);
    case 'start':
      return await w_k_start(guildId, member);
    case 'restart':
      w_k_restart();
      return '遊戲已重置';
    case 'career':
      return await w_k_career(guildId, member);
    default:
      return '未知指令';
  }
}

module.exports = {handleInteraction, handleCommand , players };




