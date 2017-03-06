var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	$scope.marcado = false;
	$scope.contador = 0;

	$scope.marcar = function()
	{
		if($scope.contador%2==0)
		{
			$scope.marcado = true;
		}
		else{
			$scope.marcado = false;
		}

		$scope.contador ++;
		

	}
	
}])