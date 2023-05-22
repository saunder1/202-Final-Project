document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    var gamertag = document.querySelector('input[name="gamertag"]').value;
    console.log(gamertag);

    fetch(`https://overfast-api.tekrop.fr/players/${gamertag}/summary`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
});