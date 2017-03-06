var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	
	$scope.count= 0;


	$scope.cambio = function()
	{
		$scope.count ++;
	}



}])