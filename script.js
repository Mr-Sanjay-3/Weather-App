

//Api data get from openweathermap

const apiKey ="16d7f8342915ca77a759165ae3648346";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//geting Data with async & await fun
async function checkWeather(city){
var response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();
 // Error handling
 if (response.status == 404) {
   document.querySelector(".city").innerHTML = " City Not Found";
   document.querySelector(".temp").innerHTML = "";
   document.querySelector(".humidity").innerHTML = "";
   document.querySelector(".wind").innerHTML = "";
   weatherIcon.src = "./images/404i.png";
   return;
 };
 




// console.log(data);



 //Setting values to HTML

 document.querySelector(".city").innerHTML = (data.name);
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
 document.querySelector(".humidity").innerHTML = (data.main.humidity) + "%";
 document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";


 //Weather icons
 
 if (data.weather[0].main == "Clouds") {
 weatherIcon.src = "./images/clouds.png" ;
} 
else if (data.weather[0].main == "Clear") {
 weatherIcon.src = "./images/clear.png";
}
else if  (data.weather[0].main == "Rain") {
 weatherIcon.src = "./images/rain.png";
} 
else if (data.weather[0].main == "Drizzle") {
 weatherIcon.src = "./images/drizzle.png";
} 
else if (data.weather[0].main == "Mist") {
 weatherIcon.src = "./images/mist.png";
}
else if (data.weather[0].main == "Snow") {
 weatherIcon.src = "./images/snow.png";

  }
}

//Event Listner For Search value place
searchBtn.addEventListener("click", () => {
   checkWeather(searchBox.value);

   //serching Value ....
   searchBox.value = "";
   searchBox.focus();
   document.querySelector(".city").innerHTML = "Searching...";
   document.querySelector(".temp").innerHTML = "";
   document.querySelector(".humidity").innerHTML = "";
   document.querySelector(".wind").innerHTML = "";
   document.querySelector(".weather").style.display = "block";
   document.querySelector(".weather").style.animation = "fadeIn 1s";
  
});





