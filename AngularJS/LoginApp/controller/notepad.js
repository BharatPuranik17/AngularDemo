//myApp.directive(‘myDirective’, function() {
//    return {
//        restrict: ‘E’,
//        template: ‘<h1>I made a directive!</h1>’
//};
//});



myapp.directive('myDirective', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.template = "<textarea /> ";

    return directive;
});


myapp.factory("MyFactory", function () {

    var GetAllNotes = function (index) {
        //code
        var currentUserInfo = [];
        var users = localStorage.getItem('user');
        if (users != null) {
            currentUserInfo = JSON.parse(users);
        }
        debugger
        return currentUserInfo[index].Notelist;
    };

    var saveNote = function (newNoteObj, LoggedInUserObj, index) {
        //code
        debugger
        users = localStorage.getItem('user');
        users = users ? JSON.parse(users) : [];
        if (LoggedInUserObj.Notelist == undefined) {
            LoggedInUserObj.Notelist = [];
        }
        LoggedInUserObj.Notelist.push(newNoteObj);//add note to existing logged in user
        users[index] = LoggedInUserObj;
        localStorage.setItem("user", JSON.stringify(users));
        return true;
    };

    debugger
    return {
        GetAllNotes: GetAllNotes,
        saveNote: saveNote
    };
});



//myapp.factory("MyFactory", function () {
//    debugger
//    var factory = {};
//    //factory.multiply = function (a) {
//    //    return a * a
//    //}
//    return {
//        GetAllUsers: function () {
//            var abc = [];
//            //var abc = [{ username: "rimon", fullName: "Md. Mamunur Rashid Rimon", email: "rimonmath@gmail.com" },
//            //{ username: "shamim", fullName: "Md. Tamim Hossain", email: "shamim@gmail.com" },
//            //{ username: "tamim", fullName: "Tamim Iqbal", email: "tamim@gmail.com" }];
//            var users = localStorage.getItem('user');
//            var temp = JSON.parse(users);
//            for (var i = 0; i < temp.length; i++) {
//                abc.push(JSON.parse(temp[i]));
//            }
//            return abc;
//        }



//    }
//    // return factory;
//});