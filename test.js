const gamertag = "warden-12615";

fetch(`https://overfast-api.tekrop.fr/players/${gamertag}/stats/summary`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer YOUR_TOKEN' // if the API requires an Authorization token
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
    console.error('Error:', error);
});