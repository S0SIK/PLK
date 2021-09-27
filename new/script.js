const api_key = "GvVbQqBKqNrZABt4KTZUgVZjGZ3IllXkSsY6Dzfb"
const matches = `https://api.challonge.com/v1/tournaments/10196742/matches.json?api_key=${api_key}`

fetch(matches)
    .then(response => response.json())
    .then(data => {

        const player1_id = data.data.match.player1_id
        const player2_id = data.data.match.player2_id

        const htm =
            `<div>
    ${player1_id} vs ${player2_id}
  </div>`;

        document.getElementsByClassName("tydzien")[0].innerHTML = htm;
    })