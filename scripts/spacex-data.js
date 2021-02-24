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
.then(() => 
{
    console.log(rockets[3]);
    let rocket = rockets[3];
    updateRocketName(rocket.name);
    updateRocketDesc(rocket.description);
    updateRocketAttribute(rocket.height, 'height', 'meters', 'feet');
    updateRocketAttribute(rocket.diameter, 'diameter', 'meters', 'feet');
    updateRocketAttribute(rocket.mass, 'mass', 'kg', 'lb');
    updateRocketAttribute(rocket.payload_weights[0], 'payload', 'kg', 'lb');
    updateImage(1, rocket.flickr_images[2]);
    updateImage(2, rocket.flickr_images[3]);
});

function updateRocketName(name)
{
    document.getElementById('rocket-name').textContent = name.toUpperCase();
}

function updateRocketDesc(desc)
{
    document.getElementById('rocket-desc').textContent = desc;
}

function updateRocketAttribute(attribute, name, metric, imperial)
{
    let metricEl = document.getElementById(`${name}-metric`).textContent;
    let imperialEl = document.getElementById(`${name}-imperial`).textContent;
    document.getElementById(`${name}-metric`).textContent = metricEl.replace(/\?+/, attribute[metric]);
    document.getElementById(`${name}-imperial`).textContent = imperialEl.replace(/\?+/, attribute[imperial]);
}

function updateImage(num, src)
{
    let img = document.getElementById(`rocket-img${num}`);
    img.src = src;
}