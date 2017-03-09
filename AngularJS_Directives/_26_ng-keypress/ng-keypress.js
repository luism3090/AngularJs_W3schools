var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.count = 0;

	$scope.incrementar = function()
	{
		$scope.count ++;
	}	
}])