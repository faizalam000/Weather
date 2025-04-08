
const apiKey = "72cbbf8ecdfd5450738b567a6b84608f";
const input = document.querySelector("input");
const button = document.querySelector("button");
const temp = document.querySelector("#h11");
const city = document.querySelector("#h12");
const humidity = document.querySelector("#h21");
const wind = document.querySelector("#h23");
const image = document.querySelector("#cloud img");




button.addEventListener("click", async () => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=${apiKey}`;
  const dataAll = await axios.get(url);
  const data = dataAll.data;
  console.log(data);
  city.innerText = data.name;   
  temp.innerText = `${Math.floor(data.main.temp)}°C`;
  humidity.innerText = `${data.main.humidity}%`;
  wind.innerText = `${data.wind.speed} km/hr`;
  console.log(data.weather[0].main);
  
  if (data.weather[0].main === "Clouds") {
    image.src = "./thunder-unscreen.gif";
  } else if (data.weather[0].main === "Clear") {
    image.src = "./clear.png";
  } else if (data.weather[0].main === "Rain") {
    image.src = "./rain.gif";
  } else if (data.weather[0].main === "Wind") {
    image.src = "./wind-unscreen.gif";
  } else if (data.weather[0].main === "Snow") {
    image.src = "./snow-unscreen.gif";
  }
  } catch (error) {
    alert("invalid input");
    console.log(error);
    
  }

});


