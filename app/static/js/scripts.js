// console.log("Iniciando teste de geolocalização...");

// var map;


// function success(pos) {
//     const { latitude, longitude, accuracy } = pos.coords;
//     console.log(pos.coords);
//     console.log(`Latitude: ${latitude}`);
//     console.log(`Longitude: ${longitude}`);
//     console.log(`Precisão: ${accuracy} metros`);

//     if (map === undefined){
//         map = L.map('map').setView([latitude, longitude], 13);
//     }else{
//         map.remove();
//         map = L.map('map').setView([latitude, longitude], 13);
//     }

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     }).addTo(map);
    
//     L.marker([latitude, longitude]).addTo(map)
//         .bindPopup('eu estou aqui.')
//         .openPopup();

// }

// function error(err) {
//     console.warn(`Erro (${err.code}): ${err.message}`);
// }

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(success, error, {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//     });
// } else {
//     console.error("Geolocalização não é suportada pelo navegador.");
// }






console.log("Iniciando teste de geolocalização...");

var map = L.map('map').setView([-23.1896, -45.9009], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([-23.1896, -45.9009]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();






