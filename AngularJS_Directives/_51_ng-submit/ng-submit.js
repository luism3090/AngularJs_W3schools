var app = angular.module('app', []);


app.controller('ctr1', ['$scope', function($scope)
{
	$scope.msj="Aún no has clickeado enviar";

	$scope.mensaje = function()
	{
		$scope.msj = "Has hecho click y enviado el formulario ng-submit ";	
	}

}]);