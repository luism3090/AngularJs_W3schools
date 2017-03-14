var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.contador = 0;


	$scope.incrementar = function ()
	{
		$scope.contador ++;
	}

}]);