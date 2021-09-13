const API_id = `10a871f6fab9f5647fdb2d0a433a0910`

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]')

let pageData = {
    players: []
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


async function savePlayer(link, clan) {

    let response = await fetch(link);
  
    if (response.status === 200) {
      let data = await response.json();
      data = data.data[0];
      // handle data

      clan = toSnakeCase(clan);
      if(typeof pageData["players"][clan] == "undefined"){
        
        pageData["players"][clan] = [];
        pageData["players"][clan].push(data);
      } else{
        pageData["players"][clan].push(data);
      }
      

    }   
}

fetch('lista.json')
    .then(response => response.json())
    .then(data => {
        for (const [key, value] of Object.entries(data)) {

            const clan = key;
            
            for(let i = 1; i <= 20; i++){
                // get player
                const currentPlayerName = data[key]["p" + i];

                // console.log("player", data[key]["p" + i]);

                const playerAPILink  = `https://api-console.worldoftanks.com/wotx/account/list/?application_id=${API_id}&search=${currentPlayerName}`;

                fetch(playerAPILink)
                .then(response => response.json())
                .then(data => {
                    const playerId = data.data[0].account_id
                

                savePlayer(playerAPILink, clan);
                

                const API_playerstats_1 = `https://api-console.worldoftanks.com/wotx/account/info/?application_id=${API_id}&account_id=${playerId}`
                    fetch(API_playerstats_1)
                .then(response => response.json())
                .then(data => {
                    const hits = data.data[playerId].statistics.all.hits
                    const wins = data.data[playerId].statistics.all.wins
                    const battles = data.data[playerId].statistics.all.battles
                    const damage_dealt = data.data[playerId].statistics.all.damage_dealt
                    const shots = data.data[playerId].statistics.all.shots
                    const frags= data.data[playerId].statistics.all.frags
                    const survived_battles = data.data[playerId].statistics.all.survived_battles
                    
                    const Kd = (frags/(battles-survived_battles)).toFixed(2)
                    const Survived = (survived_battles*100/battles).toFixed(2)+'%'
                    const Wins = (wins * 100 /battles).toFixed(2)+'%'
                    const DMG = (damage_dealt/battles).toFixed(0)
                    const Hit = (hits * 100 / shots).toFixed(2)+'%'
                  })
                })
              }
                
            const png = value.png
            const tag = value.tag

            const htm = `<div type='button' class="png2" data-modal-target="modal-${key}" id="klan" value="${key}"><img src="${png}" width="100" height="100"></img></div>`




            document.getElementById("lista")
                .insertAdjacentHTML("beforeend", htm);

            document.querySelectorAll(`[data-modal-target]`).forEach(element => {

                if (element.dataset.modalTarget == `modal-${key}`) {

                    element.addEventListener('click', (tes) => {


                        const playersss = pageData["players"][toSnakeCase(key)];
                        let aaa = [];
                        playersss.forEach((p)=>{
                            aaa +="<span>" + p.nickname.replace('-x', ' ').replace('-p', ' ') + "</span><br>";
                        })


                        const KDbbb = pageData["players"][toSnakeCase(key)];
                        let bbb = [];
                        KDbbb.forEach((p)=>{
                            bbb +="<span>" + p.nickname + "</span><br>";
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
                        ` + aaa  +  `
                        </div>
                        <div class="border1">
                          Celność: <br>
                          
                        </div>
                        <div class="border1">
                          Średni dmg: <br>
                          
                        </div>
                        <div class="border1">
                          Win rate: <br>
                        
                        </div>
                        <div class="border3">
                        Survived: <br>
                          
                        </div>
                        <div class="border3">
                          K/D: <br>
                          
                        </div>
                        </div>`
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
        
          
        }
    })