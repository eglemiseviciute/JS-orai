
const cloudyD = document.querySelector('.cloudy');
const clearD = document.querySelector(".clear");
const partlyCloudy = document.querySelector('.partly-cloudy');
const rainyD = document.querySelector(".rainy");
const snowD = document.querySelector(".snow");
const thunderstormD = document.querySelector('.thunderstom');
const fogD = document.querySelector('.fog');
const airD = document.querySelector('.air');
const temperature = document.getElementById("weather-temperature");
const condition = document.getElementById("weather-condition");
const loc = document.getElementById("location");
const time = document.getElementById("d");

// reikia kiekviena karta nueiti i si puslapi ir pasidaryti demo serveri kad leistu siusti uzklausas i
// api.meteo.lt nes kitaip gausim errora del CORS
const proxy = "https://cors-anywhere.herokuapp.com/"

fetch(`${proxy}https://api.meteo.lt/v1/places/vilnius/forecasts/long-term`).then(response=>{
    if(response.ok){
        return response.json();
    }
    throw new Error('Request failed!');
    
}, networkError => console.log(networkError.message)).then((data)=>this.getData(data));

function getData(data){
    // gavom miesta is api
const {name} = data.place;
 loc.innerText = name;
//  pasiemem array kad galetume gauti reiksmes skirtingom dienom ir valandom
const {forecastTimestamps} = data;
console.log(forecastTimestamps)

// pagal diena ir valanda keiciam oro salygas, temperatura ir laika
 if(currentTime >= "00:00:00" && currentTime <="01:00:00"){
  const index24 = forecastTimestamps.findIndex(object => {
    return object.forecastTimeUtc === `${currentDate} 00:00:00`;
  }); 
  temp =forecastTimestamps[index24].airTemperature;
  temperature.innerHTML = temp + "°C";
  cond = forecastTimestamps[index24].conditionCode;
      condition.innerText = forecastTimestamps[index24].conditionCode.charAt(0).toUpperCase()+cond.slice(1); 
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }
else if(currentTime >= "01:00:00" && currentTime <="02:00:00"){
  const index1 = forecastTimestamps.findIndex(object => {
    return object.forecastTimeUtc === `${currentDate} 01:00:00`;
  }); 
  temp =forecastTimestamps[index1].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index1].conditionCode;
      condition.innerText = forecastTimestamps[index1].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "02:00:00" && currentTime <="03:00:00"){
      const index2 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 02:00:00`;
      }); 
  temp =forecastTimestamps[index2].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index2].conditionCode;
      condition.innerText = forecastTimestamps[index2].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "03:00:00" && currentTime <="04:00:00"){
      const index3 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 03:00:00`;
      }); 
  temp =forecastTimestamps[index3].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index3].conditionCode;
      condition.innerText = forecastTimestamps[index3].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "04:00:00" && currentTime <="05:00:00"){
      const index4 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 04:00:00`;
      }); 
  temp =forecastTimestamps[index4].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index4].conditionCode;
      condition.innerText = forecastTimestamps[index4].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "05:00:00" && currentTime <="06:00:00"){
      const index5 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 05:00:00`;
      }); 
  temp =forecastTimestamps[index5].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index5].conditionCode;
      condition.innerText = forecastTimestamps[index5].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "06:00:00" && currentTime <="07:00:00"){
      const index6 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 06:00:00`;
      }); 
  temp =forecastTimestamps[index6].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index6].conditionCode;
      condition.innerText = forecastTimestamps[index6].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "07:00:00" && currentTime <="08:00:00"){
      const index7 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 07:00:00`;
      }); 
  temp =forecastTimestamps[index7].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index7].conditionCode;
      condition.innerText = forecastTimestamps[index7].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "08:00:00" && currentTime <="09:00:00"){
      const index8 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 08:00:00`;
      }); 
  temp =forecastTimestamps[index8].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index8].conditionCode;
      condition.innerText = forecastTimestamps[index8].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "09:00:00" && currentTime <="10:00:00"){
      const index9 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 09:00:00`;
      }); 
  temp =forecastTimestamps[index9].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index9].conditionCode;
      condition.innerText = forecastTimestamps[index9].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "10:00:00" && currentTime <="11:00:00"){
      const index10 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 10:00:00`;
      }); 
  temp =forecastTimestamps[index10].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index10].conditionCode;
      condition.innerText = forecastTimestamps[index10].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "11:00:00" && currentTime <="12:00:00"){
      const index11 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 11:00:00`;
      }); 
  temp =forecastTimestamps[index11].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index11].conditionCode;
  condition.innerText = forecastTimestamps[index11].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
  time.innerText = currentDate;
  if(cond === "cloudy"){
    cloudyD.classList.remove("text")
  }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
    partlyCloudy.classList.remove("text")
  }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
    thunderstormD.classList.remove("text")
  }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
    rainyD.classList.remove("text")
  }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
    snowD.classList.remove("text")
  }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
  }else if(cond == "squall"){
    airD.classList.remove("text")
          }
}else if(currentTime >= "12:00:00" && currentTime <="13:00:00"){
  const index12 = forecastTimestamps.findIndex(object => {
    return object.forecastTimeUtc === `${currentDate} 12:00:00`;
  }); 
  temp =forecastTimestamps[index12].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index12].conditionCode;
      condition.innerText = forecastTimestamps[index12].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "13:00:00" && currentTime <="14:00:00"){
      const index13 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 13:00:00`;
      }); 
  temp =forecastTimestamps[index13].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index13].conditionCode;
      condition.innerText = forecastTimestamps[index13].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "14:00:00" && currentTime <="15:00:00"){
      const index14 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 14:00:00`;
      }); 
  temp =forecastTimestamps[index14].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index14].conditionCode;
      condition.innerText = forecastTimestamps[index14].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "15:00:00" && currentTime <="16:00:00"){
      const index15 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 15:00:00`;
      }); 
  temp =forecastTimestamps[index15].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index15].conditionCode;
  condition.innerText = forecastTimestamps[index15].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
  time.innerText = currentDate;
  if(cond === "cloudy"){
    cloudyD.classList.remove("text")
  }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
    partlyCloudy.classList.remove("text")
  }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
    thunderstormD.classList.remove("text")
  }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
    rainyD.classList.remove("text")
  }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
    snowD.classList.remove("text")
  }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
  }else if(cond == "squall"){
    airD.classList.remove("text")
          }
}else if(currentTime >= "16:00:00" && currentTime <="17:00:00"){
  const index16 = forecastTimestamps.findIndex(object => {
    return object.forecastTimeUtc === `${currentDate} 16:00:00`;
  }); 
  temp =forecastTimestamps[index16].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index16].conditionCode;
      condition.innerText = forecastTimestamps[index16].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "17:00:00" && currentTime <="18:00:00"){
      const index17 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 17:00:00`;
      }); 
        temp =forecastTimestamps[index17].airTemperature;
        temperature.innerHTML = temp + " °C";
        cond = forecastTimestamps[index17].conditionCode;
            condition.innerText = forecastTimestamps[index17].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
            time.innerText = currentDate;
            if(cond === "cloudy"){
              cloudyD.classList.remove("text")
            }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
              partlyCloudy.classList.remove("text")
            }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
              thunderstormD.classList.remove("text")
            }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
              rainyD.classList.remove("text")
            }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
              snowD.classList.remove("text")
            }else if(cond == "mist"|| cond == "fog"){
      fogD.classList.remove("text")
            }else if(cond == "squall"){
              airD.classList.remove("text")
                    }
          }else if(currentTime >= "18:00:00" && currentTime <="19:00:00"){
            const index18 = forecastTimestamps.findIndex(object => {
              return object.forecastTimeUtc === `${currentDate} 18:00:00`;
            }); 
      temp =forecastTimestamps[index18].airTemperature;
    temperature.innerHTML = temp + " °C";
    cond = forecastTimestamps[index18].conditionCode;
        condition.innerText = forecastTimestamps[index18].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
        time.innerText = currentDate;
        if(cond === "cloudy"){
          cloudyD.classList.remove("text")
        }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
          partlyCloudy.classList.remove("text")
        }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
          thunderstormD.classList.remove("text")
        }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
          rainyD.classList.remove("text")
        }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
          snowD.classList.remove("text")
        }else if(cond == "mist"|| cond == "fog"){
  fogD.classList.remove("text")
        }else if(cond == "squall"){
          airD.classList.remove("text")
                }
      }else if(currentTime >= "19:00:00" && currentTime <="20:00:00"){
        const index19 = forecastTimestamps.findIndex(object => {
          return object.forecastTimeUtc === `${currentDate} 19:00:00`;
        });
    temp =forecastTimestamps[index19].airTemperature;
    temperature.innerHTML = temp + "°C";
    cond = forecastTimestamps[index19].conditionCode;
        condition.innerText = forecastTimestamps[index19].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
        time.innerText = currentDate;
        if(cond === "cloudy"){
          cloudyD.classList.remove("text")
        }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
          partlyCloudy.classList.remove("text")
        }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
          thunderstormD.classList.remove("text")
        }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
          rainyD.classList.remove("text")
        }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
          snowD.classList.remove("text")
        }else if(cond == "mist"|| cond == "fog"){
  fogD.classList.remove("text")
        }else if(cond == "squall"){
          airD.classList.remove("text")
                }
      }else if(currentTime >= "20:00:00" && currentTime <="21:00:00"){
        const index20 = forecastTimestamps.findIndex(object => {
          return object.forecastTimeUtc === `${currentDate} 20:00:00`;
        }); 
  temp =forecastTimestamps[index20].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index20].conditionCode;
      condition.innerText = forecastTimestamps[index20].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "21:00:00" && currentTime <="22:00:00"){
      const index21 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 21:00:00`;
      }); 
  temp =forecastTimestamps[index21].airTemperature;
  temperature.innerHTML = temp + "°C";
  cond = forecastTimestamps[index21].conditionCode;
      condition.innerText = forecastTimestamps[index21].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
}else if(currentTime >= "22:00:00" && currentTime <="23:00:00"){
  const index22 = forecastTimestamps.findIndex(object => {
    return object.forecastTimeUtc === `${currentDate} 22:00:00`;
  }); 
  temp =forecastTimestamps[index22].airTemperature;
  temperature.innerHTML = temp + " °C";
  cond = forecastTimestamps[index22].conditionCode;
      condition.innerText = forecastTimestamps[index22].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
      time.innerText = currentDate;
      if(cond === "cloudy"){
        cloudyD.classList.remove("text")
      }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
        partlyCloudy.classList.remove("text")
      }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
        thunderstormD.classList.remove("text")
      }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
        rainyD.classList.remove("text")
      }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
        snowD.classList.remove("text")
      }else if(cond == "mist"|| cond == "fog"){
fogD.classList.remove("text")
      }else if(cond == "squall"){
        airD.classList.remove("text")
              }
    }else if(currentTime >= "23:00:00" && currentTime <="00:00:00"){
      const index23 = forecastTimestamps.findIndex(object => {
        return object.forecastTimeUtc === `${currentDate} 23:00:00`;
      }); 
      console.log(forecastTimestamps[index23].airTemperature)
      temp =forecastTimestamps[index23].airTemperature;
      temperature.innerHTML = temp + " °C";
      cond = forecastTimestamps[index23].conditionCode;
          condition.innerText = forecastTimestamps[index23].conditionCode.charAt(0).toUpperCase()+cond.slice(1);
          time.innerText = currentDate;
          if(cond === "cloudy"){
            cloudyD.classList.remove("text")
          }else if(cond == "partly-cloudy" || cond == "variable-cloudiness" || cond == "cloudy-with-sunny-intervals"){
            partlyCloudy.classList.remove("text")
          }else if(cond == "thunder"||cond == "isolated-thunderstorms"||cond == "thunderstorms"){
            thunderstormD.classList.remove("text")
          }else if(cond == "light-rain"||cond == "rain"||cond == "heavy-rain"||cond == "rain-showers"||cond == "light-rain-at-times"|| cond == "rain-at-times"){
            rainyD.classList.remove("text")
          }else if(cond == "light-sleet"||cond == "sleet"||cond == "sleet-at-times"||cond == "sleet-showers"||cond == "freezing-rain"||cond == "hail "||cond == "light-snow"||cond == "snow"||cond == "heavy-snow"||cond == "snow-showers"||cond == "snow-at-times"||cond == "light-snow-at-times"||cond == "snowstorm"){
            snowD.classList.remove("text")
          }else if(cond == "mist"|| cond == "fog"){
    fogD.classList.remove("text")
          }else if(cond == "squall"){
            airD.classList.remove("text")
                  }
        }
        
}

// gaunam esama data
let myDate = new Date();
let year = myDate.getFullYear();
let month = myDate.getMonth() + 1;
let date = myDate.getDate();
let hour = myDate.getHours();
let min = myDate.getMinutes();
let sec = myDate.getSeconds();

// gaunam esama laika
let currentDate = year +"-"+month+"-"+date;
let currentTime = addZero(hour)+":"+addZero(min)+":"+addZero(sec);
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}