
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


    $scope.saveNote = function () {
        debugger
        $scope.temp = MyFactory.saveNote($scope.newNote, $scope.LoggedInUserObj, $rootScope.LoggedInUserIndex);
        $location.path('/home');
        $scope.result = MyFactory.GetAllNotes($rootScope.LoggedInUserIndex);
    }

    $scope.selectNote = function (note) {
        debugger
        $scope.clickedNote = note;
    };

});
