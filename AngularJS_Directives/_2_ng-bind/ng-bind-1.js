var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.myText1 = "Hello Word"; 
	$scope.myText2 = "Hola a todos";
	$scope.myText3 = "Hola angular Js";

}])