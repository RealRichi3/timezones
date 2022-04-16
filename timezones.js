// const ct = require('countries-and-timezones/');

let allTimeZones = ct.getAllTimezones();
let timeZoneNames = Object.entries(allTimeZones).sort();
const dropdown = document.getElementById('city-list');


// Create Option element with all the timeZones -- In dropdown menu
for (let i = 0; i < timeZoneNames.length; i++) {
    window.city = document.createElement('option')
    city.setAttribute("value", timeZoneNames[0][i])
    city.textContent = timeZoneNames[i][0]
    dropdown.appendChild(city)
}

// Updates textcontent(City and Continent) to timebox
function updateTextContents(selector, city, continent){
    if (city.includes('_')){
        city = city.split('_').join(' ')
    }
    
    document.querySelector(`${selector} .city`).textContent = city
    document.querySelector(`${selector} .country`).textContent = continent
}

// Updates time to the mid time box
function updateTime(selector, time){
    document.querySelector(selector).textContent = time
}

// Add offset to current time
// function calcTime(offset){
//     const date = new Date()
//     // console.log(date.getHours() + ' : ' + date.getMinutes())
//     let timeInMinutes = (date.getUTCHours() * 60) + (date.getUTCMinutes() + offset);
//     let currTimeInHours = Math.floor(timeInMinutes / 60)
//     let currTimeInMinutes = timeInMinutes % 60

//     if (currTimeInHozurs >= 24){
//         if ((currTimeInHours - 24) >= 6){
//             currTimeInHours = (currTimeInHours - 24).toString()
//         }
//         else{
//             currTimeInHours = '0' + (currTimeInHours - 24).toString()
//         }
//     }
    
//     if (String(currTimeInHours).length === 1){
//         currTimeInHours = '0' + currTimeInHours
//     }
//     if (String(currTimeInMinutes).length === 1){
//         currTimeInMinutes = '0' + currTimeInMinutes
//     }

//     return ((currTimeInHours + ':' + currTimeInMinutes).toString())
// }

// Listen for selected Timezone in dropdown menu
// dropdown.addEventListener('change', function() {
//     let selectedTimeZone = dropdown.options[dropdown.selectedIndex].text
//     let splitSelectedTimeZone = selectedTimeZone.split("/");
//     let offset = ct.getTimezone(selectedTimeZone).utcOffset
//     updateTextContents('.mid-pane', splitSelectedTimeZone[1], splitSelectedTimeZone[0])
//     updateTime('#mid', calcTime(offset))
//   });


// Calculate time and check time format
function calcTime(offsetHour, offsetMin){
    const date = new Date()
    let currentMin = date.getMinutes()
    let currentHour = date.getHours()
    let newHour = currentMin + offsetHour
    let newMin = currentHour + offsetMin

    // Calculating the minutes
    if ((currentMin + offsetMin) > 60){newMin -= 60}
    if ((Math.abs(currentMin) < Math.abs(offsetMin))){newHour += 1}

    // Calculating the Hour
    if ((currentHour + offsetHour) > 24) {newHour -= 24;}          // Next day
    if (Math.abs(currentHour) < Math.abs(offsetHour)) {newHour += 24}           // Previous day

    // Check and correct time display format
    if (String(newHour).length === 1) {newHour = '0' + String(newHour)}
    if (String(newMin).length === 1) {newMin = '0' + String(newMin)}

    console.log((newHour + ':' + newMin).toString())
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
    let utcOffsetString = ct.getTimezone(selectedTimeZone).utcOffsetStr.split(':')
    let hour = parseInt(utcOffsetString[0])
    let min = parseInt(utcOffsetString[1])
    console.log(hour + ' ' + min)
    calcTime(hour, min)
    updateTextContents('.mid-pane', splitSelectedTimeZone[1], splitSelectedTimeZone[0])
    generateSmallTimezones()
    // updateTime('#mid', calcTime(offset))
  });

generateSmallTimezones()
// updateTime(`#mid`, calcTime(60, 00))


