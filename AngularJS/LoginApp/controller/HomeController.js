
myapp.controller("HomeController", function ($scope, MyFactory, $location, $rootScope, $route, $window) {
    $scope.title = "My Notepad";
    //If pressed F5
    if (localStorage.LoggedInIUser != undefined) {
     var loggedInIUser = localStorage.getItem('LoggedInIUser');
        loggedInIUser = loggedInIUser ? JSON.parse(loggedInIUser) : [];
        $rootScope.LoggedInUserObj = loggedInIUser;
        $rootScope.LoggedInUser = loggedInIUser.username;
        loggedInIUserIndex = localStorage.getItem('LoggedInIUserIndex');
        $rootScope.LoggedInUserIndex = JSON.parse(loggedInIUserIndex);
    }



    $scope.LoggedInUserObj = $rootScope.LoggedInUserObj;
    $scope.result = MyFactory.GetAllNotes($rootScope.LoggedInUserIndex);


    $scope.Add = function () {
        debugger
        $scope.newNote = new Object({
            Title: "",
            Description: ""
        });
    }

    $scope.saveNote = function () {
        debugger
        $scope.operation = "Add";
        $scope.temp = MyFactory.saveNote($scope.newNote, $scope.LoggedInUserObj, $rootScope.LoggedInUserIndex, $scope.operation,0);
        $rootScope.LoggedInUserObj = $scope.temp;
        $location.path('/home');
        $scope.result = MyFactory.GetAllNotes($rootScope.LoggedInUserIndex);
    }

    //$scope.selectNote = function (note) {
    //    debugger
    //    $scope.clickedNote = note;
    //};


    $scope.GetDetails = function (index) {
        debugger
        var Title = $scope.result[index].Title;
        var Description = $scope.result[index].Description;
        //Two way binding for edit
        $scope.clickedNote = $scope.result[index];
        $scope.noteIndex = index;
        //$scope.newNote = $scope.clickedNote;
        //$scope.saveNote();
        //   $window.alert("Title: " + Title + "\nDescription: " + Description);
    };

    $scope.SaveEdit = function () {
        debugger
        $scope.operation = "Update";
        $scope.newNote = $scope.clickedNote;
        $scope.temp = MyFactory.saveNote($scope.newNote, $scope.LoggedInUserObj, $rootScope.LoggedInUserIndex, $scope.operation, $scope.noteIndex);
        $location.path('/home');
        $scope.result = MyFactory.GetAllNotes($rootScope.LoggedInUserIndex);
    };


    $scope.deleteNote = function () {
        debugger
        $scope.operation = "Delete";
        $scope.temp = MyFactory.saveNote($scope.clickedNote, $scope.LoggedInUserObj, $rootScope.LoggedInUserIndex, $scope.operation, $scope.noteIndex);
        $location.path('/home');
        $scope.result = MyFactory.GetAllNotes($rootScope.LoggedInUserIndex);
    }






});
