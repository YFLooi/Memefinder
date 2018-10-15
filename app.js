const http = require('http');
const express = require("express");
const app = express();

/*Required to work with Azure hosting*/
const port = process.env.PORT || 8000;

app.use(express.static("public"));

//GET-s the default.html as the main page to which the app returns to
app.get('/', function(req,res){
	console.log('default html loading');
	res.render('./public/index.html');
});

app.listen(port, function () {
    console.log('Started the Node.js server for this sample. Navigate to http://localhost:'+port+'/ to view the webpage.');
});