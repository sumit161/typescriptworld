var cl = console.log;
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Candidate"] = "Candidate";
    Role["Super_Admin"] = "Super_Admin";
})(Role || (Role = {}));
;
cl(Role.Admin);
var Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: "Super_Admin"
};
cl(Person);
if (Person.userRole === "Super_Admin") { //Role.Super_Admin
    cl("show both");
}
;
//====================enum==============================
var Roles;
(function (Roles) {
    Roles["easy"] = "easy";
    Roles["medium"] = "medium";
    Roles["moderate"] = "moderate";
    Roles["difficult"] = "difficult"; //{integration}
})(Roles || (Roles = {}));
var student1 = {
    standard: "2 nd",
    MathsRole: "easy"
};
var student2 = {
    standard: "5 th",
    MathsRole: "medium"
};
var student3 = {
    standard: "9 th",
    MathsRole: "moderate"
};
var student4 = {
    standard: "bsc",
    MathsRole: "difficult"
};
var studentArray = [student1, student2, student3, student4, student2, student3, student1, student4, student2,];
function checkStandard() {
    for (var i = 0; i < studentArray.length; i++) {
        if (studentArray[i].MathsRole === Roles.easy) {
            cl("this maths only 2nd stadard");
        }
        else if (studentArray[i].MathsRole === Roles.medium) {
            cl("this maths only 5th stadrd");
        }
        else if (studentArray[i].MathsRole === Roles.moderate) {
            cl("this maths only 9th stadrd");
        }
        else if (studentArray[i].MathsRole === Roles.difficult) {
            cl("this maths only bsc stadard");
        }
    }
}
;
checkStandard();
