/// <reference path="angular.js" />


var myapp = angular.module("MyFirstmodule", []).controller("MyController", function ($scope) {
    
    $scope.student = {
        firstName: "Bharat",
        lastName: "Puranik",
        fees: 500,

        subjects: [
           { name: 'Physics', marks: 70 },
           { name: 'Chemistry', marks: 80 },
           { name: 'Math', marks: 65 }
        ],

        fullName: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };

    $scope.title = "Filter by";
});




