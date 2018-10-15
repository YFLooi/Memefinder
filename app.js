const http = require('http');
const express = require("express");
const app = express();

/*Required to work with Azure hosting*/
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.listen(port, function () {
    console.log('Started the Node.js server for this sample. Navigate to http://localhost:'+port+'/ to view the webpage.');
});