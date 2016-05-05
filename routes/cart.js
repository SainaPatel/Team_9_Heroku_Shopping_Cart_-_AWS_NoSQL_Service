/**
 * New node file
 */

//var myConnection= require("./myConnection.js");
//var checkLoggedInUser= require("./checkLoggedInUser.js");
var http = require ('http');
var nano=require('nano')('http://Team-9-Load-Balancer-423702890.us-east-1.elb.amazonaws.com:5984/');
//var nano = require('nano')('http://team-9-load-balancer-423702890.us-east-1.elb.amazonaws.com:5984/');

exports.viewCart = function(req, res) {
	var customerid="343";
		//req.param("customer_id");
	
	var cart=nano.use('cart');
	
	cart.view('viewcart','by_customer_id',{'key':customerid,'include_docs':true},function(err,body){
		if(!err)
			{
			var rows=body.rows;
			//console.log("rows"+body.rows[0].values.customer_id);
	    	if(typeof body.rows[0] !== "undefined")
	        {
	    		console.log("cart values "+body.rows[0].value.quantity);
	    		//res.send({"book_name":body.rows[0].value.book_name,"book_author":body.rows[0].value.book_author,"book_cost":body.rows[0].value.book_cost});
	       res.send({"product_details":body.rows});
	        }else
	        	{
	        	console.log("cart is empty");
	        	}
			}else
				{
				console.log("helloError "+err);
				}
	});
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

exports.addToCart=function(req,res)
{
	//customerid=req.param("customer_id");
	var customerid="343";
	var cart=nano.use('cart');
	var productdetails="product_details";
	var bookimage=req.param("book_image");
	var bookname=req.param("book_name");
	var bookauthor=req.param("book_author");
	var bookcost=req.param("book_cost");
	var quantity=req.param("quantity");
	var counter=1;
	var id=counter++;
	
	cart.insert({'customer_id' : customerid , 'book_image':bookimage, 'book_name':bookname, 'book_author':bookauthor, 'book_cost':bookcost, 'quantity':quantity},id,function(err,body,header){
		if (err) {
			console.log('[cart.insert] ', err.message);
			res.send({"msg" : err.message});
		}else
			{
			console.log("you have inserted the record");
			console.log(body);
			res.send({"msg":"Added to Cart Successfully"});
			}
	});
	
	
	
	
};

exports.changeQuantity=function(req,res){
	var quantity=req.param("quantity");
	var product_details=req.param("product_details");
	console.log("qunatity"+quantity);
	var cart=nano.use('cart');
	cart.insert({'customer_id' : product_details.customer_id , 'book_image':product_details.book_image, 'book_name':product_details.book_name, 'book_author':product_details.book_author, 'book_cost':product_details.book_cost, 'quantity':quantity,"_rev":product_details._rev},product_details._id,function(err,body,header){
		if (err) {
			console.log('[cart.insert] ', err.message);
		//	res.render("viewCart");
		}else
			{
			console.log("you have inserted the record");
			console.log(body);
			}
	});
	
};


exports.removeFromCart=function(req,res)
{
	console.log("inside");
	var product_details=req.param("product_details");
	var cart=nano.use('cart');
	cart.destroy(product_details._id,product_details._rev,function(err,body,header){
		if (!err) {
		    console.log("Successfully deleted doc");
		  }else{
			  console.log('Error',err);
		  }
		
	});
};


//checkout display order details and credit card details and confirm and cancel buttons
exports.checkout=function(req,res)
{
	console.log("inside checkout" +req.body.customer_id);
	//var _id=req.body.customer_id;
	var _id="C_001";
	var user=nano.use('test');
	user.get(_id, function(err,body){
		if(err)
		{
		console.log('[test.get] ', err.message);
        return;
		}
		else
			{
			console.log("Customer details:" +body);
			res.send({"credit_card_details": body});
			}
});
};

exports.confirm=function(req,res)
{
	console.log("inside confirm" +req.body.product_details);
	var date=new Date();
	console.log(date);
	var order=nano.use('order');
	var cart=nano.use('cart');
	for (var i = 0; i < req.body.product_details.length; i++) {
		console.log("Product " +i+ ": "+JSON.stringify(req.body.product_details[i].value.customer_id));
		var customer_id=JSON.stringify(req.body.product_details[i].value.customer_id);
		var items=JSON.stringify(req.body.product_details[i].value.book_name);
		var amount=JSON.stringify(req.body.product_details[i].value.book_cost);
		order.insert({'customer_id' : customer_id , 'items':items, 'date':date, 'amount':amount },'',function(err,body,header){
			if (err) {
				console.log('[order.insert] ', err.message);
				res.send({"msg": "Error Processing your order, please try again"});s
			}else
				{
				console.log("Inserted")
				}
		});
		
		cart.destroy(req.body.product_details[i].value._id,req.body.product_details[i].value._rev,function(err,body,header){
			if (!err) {
				console.log("you have deleted the record");
				console.log(body);
			  }else{
				  console.log('Error',err);
				  res.send({"msg": "Error Processing your order, please try again"});
			  }
		});
		//remove reduce inventory
	}
	
	res.send({"msg": "Congratulations!! Your order has been Placed Successfully. It should reach you within 2 weeks"});
};