require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var Spotify = require("node-spotify-api");

var axios = require("axios");

var fs = require("fs");