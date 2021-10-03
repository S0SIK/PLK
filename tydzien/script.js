fetch("tournaments.php")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data[0].match.player1_id)

        const player1_id = data[0].match.player1_id
        // const clan = data.match;

        // clan["data"] = {
        //     "player1_id": clan.player1_id,
        //     "player2_id": clan.player2_id
        // };

        // console.log(player1_id)
        // console.log(player2_id)

        fetch(`clan?player_id=${player1_id}`)
            .then(response => response.json())
            .then(data => {

                const clan1 = data.participant.name

                fetch("clan2")
                    .then(response => response.json())
                    .then(data => {

                        const clan2 = data.participant.name



                        const htm =
                            `<div>
            ${clan1} vs ${clan2}
          </div>`;

                        document.getElementsByClassName("tydzien")[0].innerHTML = htm;
                    })
            })
    })