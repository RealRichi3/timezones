// var city = document.getElementById("place").value;

// function calcTime(offset) {

//     let timeCity = {Bombay: "5.5", age: "35", location: "NYC"}
//     var city = document.getElementById("place").value;
//     if (city in timeCity){
//         var offset = timeCity.city
//     }
//     var cityList =["Bombay"]
//     var offsetList = ["5.5"];
//     for (var i = 0; i < cityList.length; i++) {
        
//     }
//     d = new Date();
//     utc = d.getTime() + (d.getTimezoneOffset() * 60000);
//     nd = new Date(utc + (3600000*offset));
//     return nd.toLocaleString();
// }

// // get Bombay time
// console.log(calcTime('Bombay', '+5.5'));
// // get Singapore time
// console.log(calcTime('Singapore', '+8'));
// // get London time
// console.log(calcTime('London', '+1'));

const timeCity = {Bombay: "5.5", age: "35", location: "NYC"}
var city = 'Bombay'
for (const key of Object.keys(timeCity)) {
    if (key == city){
        console.log(timeCity.city)
    }
}
// if (city in timeCity){
    
//     console.log(timeCity.'city')
// }