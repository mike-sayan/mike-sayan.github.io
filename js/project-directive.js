var app = angular.module('app');

app.directive('project', function($compile){
	return{
		restrict: 'E',
		transclude: true,
		templateUrl: "./project.html",
	};
});