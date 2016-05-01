
/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, http = require('http')
, path = require('path');

//URL for the sessions collections in mongoDB
//var mongoSessionConnectURL = "mongodb://localhost:27017/login";
var expressSession = require("express-session");
//var mongoStore = require("connect-mongo")(expressSession);
//var mongo = require("./routes/mongo");
var login = require("./routes/login");
var book = require("./routes/book");
var cart=require("./routes/cart");
var customer = require("./routes/customer");
var signup=require("./routes/signup");
var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(expressSession({
//	secret: 'cmpe273_teststring',
//	resave: false,  //don't save session if unmodified
//	saveUninitialized: false,	// don't create session until something stored
//	duration: 30 * 60 * 1000,    
//	activeDuration: 5 * 60 * 1000,
//	store: new mongoStore({
//		url: mongoSessionConnectURL
//	})
//}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

//GET Requests
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/homepage',login.redirectToHomepage);
app.get('/viewProfile',customer.viewProfile);
app.get('/getProfileDetails/:email',customer.getProfileDetails);
app.get('/viewOrderHistory/:customerID',customer.viewOrderHistory);

//POST Requests
app.post('/signup',signup.signup);
app.post('/checklogin', login.checkLogin);
app.post('/logout', login.logout);
app.post('/select_category',book.select_category);
app.get('/select_category',book.select_category);
app.post('/search_book',book.search_book);
app.get('/home_search_book',book.home_search_book);
app.get('/viewCart',cart.viewCart);
app.post('/addToCart',cart.addToCart);
app.post('/removeFromCart',cart.removeFromCart);
app.post('/editProfile',customer.editProfile);
app.post('/changeQuantity',cart.changeQuantity);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});  
//connect to the mongo collection session and then createServer
//mongo.connect(mongoSessionConnectURL, function(){
//	console.log('Connected to mongo at: ' + mongoSessionConnectURL);
//	
//});