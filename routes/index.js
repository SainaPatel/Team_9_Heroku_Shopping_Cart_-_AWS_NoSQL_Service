
/*
 * GET home page.
 */

exports.index = function(req, res){
//<<<<<<< HEAD
  //res.render('search_book', { title: 'Express' });
//=======
  res.render('login', { 'title': "TheBookShelf", 'rows':"", 'msg':""});
//>>>>>>> origin/master
};