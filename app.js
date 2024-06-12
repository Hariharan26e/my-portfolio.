const apiKey = "97a12f94032bee4661df38481e6974ec";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const image = document.querySelector(".new");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
    }
    else{
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";
    }

    var data = await response.json();
    
    
   /* console.log(data);*/


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    /*if(data.weather[0].main == "clouds"){
        image.src = "clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        image.src = "clear.png";
    }
    else if(data.weather[0].main == "rain"){
        image.src = "rain.png";
    }
    else if(data.weather[0].main == "drizzle"){
        image.src = "drizzle.png";
    }
    else if(data.weather[0].main == "mist"){
        image.src = "mist.png";
    }*/


}


searchButton.addEventListener("click",()=>{

checkWeather(searchBox.value);

})
