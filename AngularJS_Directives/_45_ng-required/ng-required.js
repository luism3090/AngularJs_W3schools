var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.datos = "";

	$scope.validar = function()
	{

		//console.log($scope.datos);

		if($scope.datos == "" || $scope.datos == undefined)
		{
			$scope.miInput = true;
			console.log($scope.miInput);
		}
		else
		{
			$scope.miInput = false;
			console.log($scope.miInput);
		}
		
	}


}]);