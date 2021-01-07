const express = require("express");
const https = require("https");
const app = express();
require('dotenv').config();




app.get("/", (req, res) => {


  const url = `https://api.openweathermap.org/data/2.5/weather?zip=62002&units=imperial&appid=${process.env.OPEN_WEATHER}`
https.get(url, (response) => {
  console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      console.log(temp);
      console.log(weatherDescription);
    })
})
  res.send("Server is up!!")
})




app.listen(3000, () => {
  console.log("Andre listening on port 3k")
})