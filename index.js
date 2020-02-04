const express = require("express");
const App = express();



App.use(express.static(__dirname));

App.use("/", function(req, res){
	res.sendFile(`${__dirname}/index.html`)
});



App.listen("3000", function(err){
	if(err) console.eror(err);

	console.log("服务开启");
});

