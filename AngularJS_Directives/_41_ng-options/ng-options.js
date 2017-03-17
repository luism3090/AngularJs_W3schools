var app = angular.module('app', []);

app.controller('ctr1', ['$scope', function($scope)
{
	
	$scope.paises = [
						{pais:"México", continente:'América'},
						{pais:"Brasil",continente:'América'},
						{pais:"Argentina", continente:'América'},
						{pais:"Portugal", continente:'Europa'},
						{pais:"Inglaterra", continente:'Europa'},
						{pais:"Nueva Zelanda", continente:'Oceania'}

					];


}]);