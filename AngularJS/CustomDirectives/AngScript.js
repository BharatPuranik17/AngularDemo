/// <reference path="angular.js" />


var myapp = angular.module("MyFirstmodule", []);
myapp.controller("MyController", function ($scope,$http) {

    $scope.title = "Angular Ajax";
});

myapp.directive('div', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.template = "My first directive: {{textToInsert}}";

    return directive;
});
