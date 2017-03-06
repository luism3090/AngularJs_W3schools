var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	
	$scope.nombre = "Luis";
	$scope.apellido = "Molina";

}]);