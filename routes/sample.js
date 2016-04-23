/**
 * http://usejsdoc.org/
 */
var http = require ('http');

var client = http.createClient(5984,"127.0.0.1");
var request = client.request("PUT","/TESTDB2");
request.end();

request.on("response",function(response){
	response.on("end",function(){
		if(response.statusCode==201){
			console.log("DB created");
			
		} else{
			console.log("DB unable to created");
				
		}
	});
});