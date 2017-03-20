var app = angular.module('app', []);


//obtener datos de un arreglo normal

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.nombres =	[
							"Luis Molina",
							"Jorge Mora",
							"Felipe Luna",
							"Ana Torres",
							"Maria Huerta"
							
					 	]	
}]);

app.controller('ctr2', ['$scope', function($scope)
{

	$scope.personas = [
						{
							nombre:"Luis Molina",
							edad:"20"
						},
						{
							nombre:"Luis Molina",
							edad:"25"
						},
						{
							nombre:"Luis Molina",
							edad:"18"
						},
						{
							nombre:"Luis Molina",
							edad:"40"
						},
						{
							nombre:"Luis Molina",
							edad:"60"
						}
					]
}]);


app.controller('ctr3', ['$scope', function($scope)
{
	
	$scope.gente = 	{
						Nombre:"Luis",
						País:"México",
						Estado:"Veracruz"
					}


}]);