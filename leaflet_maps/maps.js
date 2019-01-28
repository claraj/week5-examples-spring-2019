// Array with latitude and longitude 
let metroAreaCenterCoordinates = [44.96, -93.2]

// Create the map 
let map = L.map('mctc-map').setView(metroAreaCenterCoordinates, 9)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)


// Add some markers 
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup("Minnepolis College<br><a href='https://minneapolis.edu'>Website</a>")
    .addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates)
    .bindPopup("Saint Paul College<br><a href='https://saintpaul.edu'>Website</a>")
    .addTo(map)


// Add a circle 
var metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'green',  
        radius: 30000,
        fillOpacity: 0.2
    })
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)


