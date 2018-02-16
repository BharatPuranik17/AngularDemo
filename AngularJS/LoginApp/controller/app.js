/// <reference path="angular.js" />
/// <reference path="angular-route.js" />


var myapp = angular.module("LoginModule", ['ngRoute']);

myapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { controller: 'HomeController', templateUrl: 'view/Home.html', }).
    when('/login', { controller: 'LoginController', templateUrl: 'view/login.html', }).
    when('/register', { controller: 'RegisterController', templateUrl: 'view/register.html', })
        .otherwise({ redirectTo: '/login' });

}]);







