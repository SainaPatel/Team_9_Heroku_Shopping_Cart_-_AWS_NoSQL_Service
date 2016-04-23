var http=require('http');
var nano = require('nano')('http://localhost:5984');
var sample= nano.db.use('sample_project');


sample.destroy('100',function(err,body){
if(!err)
console.log(body);
});
