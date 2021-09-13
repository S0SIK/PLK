const API_id = `10a871f6fab9f5647fdb2d0a433a0910`

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]')

function openModal(modal) {
    if (modal == null) return
    const overlay = document.getElementById('overlay')
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return

    const overlay = document.getElementById('overlay')
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

fetch('lista.json')
    .then(response => response.json())
    .then(data => {
        for (const [key, value] of Object.entries(data)) {
            const png = value.png
            const tag = value.tag
            const API_player_1 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p1}`
            const API_player_2 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p2}`
            const API_player_3 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p3}`
            const API_player_4 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p4}`
            const API_player_5 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p5}`
            const API_player_6 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p6}`
            const API_player_7 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p7}`
            const API_player_8 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p8}`
            const API_player_9 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p9}`
            const API_player_10 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p10}`
            const API_player_11 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p11}`
            const API_player_12 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p12}`
            const API_player_13 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p13}`
            const API_player_14 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p14}`
            const API_player_15 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p15}`
            const API_player_16 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p16}`
            const API_player_17 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p17}`
            const API_player_18 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p18}`
            const API_player_19 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p19}`
            const API_player_20 = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${value.p20}`
            let ominTenRekord = false; 
            fetch(API_player_1)
                .then(response => response.json())
                .then(data => {
                    const player_1 = data.data[0].account_id
                    const nickname_1 = data.data[0].nickname
                    const API_playerstats_1 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_1}`
                    fetch(API_playerstats_1)
                .then(response => response.json())
                .then(data => {
                    const hits1 = data.data[player_1].statistics.all.hits
                    const wins1 = data.data[player_1].statistics.all.wins
                    const battles1 = data.data[player_1].statistics.all.battles
                    const damage_dealt1 = data.data[player_1].statistics.all.damage_dealt
                    const shots1 = data.data[player_1].statistics.all.shots
                    const frags1= data.data[player_1].statistics.all.frags
                    const survived_battles1 = data.data[player_1].statistics.all.survived_battles
                    
                    const Kd1 = (frags1/(battles1-survived_battles1)).toFixed(2)
                    const Survived1 = (survived_battles1*100/battles1).toFixed(2)+'%'
                    const Wins1 = (wins1 * 100 /battles1).toFixed(2)+'%'
                    const DMG1 = (damage_dealt1/battles1).toFixed(0)
                    const Hit1 = (hits1 * 100 / shots1).toFixed(2)+'%'
                    fetch(API_player_2)
                .then(response => response.json())
                .then(data => {
                    const player_2 = data.data[0].account_id
                    const nickname_2 = data.data[0].nickname
                    const API_playerstats_2 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_2}`
                    fetch(API_playerstats_2)
                .then(response => response.json())
                .then(data => {
                    const hits2 = data.data[player_2].statistics.all.hits
                    const wins2 = data.data[player_2].statistics.all.wins
                    const battles2 = data.data[player_2].statistics.all.battles
                    const damage_dealt2 = data.data[player_2].statistics.all.damage_dealt
                    const shots2 = data.data[player_2].statistics.all.shots
                    const frags2= data.data[player_2].statistics.all.frags
                    const survived_battles2 = data.data[player_2].statistics.all.survived_battles
                    
                    const Kd2 = (frags2/(battles2-survived_battles2)).toFixed(2)
                    const Survived2 = (survived_battles2*100/battles1).toFixed(2)+'%'
                    const Wins2 = (wins2 * 100 /battles2).toFixed(2)+'%'
                    const DMG2 = (damage_dealt2/battles2).toFixed(0)
                    const Hit2 = (hits2 * 100 / shots2).toFixed(2)+'%'
                    fetch(API_player_3)
                .then(response => response.json())
                .then(data => {
                    const player_3 = data.data[0].account_id
                    const nickname_3 = data.data[0].nickname
                    const API_playerstats_3 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_3}`
                    fetch(API_playerstats_3)
                .then(response => response.json())
                .then(data => {
                    const hits3 = data.data[player_3].statistics.all.hits
                    const wins3 = data.data[player_3].statistics.all.wins
                    const battles3 = data.data[player_3].statistics.all.battles
                    const damage_dealt3 = data.data[player_3].statistics.all.damage_dealt
                    const shots3 = data.data[player_3].statistics.all.shots
                    const frags3= data.data[player_3].statistics.all.frags
                    const survived_battles3 = data.data[player_3].statistics.all.survived_battles
                    
                    const Kd3 = (frags3/(battles3-survived_battles3)).toFixed(2)
                    const Survived3 = (survived_battles3*100/battles3).toFixed(2)+'%'
                    const Wins3 = (wins3 * 100 /battles3).toFixed(2)+'%'
                    const DMG3 = (damage_dealt3/battles3).toFixed(0)
                    const Hit3 = (hits3 * 100 / shots3).toFixed(2)+'%'
                    fetch(API_player_4)
                .then(response => response.json())
                .then(data => {
                    const player_4 = data.data[0].account_id
                    const nickname_4 = data.data[0].nickname
                    const API_playerstats_4 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_4}`
                    fetch(API_playerstats_4)
                .then(response => response.json())
                .then(data => {
                    const hits4 = data.data[player_4].statistics.all.hits
                    const wins4 = data.data[player_4].statistics.all.wins
                    const battles4 = data.data[player_4].statistics.all.battles
                    const damage_dealt4 = data.data[player_4].statistics.all.damage_dealt
                    const shots4 = data.data[player_4].statistics.all.shots
                    const frags4= data.data[player_4].statistics.all.frags
                    const survived_battles4 = data.data[player_4].statistics.all.survived_battles
                    
                    const Kd4 = (frags4/(battles4-survived_battles4)).toFixed(2)
                    const Survived4 = (survived_battles4*100/battles4).toFixed(2)+'%'
                    const Wins4 = (wins4 * 100 /battles4).toFixed(2)+'%'
                    const DMG4 = (damage_dealt4/battles4).toFixed(0)
                    const Hit4 = (hits4 * 100 / shots4).toFixed(2)+'%'
                    fetch(API_player_5)
                .then(response => response.json())
                .then(data => {
                    const player_5 = data.data[0].account_id
                    const nickname_5 = data.data[0].nickname
                    const API_playerstats_5 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_5}`
                    fetch(API_playerstats_5)
                .then(response => response.json())
                .then(data => {
                    const hits5 = data.data[player_5].statistics.all.hits
                    const wins5 = data.data[player_5].statistics.all.wins
                    const battles5 = data.data[player_5].statistics.all.battles
                    const damage_dealt5 = data.data[player_5].statistics.all.damage_dealt
                    const shots5 = data.data[player_5].statistics.all.shots
                    const frags5= data.data[player_5].statistics.all.frags
                    const survived_battles5 = data.data[player_5].statistics.all.survived_battles
                    
                    const Kd5 = (frags5/(battles5-survived_battles5)).toFixed(2)
                    const Survived5 = (survived_battles5*100/battles5).toFixed(2)+'%'
                    const Wins5 = (wins5 * 100 /battles5).toFixed(2)+'%'
                    const DMG5 = (damage_dealt5/battles5).toFixed(0)
                    const Hit5 = (hits5 * 100 / shots5).toFixed(2)+'%'
                    fetch(API_player_6)
                .then(response => response.json())
                .then(data => {
                    const player_6 = data.data[0].account_id
                    const nickname_6 = data.data[0].nickname
                    const API_playerstats_6 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_6}`
                    fetch(API_playerstats_6)
                .then(response => response.json())
                .then(data => {
                    const hits6 = data.data[player_6].statistics.all.hits
                    const wins6 = data.data[player_6].statistics.all.wins
                    const battles6 = data.data[player_6].statistics.all.battles
                    const damage_dealt6 = data.data[player_6].statistics.all.damage_dealt
                    const shots6 = data.data[player_6].statistics.all.shots
                    const frags6= data.data[player_6].statistics.all.frags
                    const survived_battles6 = data.data[player_6].statistics.all.survived_battles
                    
                    const Kd6 = (frags6/(battles6-survived_battles6)).toFixed(2)
                    const Survived6 = (survived_battles6*100/battles6).toFixed(2)+'%'
                    const Wins6 = (wins6 * 100 /battles6).toFixed(2)+'%'
                    const DMG6 = (damage_dealt6/battles6).toFixed(0)
                    const Hit6 = (hits6 * 100 / shots6).toFixed(2)+'%'
                    fetch(API_player_7)
                .then(response => response.json())
                .then(data => {
                    const player_7 = data.data[0].account_id
                    const nickname_7 = data.data[0].nickname
                    const API_playerstats_7 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_7}`
                    fetch(API_playerstats_7)
                .then(response => response.json())
                .then(data => {
                    const hits7 = data.data[player_7].statistics.all.hits
                    const wins7 = data.data[player_7].statistics.all.wins
                    const battles7 = data.data[player_7].statistics.all.battles
                    const damage_dealt7 = data.data[player_7].statistics.all.damage_dealt
                    const shots7 = data.data[player_7].statistics.all.shots
                    const frags7= data.data[player_7].statistics.all.frags
                    const survived_battles7 = data.data[player_7].statistics.all.survived_battles
                    
                    const Kd7 = (frags7/(battles7-survived_battles7)).toFixed(2)
                    const Survived7 = (survived_battles7*100/battles7).toFixed(2)+'%'
                    const Wins7 = (wins7 * 100 /battles7).toFixed(2)+'%'
                    const DMG7 = (damage_dealt7/battles7).toFixed(0)
                    const Hit7 = (hits7 * 100 / shots7).toFixed(2)+'%'
                    fetch(API_player_8)
                .then(response => response.json())
                .then(data => {
                    const player_8 = data.data[0].account_id
                    const nickname_8 = data.data[0].nickname
                    const API_playerstats_8 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_8}`
                    fetch(API_playerstats_8)
                .then(response => response.json())
                .then(data => {
                    const hits8 = data.data[player_8].statistics.all.hits
                    const wins8 = data.data[player_8].statistics.all.wins
                    const battles8 = data.data[player_8].statistics.all.battles
                    const damage_dealt8 = data.data[player_8].statistics.all.damage_dealt
                    const shots8 = data.data[player_8].statistics.all.shots
                    const frags8= data.data[player_8].statistics.all.frags
                    const survived_battles8 = data.data[player_8].statistics.all.survived_battles
                    
                    const Kd8 = (frags8/(battles8-survived_battles8)).toFixed(2)
                    const Survived8 = (survived_battles8*100/battles8).toFixed(2)+'%'
                    const Wins8 = (wins8 * 100 /battles8).toFixed(2)+'%'
                    const DMG8 = (damage_dealt8/battles8).toFixed(0)
                    const Hit8 = (hits8 * 100 / shots8).toFixed(2)+'%'
                    fetch(API_player_9)
                .then(response => response.json())
                .then(data => {
                    const player_9 = data.data[0].account_id
                    const nickname_9 = data.data[0].nickname
                    const API_playerstats_9 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_9}`
                    fetch(API_playerstats_9)
                .then(response => response.json())
                .then(data => {
                    const hits9 = data.data[player_9].statistics.all.hits
                    const wins9 = data.data[player_9].statistics.all.wins
                    const battles9 = data.data[player_9].statistics.all.battles
                    const damage_dealt9 = data.data[player_9].statistics.all.damage_dealt
                    const shots9 = data.data[player_9].statistics.all.shots
                    const frags9= data.data[player_9].statistics.all.frags
                    const survived_battles9 = data.data[player_9].statistics.all.survived_battles
                    
                    const Kd9 = (frags9/(battles9-survived_battles9)).toFixed(2)
                    const Survived9 = (survived_battles9*100/battles9).toFixed(2)+'%'
                    const Wins9 = (wins9 * 100 /battles9).toFixed(2)+'%'
                    const DMG9 = (damage_dealt9/battles9).toFixed(0)
                    const Hit9 = (hits9 * 100 / shots9).toFixed(2)+'%'
                    fetch(API_player_10)
                .then(response => response.json())
                .then(data => {
                    const player_10 = data.data[0].account_id
                    const nickname_10 = data.data[0].nickname
                    const API_playerstats_10 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_10}`
                    fetch(API_playerstats_10)
                .then(response => response.json())
                .then(data => {
                    const hits10 = data.data[player_10].statistics.all.hits
                    const wins10 = data.data[player_10].statistics.all.wins
                    const battles10 = data.data[player_10].statistics.all.battles
                    const damage_dealt10 = data.data[player_10].statistics.all.damage_dealt
                    const shots10 = data.data[player_10].statistics.all.shots
                    const frags10= data.data[player_10].statistics.all.frags
                    const survived_battles10 = data.data[player_10].statistics.all.survived_battles
                    
                    const Kd10 = (frags10/(battles10-survived_battles10)).toFixed(2)
                    const Survived10 = (survived_battles10*100/battles1).toFixed(2)+'%'
                    const Wins10 = (wins10 * 100 /battles10).toFixed(2)+'%'
                    const DMG10 = (damage_dealt10/battles10).toFixed(0)
                    const Hit10 = (hits10 * 100 / shots10).toFixed(2)+'%'
                    fetch(API_player_11)
                .then(response => response.json())
                .then(data => {
                    const player_11 = data.data[0].account_id
                    const nickname_11 = data.data[0].nickname
                    const API_playerstats_11 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_11}`
                    fetch(API_playerstats_11)
                .then(response => response.json())
                .then(data => {
                    const hits11 = data.data[player_11].statistics.all.hits
                    const wins11 = data.data[player_11].statistics.all.wins
                    const battles11 = data.data[player_11].statistics.all.battles
                    const damage_dealt11 = data.data[player_11].statistics.all.damage_dealt
                    const shots11 = data.data[player_11].statistics.all.shots
                    const frags11= data.data[player_11].statistics.all.frags
                    const survived_battles11 = data.data[player_11].statistics.all.survived_battles
                    
                    const Kd11 = (frags11/(battles11-survived_battles11)).toFixed(2)
                    const Survived11 = (survived_battles11*100/battles11).toFixed(2)+'%'
                    const Wins11 = (wins11 * 100 /battles11).toFixed(2)+'%'
                    const DMG11 = (damage_dealt11/battles11).toFixed(0)
                    const Hit11 = (hits11 * 100 / shots11).toFixed(2)+'%'
                    fetch(API_player_12)
                .then(response => response.json())
                .then(data => {
                    const player_12 = data.data[0].account_id
                    const nickname_12 = data.data[0].nickname
                    const API_playerstats_12 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_12}`
                    fetch(API_playerstats_12)
                .then(response => response.json())
                .then(data => {
                    const hits12 = data.data[player_12].statistics.all.hits
                    const wins12 = data.data[player_12].statistics.all.wins
                    const battles12 = data.data[player_12].statistics.all.battles
                    const damage_dealt12 = data.data[player_12].statistics.all.damage_dealt
                    const shots12 = data.data[player_12].statistics.all.shots
                    const frags12= data.data[player_12].statistics.all.frags
                    const survived_battles12 = data.data[player_12].statistics.all.survived_battles
                    
                    const Kd12 = (frags12/(battles12-survived_battles12)).toFixed(2)
                    const Survived12 = (survived_battles12*100/battles12).toFixed(2)+'%'
                    const Wins12 = (wins12 * 100 /battles12).toFixed(2)+'%'
                    const DMG12 = (damage_dealt12/battles12).toFixed(0)
                    const Hit12 = (hits12 * 100 / shots12).toFixed(2)+'%'
                    fetch(API_player_13)
                .then(response => response.json())
                .then(data => {
                    const player_13 = data.data[0].account_id
                    const nickname_13 = data.data[0].nickname
                    const API_playerstats_13 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_13}`
                    fetch(API_playerstats_13)
                .then(response => response.json())
                .then(data => {
                    const hits13 = data.data[player_13].statistics.all.hits
                    const wins13 = data.data[player_13].statistics.all.wins
                    const battles13 = data.data[player_13].statistics.all.battles
                    const damage_dealt13 = data.data[player_13].statistics.all.damage_dealt
                    const shots13 = data.data[player_13].statistics.all.shots
                    const frags13= data.data[player_13].statistics.all.frags
                    const survived_battles13 = data.data[player_13].statistics.all.survived_battles
                    
                    const Kd13 = (frags13/(battles13-survived_battles13)).toFixed(2)
                    const Survived13 = (survived_battles13*100/battles1).toFixed(2)+'%'
                    const Wins13 = (wins13 * 100 /battles13).toFixed(2)+'%'
                    const DMG13 = (damage_dealt13/battles13).toFixed(0)
                    const Hit13 = (hits13 * 100 / shots13).toFixed(2)+'%'
                    fetch(API_player_14)
                .then(response => response.json())
                .then(data => {
                    const player_14 = data.data[0].account_id
                    const nickname_14 = data.data[0].nickname
                    const API_playerstats_14 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_14}`
                    fetch(API_playerstats_14)
                .then(response => response.json())
                .then(data => {
                    const hits14 = data.data[player_14].statistics.all.hits
                    const wins14 = data.data[player_14].statistics.all.wins
                    const battles14 = data.data[player_14].statistics.all.battles
                    const damage_dealt14 = data.data[player_14].statistics.all.damage_dealt
                    const shots14 = data.data[player_14].statistics.all.shots
                    const frags14= data.data[player_14].statistics.all.frags
                    const survived_battles14 = data.data[player_14].statistics.all.survived_battles
                    
                    const Kd14 = (frags14/(battles14-survived_battles14)).toFixed(2)
                    const Survived14 = (survived_battles14*100/battles1).toFixed(2)+'%'
                    const Wins14 = (wins14 * 100 /battles14).toFixed(2)+'%'
                    const DMG14 = (damage_dealt14/battles14).toFixed(0)
                    const Hit14 = (hits14 * 100 / shots14).toFixed(2)+'%'
                    fetch(API_player_15)
                .then(response => response.json())
                .then(data => {
                    const player_15 = data.data[0].account_id
                    const nickname_15 = data.data[0].nickname
                    const API_playerstats_15 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_15}`
                    fetch(API_playerstats_15)
                .then(response => response.json())
                .then(data => {
                    const hits15 = data.data[player_15].statistics.all.hits
                    const wins15 = data.data[player_15].statistics.all.wins
                    const battles15 = data.data[player_15].statistics.all.battles
                    const damage_dealt15 = data.data[player_15].statistics.all.damage_dealt
                    const shots15 = data.data[player_15].statistics.all.shots
                    const frags15= data.data[player_15].statistics.all.frags
                    const survived_battles15 = data.data[player_15].statistics.all.survived_battles
                    
                    const Kd15 = (frags15/(battles15-survived_battles15)).toFixed(2)
                    const Survived15 = (survived_battles15*100/battles15).toFixed(2)+'%'
                    const Wins15 = (wins15 * 100 /battles15).toFixed(2)+'%'
                    const DMG15 = (damage_dealt15/battles15).toFixed(0)
                    const Hit15 = (hits15 * 100 / shots15).toFixed(2)+'%'
                    fetch(API_player_16)
                .then(response => response.json())
                .then(data => {
                    const player_16 = data.data[0].account_id
                    const nickname_16 = data.data[0].nickname
                    const API_playerstats_16 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_16}`
                    fetch(API_playerstats_16)
                .then(response => response.json())
                .then(data => {
                    const hits16 = data.data[player_16].statistics.all.hits
                    const wins16 = data.data[player_16].statistics.all.wins
                    const battles16 = data.data[player_16].statistics.all.battles
                    const damage_dealt16 = data.data[player_16].statistics.all.damage_dealt
                    const shots16 = data.data[player_16].statistics.all.shots
                    const frags16= data.data[player_16].statistics.all.frags
                    const survived_battles16 = data.data[player_16].statistics.all.survived_battles
                    
                    const Kd16 = (frags16/(battles16-survived_battles16)).toFixed(2)
                    const Survived16 = (survived_battles16*100/battles1).toFixed(2)+'%'
                    const Wins16 = (wins16 * 100 /battles16).toFixed(2)+'%'
                    const DMG16 = (damage_dealt16/battles16).toFixed(0)
                    const Hit16 = (hits16 * 100 / shots16).toFixed(2)+'%'
                    fetch(API_player_17)
                .then(response => response.json())
                .then(data => {
                    const player_17 = data.data[0].account_id
                    const nickname_17 = data.data[0].nickname
                    const API_playerstats_17 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_17}`
                    fetch(API_playerstats_17)
                .then(response => response.json())
                .then(data => {
                    const hits17 = data.data[player_17].statistics.all.hits
                    const wins17 = data.data[player_17].statistics.all.wins
                    const battles17 = data.data[player_17].statistics.all.battles
                    const damage_dealt17 = data.data[player_17].statistics.all.damage_dealt
                    const shots17 = data.data[player_17].statistics.all.shots
                    const frags17= data.data[player_17].statistics.all.frags
                    const survived_battles17 = data.data[player_17].statistics.all.survived_battles
                    
                    const Kd17 = (frags17/(battles17-survived_battles17)).toFixed(2)
                    const Survived17 = (survived_battles17*100/battles17).toFixed(2)+'%'
                    const Wins17 = (wins17 * 100 /battles17).toFixed(2)+'%'
                    const DMG17 = (damage_dealt17/battles17).toFixed(0)
                    const Hit17 = (hits17 * 100 / shots17).toFixed(2)+'%'
                    fetch(API_player_18)
                .then(response => response.json())
                .then(data => {
                    if( typeof data.data[0] == "undefined" ||
                    typeof data.data[0].account_id == "undefined" ||
                   typeof data.data[0].nickname == "undefined"
          )
                   {
                    ominTenRekord = true;
                    }
                    const player_18 = data.data[0].account_id
                    const nickname_18 = data.data[0].nickname
                    const API_playerstats_18 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_18}`
                    fetch(API_playerstats_18)
                .then(response => response.json())
                .then(data => {
                    const hits18 = data.data[player_18].statistics.all.hits
                    const wins18 = data.data[player_18].statistics.all.wins
                    const battles18 = data.data[player_18].statistics.all.battles
                    const damage_dealt18 = data.data[player_18].statistics.all.damage_dealt
                    const shots18 = data.data[player_18].statistics.all.shots
                    const frags18= data.data[player_18].statistics.all.frags
                    const survived_battles18 = data.data[player_18].statistics.all.survived_battles
                    
                    const Kd18 = (frags18/(battles18-survived_battles18)).toFixed(2)
                    const Survived18 = (survived_battles18*100/battles18).toFixed(2)+'%'
                    const Wins18 = (wins18 * 100 /battles18).toFixed(2)+'%'
                    const DMG18 = (damage_dealt18/battles18).toFixed(0)
                    const Hit18 = (hits18 * 100 / shots18).toFixed(2)+'%'
                    fetch(API_player_19)
                .then(response => response.json())
                .then(data => {
                    if( typeof data.data[0] == "undefined" ||
                    typeof data.data[0].account_id == "undefined" ||
                   typeof data.data[0].nickname == "undefined"
          )
                   {
                    ominTenRekord = true;
                    }
                    const player_19 = data.data[0].account_id
                    const nickname_19 = data.data[0].nickname
                    const API_playerstats_19 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_19}`
                    fetch(API_playerstats_19)
                .then(response => response.json())
                .then(data => {
                    const hits19 = data.data[player_19].statistics.all.hits
                    const wins19 = data.data[player_19].statistics.all.wins
                    const battles19 = data.data[player_19].statistics.all.battles
                    const damage_dealt19 = data.data[player_19].statistics.all.damage_dealt
                    const shots19 = data.data[player_19].statistics.all.shots
                    const frags19= data.data[player_19].statistics.all.frags
                    const survived_battles19 = data.data[player_19].statistics.all.survived_battles
                    
                    const Kd19 = (frags19/(battles19-survived_battles19)).toFixed(2)
                    const Survived19 = (survived_battles19*100/battles19).toFixed(2)+'%'
                    const Wins19 = (wins19 * 100 /battles19).toFixed(2)+'%'
                    const DMG19 = (damage_dealt19/battles19).toFixed(0)
                    const Hit19 = (hits19 * 100 / shots19).toFixed(2)+'%'
                    fetch(API_player_20)
                .then(response => response.json())
                .then(data => {
                    if( typeof data.data[0] == "undefined" ||
                    typeof data.data[0].account_id == "undefined" ||
                   typeof data.data[0].nickname == "undefined"
          )
                   {
                    ominTenRekord = true;
                    }
                    const player_20 = data.data[0].account_id
                    const nickname_20 = data.data[0].nickname
                    const API_playerstats_20 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player_20}`
                    fetch(API_playerstats_20)
                .then(response => response.json())
                .then(data => {
                    const hits20 = data.data[player_20].statistics.all.hits
                    const wins20 = data.data[player_20].statistics.all.wins
                    const battles20 = data.data[player_20].statistics.all.battles
                    const damage_dealt20 = data.data[player_20].statistics.all.damage_dealt
                    const shots20 = data.data[player_20].statistics.all.shots
                    const frags20= data.data[player_20].statistics.all.frags
                    const survived_battles20 = data.data[player_20].statistics.all.survived_battles
                    
                    const Kd20 = (frags20/(battles20-survived_battles20)).toFixed(2)
                    const Survived20 = (survived_battles20*100/battles20).toFixed(2)+'%'
                    const Wins20 = (wins20 * 100 /battles20).toFixed(2)+'%'
                    const DMG20 = (damage_dealt20/battles20).toFixed(0)
                    const Hit20 = (hits20 * 100 / shots20).toFixed(2)+'%'

                    const htm = `<div type='button' class="png2" data-modal-target="modal-${key}" id="klan" value="${key}"><img src="${png}" width="100" height="100"></img></div>`

                    const htm2 =`<div class="box" value="${key}">
                    <div class="info" >
                    <div class="png"><img src="${png}" width="200" height="200"></img>
                    </div>
                    <div class="info2">
                      <div class="nazwa">[${tag}] ${key}</div>
                      <div class="tabela">Tabela wynikw</div>
                    </div>
                    </div>
                    <div class="nazwa">Drużyna:</div>
                    <div class="players">
                    <div class="border1">
                      Stanowisko <br>
                      Dowódca:<br>
                      1 Oficer:<br>
                      2 Oficer:<br>
                      1 Gracz:<br>
                      2 Gracz:<br>
                      3 Gracz:<br>
                      4 Gracz:<br>
                      5 Gracz:<br>
                      6 Gracz:<br>
                      7 Gracz:<br>
                      8 Gracz:<br>
                      9 Gracz:<br>
                      10 Gracz:<br>
                      11 Gracz:<br>
                      12 Gracz:<br>
                      13 Gracz:<br>
                      14 Gracz:<br>
                      15 Gracz:<br>
                      16 Gracz:<br>
                      17 Gracz:
                    </div>
                    <div class="border2">
                      Nazwa: <br>
                      ${nickname_1}<br>
                      ${nickname_2}<br>
                      ${nickname_3}<br>
                      ${nickname_4}<br>
                      ${nickname_5}<br>
                      ${nickname_6}<br>
                      ${nickname_7}<br>
                      ${nickname_8}<br>
                      ${nickname_9}<br>
                      ${nickname_10}<br>
                      ${nickname_11}<br>
                      ${nickname_12}<br>
                      ${nickname_13}<br>
                      ${nickname_14}<br>
                      ${nickname_15}<br>
                      ${nickname_16}<br>
                      ${nickname_17}<br>
                      ${nickname_18}<br>
                      ${nickname_19}<br>
                      ${nickname_20}
                    </div>
                    <div class="border1">
                      Celność: <br>
                      ${Hit1}<br>
                      ${Hit2}<br>
                      ${Hit3}<br>
                      ${Hit4}<br>
                      ${Hit5}<br>
                      ${Hit6}<br>
                      ${Hit7}<br>
                      ${Hit8}<br>
                      ${Hit9}<br>
                      ${Hit10}<br>
                      ${Hit11}<br>
                      ${Hit12}<br>
                      ${Hit13}<br>
                      ${Hit14}<br>
                      ${Hit15}<br>
                      ${Hit16}<br>
                      ${Hit17}<br>
                      ${Hit18}<br>
                      ${Hit19}<br>
                      ${Hit20}
                    </div>
                    <div class="border1">
                      Średni dmg: <br>
                      ${DMG1}<br>
                      ${DMG2}<br>
                      ${DMG3}<br>
                      ${DMG4}<br>
                      ${DMG5}<br>
                      ${DMG6}<br>
                      ${DMG7}<br>
                      ${DMG8}<br>
                      ${DMG9}<br>
                      ${DMG10}<br>
                      ${DMG11}<br>
                      ${DMG12}<br>
                      ${DMG13}<br>
                      ${DMG14}<br>
                      ${DMG15}<br>
                      ${DMG16}<br>
                      ${DMG17}<br>
                      ${DMG18}<br>
                      ${DMG19}<br>
                      ${DMG20}
                    </div>
                    <div class="border1">
                      Win rate: <br>
                      ${Wins1}<br>
                      ${Wins2}<br>
                      ${Wins3}<br>
                      ${Wins4}<br>
                      ${Wins5}<br>
                      ${Wins6}<br>
                      ${Wins7}<br>
                      ${Wins8}<br>
                      ${Wins9}<br>
                      ${Wins10}<br>
                      ${Wins11}<br>
                      ${Wins12}<br>
                      ${Wins13}<br>
                      ${Wins14}<br>
                      ${Wins15}<br>
                      ${Wins16}<br>
                      ${Wins17}<br>
                      ${Wins18}<br>
                      ${Wins19}<br>
                      ${Wins20}
                    </div>
                    <div class="border3">
                    Survived: <br>
                      ${Survived1}<br>
                      ${Survived2}<br>
                      ${Survived3}<br>
                      ${Survived4}<br>
                      ${Survived5}<br>
                      ${Survived6}<br>
                      ${Survived7}<br>
                      ${Survived8}<br>
                      ${Survived9}<br>
                      ${Survived10}<br>
                      ${Survived11}<br>
                      ${Survived12}<br>
                      ${Survived13}<br>
                      ${Survived14}<br>
                      ${Survived15}<br>
                      ${Survived16}<br>
                      ${Survived17}<br>
                      ${Survived18}<br>
                      ${Survived19}<br>
                      ${Survived20}
                    </div>
                    <div class="border4">
                      K/D: <br>
                      ${Kd1}<br>
                      ${Kd2}<br>
                      ${Kd3}<br>
                      ${Kd4}<br>
                      ${Kd5}<br>
                      ${Kd6}<br>
                      ${Kd7}<br>
                      ${Kd8}<br>
                      ${Kd9}<br>
                      ${Kd10}<br>
                      ${Kd11}<br>
                      ${Kd12}<br>
                      ${Kd13}<br>
                      ${Kd14}<br>
                      ${Kd15}<br>
                      ${Kd16}<br>
                      ${Kd17}<br>
                      ${Kd18}<br>
                      ${Kd19}<br>
                      ${Kd20}
                    </div>
                    </div>`

                    document
                                .getElementById("lista")
                                .insertAdjacentHTML("beforeend", htm);
                    document
                                .getElementById("modal-body")
                                .insertAdjacentHTML("beforeend", htm2);

                                document.querySelectorAll(`[data-modal-target]`).forEach(element => {

                                    if (element.dataset.modalTarget == `modal-${key}`) {
    
                                        element.addEventListener('click', (tes) => {
                                            /// Zmień zawartość modalu w zależności od czołgu. 
                                            document.getElementsByClassName("modal-body")[0].innerHTML = htm2;
    
                                            openModal(document.getElementById("modal"));
                                        });
    
    
                                    }
                                    const overlay = document.getElementById('overlay')

                                    overlay.addEventListener('click', () => {
                                        const overlay = document.getElementById('overlay')
                                        modal.classList.remove('active')
                                        overlay.classList.remove('active')
                                    })  
                                })   
                                });
                        })})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})}
                    })
            