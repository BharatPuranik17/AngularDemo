/// <reference path="angular.js" />
/// <reference path="angular-route.js" />


var myapp = angular.module("LoginModule", ['ngRoute']);

myapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { controller: 'HomeController', templateUrl: 'view/Home.html', }).
    when('/login', { controller: 'LoginController', templateUrl: 'view/login.html', }).
    when('/register', { controller: 'RegisterController', templateUrl: 'view/register.html', })
        .otherwise({ redirectTo: '/login' });

}]);

myapp.controller("LoginController", function ($rootScope, $scope, $location) {
    debugger
    $scope.title = "Login App";
    $scope.IsLoggedIn = false;
    $scope.SubmitLogin = function () {
        debugger
        $scope.users = JSON.parse(localStorage.getItem('user'));
        var allUsers = $scope.users;
        if (allUsers != null) {
            for (var i = 0; i < allUsers.length; i++) {
                //    var GetCurrentUser = 
                if (allUsers[i].username == $scope.username && allUsers[i].password == $scope.password) {
                    $scope.IsLoggedIn = true;
                    $rootScope.LoggedInUser = $scope.username;
                    $rootScope.LoggedInUserObj = $scope.users[i];
                    $rootScope.LoggedInUserIndex = i;

                    //Save to local storage logged in user
                    localStorage.setItem("LoggedInIUser", JSON.stringify($scope.users[i]));
                    localStorage.setItem("LoggedInIUserIndex", i);
                    $location.path('/home');
                    $scope.Message = "Successfully login done. Welcome " + $scope.username;
                    console.log($scope.Message);

                }
                else if (allUsers[i].password != $scope.password && $scope.IsLoggedIn == false) {
                    alert('Invalid Password');
                }
                //if (i == allUsers.length - 1 && $scope.IsLoggedIn == false) {
                //    alert('Invalid cred');
                //}
            }
        }
        else {
            alert('Please register.. No users exists!');
        }
    }

    $scope.reset = function () {
        $scope.username = "";
        $scope.password = "";
    }

    $scope.RegisterMe = function () {
        $location.path('/register');
    }

    //   $scope.reset();


});




myapp.controller("HomeController", function ($scope, MyFactory, $location, $rootScope, $route) {
    $scope.title = "My Notepad";
    debugger
    //If pressed F5
    if (localStorage.LoggedInIUser != undefined) {
        LoggedInIUser = localStorage.getItem('LoggedInIUser');
        LoggedInIUser = LoggedInIUser ? JSON.parse(LoggedInIUser) : [];
        $rootScope.LoggedInUserObj = LoggedInIUser;
        $rootScope.LoggedInUser = LoggedInIUser.username;
        LoggedInIUserIndex = localStorage.getItem('LoggedInIUserIndex');
        $rootScope.LoggedInUserIndex = JSON.parse(LoggedInIUserIndex);
    }



    $scope.LoggedInUserObj = $rootScope.LoggedInUserObj;
    $scope.result = MyFactory.GetAllNotes($rootScope.LoggedInUserIndex);

    debugger
    $scope.saveNote = function () {
        debugger
        $scope.temp = MyFactory.saveNote($scope.newNote, $scope.LoggedInUserObj, $rootScope.LoggedInUserIndex);
        $location.path('/home');
        $scope.result = MyFactory.GetAllNotes($rootScope.LoggedInUserIndex);
    }

});


myapp.controller("RegisterController", function ($scope, $location) {


    $scope.Login = function () {
        $location.path('/login');
    }
    //$scope.SaveData = function () {
    //    var user = JSON.stringify({
    //        email: $scope.email,
    //        username: $scope.username,
    //        password: $scope.password,
    //    }),
    //            users = localStorage.getItem('user');

    //    users = users ? JSON.parse(users) : [];
    //    users.push(user);
    //    localStorage.setItem("user", JSON.stringify(users));
    //    $location.path('/login');
    //}



    $scope.SaveData = function () {
        debugger
        users = localStorage.getItem('user');
        users = users ? JSON.parse(users) : [];
        users.push($scope.newUser);
        localStorage.setItem("user", JSON.stringify(users));
        $location.path('/login');
    }
})


