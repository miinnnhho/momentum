// import { useEffect, useState } from "react";
import "./weather.scss";

function Weather() {
  navigator.geolocation.getCurrentPosition((position) => {
    //좌표
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const API_KEY = "8ac1d763d6a7d07e95f4f88f58580af4";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector(".weather li:first-child");
        const city = document.querySelector(".weather li:last-child");
        const weatherNumber = Math.floor(data.main.temp); //기온 소수점 제거하여 간단하게 표현

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${weatherNumber}`;
      });
    function onGeoError() {
      alert("Can't find tou, No weather for you.");
    }
    navigator.geolocation.getCurrentPosition(Weather, onGeoError);
  });
  return (
    <div className="weather">
      <li>
        <span></span>
      </li>
      <li>
        <span></span>
      </li>
    </div>
  );
}

export default Weather;
