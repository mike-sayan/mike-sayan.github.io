var app = angular.module('app');

var bioDataUrl = "./data/bio.json";
var contactDataUrl = "./data/contact.json";
var jobDataUrl = "./data/jobs.json";
var projectDataUrl = "./data/projects.json";

app.controller('appController', ['$scope', '$http', function ($scope, $http){

    $http.get(bioDataUrl).then(function(response) {
        $scope.bio = response.data;
    });

    $http.get(contactDataUrl).then(function(response) {
        $scope.contact = response.data;
    });

    $http.get(jobDataUrl).then(function(response) {
        $scope.jobs = response.data;
    });

    $http.get(projectDataUrl).then(function(response) {
        $scope.projects = response.data;
    });
}]);