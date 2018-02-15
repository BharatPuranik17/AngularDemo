/// <reference path="angular.js" />


var myapp = angular.module("MyFirstmodule", []);
myapp.controller("MyController", function ($scope,$http) {

    $scope.title = "Angular Ajax";
    var url = "./data.txt";
    $http.get(url).then(function (response) {
        $scope.students = response.data;
    });
});


