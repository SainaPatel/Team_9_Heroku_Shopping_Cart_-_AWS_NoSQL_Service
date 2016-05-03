//loading the 'login' angularJS module
var search_book = angular.module('search_book', []);
//defining the login controller
search_book.controller('search_book', function($scope, $http) {
	console.log("In search_book controller");
	$scope.searchBy="";
	$scope.searchValue="";
	$scope.rows=[];
	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		$http({
			method : "GET",
			url : '/search_book/'+$scope.searchBy+'/'+$scope.searchValue,
			
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
	console.log("In select_category controller");
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
console.log("In home_search_book controller");
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


