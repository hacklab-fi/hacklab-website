---
---

var mymap = L.map('mapid').setView([{{ site.data.map.lat }}, {{ site.data.map.lon }}], 5);


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={{ site.data.map.token }}", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap);

//{% assign status_a = site.data.kaupungit | where:'status', 'active' %}
//{% assign status_b = site.data.kaupungit | where:'status', 'building' %}


{% assign all_cities = site.data.kaupungit %}


{% for k in all_cities %}

// piirtojärjestys, lat & lon?

{% if k.pin %}
var icon_{{ forloop.index }} = L.icon({
    iconUrl: '/assets/leaflet/images/{{k.pin}}',

    iconSize:     [50, 79], 
    iconAnchor:   [25, 79], 
    popupAnchor:  [0, -40] 
});
{% endif %}

var marker_{{ forloop.index }} = L.marker([{{ k.lat }}, {{ k.lon }}] {% if k.pin %}, {icon: icon_{{ forloop.index }} } {% endif %} )
    .bindPopup("<a href='{{k.url}}''>{{k.kaupunki}}</a><br/>{{ k.txt }}")
    .addTo(mymap);
{% endfor %}
