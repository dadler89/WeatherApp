const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser")
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
  
});

app.post("/", (req, res) =>{

const cityName = req.body.cityName
  const units = "imperial"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${process.env.OPEN_WEATHER}`
https.get(url, (response) => {
  console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const cityName = weatherData.name
      const icon = weatherData.weather[0].icon
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
      res.write(`<p>The weather is currently ${weatherDescription}</p>`)
      res.write(`<h1>The temperature in ${cityName} is ${temp} degrees Fahrenheit</h1>`)
      res.write(`<img src="${imageURL}">`)
      res.send()
    
    })
})
  
} );




app.listen(3000, () => {
  console.log("Andre listening on port 3k")
})