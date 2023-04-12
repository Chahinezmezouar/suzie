var map = L.map("map").setView([28.033886, 1.659626], 5);

var Stadia_OSMBright = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    {
        maxZoom: 20,
        attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }
);

Stadia_OSMBright.addTo(map);

var marker = L.marker([28.033886, 1.659626]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
var popup = L.popup()
    .setLatLng([28.033886, 1.659626])
    .setContent("I am a standalone popup.")
    .openOn(map);
