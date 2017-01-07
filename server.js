var express = require('express');
var app = express();
var port = process.env.PORT||3000;
var path = require('path');

/*---------------------------*/

app.get('/',function(req,res){
	  var ipaddress = req.headers['x-forwarded-for'] || 
         req.connection.remoteAddress || 
	      req.socket.remoteAddress ||
	           req.connection.socket.remoteAddress;
	var language = req.get('Accept-Language').split(',')[0];
	var software = req.get('User-Agent').split(/[\(\)]/)[1];
	res.send({
		ipaddress:req.headers['x-forwarded-for'] || req.connection.remoteAddress,
		language:language,
		software:software
	})
});

app.listen(port,function(err){
	if(err){
		return	console.log(err)
	}
	console.log('app listening on '+port);

})