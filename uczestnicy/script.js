const API_id = `10a871f6fab9f5647fdb2d0a433a0910`

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]')

let pageData = {
  clans: []
};

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

const toSnakeCase = str =>
  str &&
  str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  .map(x => x.toLowerCase())
  .join('_');


const removeLoader = (buttonDiv) => {
  buttonDiv.childNodes[1].classList.remove("loader");
}

async function getBasicPlayerData(currentPlayerName, playerClan, isLast = false) {


  const playerAPILink = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${currentPlayerName}`;

  let response = await fetch(playerAPILink);

  if (response.status === 200) {
    let data = await response.json();

    const clan = toSnakeCase(playerClan);

    if (typeof data.data === "undefined" || typeof currentPlayerName === "undefined") {

      const button = document.getElementById(toSnakeCase(clan));
      removeLoader(button);

      return;
    }

    data = data.data[0];

    // handle data


    if (typeof pageData["clans"][clan] == "undefined") {

      pageData["clans"][clan] = [];
      pageData["clans"][clan].push(data);
    } else {
      pageData["clans"][clan].push(data);
    }

    pageData["clans"][clan].forEach(player => {

      if (player.account_id == data.account_id) {
        const account_id = data.account_id;
        const playerStats = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${player.account_id}`

        fetch(playerStats)
          .then(response => response.json())
          .then(data => {

            const allStats = data.data[account_id].statistics.all;

            player["data"] = {
              "hits": allStats.hits,
              "wins": allStats.wins,
              "battles": allStats.battles,
              "damage_dealt": allStats.damage_dealt,
              "shots": allStats.shots,
              "frags": allStats.frags,
              "survived_battles": allStats.survived_battles,
              "kd": (allStats.frags / (allStats.survived_battles)).toFixed(2),
              "survived": (allStats.survived_battles * 100 / allStats.battles).toFixed(2) + '%',
              "wins": (allStats.wins * 100 / allStats.battles).toFixed(2) + '%',
              "dmg": (allStats.damage_dealt / allStats.battles).toFixed(0),
              "hit": (allStats.hits * 100 / allStats.shots).toFixed(2) + '%',
            };
          }).then( () =>{
            if (isLast) {
              const button = document.getElementById(toSnakeCase(playerClan));
              removeLoader(button);
            }
          })
      }

    });
  }

}

fetch('lista.json')
  .then(response => response.json())
  .then(data => {
    for (const [clan, value] of Object.entries(data)) {

      const png = value.png
      const tag = value.tag

      createButton(clan, tag, png);
      getClanData(data, clan);

    }
  })

async function getClanData(data, clan){
  const lenn = Object.keys(data[clan]).length;
  for (let i = 1; i < lenn; i++) {

    const currentPlayerName = data[clan]["p" + i];

    if (lenn - 1 == i) {
      await getBasicPlayerData(currentPlayerName, clan, true);
    } else {
      await getBasicPlayerData(currentPlayerName, clan);
    }

  }
}
 


function createButton(key, tag, png) {

  // Przycisk
  const htm =
    `<div 
    type='button'
    class="png2"
    data-modal-target="modal-${key}"
    id="${toSnakeCase(key)}"
    value="${key}">
  <div class="loader"></div>
  <img src="${png}" width="100" height="100"></img>
  </div>`;

  // Dodaj przycisk do listy
  const lista = document.getElementById("lista");

  lista.insertAdjacentHTML("beforeend", htm);

  // Przycisk
  const clanButton = document.getElementById(toSnakeCase(key));

  // Akcje po wciśnięciu przycisku
  clanButton.addEventListener('click', action => {

    const clanPlayers = pageData["clans"][toSnakeCase(key)];

    let playerNames = "";
    let hit = "";
    let dmg = "";
    let wins = "";
    let survived = "";
    let kd = "";

    clanPlayers.forEach((p) => {
      playerNames += "<span>" + p.nickname.replace('-x', ' ').replace('-p', ' ') + "</span><br>";
      hit += `<div>${p.data.hit}</div>`;
      dmg += `<div>${p.data.dmg}</div>`;
      wins += `<div>${p.data.wins}</div>`;
      survived += `<div>${p.data.survived}</div>`;
      kd += `<div>${p.data.kd}</div>`;
    })

    const htm2 = `<div class="box" value="${key}">
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
            <span> Nazwa: </span><br>
          ` + playerNames + `
          </div>
          <div class="border1">
            Celność: <br>
          ` + hit + `
          </div>
          <div class="border1">
            Średni dmg: <br>
          ` + dmg + `
          </div>
          <div class="border1">
            Win rate: <br>
          ` + wins + `
          </div>
          <div class="border3">
          Survived: <br>
          ` + survived + `
          </div>
          <div class="border3">
            K/D: <br>
          ` + kd + `
          </div>
          </div>`

    // Zmiana zawartości modalu 
    document.getElementsByClassName("modal-body")[0].innerHTML = htm2;

    // Otwarcie modalu
    openModal(document.getElementById("modal"));
  });

  // Overlay
  const overlay = document.getElementById('overlay')
  overlay.addEventListener('click', () => {
    const overlay = document.getElementById('overlay')
    modal.classList.remove('active')
    overlay.classList.remove('active')
  })

}