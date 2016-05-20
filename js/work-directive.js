var app = angular.module('app');

app.directive('work', function($compile){
	return{
		restrict: 'E',
		transclude: true,
		templateUrl: "./work.html",
	};
});