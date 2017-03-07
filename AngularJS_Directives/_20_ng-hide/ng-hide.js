var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	
	$scope.ocultar = false;
	var bandera = true;

	$scope.hideShow = function()
	{
		
		if(bandera)
		{
			$scope.ocultar = true;
			bandera = false;
		}
		else
		{
			$scope.ocultar = false;
			bandera = true;
		}

		
	}


}]);