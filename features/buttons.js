
const {players} = require("./customCommands")

  p1 =1
  p2 =1
  p3 =1
  p4 =1
  p5 =1
  p6 =1
  p7 =1
  p8 =1
  p9 =1
  p10 =1
  p11 =1
  p12 =1
  p13 =1
  p14 =1
  p15 =1
  p16 =1
  V1 = 1
  V2 = 1
       V3= 1
       V4= 1
       V5= 1
       V6= 1
       V7= 1
       V8= 1
       V9= 1
       V10= 1
       V11= 1
       V12= 1
       V13= 1
       V14= 1
       V15= 1
       V16= 1
c1 = player1_career = 1
c2 = player2_career= 1
c3 = player3_career= 1
c4 = player4_career= 1
c5 = player5_career= 1
c6 = player6_career= 1
c7 = player7_career= 1
c8 = player8_career= 1
c9 = player9_career= 1
c10 = player10_career= 1
c11 = player11_career= 1
c12 = player12_career= 1
c13 = player13_career= 1
c14 = player14_career= 1
c15 = player15_career= 1
c16 = player16_career= 1


async function w_k_night_career_exile_frontload1() {
  if (player_sequence === 1) {
    player1_career = career_sequence
  }
  if (player_sequence === 2) {
    player2_career = career_sequence
  }
  if (player_sequence === 3) {
    player3_career = career_sequence
  }
  if (player_sequence === 4) {
    player4_career = career_sequence
  }
  if (player_sequence === 5) {
    player5_career = career_sequence
  }
  if (player_sequence === 6) {
    player6_career = career_sequence
  }
  if (player_sequence === 7) {
    player7_career = career_sequence
  }
  if (player_sequence === 8) {
    player8_career = career_sequence
  }
  if (player_sequence === 9) {
    player9_career = career_sequence
  }
  if (player_sequence === 10) {
    player10_career = career_sequence
  }
  if (player_sequence === 11) {
    player11_career = career_sequence
  }
  if (player_sequence === 12) {
    player12_career = career_sequence
  }
  if (player_sequence === 13) {
    player13_career = career_sequence
  }
  if (player_sequence === 14) {
    player14_career = career_sequence
  }
  if (player_sequence === 15) {
    player15_career = career_sequence
  }
  if (player_sequence === 16) {
    player16_career = career_sequence
  }
}  //改變玩家角色
async function handleInteraction(interaction) {
  switch (interaction.customId) {
    case 'wolf_count_minus':
      wolf_count = Math.max(0, wolf_count - 1);
      purely_wolf_count =  wolf_count
        if (wolf_king_ON_OFF === 1)       { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_beauty_ON_OFF === 1)     { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_whiteking_ON_OFF === 1)  { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_inv_ON_OFF === 1)        { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_demon_ON_OFF === 1)      { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_bloodmoon_ON_OFF === 1)  { purely_wolf_count = purely_wolf_count - 1}
      await interaction.reply(`狼隊數量: ${wolf_count}`);
      break;
    case 'wolf_count_add':
      wolf_count = Math.min(16, wolf_count + 1);
      purely_wolf_count =  wolf_count
        if (wolf_king_ON_OFF === 1)       { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_beauty_ON_OFF === 1)     { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_whiteking_ON_OFF === 1)  { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_inv_ON_OFF === 1)        { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_demon_ON_OFF === 1)      { purely_wolf_count = purely_wolf_count - 1}
        if (wolf_bloodmoon_ON_OFF === 1)  { purely_wolf_count = purely_wolf_count - 1}
      await interaction.reply(`狼隊數量: ${wolf_count}`);
      break;
    case 'wolf_king_On':
      wolf_king_ON_OFF = 1;
      await interaction.reply('狼王 已開啟');
      break;
    case 'wolf_king_Off':
      wolf_king_ON_OFF = 0;
      await interaction.reply('狼王 已關閉');
      break;
    case 'wolf_beauty_On':
      wolf_beauty_ON_OFF = 1;
      await interaction.reply('狼美人 已開啟');
      break;
    case 'wolf_beauty_Off':
      wolf_beauty_ON_OFF = 0;
      await interaction.reply('狼美人 已關閉');
      break;
    case 'wolf_whiteking_On':
      wolf_whiteking_ON_OFF = 1;
      await interaction.reply('白狼王 已開啟');
      break;
    case 'wolf_whiteking_Off':
      wolf_whiteking_ON_OFF = 0;
      await interaction.reply('白狼王 已關閉');
      break;
    case 'wolf_inv_On':
      wolf_inv_ON_OFF = 1;
      await interaction.reply('隱狼 已開啟');
      break;
    case 'wolf_inv_Off':
      wolf_inv_ON_OFF = 0;
      await interaction.reply('隱狼 已關閉');
      break;
    case 'wolf_demon_On':
      wolf_demon_ON_OFF = 1;
      await interaction.reply('惡靈騎士 已開啟');
      break;
    case 'wolf_demon_Off':
      wolf_demon_ON_OFF = 0;
      await interaction.reply('惡靈騎士 已關閉');
      break;
    case 'wolf_bloodmoon_On':
      wolf_bloodmoon_ON_OFF = 1;
      await interaction.reply('血月狼人 已開啟');
      break;
    case 'wolf_bloodmoon_Off':
      wolf_bloodmoon_ON_OFF = 0;
      await interaction.reply('血月狼人 已關閉');
      break;
    case 'prophet_On':
      prophet_ON_OFF = 1;
      await interaction.reply('預言家 已開啟');
      break;
    case 'prophet_Off':
      prophet_ON_OFF = 0;
      await interaction.reply('預言家 已關閉');
      break;
    case 'witch_On':
      witch_ON_OFF = 1;
      await interaction.reply('女巫 已開啟');
      break;
    case 'witch_Off':
      witch_ON_OFF = 0;
      await interaction.reply('女巫 已關閉');
      break;
    case 'hunter_On':
      hunter_ON_OFF = 1;
      await interaction.reply('獵人 已開啟');
      break;
    case 'hunter_Off':
      hunter_ON_OFF = 0;
      await interaction.reply('獵人 已關閉');
      break;
    case 'knight_On':
      knight_ON_OFF = 1;
      await interaction.reply('騎士 已開啟');
      break;
    case 'knight_Off':
      knight_ON_OFF = 0;
      await interaction.reply('騎士 已關閉');
      break;
    case 'demon_hunter_On':
      demon_hunter_ON_OFF = 1;
      await interaction.reply('獵魔人 已開啟');
      break;
    case 'demon_hunter_Off':
      demon_hunter_ON_OFF = 0;
      await interaction.reply('獵魔人 已關閉');
      break;
    case 'guard_On':
      guard_ON_OFF = 1;
      await interaction.reply('守衛 已開啟');
      break;
    case 'guard_Off':
      guard_ON_OFF = 0;
      await interaction.reply('守衛 已關閉');
      break;
    case 'idiot_On':
      idiot_ON_OFF = 1;
      await interaction.reply('白痴 已開啟');
      break;
    case 'idiot_Off':
      idiot_ON_OFF = 0;
      await interaction.reply('白痴 已關閉');
      break;
    case 'trainer_On':
      trainer_ON_OFF = 1;
      await interaction.reply('馴熊師 已開啟');
      break;
    case 'trainer_Off':
      trainer_ON_OFF = 0;
      await interaction.reply('馴熊師 已關閉');
      break;
    case 'silencer_On':
      silencer_ON_OFF = 1;
      await interaction.reply('禁言長老 已開啟');
      break;
    case 'silencer_Off':
      silencer_ON_OFF = 0;
      await interaction.reply('禁言長老 已關閉');
      break;
    case 'sleepwalker_On':
      sleepwalker_ON_OFF = 1;
      await interaction.reply('攝夢人 已開啟');
      break;
    case 'sleepwalker_Off':
      sleepwalker_ON_OFF = 0;
      await interaction.reply('攝夢人 已關閉');
      break;
    case 'magician_On':
      magician_ON_OFF = 1;
      await interaction.reply('魔術師 已開啟');
      break;
    case 'magician_Off':
      magician_ON_OFF = 0;
      await interaction.reply('魔術師 已關閉');
      break;
    case 'wild_child_On':
      wild_child_ON_OFF = 1;
      await interaction.reply('野孩子 已開啟');
      break;
    case 'wild_child_Off':
      wild_child_ON_OFF = 0;
      await interaction.reply('野孩子 已關閉');
      break;
    case 'bomber_On':
      bomber_ON_OFF = 1;
      await interaction.reply('炸彈客 已開啟');
      break;
    case 'bomber_Off':
      bomber_ON_OFF = 0;
      await interaction.reply('炸彈客 已關閉');
      break;
    case 'cupid_On':
      cupid_ON_OFF = 1;
      await interaction.reply('邱比特 已開啟');
      break;
    case 'cupid_Off':
      cupid_ON_OFF = 0;
      await interaction.reply('邱比特 已關閉');
      break;
    case 'villager_add':
      villager = Math.min(16, wolf_count + 1);
      await interaction.reply(`狼隊數量: ${villager}`);
      break;
    case 'villager_minus':
      villager = Math.max(0, wolf_count - 1);
      await interaction.reply(`狼隊數量: ${villager}`);
      break;
    case 'player_1_vote_button':
      bevoter = 0
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
      bevoter = -1
      break;
    case 'player_2_vote_button':
      bevoter = 1
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_3_vote_button':
      bevoter = 2
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_4_vote_button':
      bevoter = 3
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_5_vote_button':
      bevoter = 4
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_6_vote_button':
      bevoter = 5
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_7_vote_button':
      bevoter = 7
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_8_vote_button':
      bevoter = 7
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_9_vote_button':
      bevoter = 8
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
      bevoter = -1
      break;
    case 'player_10_vote_button':
      bevoter = 9
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_11_vote_button':
      bevoter = 10
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_12_vote_button':
      bevoter = 11
      finding_interation_from_player()
      player_interation_from_button()
      playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_13_vote_button':
      bevoter = 12
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_14_vote_button':
      bevoter = 13
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_15_vote_button':
      bevoter = 14
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'player_16_vote_button':
      bevoter = 15
      finding_interation_from_player()
      player_interation_from_button()
        playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
        bevoter = -1
      break;
    case 'witch_health':
      if (health_potion === 0) {
        interaction.reply("你已無解藥可使用，請嘗試使用毒藥或者略過")
      } else {
        if(Number.isInteger(playerEffect[dead]))
        playerEffect[dead] = playerEffect[dead] / 47
        health_potion = 0
      }
      break;
    case 'skip':
      finding_interation_from_player()
      playerEffect[player_interaction -1] = playerEffect[player_interaction -1] *67
      break;
      // 添加更多的 case 處理其他按鈕
  }
}

async function finding_interation_from_player() {  //檢查角色於輪次對應
  if (interaction.user.id === players[0] ) { player_interaction = 1 }
  if (interaction.user.id === players[1] ) { player_interaction = 2 }
  if (interaction.user.id === players[2] ) { player_interaction = 3 }
  if (interaction.user.id === players[3] ) { player_interaction = 4 }
  if (interaction.user.id === players[4] ) { player_interaction = 5 }
  if (interaction.user.id === players[5] ) { player_interaction = 6 }
  if (interaction.user.id === players[6] ) { player_interaction = 7 }
  if (interaction.user.id === players[7] ) { player_interaction = 8 }
  if (interaction.user.id === players[8] ) { player_interaction = 9 }
  if (interaction.user.id === players[9] ) { player_interaction = 10 }
  if (interaction.user.id === players[10] ) { player_interaction = 11 }
  if (interaction.user.id === players[11] ) { player_interaction = 12 }
  if (interaction.user.id === players[12] ) { player_interaction = 13 }
  if (interaction.user.id === players[13] ) { player_interaction = 14 }
  if (interaction.user.id === players[14] ) { player_interaction = 15 }
  if (interaction.user.id === players[15] ) { player_interaction = 16 }
}
async function player_interation_from_button() {
  if (player_interaction === 1) {
        if (player1_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 2) {
        if (player2_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 3) {
        if (player3_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 4) {
        if (player4_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 5) {
        if (player5_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 6) {
        if (player6_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 7) {
        if (player7_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 8) {
        if (player8_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 9) {
        if (player9_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 10) {
        if (player10_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 11) {
        if (player11_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 12) {
        if (player12_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 13) {
        if (player13_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 14) {
        if (player14_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 15) {
        if (player15_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
  if (player_interaction === 16) {
        if (player16_career === career_round_sequence) {
          w_k_player_career_voting_skill()
        }
        else {
          await interaction.reply({ content: '尚未到你的輪次', ephemeral: true });
        }

      }
}   //判定是本輪玩家後執行技能


//狀態判定 狼美人 2 獵魔人 3 守衛 5 馴熊師 7 禁言 11 攝夢人 13 魔術師交換 17 野孩子榜樣 19 邱比特 23 活著 29 血月使徒 31 女巫 37 惡靈騎士 41(全免 43(反傷 該晚死亡 47
async function w_k_player_effect_restart() {
  //效果第一次重製
  p1 =1,
  p2 =1,
  p3 =1,
  p4 =1,
  p5 =1,
  p6 =1,
  p7 =1,
  p8 =1,
  p9 =1,
  p10 =1,
  p11 =1,
  p12 =1,
  p13 =1,
  p14 =1,
  p15 =1,
  p16 =1
}
async function w_k_player_vote_restart() {
  V1 = 1,
       V2 = 1,
       V3= 1,
       V4= 1,
       V5= 1,
       V6= 1,
       V7= 1,
       V8= 1,
       V9= 1,
       V10= 1,
       V11= 1,
       V12= 1,
       V13= 1,
       V14= 1,
       V15= 1,
       V16= 1
}  //重製所有人的被投票數

// 將這些變數存儲在一個物件中

let variables = {
  player1_NoV : V1,
  player2_NoV : V2,
  player3_NoV : V3,
  player4_NoV : V4,
  player5_NoV : V5,
  player6_NoV : V6,
  player7_NoV : V7,
  player8_NoV : V8,
  player9_NoV : V9,
  player10_NoV : V10,
  player11_NoV : V11,
  player12_NoV : V12,
  player13_NoV : V13,
  player14_NoV : V14,
  player15_NoV : V15,
  player16_NoV : V16,
};   //玩家被投票數的清單
async function w_k_player_career_voting_skill_front() {
  // 找到最小值及其變數名稱的邏輯
    if (playerthinking === 0) {
      let minVarName = null;
      let minValue = Infinity;

      for (let key in variables) {
        if (variables[key] < minValue) {
          minValue = variables[key];
          minVarName = key;
        }
      }

      // 修改最小值變數的值
      variables[minVarName] = 100;
      w_k_night_effect_frontload()
    }
}
async function w_k_player_career_voting_skill() {
  if (carrer_round_sequence === 210) {
      w_k_player_vote_backload1()
    w_k_player_career_voting_skill_front()
    }

}

async function w_k_night_effect_frontload() {
  if (player1_NoV === 100 ) {
    w_k_night_effect_frontload2()
    player_1_effect = player_1_effect / effect_change
    if (Number.isInteger(player_1_effect / 13)) {
      player_1_effect = player_1_effect * effect_change  }
    else {
      if (!Number.isInteger(player_1_effect / 37)) {
        if (career_round_sequence === 100) {
          if (Number.isInteger(player_1_effect / 5) || Number.isInteger(player_1_effect / 13) || Number.isInteger(player_1_effect / 41)) {
            player_1_effect = player_1_effect * effect_change
          }
        }
      }
    }
  }

}
//狀態判定 狼美人 2 獵魔人 3 守衛 當晚5 前一晚29 馴熊師 7 禁言 11 前一晚59 攝夢人 13 前晚61 魔術師交換 17 野孩子榜樣 19 邱比特 23  血月使徒 31 女巫 殺37 救53 惡靈騎士 41(全免 43(反傷 該晚死亡 47
let playerEffect = {
  effect_p1 : p1,
  effect_p2 : p2,
  effect_p3 : p3,
  effect_p4 : p4,
  effect_p5 : p5,
  effect_p6 : p6,
  effect_p7 : p7,
  effect_p8 : p8,
  effect_p9 : p9,
  effect_p10 : p10,
  effect_p11 : p11,
  effect_p12 : p12,
  effect_p13 : p13,
  effect_p14 : p14,
  effect_p15 : p15,
  effect_p16 : p16
}

let career = {
  player1_career : c1,
  player2_career : c2,
  player3_career : c3,
  player4_career : c4,
  player5_career : c5,
  player6_career : c6,
  player7_career : c7,
  player8_career : c8,
  player9_career : c9,
  player10_career : c10,
  player11_career : c11,
  player12_career : c12,
  player13_career : c13,
  player14_career : c14,
  player15_career : c15,
  player16_career : c16

}  //看需不需要


async function w_k_night_effect_frontload2() {
  if (career_round_sequence === 100 ) {
    if (playerthinking > 0) {
      playerthinking = playerthinking -1
      variables[bevoter] = variables[bevoter] -1
    }
    if (playerthinking === 0) {
      let minVarName = null;
      let minValue = Infinity;

      for (let key in variables) {
        if (variables[key] < minValue) {
          minValue = variables[key];
          minVarName = key;
        }
      }

      // 修改最小值變數的值
      variables[minVarName] = 100;
      bekilled_who = variables.findIndex(element => element === 100)
      if (!Number.isInteger(playerEffect[bevoter]) / 5 && !Number.isInteger(playerEffect[bevoter] / 13)) {
      playerEffect[bekilled_who] = playerEffect[bekilled_who] * 47
      } else {
      }
    }
  }
  if (career_round_sequence === 102 ) {
    playerEffect[bevoter] = playerEffect[bevoter] *2
    playerthinking = playerthinking - 1
  }
  if (career_round_sequence === 105 ) {}
  if (career_round_sequence === 200 ) {
    if (career[bevoter] >= 100 && career[bevoter] <= 103  || career[bevoter] === 106 ) {
      let prophet_who = career.findIndex(element => element === 200);
      let userId = players[prophet_who]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`查詢對象陣營為 狼人`)})
      playerthinking = playerthinking - 1
      if (Number.isInteger(playerEffect[bevoter] / 43)) {
      playerEffect[prophet_who] = playerEffect[prophet_who] *47
      playerEffect[bevoter] = playerEffect[bevoter] / 43
      }
    } else {
      let prophet_who = career.findIndex(element => element === 200);
      let userId = players[prophet_who]
      client.users.fetch(userId)
            .then(user => {
                return user.send(`查詢對象陣營為 好人 或 第三方`)})
      playerthinking = playerthinking - 1
    }
  }
  if (career_round_sequence === 201 ) {
    if (poisoning_potion === 1) {
      if (!Number.isInteger(playerEffect[bevoter] / 41)) {
      playerEffect[bevoter] = playerEffect / 47
      playerthinking = playerthinking - 1
      } else {
        let witch_who = career.findIndex(element => element === 201);
        playerEffect[witch_who] = playerEffect[witch_who] * 47
        playerEffect[bevoter] = playerEffect[bevoter] / 43
        playerthinking = playerthinking - 1
      }

    } else {
      playerthinking = playerthinking - 1
      interaction.reply('你已無毒藥，將自動跳過', ephemeral=True)

    }

  }
  if (career_round_sequence === 204 ) {
    if (career[bevoter] > 100 && career[bevoter] < 200  ) {
      if (Number.isInteger(playerEffect[bevoter] / 41)) {
        playerthinking = playerthinking - 1
      }
      if (Number.isInteger(playerEffect[bevoter]) / 5 || Number.isInteger(playerEffect[bevoter] / 13)) {
      }
      playerEffect[bevoter] = playerEffect[bevoter] *47
    } else {
      demon_who = career.findIndex(element => element === 200);
      playerEffect[demon_who] = playerEffect[demon_who] * 47
      playerthinking = playerthinking - 1
    }
  }
  if (career_round_sequence === 205 ) {
    if (!Number.isInteger(playerEffect[bevoter] / 29)) {
      playerEffect[bevoter] = playerEffect[bevoter] * 5
      guard_repeat = effect.findIndex(element => element % 29 === 0 && element / 29 > 0)
      playerEffect[guard_repeat] = playerEffect[guard_repeat] / 29
      playerEffect[bevoter] =playerEffect[bevoter] * 29
      playerthinking = playerthinking - 1
    } else {
    }
  }
  if (career_round_sequence === 207 ) {
    trainer_who = playerEffect.findIndex(element => element % 7 === 0 && element / 7 > 0)
    if ( (career[trainer_who -1] >100 && career[trainer_who -1] < 200 ) || (career[trainer_who +1] >100 && career[trainer_who +1] < 200 ) ) {
      trainer_skill_report = 1  //有
    } else {
      trainer_skill_report = -1 //沒有
      //沒開的時候 = 0
    }
  }
  if (career_round_sequence === 208 ) {
    if(!Number.isInteger(playerEffect[bevoter] / 59 )) {
      playerEffect[bevoter] = playerEffect[bevoter] *11
      silencer_repeat = career.findIndex(element => element % 59 === 0 && element / 59 > 0)
      playerEffect[silencer_repeat] = playerEffect[silencer_repeat] / 59
      playerEffect[bevoter] =playerEffect[bevoter] * 59
      playerthinking = playerthinking - 1
    } else {
    }
  }
  if (career_round_sequence === 209 ) {
    if(!Number.isInteger(playerEffect[bevoter] / 61 )) {
      playerEffect[bevoter] = playerEffect[bevoter] * 13
      sleepwalker_repeat = playerEffect.findIndex(element => element % 61 === 0 && element / 61 > 0)
      playerEffect[sleepwalker_repeat] = playerEffect[sleepwalker_repeat] / 61
      playerEffect[bevoter] =playerEffect[bevoter] * 61
      playerthinking = playerthinking - 1
      if (Number.isInteger(playerEffect[bevoter] / 47)) {
        playerEffect[bevoter] = playerEffect[bevoter] / 47
      }
    } else {
      playerEffect[bevoter] = playerEffect[bevoter] * 47
      playerthinking = playerthinking - 1
    }
  }
  if (career_round_sequence === 210 ) {
    if (switchPerson1ver === -1) {
      switchPerson1ver = playerEffect[bevoter]
      switchPerson1 = playerEffect.indexOf(switchPerson1ver)
      playerthinking = playerthinking - 1
    }
    else if (switchPerson2ver === -1) {
      switchPerson2ver = playerEffect[bevoter]
      switchPerson2 = playerEffect.indexOf(switchPerson2ver)
      playerthinking = playerthinking - 1
    }
    else {
      playerEffect[switchPerson1] = switchPerson2ver
      playerEffect[switchPerson2] = switchPerson1ver
    }
  }
  if (career_round_sequence === 301 ) {
    playerEffect[bevoter] = playerEffect[bevoter] *19
    playerthinking = playerthinking - 1
  }
  if (career_round_sequence === 304 ) {
    if (cupid1 === -1) {
      cupid1 = playerEffect[bevoter]
      playerEffect[bevoter] = playerEffect[bevoter] * 23
      cupid1_w = playerEffect.indexOf(cupid1)
      playerthinking = playerthinking - 1
    }
    else if (cupid2 === -1) {
      cupid2 = playerEffect[bevoter]
      playerEffect[bevoter] = playerEffect[bevoter] * 23
      cupid2_w = playerEffect.indexOf(cupid2)
      playerthinking = playerthinking - 1
    }
  }
  if (career_round_sequence === 500 ) {

  }
}

async function w_k_player_vote_backload1(){
  if (player1_seat_sequence === bevoter ) {
      player1_NoV === player1_NoV -1
    }
  if (player2_seat_sequence === bevoter ) {
      player2_NoV === player2_NoV -1
    }
  if (player3_seat_sequence === bevoter ) {
      player3_NoV === player3_NoV -1
    }
  if (player4_seat_sequence === bevoter ) {
      player4_NoV === player4_NoV -1
    }
  if (player5_seat_sequence === bevoter ) {
      player5_NoV === player5_NoV -1
    }
  if (player6_seat_sequence === bevoter ) {
      player6_NoV === player6_NoV -1
    }
  if (player7_seat_sequence === bevoter ) {
      player7_NoV === player7_NoV -1
    }
  if (player8_seat_sequence === bevoter ) {
      player8_NoV === player8_NoV -1
    }
  if (player9_seat_sequence === bevoter ) {
      player9_NoV === player9_NoV -1
    }
  if (player10_seat_sequence === bevoter ) {
      player10_NoV === player10_NoV -1
    }
  if (player11_seat_sequence === bevoter ) {
      player11_NoV === player11_NoV -1
    }
  if (player12_seat_sequence === bevoter ) {
      player12_NoV === player12_NoV -1
    }
  if (player13_seat_sequence === bevoter ) {
      player13_NoV === player13_NoV -1
    }
  if (player14_seat_sequence === bevoter ) {
      player14_NoV === player14_NoV -1
    }
  if (player15_seat_sequence === bevoter ) {
      player15_NoV === player15_NoV -1
    }
  if (player16_seat_sequence === bevoter ) {
      player16_NoV === player16_NoV -1
    }
}



module.exports = { w_k_night_career_exile_frontload1, handleInteraction,w_k_player_effect_restart ,playerEffect,w_k_player_vote_restart}