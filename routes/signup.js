//var mongo = require("./mongo");
//var mongoURL = "mongodb://localhost:27017/test";
function handle_request(msg,callback){
//	var res={};
//	var username, password, firstname, lastname, address;
//	username=msg.username;
//	password=msg.password;
//	console.log(username+" "+password);
//	mongo.connect(mongoURL, function(){
//		console.log('Connected to mongo at: ' + mongoURL);
//		var coll = mongo.collection('test');
//	
//	coll.insert( {"username": username,   "password": password}, function(err, user){
//			if (user) {
//				// This way subsequent requests will know the user is logged in.
//				
//				res.code = "200";
//				res.value = "Succes Signup";
//				console.log("success");
//				//console.log(req.session.username +" is the session");
//				
//				//res.render("login.ejs",{title :"Express"});
//
//			} else {
//				res.code = "401";
//				res.value = "Failed Signup";		
//			}
//			callback(null,res);
//
//		});
//	console.log("res is"+res);
//		});
	
};

exports.handle_request=handle_request;