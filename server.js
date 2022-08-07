const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/languages", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://google-translate20.p.rapidapi.com/languages",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  try {
    const response = await axios(options);
    const arrayOfData = Object.keys(response.data.data).map(
      (key) => response.data.data[key]
    );
    res.status(200).json(arrayOfData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.get("/translation", async (req, res) => {
  const { fromText, toLanguage, fromLanguage } = req.query;

  const options = {
    method: "GET",
    url: "https://google-translate20.p.rapidapi.com/translate",
    params: {
      text: fromText,
      tl: toLanguage,
      sl: fromLanguage,
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data.data.translation);
    })
    .catch(function (error) {
      res.status(500).json({ message: error });
    });
});

app.listen(PORT, () => console.log("server running"));
