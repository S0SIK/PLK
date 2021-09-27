const api_key = "GvVbQqBKqNrZABt4KTZUgVZjGZ3IllXkSsY6Dzfb"


fetch('lista.json')
    .then(response => response.json())
    .then(data => {


        const htm =
            `<div>
    
  </div>`;

        document.getElementsByClassName("drabinka")[0].innerHTML = htm;
    })