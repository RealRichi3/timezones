// const ct = require('countries-and-timezones/');

let allTimeZones = ct.getAllTimezones();
let timeZoneNames = Object.entries(allTimeZones).sort();
const dropdown = document.getElementById('city-list');


// Create Option element with all the timeZones -- In dropdown menu
for (let i = 0; i < timeZoneNames.length; i++) {
    window.city = document.createElement('option')
    city.setAttribute("value", timeZoneNames[0][i])     // Set element id to timezone name
    city.textContent = timeZoneNames[i][0]
    dropdown.appendChild(city)
}

// Updates textcontent(City and Continent) to timebox
function updateTextContents(selector, city, continent){

    if (city.includes('_')){                            // Remove underscore from the timezone display text
        city = city.split('_').join(' ')
    }
    document.querySelector(`${selector} .city`).textContent = city
    document.querySelector(`${selector} .country`).textContent = continent
}

// Updates time to page 
// selector --> Id or Class name of the timezone box
function updateTime(selector, time){
    document.querySelector(selector).textContent = time
}

// Add offset to current time and check time format
function calcTime(offsetHour, offsetMin){
    const date = new Date()
    let currentMin = date.getMinutes()
    let currentHour = date.getHours()
    let newHour = currentHour + offsetHour
    let newMin = currentMin + offsetMin

    {   // Math operations for time
        // Calculating the minutes
        if ((currentMin + offsetMin) > 60){newMin -= 60}
        if (offsetMin < 0){
            if (currentMin < Math.abs(offsetMin)){newHour += 1}
        }

        // Calculating the Hour
        if (newHour >= 24) {newHour -= 24}                                      // Next day
        if (offsetHour < 0){
            if ((currentHour < Math.abs(offsetHour))) {newHour += 24}           // Previous day
        }
    }

    // Check and correct time display format
    if (String(newHour).length === 1) {newHour = '0' + String(newHour)}
    if (String(newMin).length === 1) {newMin = '0' + String(newMin)}

    return ((newHour + ':' + newMin).toString())
}

// To generate time and timezone for other boxes
function generateSmallTimezones(){
    let arrayTimeZones = ["Europe/Paris", "Europe/London", "America/New_York", "Asia/Tokyo"]
    let otherTimeBoxes = document.getElementsByClassName('othercity')

    for (let step = 0; step < arrayTimeZones.length; step++) {
        cityAndContinent = arrayTimeZones[step].split('/')
        let idValue = otherTimeBoxes[step].attributes[1].nodeValue
        let utcOffsetString = ct.getTimezone(arrayTimeZones[step]).utcOffsetStr.split(':')
        let hour = parseInt(utcOffsetString[0])
        let min = parseInt(utcOffsetString[1])
        
        updateTextContents(`#${idValue}`, cityAndContinent[1], cityAndContinent[0])
        updateTime(`#${idValue} .digi-time`, calcTime(hour, min))
    }
}

// Listen for selected timezone in dropdown menu and updates text content(time and timezone)
dropdown.addEventListener('change', function() {
    let selectedTimeZone = dropdown.options[dropdown.selectedIndex].text
    let splitSelectedTimeZone = selectedTimeZone.split("/");
    let utcOffsetArray = ct.getTimezone(selectedTimeZone).utcOffsetStr.split(':')      
    let offsetHour = parseInt(utcOffsetArray[0])
    let offsetMin = parseInt(utcOffsetArray[1])
    
    updateTextContents('.mid-pane', splitSelectedTimeZone[1], splitSelectedTimeZone[0])
    generateSmallTimezones() 
    updateTime('#mid', calcTime(offsetHour, offsetMin))
  })

generateSmallTimezones()    
updateTime(`#mid`, calcTime(00, 00))            // Set default time, corresponds with Africa/Lagos timezone


