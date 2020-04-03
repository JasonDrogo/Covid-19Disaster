const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 3001;
require("dotenv").config();
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});
app.get('/users', (req, res) => {
  axios({
    "method": "GET",
    "url": "https://covid-193.p.rapidapi.com/statistics",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": process.env.KEY
    }
  })
    .then((response) => res.json(response.data['response']))
    .catch((error) => {
      console.log(error)
    })
})
app.use(express.static(path.join(__dirname, "covid19disaster")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "covid19disaster", "index.html"));
});

app.use(bodyParser.json());
app.use(cors());
// router(app);
app.listen(port, () => console.log(`listening at ${port}`));
