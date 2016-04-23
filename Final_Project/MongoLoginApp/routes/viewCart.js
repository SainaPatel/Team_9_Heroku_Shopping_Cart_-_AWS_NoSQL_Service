/**
 * New node file
 */

//var myConnection= require("./myConnection.js");
//var checkLoggedInUser= require("./checkLoggedInUser.js");

exports.addevent = function(req, res) {
	
//	var connection = myConnection.myConnection();
//	if(checkLoggedInUser.checkLoggedInUser(req,res)===true)
//	{
//		var userid=req.session.loggedInUserId;
//		var username=req.session.loggedInUserName;
//		var eventname=req.param("event_description");
//		var date=req.param("event_date");
//		console.log("user id" +userid);
//		var data="INSERT INTO events (`event_description`,`event_date`,`user_id`,`user_name`) VALUES ('"+eventname+"','"+date+"','"+userid+"','"+username+"');";
//		
//		connection.query(data,function(err,rows)
//				{
//			if(err)
//				console.log(err);
//			else
//				{
//				console.log("Inserted successfully");
//				connection.end();
//				}});
//		
//		
//		
//		var username=req.session.loggedInUserName;
//		
//		var query = "SELECT events.event_date,events.event_description from user,events where user.user_id=events.user_id and user.user_name='"+username+"';";
//		connection.query(query, function(err, rows, fields) {
//			if (err) {
//				throw err;
//			}
//			else{
//				console.log("rows " +rows[0].event_date);
//				res.render('navhome',{'title':"Facebook",'user_events':rows,'user':req.session,'message':"Event added successfully"});
//				
//			}
//		});
//	}
//	
};