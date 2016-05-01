//loading the 'login' angularJS module
var search_book = angular.module('search_book', []);
//defining the login controller
search_book.controller('search_book', function($scope, $http) {

	$scope.searchBy="";
	$scope.searchValue="";
	$scope.rows=[];
	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		$http({
			method : "POST",
			url : '/search_book',
			data : {
				"searchBy" : $scope.searchBy,
				"searchValue":$scope.searchValue
			}
		}).success(function(data) {
			if(data.status_code==200){
				$scope.rows=data.rows;
				console.log(data.rows[0]);
			}
			else{
				$scope.rows=[];
			}
			
		}).error(function(error) {
			$scope.rows=[];
		});
	};
});


var select_category = angular.module('select_category', []);

select_category.controller('select_category', function($scope, $http) {

	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		$http({
			method : "POST",
			url : '/select_category',
			data : {
				"bookCategory" : $scope.bookCategory
			}
		}).success(function(data) {
			if(data.status_code==200){
				$scope.rows=data.rows;
				console.log(data.rows[0]);
			}
			
		}).error(function(error) {
			
		});
	};
	$scope.addToCart=function(row){
		
		$http({
			method : "POST",
			url :'/addToCart',
			data : {
				"book_image" : row.doc.book_image,
				"book_name" : row.doc.book_name,
				"book_author" : row.doc.book_author,
				"book_cost" : row.doc.book_price,
				"quantity" : "1",
				
			}
		}).success(function(data){
			console.log(data.msg);
		});
		
	};
});


var home_search_book = angular.module('home_search_book', []);
//defining the login controller
home_search_book.controller('home_search_book', function($scope, $http,$window,$location) {

	$scope.searchBy="";
	$scope.searchValue="";
	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		
		$window.location="/home_search_book?searchBy="+$scope.searchBy+"&searchValue="+$scope.searchValue;
		//$location.path('/home_search_book').search({param: $scope.searchBy});
		/*$http({
			method : "POST",
			url : '/home_search_book',
			data : {
				"searchBy" : $scope.searchBy,
				"searchValue":$scope.searchValue
			}
		}).success(function(data){
			console.log(data.rows);
		});*/
	};
});


var app = angular.module('CustomerApp', []);
app.controller('CustomerController', function($scope,$http,$location,$window) {
	console.log("In Customer Controller");


$scope.viewProfile=function(){
		console.log("In viewProfile controller");
		$window.location="/viewProfile";
	};

	
//get the profile details when the page is loaded
$scope.getProfileDetails=function(){
			$scope.email="ritika.shetty@sjsu.edu";
				console.log("Email passed" +$scope.email);
		$http({
			method : "GET",
			url : '/getProfileDetails'+$scope.email
			
		}).success(function(data) {
			console.log("in success Customer Controller: "+JSON.stringify(data));
			$scope.userName=data.result.user_name;
			$scope.first_name=data.result.first_name;
			$scope.last_name=data.result.last_name;
			$scope.address=data.result.address;
			$scope.zipcode=data.result.zipcode;
			$scope.email=data.result.email;
			$scope.phone_no=data.result.phone_no;
			$scope.card_no=data.result.card_no;
			$scope.cvv=data.result.cvv;
			$scope.expiry=data.result.expiry;
		}).error(function(error) {
			$window.alert("Error: " +JSON.stringify(error));
		});	
		
	};

//UpdateProfile Controller
$scope.updateProfile=function(first_name,last_name,address,zipcode,email,password,phone_no,card_no,cvv,expiry){
	
		console.log("In updateProfile controller");
		$http({
			method : "POST",
			url : '/editProfile',
			data : {
				"first_name" : first_name,
				"last_name" : last_name,
				"address" : address,
				"zipcode" : zipcode,
				"email":email,
				"password":password,
				"phone_no" : phone_no,
				"card_no": card_no,
				"cvv": cvv,
				"expiry":expiry
			}
		}).success(function(data) {
			
			console.log("in success UpdateProfile Controller: "+JSON.stringify(data));			
			
			$scope.updatesuccessmessage=true;
			
		}).error(function(error) {
			$window.alert("Error" +JSON.stringify(error));
		});	
		
	};

//viewOrderHistory Controller

$scope.viewOrderHistory=function(req,res){
    	
		console.log("In viewOrderHistory controller");
		$scope.id="C_001";
    	
		$http({
			method : "GET",
			url : '/viewOrderHistory/'+$scope.id
			
		}).success(function(data) {
			
			console.log("in success viewOrderHistory Controller: "+JSON.stringify(data));			
			console.log("Data.result" +data.result[0].value);
			$scope.orders=data.result;
						
		}).error(function(error) {
			$window.alert("Error" +JSON.stringify(error));
		});	
   
    	
    };
    

});


