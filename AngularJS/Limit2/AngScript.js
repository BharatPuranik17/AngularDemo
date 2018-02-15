/// <reference path="angular.js" />


var myapp = angular.module("MyFirstmodule", []).controller("MyController", function ($scope) {
    var emp = [{ firstname: "Bharat", Lastname: "Puranik", gender: "Male" },
    { firstname: "ffg", Lastname: "Purgfganik", gender: "Male" },
    { firstname: "Bfgfdharat", Lastname: "Puggranik", gender: "Male" },
    { firstname: "Amol", Lastname: "W", gender: "Male" }];

    $scope.title = "LimitTo";
    console.log(emp);
    $scope.employee = emp;
    $scope.limit = 3;
});


