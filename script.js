const apiKey = "08dac7b4a2d657f00a238e3cc17f8d1e";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchbtn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityname){
  const response = await fetch(`${apiUrl}&q=${cityname}`);
  let data = await response.json();
  console.log(data);

  document.querySelector(".cityname").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images.JPEG/Cloud-weather-image-removebg-preview.png";
  }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images.JPEG/raim-weather-img-removebg-preview.png";
  }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images.JPEG/drizzle-weather-image-removebg-preview.png";
  }else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images.JPEG/Sunny-weather-img-removebg-preview.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images.JPEG/Mist-weather-image-removebg-preview.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images.JPEG/snow-weather-image-removebg-preview.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});

searchBtn.addEventListener("keypress", (e) => {
  if(e.key == "Enter"){
    getGithubProfile(searchBox.value.trim());
  }
});