let request = require("request");

request("https://www.google.com", function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log("Successful Request!");
    // console.log(body);
  }
});