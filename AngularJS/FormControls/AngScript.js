/// <reference path="angular.js" />


var myapp = angular.module("MyFirstmodule", []).controller("MyController", function ($scope) {
    
    $scope.title = "Form Controls";

    $scope.reset = function () {
        $scope.firstName = "Bharat";
        $scope.lastName = "Puranik";
        $scope.email = "bharat.puranik@cuelogic.com";
    }

    $scope.reset();

    $scope.submit = function () {
        alert("ok");
    }
});




