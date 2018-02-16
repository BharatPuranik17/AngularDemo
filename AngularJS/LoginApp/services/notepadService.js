
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