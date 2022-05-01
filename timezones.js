// const ct = require('countries-and-timezones/')

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

// Checks for Daylight Saving
function checkDayLightSaving(timeZoneAttributes){
    let dstOffsetString = timeZoneAttributes.dstOffsetStr.split(':')      // Daylight Savings Time
    let daylightHour = 0;
    
    if (parseInt(dstOffsetString[0]) != 0){
        daylightHour = 1
    }

    return daylightHour;
}

// Add offset to current time and check time format
function calcTime(offsetHour, offsetMin){
    const date = new Date()
    let currentMin = date.getMinutes()
    let currentHour = date.getUTCHours()
    // console.log(currentHour)
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


// Updates time to page 
// selector --> Id or Class name of the timezone box
function updateTime(selector, time){
    document.querySelector(selector).textContent = time
}


// To generate time and timezone for other boxes
function generateSmallTimezones(){
    let arrayTimeZones = ["Europe/Paris", "Europe/London", "America/New_York", "Asia/Tokyo"]
    let otherTimeBoxes = document.getElementsByClassName('othercity')

    for (let step = 0; step < arrayTimeZones.length; step++) {
        let idValue = otherTimeBoxes[step].attributes[1].nodeValue
        let timeZone = arrayTimeZones[step].split('/')
        let timeZoneAttr = ct.getTimezone(arrayTimeZones[step])
        
        updateTimeBox(timeZoneAttr, timeZone, `#${idValue}`)
    }
}

// Updates the timebox with the city, continent, and time
function updateTimeBox(timeZoneAttr, timeZone, classOrIdName){
    let utcOffsetArray = timeZoneAttr.utcOffsetStr.split(':')      
    let offsetHour = parseInt(utcOffsetArray[0]) + checkDayLightSaving(timeZoneAttr)
    let offsetMin = parseInt(utcOffsetArray[1])
    
    updateTextContents(`${classOrIdName}`, timeZone[1], timeZone[0])
    updateTime(`${classOrIdName} .digi-time`, calcTime(offsetHour, offsetMin))
}

// Listen for selected timezone in dropdown menu and updates text content(time and timezone)
dropdown.addEventListener('change', function() {
    let selectedTimeZone = dropdown.options[dropdown.selectedIndex].text
    let timeZone = selectedTimeZone.split("/")
    let timeZoneAttr = ct.getTimezone(selectedTimeZone)
    
    updateTimeBox(timeZoneAttr, timeZone, '#third-city')
    generateSmallTimezones() 
  })

generateSmallTimezones()    
updateTime(`#mid`, calcTime(+1, 00))            // Set default time, corresponds with Africa/Lagos timezone

