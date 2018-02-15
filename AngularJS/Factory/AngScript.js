/// <reference path="angular.js" />


var myapp = angular.module("MyFirstmodule", []);
myapp.factory("MyFactory", function () {

    var factory = {};
    factory.multiply = function (a) {
        return a * a
    }
    return factory;
});

myapp.controller("MyController", function ($scope,MyFactory) {
    $scope.calc = function () {
        $scope.result = MyFactory.multiply($scope.number);
    }
})




