
    const apiKey = "7aad91ec5a669a04baa87b875335c4cf";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".input-map");
    const searchBtn = document.querySelector(".map-button");
    const weaterIcon = document.querySelector(".weather-icon")


    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".error-map").style.display = "block";
            document.querySelector(".weather-map").style.display = "none";

        }
        else {

            var data = await response.json();

            console.log(data);

            document.querySelector(".city-weather").innerHTML = data.name;
            document.querySelector(".temp-weather").innerHTML = Math.round(data.main.temp) + "&deg;C";

            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main == "Clouds") {
                weaterIcon.src = "assets/img/clouds.png"
            }
            else if (data.weather[0].main == "Clear") {
                weaterIcon.src = "assets/img/clear.png"
            }
            else if (data.weather[0].main == "Rain") {
                weaterIcon.src = "assets/img/rain.png"
            }
            else if (data.weather[0].main == "Drizzle") {
                weaterIcon.src = "assets/img/drizzle.png"
            }
            else if (data.weather[0].main == "Mist") {
                weaterIcon.src = "assets/img/mist.png"
            }

            document.querySelector(".weather-map").style.display = "block";
            document.querySelector(".error").style.display = "none";


        }

    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })


