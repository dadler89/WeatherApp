const express = require("express");
const https = require("https");
const app = express();

app.get("/", (req, res) => {


  const url = "https://api.openweathermap.org/data/2.5/weather?zip=62002&units=imperial&appid=8280099c63bd8635f837d92b275c23d1"
https.get(url, (response) => {
  console.log(response);
})
  
  res.send("Server is up!!")
})




app.listen(3000, () => {
  console.log("Andre listening on port 3k")
})