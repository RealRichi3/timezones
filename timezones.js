// const ct = require('countries-and-timezones');

// const countries = ct.getAllCountries();
// // const cities = document.getElementById('city-list');
// let cityName = Object.entries(countries).sort()
// const countryList = Object.keys(countries)
// let cityList = document.querySelector('#city-list')

// // // console.log(cityList)
// for (let i = 0; i < 20; i++) {
//     let city = document.createElement('option')
//     city.setAttribute("value", countryList[i])
//     city.textContent = cityName[i][1].timezones
//     cityList.appendChild(city)
// }


// console.log(cityName)

let allTimeZones = ct.getAllTimezones();
const dropdown = document.getElementById('city-list');
let timeZoneNames = Object.entries(allTimeZones).sort();
// console.log(timeZoneNames)

for (let i = 0; i < 20; i++) {
    let city = document.createElement('option')
    city.setAttribute("value", timeZoneNames[0][i])
    city.textContent = timeZoneNames[i][0]
    dropdown.appendChild(city)
}