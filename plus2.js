//challenge 1
let now = new Date();
let actualDate= document.querySelector("#today")

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
let months= ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

let day= days[now.getDay()];
let month= months[now.getMonth()];
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

actualDate.innerHTML= `${day} ${date} ${month}, ${hour}:${minutes}`

//challenge 2
function showTemperature (response) {
    response.preventDefault();
    let actualTemp= document.querySelector("#actual-temp")
    actualTemp.innerHTML= Math.round(response.data.main.temp);
    }

function showCity(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-input");
    let city= document.querySelector ("#city");
    city.innerHTML=`${searchInput.value}`;
    
   let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=5707fb7f40cd6292878656e9cd3bd937&units=metric`;

axios.get(apiUrl).then (showTemperature)
}


let form = document.querySelector("#search-form");
form.addEventListener ("submit", showCity);

/*challenge 3
function changeUnitToFahrenheit (event){
    event.preventDefault();
    let fahrenheitTemp = document.querySelector ("#actual-temp");
    fahrenheitTemp.innerHTML= 66;
}

let fahrenheitLink= document.querySelector ("#fahrenheit");
fahrenheitLink.addEventListener ("click", changeUnitToFahrenheit);

function changeUnitToCelcius (event){
    event.preventDefault();
    let celciusTemp = document.querySelector ("#actual-temp");
    celciusTemp.innerHTML= 14;
}


let celciusLink= document.querySelector ("#celcius");
celciusLink.addEventListener ("click", changeUnitToCelcius);
*/
function showWeather (event){
    event.preventDefault;
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showTemperature(response){
    let currentTemp= document.querySelector("#actual-temp")
    currentTemp.innerHTML=Math.round(response.data.main.temp);
    let currentLocation= document.querySelector("#city");
    currentLocation.innerHTML= response.data.name;
 
}

function showLocation (position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5707fb7f40cd6292878656e9cd3bd937&units=metric`;
    
    axios.get(apiUrl).then(showTemperature);

}

let currentButton= document.querySelector("#button1")
    currentButton.addEventListener ("click", showWeather);
