//loading the 'login' angularJS module
var search_book = angular.module('search_book', []);
//defining the login controller
search_book.controller('search_book', function($scope, $http) {

	console.log("inside");
	$scope.unexpected_error = true;
	$scope.submit = function() {
		console.log("inside");
		$http({
			method : "POST",
			url : '/search_book',
			data : {
				"bookName" : $scope.bookName,
				"bookAuthor":$scope.bookAuthor,
				"bookCategory":$scope.bookCategory
			}
		}).success(function(data) {
			
		}).error(function(error) {
			
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
			
		}).error(function(error) {
			
		});
	};
});


