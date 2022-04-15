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
function updateTextContents(className, city, continent){
    if (city.includes('_')){
        city = city.split('_').join(' ')
    }
    document.querySelector(`${className} .city`).textContent = city
    document.querySelector(`${className} .country`).textContent = continent
}

// Updates time to the mid time box
function updateTime(time){
    document.querySelector('#mid').textContent = time
}

// Add offset to current time
function calcTime(offset){
    const date = new Date()
    // console.log(date.getHours() + ' : ' + date.getMinutes())
    let timeInMinutes = (date.getUTCHours() * 60) + (date.getUTCMinutes() + offset);
    let currTimeInHours = Math.floor(timeInMinutes / 60)
    let currTimeInMinutes = timeInMinutes % 60

    if (currTimeInHours >= 24){
        if ((currTimeInHours - 24) >= 6){
            currTimeInHours = (currTimeInHours - 24).toString()
        }
        else{
            currTimeInHours = '0' + (currTimeInHours - 24).toString()
        }
    }
    
    if (String(currTimeInHours).length === 1){
        currTimeInHours = '0' + currTimeInHours
    }
    if (String(currTimeInMinutes).length === 1){
        currTimeInMinutes = '0' + currTimeInMinutes
    }

    return ((currTimeInHours + ':' + currTimeInMinutes).toString())
}

// Listen for selected Timezone in dropdown menu
dropdown.addEventListener('change', function() {
    let selectedTimeZone = dropdown.options[dropdown.selectedIndex].text
    let splitSelectedTimeZone = selectedTimeZone.split("/");
    let offset = ct.getTimezone(selectedTimeZone).utcOffset
    updateTextContents('.mid-pane', splitSelectedTimeZone[1], splitSelectedTimeZone[0])
    updateTime(calcTime(offset))
  });




// Code to gen time and timezone for other boxes
let arrayTimeZones = ["Africa/Lagos", "Europe/London", "America/New_York", "Asia/Tokyo"]
let otherTimeBoxes = document.getElementsByClassName('othercity')

for (let step = 0; step < arrayTimeZones.length; step++) {
    cityAndContinent = arrayTimeZones[step].split('/')
    let timeboxId = otherTimeBoxes[step].attributes[1].nodeValue
    updateTextContents(`#${timeboxId}`, cityAndContinent[1], cityAndContinent[0])
  }