var weerContainer = document.getElementById("weer-container");

var apiKey = "190ce66f85"; 
var locatie = "Rotterdam";
var url = "https://weerlive.nl/api/json-data-10min.php?key=" + apiKey + "&locatie=" + locatie;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var huidigWeer = data.liveweer[0];

        var plaats = huidigWeer.plaats;
        var temperatuur = huidigWeer.temp;
        var samenvatting = huidigWeer.samenv;

        weerContainer.innerHTML = 
            '<h3>Weer in ' + plaats + '</h3>' +
            '<p><strong>Temperatuur:</strong> ' + temperatuur + ' °C</p>' +
            '<p><strong>Situatie:</strong> ' + samenvatting + '</p>';
    })
    .catch(function(error) {
        weerContainer.innerHTML = "<p>Kon het weerbericht niet ophalen.</p>";
        console.error("Fout bij ophalen weer:", error);
    });