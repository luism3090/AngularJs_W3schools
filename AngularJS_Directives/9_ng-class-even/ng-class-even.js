var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
				
	$scope.arregloPersona = [
								{
									nombre:"Luis",
									apellido:"Molina"
								},
								{
									nombre:"Gustavo",
									apellido:"Mora"
								},
								{
									nombre:"Felipe",
									apellido:"Torres"
								},
								{
									nombre:"Rafa",
									apellido:"Huerta"
								},
								{
									nombre:"Ana",
									apellido:"Herrera"
								},
								{
									nombre:"Luz",
									apellido:"Toral"
								}
							];

	console.log($scope.arregloPersona);


}]);