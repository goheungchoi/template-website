const API_KEY = "9654793345feb2221b9b073812efb2d1"

function onGeo(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main}
         ${data.main.temp}°C`;
    });

}

function onGeoError() {
    alert("Unable to access location. No weather will be displayed.")
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);

