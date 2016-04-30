var http = require ('http');
var nano = require('nano')('http://54.173.26.121:5984/');
//var nano = require('nano')('http://localhost:5984/');
var books=nano.db.use('books');
/*books.insert(
		  { "views": 
		    { "by_category": 
		      { 
		    	"map": function(doc) {
		    		if(doc.book_category)
		    	  {
		    			emit(doc.book_category, doc);
		    	  }
		    	  } 
		      } 
		    }
		  },'_design/getByCategory');

*/


/*


books.list(function(err, body) {
	  if (!err) {
	    body.rows.forEach(function(doc) {
	    	  books.get(doc.key, function(err,body)
	    	    		{
	    	    			if(err)
	    	    				{
	    	    				console.log('[test.get] ', err.message);
	    	    		        return;
	    	    				}
	    	    			console.log("Record returned");
	    	    			console.log(body);
	    	    		});
	    });
	  }
	  else{
		  console.log("Not found");
	  }
	});*/
exports.select_category = function(req,res)
{
	
	var bookCategory=req.param('bookCategory');
	
	books.view('getByCategory', 'by_category',{'key': bookCategory, 'include_docs': true}, function(err, body){
		  console.log("inside");  
		  if(!err){
		    	console.log("inside1");
		    	var rows=body.rows;
		    	if(typeof body.rows[0] !== "undefined")
		        {
		    		
		    			
		    			
		    		
		    		res.send({"rows":rows,"status_code":200});
		        }
		    	
		    }
		    else
		    	{
		    	console.log("Error "+err);
		    	}
		});
	
};

exports.search_book = function(req,res)
{
	
	
	var searchValue=req.param('searchValue');
	var searchBy=req.param('searchBy');
	var view_name;
	var view_design;
	console.log("inside search book"+searchValue+' '+searchBy);
	if(searchBy=="Category"){
		console.log("1");
		view_design="getByCategory";
		view_name="by_category";
	}
	else if(searchBy=="Author"){
		console.log("2");
		view_design="getByAuthor";
		view_name="by_author";
	}
	else{
		view_design="getByTitle";
		view_name="by_title";
		console.log("3");
	}
	
	books.view(view_design, view_name,{startkey: searchValue,endkey: searchValue+"\u9999",'include_docs': true}, function(err, body){
		  console.log("inside");  
		  if(!err){
		    	console.log("inside1");
		    	var rows=body.rows;
		    	if(typeof body.rows[0] !== "undefined")
		        {
		    		
		    			
		    			
		    		
		    		res.send({"rows":rows,"status_code":200});
		        }
		    	else{
		    		console.log("No rows returned");
		    	}
		    	
		    }
		    else
		    	{
		    	console.log("Error "+err);
		    	
		    	}
		});
	
	
};

exports.select_book=function(req,res){
	var _id=req.param('_id');
	books.get(_id, function(err,body){
		if(err)
			{
			console.log('[test.get] ', err.message);
	        return;
			}
		console.log("Record returned");
		console.log(body);
	});
};