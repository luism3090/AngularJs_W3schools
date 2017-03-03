var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	
	$scope.count = 0;
	

	$scope.increment = function()
	{
		$scope.count = $scope.count+1;

	}

}]);