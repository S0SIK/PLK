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
                    fetch(API_player_2)
                .then(response => response.json())
                .then(data => {
                    const player_2 = data.data[0].account_id
                    const nickname_2 = data.data[0].nickname
                    fetch(API_player_3)
                .then(response => response.json())
                .then(data => {
                    const player_3 = data.data[0].account_id
                    const nickname_3 = data.data[0].nickname
                    fetch(API_player_4)
                .then(response => response.json())
                .then(data => {
                    const player_4 = data.data[0].account_id
                    const nickname_4 = data.data[0].nickname
                    fetch(API_player_5)
                .then(response => response.json())
                .then(data => {
                    const player_5 = data.data[0].account_id
                    const nickname_5 = data.data[0].nickname
                    fetch(API_player_6)
                .then(response => response.json())
                .then(data => {
                    const player_6 = data.data[0].account_id
                    const nickname_6 = data.data[0].nickname
                    fetch(API_player_7)
                .then(response => response.json())
                .then(data => {
                    const player_7 = data.data[0].account_id
                    const nickname_7 = data.data[0].nickname
                    fetch(API_player_8)
                .then(response => response.json())
                .then(data => {
                    const player_8 = data.data[0].account_id
                    const nickname_8 = data.data[0].nickname
                    fetch(API_player_9)
                .then(response => response.json())
                .then(data => {
                    const player_9 = data.data[0].account_id
                    const nickname_9 = data.data[0].nickname
                    fetch(API_player_10)
                .then(response => response.json())
                .then(data => {
                    const player_10 = data.data[0].account_id
                    const nickname_10 = data.data[0].nickname
                    fetch(API_player_11)
                .then(response => response.json())
                .then(data => {
                    const player_11 = data.data[0].account_id
                    const nickname_11 = data.data[0].nickname
                    fetch(API_player_12)
                .then(response => response.json())
                .then(data => {
                    const player_12 = data.data[0].account_id
                    const nickname_12 = data.data[0].nickname
                    fetch(API_player_13)
                .then(response => response.json())
                .then(data => {
                    const player_13 = data.data[0].account_id
                    const nickname_13 = data.data[0].nickname
                    fetch(API_player_14)
                .then(response => response.json())
                .then(data => {
                    const player_14 = data.data[0].account_id
                    const nickname_14 = data.data[0].nickname
                    fetch(API_player_15)
                .then(response => response.json())
                .then(data => {
                    const player_15 = data.data[0].account_id
                    const nickname_15 = data.data[0].nickname
                    fetch(API_player_16)
                .then(response => response.json())
                .then(data => {
                    const player_16 = data.data[0].account_id
                    const nickname_16 = data.data[0].nickname
                    fetch(API_player_17)
                .then(response => response.json())
                .then(data => {
                    const player_17 = data.data[0].account_id
                    const nickname_17 = data.data[0].nickname
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
                    if (ominTenRekord) continue;
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
                    if (ominTenRekord) continue;
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

                    if (ominTenRekord) continue;

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
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN
                    </div>
                    <div class="border1">
                      Średni dmg: <br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN
                    </div>
                    <div class="border1">
                      Win rate: <br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN
                    </div>
                    <div class="border3">
                      Effi: <br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN
                    </div>
                    <div class="border3">
                      WN7: <br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN
                    </div>
                    <div class="border4">
                      WN8: <br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN<br>
                      NaN
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
                        })})})})})})})})})})})})})})})})})})})}
                    })
            