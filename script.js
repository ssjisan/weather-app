// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// 10fc9f1d776a6a2cde6114556662b5fa

// const searchButton = document.getElementById("search");

// searchButton.addEventListener("click", function(){
//     console.log("clicked");
// })

const weatherApi ={
    key: "10fc9f1d776a6a2cde6114556662b5fa",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const inputSearch = document.getElementById("input");

inputSearch.addEventListener("keypress", (event) =>{
    if(event.keyCode == 13) {
        console.log(inputSearch.value);
        getWeatherReport(inputSearch.value);
        document.querySelector(".weatherInfo").style.display = "block";
    }
})

// Get Weather Report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }) .then(shwoWeatherReport);
}
// Show Weather Report

function shwoWeatherReport(weather){
    console.log(weather);

    let cityName = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let showTemp = document.getElementById("temp");
    showTemp.innerHTML = `${weather.main.temp}&deg;C`;

    let showMinMax = document.getElementById("min-max");
    showMinMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C / ${Math.ceil(weather.main.temp_max)}&deg;C`;

    let showStatus = document.getElementById("status");
    showStatus.innerText = `${weather.weather[0].main}`;
    
    if (showStatus.textContent == "Rain"){
        document.body.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if (showStatus.textContent == "Clear"){
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    }
    else if (showStatus.textContent == "Clouds"){
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
    }
    else if (showStatus.textContent == "Snow"){
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    }
    else if (showStatus.textContent == "Strom"){
        document.body.style.backgroundImage = "url('images/Strom.jpg')";
    }
    else if (showStatus.textContent == "Haze"){
        document.body.style.backgroundImage = "url('images/haze.jpg')";
    }
    else if (showStatus.textContent == "Drizzle"){
        document.body.style.backgroundImage = "url('images/drizzle.jpg')";
    }
}