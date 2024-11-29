console.log("Iniciando teste de geolocalização...");

var map = L.map('map').setView([-23.1896, -45.9009], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

var popup = L.popup();

var currentMarker = null;

function onMapClick(e) {

    if (currentMarker) {
        map.removeLayer(currentMarker);  
    }

    currentMarker = L.marker(e.latlng).addTo(map)
        .bindPopup('Você marcou aqui!')
        .openPopup();

    popup
        .setLatLng(e.latlng)
        .setContent("Você está marcando este local!")
        .openOn(map);
}

map.on('click', onMapClick);
