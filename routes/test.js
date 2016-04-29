var http = require ('http');
var nano = require('nano')('http://localhost:5984/');

var books=nano.db.use('books');    
books.get('f361fbfa0c407c1c3227a5d28c0000f4', function(err,body){
    			if(err)
    				{
    				console.log('[test.get] ', err.message);
    		        return;
    				}
    			console.log("Record returned");
    			console.log(body);
    		});
    