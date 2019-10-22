 "use strict";

/****/

var temp = null;   // temperature


function setUnits(){

    var tempValue = document.getElementById("tempValue");
    var tempUnits = document.getElementById("tempUnits");

        if(tempUnits.dataset.units === 'celsius'){
            tempUnits.dataset.units = 'fahrenheit';
          console.log("****--> CHANGED to fahrenheit --->  tempUnits.units = " + tempUnits.units);
            tempUnits.innerHTML = "<i class='wi degreeScale wi-fahrenheit'></i>";
            tempValue.innerHTML = Math.round((temp - 273.15)*(9/5))+32;
        }
        else if(tempUnits.dataset.units === 'fahrenheit'){
            tempUnits.dataset.units = 'celsius';
          console.log("****--> CHANGED to celsius --->  tempUnits.units = " + tempUnits.units);
            tempUnits.innerHTML  = "<i class='wi degreeScale wi-celsius'></i>";
            tempValue.innerHTML  = Math.round(temp - 273.15);
        }
    }


  $("#tempUnits").on('click', function(){

      console.log("****--> Function js is CLICKED    and tempUnits.dataset.units = " + tempUnits.dataset.units);

      setUnits();

    });




function displayWeather(locationD, countryD, idD, descriptionD, iconD, tempD, windSpeedD, sunriseD, sunsetD){

    console.log("**--->  DISPLAY WEATHER ");

    console.log("DISPLAY --->  location  " + locationD);
    console.log("DISPLAY --->  country  " + countryD);
    console.log("DISPLAY --->  id  " + idD);
    console.log("DISPLAY --->  description  " + descriptionD);
    console.log("DISPLAY --->  temp  " + tempD);
    console.log("DISPLAY --->  windSpeed  " + windSpeedD);

    temp = tempD;

    var locationName = document.getElementById("locationName");
    var weatherDescription = document.getElementById("weatherDescription");

    locationName.innerHTML = locationD + " , " + countryD;
    weatherDescription.innerHTML = descriptionD;
 
    setUnits();

    /* if all weather ready then switch the weather info display on and turn the loading icon off */
    var loadingMessage = document.getElementById("loadingMessage");
    var info = document.getElementById("info");
    loadingMessage.dataset.visible = "hidden";
    info.dataset.visible = "show";
    
    /* Convert wind speed in m/s to Beaufort scale : see note below*/

    var beaufort;

    if(windSpeedD<=0.2){beaufort = 0;}
    else if((0.3<=windSpeedD) && (windSpeedD<=1.5)){beaufort = 1;}
    else if((1.6<=windSpeedD) && (windSpeedD<=3.3)){beaufort = 2;}
    else if((3.4<=windSpeedD) && (windSpeedD<=5.4)){beaufort = 3;}
    else if((5.5<=windSpeedD) && (windSpeedD<=7.9)){beaufort = 4;}
    else if((8.0<=windSpeedD) && (windSpeedD<=10.7)){beaufort = 5;}
    else if((10.8<=windSpeedD) && (windSpeedD<=13.8)){beaufort = 6;}
    else if((13.9<=windSpeedD) && (windSpeedD<=17.1)){beaufort = 7;}
    else if((17.2<=windSpeedD) && (windSpeedD<=20.7)){beaufort = 8;}
    else if((20.8<=windSpeedD) && (windSpeedD<=24.4)){beaufort = 9;}
    else if((24.5<=windSpeedD) && (windSpeedD<=28.4)){beaufort = 10;}
    else if((28.5<=windSpeedD) && (windSpeedD<=32.6)){beaufort = 11;}
    else {beaufort = 12;}


    console.log("beaufort  " + beaufort);
    var beaufortClass = "wi-wind-beaufort-" + beaufort;

    var windSpeed = document.querySelector("#windSpeed");
    windSpeed.classList.add(beaufortClass);
    windSpeed.classList.add("wind");


    /*  Work out if its day or night time  */

    var sunriseTime = new Date(sunriseD*1000);
    var sunsetTime = new Date(sunsetD*1000);
    var timeNow = new Date();
    var weatherClass = "";

    console.log(" sunriseTime = " + sunriseTime);
    console.log(" sunsetTime = " + sunsetTime);
    console.log(" timeNow = " + timeNow);

    /* if the current time is greater than sunrise but less than sunset its daytime, otherwise its nightime */
    if((sunriseTime <= timeNow) && (sunsetTime > timeNow)){
        weatherClass = "wi-owm-day-" + idD;
    }
    else{weatherClass = "wi-owm-night-" + idD;}

    console.log("weatherClass =" + weatherClass + "\n");

    var weatherSymbol = document.querySelector("#weatherSymbol");
    weatherSymbol.classList.add(weatherClass);


    /***  May use this at some future point
    var windDescipJSON = {
        "0":"calm",
        "1":"light air",
        "2":"light breeze",
        "3":"gentle breeze",
        "4":"moderate breeze",
        "5":"fresh breeze",
        "6":"strong breeze",
        "7":"near gale",
        "8":"gale",
        "9":"strong gale",
        "10":"storm",
        "11":"violent storm",
        "12":"hurricane"
    };

****/

}





function getWeather(latitude, longitude){

console.log(`---> LAT  ${latitude}******`)
console.log(`---> LONG  ${longitude}******`)

    console.log("**--->  GETWEATHER  \n");

    // var freeCodCampApiKey = "7f41bf4f70baf6e27051593820b9c7e4";
    const newApiKey = "4b8c759f13df8640317c8c7e0be7e1c0"

    // var openWeatherMap = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + freeCodCampApiKey;
const openWeatherMap = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${newApiKey}`
    // var openWeatherMap = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + newApiKey

        console.log("openWeatherMap   " + openWeatherMap);

        $.ajax({
            url: openWeatherMap,
            method:'GET',
            dataType: 'jsonp', /*see note below */

            success: function(weatherData){


                console.log("--- UP-TO-DATE WEATHER JSON AJAX ---  \n");

                console.log("** -> UP-TO-DATE  - weatherData.weather[0].id = " + weatherData.weather[0].id);

                console.log("** -> UP-TO-DATE  - weatherData.weather[0].description = " + weatherData.weather[0].description);

                console.log("** -> UP-TO-DATE  - weatherData.weather[0].icon = " + weatherData.weather[0].icon);

                console.log("** -> UP-TO-DATE  - weatherData.main.temp  (Kelvin) = " + weatherData.main.temp);

                console.log("** -> UP-TO-DATE  - weatherData.wind.speed  (m/s) = " + weatherData.wind.speed);

                console.log("** -> UP-TO-DATE  - weatherData.sys.country = " + weatherData.sys.country);

                console.log("** -> UP-TO-DATE  - weatherData.name = " + weatherData.name);

                console.log("** -> UP-TO-DATE  - weatherData.sys.sunrise = " + weatherData.sys.sunrise);

                console.log("** -> UP-TO-DATE  - weatherData.sys.sunset = " + weatherData.sys.sunset);

                console.log("** -> UP-TO-DATE  - weatherData.dt = " + weatherData.dt);


                displayWeather(weatherData.name, weatherData.sys.country, weatherData.weather[0].id, weatherData.weather[0].description, weatherData.weather[0].icon, weatherData.main.temp, weatherData.wind.speed, weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.dt);
            },

            error: function(){
                console.log("** -> Error in getWeather ajax\n");
                handleErrors("Sorry but I had problems getting weather.Try refreshing the browser");
            }

        });

}



// https://freegeoip.net/json/
// #################################################################################################################################
// # #
// # IMPORTANT - PLEASE UPDATE YOUR API ENDPOINT #
// # #
// # This API endpoint is deprecated and has now been shut down. To keep using the freegeoip API, please update your integration #
// # to use the new ipstack API endpoint, designed as a simple drop-in replacement. #
// # You will be required to create an account at https://ipstack.com and obtain an API access key. #
// # #
// # For more information on how to upgrade please visit our Github Tutorial at: https://github.com/apilayer/freegeoip#readme #
// # #
// #################################################################################################################################
    
// change this!!
function getFreegoip(){
    
    var freegeoipURL = "https://freegeoip.net/json/";
    
            $.ajax({
            url: freegeoipURL,
            method:'GET',
            dataType: 'jsonp', /*see note below */

            success: function(geoipData){

                //strip off location latitude and longitude
                
                console.log("  geoTest.latitude   " + geoipData.latitude + "\n");
                console.log("  geoTest.longitude   " + geoipData.longitude + "\n");
                
                getWeather(geoipData.latitude, geoipData.longitude);
            },

            error: function(){
                console.log("** -> Error in getWeather ajax\n");
                handleErrors("Sorry but I had problems getting weather.Try refreshing the browser");
            }

        });
    
}




function handleErrors(message){

    var errorMessage = document.getElementById("errorMessage");
    var loadingMessage =  document.getElementById("loadingMessage");
    errorMessage.innerHTML = " <i class='fa fa-wrench' aria-hidden='true'></i>" + "<span>" + message + "</span>";
    loadingMessage.dataset.visible = 'hidden';
    errorMessage.dataset.visible = 'show';
}



window.onload = function() {

  //getLocation();
    getFreegoip();

};


/***************************************************


+++++++++    note on use of jsonp

dataType: 'jsonp': If this line is removed this ajax always fails 'XMLHttpRequest cannot load https://api.openweathermap.... origin http://localhost:8000 is not allowed by Access-Control-Allow-Origin' error.
So use the JSONP (JSON Padding) interface. It allows you to make external domain requests without proxy servers or fancy header stuff. http://usejquery.com/blog/jquery-cross-domain-ajax-guide





+++++++++    Beaufort wind speed scale (UK version)

http://www.metoffice.gov.uk/media/pdf/4/4/Fact_Sheet_No._6_-_Beaufort_Scale.pdf

                            m/s
0	Calm			0    < speed =< 0.2
1	Light Air		0.3  < speed =< 1.5
2	Light Breeze	1.6  < speed =< 3.3
3	Gentle Breeze	3.4  < speed =< 5.4
4	Moderate Breeze	5.5  < speed =< 7.9
5	Fresh Breeze	8.0  < speed =< 10.7
6	Strong Breeze	10.8 < speed =< 13.8
7	Near Gale		13.9 < speed =< 17.1
8	Gale			17.2 < speed =< 20.7
9	Strong Gale		20.8 < speed =< 24.4
10	Storm			24.5 < speed =< 28.4
11	Violent Storm	28.5 < speed =< 32.6
12	Hurricane	    32.7 <




enableHighAccuracy  – false

timeout             – 1*60*1000  (1minute)
(indicates the maximum length of time to wait for a response in milliseconds)

maximumAge          – 600,000 (10minutes x 60 sec x 1000)
(maximumAge is the maximum age of a cached position that the application will be willing to accept. In milliseconds, with a default value of 0, which means that an attempt must be made to obtain a new position object immediately)


***************************************************/
