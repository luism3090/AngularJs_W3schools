var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.nombre = "Luis Molina";	
}])

app.controller('ctr2', ['$scope', function($scope)
{
	$scope.nombre = "Luis Molina";	
}]);

app.controller('ctr3', ['$scope', function($scope)
{
	$scope.email = "luisame@outlook.com";
}]);

app.controller('ctr4', ['$scope', function($scope)
{
	$scope.nombre = "Juan";
}]);

app.controller('ctr5', ['$scope', function($scope)
{
	$scope.nombre = "Erick";
}]);


app.controller('ctr6', ['$scope', function($scope)
{
	$scope.nombre = "Roberto";
}]);