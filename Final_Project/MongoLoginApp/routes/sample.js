var http=require('http');
var nano=require('nano')('http://localhost:5984');
var sample=nano.db.use('sample_project');


sample.get('100',function(err,body)
{
if(err)
	{
		console.log('[sample.get]',err.message);
		return;
				}
		console.log("record returned");
		console.log(body);
		});
		