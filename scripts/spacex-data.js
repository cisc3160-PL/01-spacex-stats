let rockets;

fetch('https://api.spacexdata.com/v4/rockets',
{
    method: 'GET',
    header: {
        'Accept': 'application/json',
        'User-Agent': '*'
    }
})
.then(response => response.json())
.then(data => rockets = data)
.then(() => console.log(rockets));