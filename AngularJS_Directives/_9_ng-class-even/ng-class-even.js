var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	
	$scope.objectPersona =
				{
					nombre:"Luis",
					apellido:"Molina"
				};

	$scope.arrayPersona = [];
	$scope.arrayPersona["nombre"] = "Luis";
	$scope.arrayPersona["apellido"] = "Molina";

	console.log($scope.objectPersona);
	console.log($scope.arrayPersona);


}]);