var http = require ('http');
var nano = require('nano')('http://ec2-54-210-203-140.compute-1.amazonaws.com:5984/');
var id=244;
exports.signup=function(req,res)
{
	var firstname=req.param("firstname");
	var lastname=req.param("lastname");
	var email=req.param("email");
	var username=req.param("username");
	var password=req.param("password");
	var address=req.param("address");
	var card_no=req.param("card_no");
	var cvv=req.param("cvv");
	var expiredate=req.param("expire_date");
	
	var customerid=id++;
	
	var test=nano.db.use('test');
	
	test.insert({'first_name':firstname,'last_name':lastname,'email':email,'password':password,'address':address,'card_no':card_no,'cvv':cvv,'expire_date':expiredate,'customer_id':customerid},'S-002',function(err,body,header){
		if (err) {
			console.log('[test.insert] ', err.message);
			res.render("login");
		}
		console.log('you have inserted the Record.');
		console.log(body);
	});

	
	
	
	
}
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
	

