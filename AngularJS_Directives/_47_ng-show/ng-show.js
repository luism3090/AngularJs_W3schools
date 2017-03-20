var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{

	$scope.show  = false;
	
	
	$scope.mostrarOcultar = function()
	{

		
		if($scope.show)
		{
			
			$scope.show = false;
		}
		else
		{
			
			$scope.show = true;
		}

		
	}

}])