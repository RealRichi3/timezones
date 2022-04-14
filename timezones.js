// const ct = require('countries-and-timezones');

const countries = ct.getAllCountries();
const cities = document.getElementById('city-list');
// let sortedCountries = Object.keys(countries).sort()
// let first = countries[sortedCountries[0]] 
// console.log(first.name)
// console.log(countries);
// console.log()
const countryList = Object.keys(countries)
let cityList = document.querySelector('#city-list')

// console.log(cityList)
for (let i = 0; i < 10; i++) {
    let city = document.createElement('option')
    city.setAttribute("value", countryList[i])
    city.textContent = countryList[i]
    cityList.appendChild(city)
}

