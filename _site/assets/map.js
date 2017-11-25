var mymap = L.map('mapid').setView([63.0, 25.653], 5);


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianNzbWsiLCJhIjoiY2ozMnR5OHUxMDAwajMybzlzOTV1bmFxOSJ9.mllU8iCxT3yY-GQVaA26tA", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap);

//
//







// piirtojärjestys, lat & lon?


var icon_1 = L.icon({
    iconUrl: '/assets/leaflet/images/helsinki_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_1 = L.marker([60.22199, 24.85194] , {icon: icon_1 }  )
    .bindPopup("<a href='http://helsinki.hacklab.fi/''>Helsinki Hacklab</a><br/>Helsinki Hacklab, Suomen ensimmäinen hackerpace, perustettu 2010. Työtilat Pitskussa lyhyen kävelymatkan päässä joko Mäkkylän tai Pitäjänmäen asemilta. Avoimet ovet aina tiistaisin klo 17 alkaen.")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_2 = L.icon({
    iconUrl: '/assets/leaflet/images/tampere_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_2 = L.marker([61.48137, 23.78915] , {icon: icon_2 }  )
    .bindPopup("<a href='http://tampere.hacklab.fi/''>Tampere Hacklab</a><br/>Tampere Hacklab, jäsenistöltään Suomen suurin hacklab. Sijaitsee Nekalassa.")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_3 = L.icon({
    iconUrl: '/assets/leaflet/images/vaasa_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_3 = L.marker([63.1095933, 21.5855139] , {icon: icon_3 }  )
    .bindPopup("<a href='http://vaasa.hacklab.fi/''>Vaasa Hacklab</a><br/>Vaasan oma hacklab. Tilat löytyvät vanhasta saippuatehtaasta.")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_4 = L.icon({
    iconUrl: '/assets/leaflet/images/turku_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_4 = L.marker([60.4826874, 22.3115418] , {icon: icon_4 }  )
    .bindPopup("<a href='http://turku.hacklab.fi/''>Turku Hacklab</a><br/>Turun Hacklab")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_5 = L.icon({
    iconUrl: '/assets/leaflet/images/oulu_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_5 = L.marker([65.02556, 25.48531] , {icon: icon_5 }  )
    .bindPopup("<a href='http://oulu.hacklab.fi/''>Oulu Tarlab</a><br/>Suomen pohjoisin hacklab.")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_6 = L.icon({
    iconUrl: '/assets/leaflet/images/jyvaskyla_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_6 = L.marker([62.2395419, 25.72604] , {icon: icon_6 }  )
    .bindPopup("<a href='http://jyvaskyla.hacklab.fi/''>Hacklab Jyväskylä</a><br/>Jyväskylän hacklab toimii rakennuksen kellarikerroksessa.")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_7 = L.icon({
    iconUrl: '/assets/leaflet/images/kuopio_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_7 = L.marker([62.8936742, 27.6579424] , {icon: icon_7 }  )
    .bindPopup("<a href='http://kuopio.hacklab.fi/''>Hacklab Kuopio</a><br/>Kuopion Hacklab")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_8 = L.icon({
    iconUrl: '/assets/leaflet/images/joensuu_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_8 = L.marker([62.6, 29.78359] , {icon: icon_8 }  )
    .bindPopup("<a href='http://tcj.fi/''>Tech Club Joensuu</a><br/>Joensuun edustus hacklab.fi:ssa. Sijaitsee veturitalleilla. Ovet avoinna keskiviikkoisin klo 17-20.")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_9 = L.icon({
    iconUrl: '/assets/leaflet/images/mikkeli_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_9 = L.marker([61.6933473, 27.2625445] , {icon: icon_9 }  )
    .bindPopup("<a href='http://mikkeli.hacklab.fi/''>Hacklab Mikkeli</a><br/>Mikkelin Hacklab")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_10 = L.icon({
    iconUrl: '/assets/leaflet/images/pori_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_10 = L.marker([61.4877445, 21.7902814] , {icon: icon_10 }  )
    .bindPopup("<a href='http://pori.hacklab.fi/''>Hacklab Pori</a><br/>Porin seudun hacklab toimii Yhteisökeskuksessa")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_11 = L.icon({
    iconUrl: '/assets/leaflet/images/seinajoki_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_11 = L.marker([62.79212, 22.84396] , {icon: icon_11 }  )
    .bindPopup("<a href='http://seinajoki.hacklab.fi/''>Seinäjoki Hacklab</a><br/>SJK")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_12 = L.icon({
    iconUrl: '/assets/leaflet/images/virrat_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_12 = L.marker([62.23843, 23.7639] , {icon: icon_12 }  )
    .bindPopup("<a href='http://virrat.hacklab.fi/''>Virrat Hacklab</a><br/>Yhdistys rekisteröity, tilat osoitteessa Sipiläntie 1.")
    .addTo(mymap);


// piirtojärjestys, lat & lon?


var icon_13 = L.icon({
    iconUrl: '/assets/leaflet/images/lahti_pin.png',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});


var marker_13 = L.marker([60.98852, 25.66393] , {icon: icon_13 }  )
    .bindPopup("<a href='http://lahti.hacklab.fi/''>Lahti Hacklab</a><br/>yhdistys rekisteriöitävänä")
    .addTo(mymap);


// piirtojärjestys, lat & lon?



var marker_14 = L.marker([, ]  )
    .bindPopup("<a href='''>Uusi hacklab kaupunkiisi?</a><br/>Osallistu keskusteluun #hacklab.fi-kanavalla irkissä (Freenode) ja lähde toteuttamaan uutta hacklabia omalle alueellesi!")
    .addTo(mymap);

