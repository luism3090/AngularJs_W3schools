var app = angular.module('app', ["ngSanitize"]);

app.controller('ctr1', ['$scope', function($scope){
	
	$scope.html = 	"<p>Mi nombre es:</p> <script>alert('jejeje');</script>"+
					"<h2>Luis Molina</h2>";


}]);