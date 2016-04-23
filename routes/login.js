/**
 * New node file
 */
var http = require ('http');
var nano = require('nano')('http://localhost:5984');

exports.checkLogin = function(req,res){
	// These two variables come from the form on
	// the views/login.hbs page
	var username = req.param("username");
	var pass = req.param("password");
	var json_responses;

	  var test = nano.use('test');
	  	  
	  test.view('login', 'by_user_name',{'key': username, 'include_docs': true}, function(err, body){
		    if(!err){
		    	var rows=body.rows;
		    	if(typeof body.rows[0] !== "undefined")
		        {
		    		var doc_username = body.rows[0].value.user_name;
		    		var password = body.rows[0].value.password;
		    		if(password==pass)
		    			{
		    			//res.send("Login Successful");
		    			console.log("Login successful " +doc_username +" "+password);	
		    			}
		    		else
		    			{
		    			//.send("Incorrect password");
		    			console.log("Incorrect password");
		    			}
		        }
		    	else
		    		{
		    		//res.send("Login failed, User doesn't exist");
		    		console.log("Login failed, User doesn't exist");
		    		}
		    }
		    else
		    	{
		    	console.log("Error "+err);
		    	}
		});
};

//Redirects to the homepage
exports.redirectToHomepage = function(req,res)
{
	//Checks before redirecting whether the session is valid
	if(req.session.username)
	{
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		res.render("homepage",{username:req.session.username});
	}
	else
	{
		res.redirect('/');
	}
};

//Logout the user - invalidate the session
exports.logout = function(req,res)
{
	req.session.destroy();
	res.redirect('/');
};

