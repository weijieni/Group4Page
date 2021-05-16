const bodyParser = require("body-parser");
let express = require("express");
let app = express();

let http = require('http').createServer(app);

var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json())

http.listen(port,()=>{
    console.log("Listening on port ", port);
  });
  
