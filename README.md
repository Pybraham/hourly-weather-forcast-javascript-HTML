# hourly-weather-forcast-javascript-HTML
weather forcast of **each hour of a day** in Java script and HTML
create a root folder in a desktop,weatherapp,under this folder you save index,html,script.js,style.css and  create images folder.<br>(In the images folder save different weather pngs, svg, filels like sunny, rainy.svg.etc)  <br>
Go to your IDE Visiual studio code.<br>
start index.html,style.css and script.js

![alt text](https://github.com/Pybraham/hourly-weather-forcast-javascript-HTML/blob/main/weather%20hourly.png) <br>
 To show the first 5 hours of the day, I use this function from the script.js <br>
 
 function showForecast(data) {<br>
    const forecastHtml = data.list.slice(0, 5).map(forecast => {<br>
      const weatherImage = document.createElement('img');....
