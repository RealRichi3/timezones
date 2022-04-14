// const ct = require('countries-and-timezones/');


let allTimeZones = ct.getAllTimezones();
let timeZoneNames = Object.entries(allTimeZones).sort();
const dropdown = document.getElementById('city-list');

for (let i = 0; i < timeZoneNames.length; i++) {
    window.city = document.createElement('option')
    city.setAttribute("value", timeZoneNames[0][i])
    city.textContent = timeZoneNames[i][0]
    dropdown.appendChild(city)
}

// Updates textcontent for country details in mid time-box
function updateTextContents(city, continent){
    document.querySelector(".mid-pane .city").textContent = city
    document.querySelector(".mid-pane .country").textContent = continent
}

// Updates time to the mid time box
function updateTime(time){
    document.querySelector('#mid').textContent = time
}

// Add offset to current time
function calcTime(offset){
    const date = new Date()
    let timeInMinutes = (date.getUTCHours() * 60) + (date.getUTCMinutes()) + offset;
    let currTimeInHours = Math.floor(timeInMinutes / 60)

    if (currTimeInHours >= 24){
        if ((currTimeInHours - 24) >= 6){
            currTimeInHours = (currTimeInHours - 24).toString()
        }
        else{
            currTimeInHours = '0' + (currTimeInHours - 24).toString()
        }
    }

    let currTimeInMinutes = timeInMinutes % 60

    return ((currTimeInHours + ':' + currTimeInMinutes).toString())
}

// Listen for selected Timezone in dropdown menu
dropdown.addEventListener('change', function() {
    let selectedTimeZone = dropdown.options[dropdown.selectedIndex].text
    let splitSelectedTimeZone = selectedTimeZone.split("/");
    let offset = ct.getTimezone(selectedTimeZone).utcOffset
    updateTextContents(splitSelectedTimeZone[1], splitSelectedTimeZone[0])
    updateTime(calcTime(offset))
  });




  const timezone = ct.getTimezone('Pacific/Kiritimati');
  console.log(timezone);