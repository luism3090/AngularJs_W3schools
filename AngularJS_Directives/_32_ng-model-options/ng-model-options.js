var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.nombre = "Luis";	
}]);

app.controller('ctr2', ['$scope', function($scope)
{
	//$scope.nombre = "Ana";	
}]);