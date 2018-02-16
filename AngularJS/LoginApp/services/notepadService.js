
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

    var saveNote = function (newNoteObj, LoggedInUserObj, index, operation, noteIndex) {
        //code
        debugger
     var  users = localStorage.getItem('user');
        users = users ? JSON.parse(users) : [];
        if (LoggedInUserObj.Notelist == undefined) {
            LoggedInUserObj.Notelist = [];
        }
        if (operation == "Add") {
            LoggedInUserObj.Notelist.push(newNoteObj);//add note to existing logged in user
        }
        if (operation == "Update") {
            LoggedInUserObj.Notelist.splice(noteIndex, 1);
            LoggedInUserObj.Notelist.push(newNoteObj);
        }
        if (operation == "Delete") {
            LoggedInUserObj.Notelist.splice(noteIndex, 1);
        }

        users[index] = LoggedInUserObj;
        localStorage.setItem("user", JSON.stringify(users));
        return LoggedInUserObj;
    };

    debugger
    return {
        GetAllNotes: GetAllNotes,
        saveNote: saveNote
    };
});