

myapp.controller("RegisterController", function ($scope, $location) {
    $scope.Login = function () {
        $location.path('/login');
    }
    $scope.SaveData = function () {
        debugger
        users = localStorage.getItem('user');
        users = users ? JSON.parse(users) : [];
        users.push($scope.newUser);
        localStorage.setItem("user", JSON.stringify(users));
        $location.path('/login');
    }
});

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
