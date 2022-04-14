// const ct = require('countries-and-timezones/');


let allTimeZones = ct.getAllTimezones();
const dropdown = document.getElementById('city-list');
let timeZoneNames = Object.entries(allTimeZones).sort();

for (let i = 0; i < 20; i++) {
    window.city = document.createElement('option')
    city.setAttribute("value", timeZoneNames[0][i])
    city.textContent = timeZoneNames[i][0]
    dropdown.appendChild(city)
}


// Listen for selected Timezone in dropdown menu
dropdown.addEventListener('change', function() {
    let selectedTimeZone = dropdown.options[dropdown.selectedIndex].text.split("/");
    continentZone = selectedTimeZone[0]
    cityZone = selectedTimeZone[1]
    updateTextContents(cityZone, continentZone)

  });

// Updates textcontent for country details in mid time-box
function updateTextContents(city, continent){
    document.querySelector(".mid-pane .city").textContent = city
    document.querySelector(".mid-pane .country").textContent = continent
}
