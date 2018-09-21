var express = require('express');
var request = require("request");

app = express();

   app.get('/', function (req, res) {

  let url= 'https://api.darksky.net/forecast/61ae82c4604d04db638207bac8195cfb/39.9526,-75.1652';

    request(url,function(error, response, body) {
              if (!error && response.statusCode == 200) {
                 var weather = JSON.parse(body);
                //  console.log(weather);
    
                let weatherText = `The Climate in Philadelphia currently is :${weather.currently.summary}.  In Time Zone :${weather.timezone}. And Temperature in degrees is :${weather.currently.temperature}!`;
              res.send(weatherText);
              }
            })
    })

app.listen(3000, () => console.log("its on 3000 port"));








