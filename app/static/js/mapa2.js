var map2 = L.map('map2').setView([-23.1896, -45.9009], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2);

function createMarker(lat, lng, description) {
    L.marker([lat, lng])
        .addTo(map2)
        .bindPopup(description);
}

// Dados reais com latitudes e longitudes para os endereços
var reports = [
    [-23.2050, -45.8872, 'Relato de agressão verbal em um bar próximo ao Jardim Satélite, Av. Andrômeda.'],
    [-23.1997, -45.8822, 'Caso de assédio próximo ao Vale Sul Shopping, Av. Cidade Jardim.'],
    [-23.1875, -45.8858, 'Registro de perseguição em uma parada de ônibus na Av. São João.'],
    [-23.2158, -45.8917, 'Tentativa de agressão em um mercado no Bosque dos Eucaliptos, Rua Júpiter.'],
    [-23.1961, -45.9188, 'Relato de insultos em frente à Univap Urbanova.'],
    [-23.1937, -45.8740, 'Caso de violência doméstica denunciado no bairro Interlagos, Rua Ouro Fino.'],
    [-23.1973, -45.9014, 'Agressão física reportada em uma praça próxima ao Aquarius, Av. Cassiano Ricardo.'],
    [-23.1823, -45.8891, 'Relato de perseguição próximo ao Parque Vicentina Aranha.'],
    [-23.1969, -45.8870, 'Caso de assédio em uma padaria no Jardim Esplanada, Av. Nove de Julho.'],
    [-23.1871, -45.9043, 'Agressão verbal registrada no centro comercial, Rua XV de Novembro.'],
    [-23.1886, -45.8844, 'Caso de violência psicológica em um condomínio no Jardim São Dimas.'],
    [-23.1909, -45.9028, 'Registro de insultos em um ponto de táxi na Praça Afonso Pena.'],
    [-23.1895, -45.8954, 'Agressão física relatada próximo a uma escola no centro.'],
    [-23.2090, -45.8810, 'Caso de perseguição próximo ao estádio Martins Pereira.'],
    [-23.1984, -45.9107, 'Relato de insultos em uma festa no Jardim Aquarius.'],
    [-23.1870, -45.8992, 'Agressão verbal em frente a um restaurante na Av. Adhemar de Barros.'],
    [-23.1978, -45.8883, 'Relato de violência psicológica em um mercado no Jardim Esplanada.'],
    [-23.1832, -45.8945, 'Registro de assédio em um ponto de ônibus no bairro Santana.'],
    [-23.2015, -45.8825, 'Tentativa de agressão reportada próximo ao centro comunitário no Bosque.'],
    [-23.1903, -45.9077, 'Relato de insultos em um shopping da região, Colinas Shopping.'],
    [-23.1843, -45.9120, 'Agressão verbal denunciada em uma farmácia no Urbanova.'],
    [-23.2009, -45.8903, 'Registro de perseguição em uma rua do bairro Urbanova.'],
    [-23.1795, -45.8843, 'Relato de violência psicológica em um hospital local, Hospital Municipal.'],
    [-23.1896, -45.8805, 'Insultos registrados em um evento público na Praça Floriano Peixoto.'],
    [-23.1861, -45.9048, 'Agressão verbal reportada no Parque Vicentina Aranha.'],
    [-23.1882, -45.8921, 'Caso de assédio em um ponto de táxi na Av. São João.'],
    [-23.1932, -45.8808, 'Registro de perseguição em um bairro residencial no Interlagos.'],
    [-23.1817, -45.8882, 'Insultos relatados em um posto de combustível próximo ao centro.'],
    [-23.1971, -45.8873, 'Relato de violência psicológica em um mercado no Jardim Esplanada.'],
    [-23.2022, -45.8932, 'Agressão verbal registrada no Terminal Rodoviário Frederico Ozanan.'],
    [-23.1964, -45.9007, 'Caso de violência física próximo a um bar no Jardim América.'],
    [-23.1899, -45.8950, 'Registro de assédio no CenterVale Shopping.'],
    [-23.1890, -45.9042, 'Relato de perseguição próximo ao Parque Santos Dumont.'],
    [-23.1939, -45.9002, 'Agressão verbal reportada em uma praça próxima à Av. Adhemar de Barros.'],
    [-23.1798, -45.8885, 'Caso de assédio em um restaurante próximo ao centro.'],
    [-23.1913, -45.8992, 'Registro de insultos em um evento público no Parque Vicentina Aranha.'],
    [-23.1977, -45.8911, 'Agressão verbal denunciada em um mercado no Jardim Aquarius.'],
    [-23.1823, -45.8890, 'Relato de violência psicológica em um bairro residencial no Jardim Satélite.'],
    [-23.1905, -45.8810, 'Caso de perseguição próximo ao Terminal Rodoviário.']
];

reports.forEach(function (report) {
    createMarker(report[0], report[1], report[2]);
});
