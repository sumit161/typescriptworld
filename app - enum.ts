let cl = console.log;

enum Role {
    Admin = "Admin",
    Candidate = "Candidate",
    Super_Admin = "Super_Admin"
};
cl(Role.Admin)
let Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: "Super_Admin"
};
cl(Person);

if (Person.userRole ===Role.Super_Admin) {//Role.Super_Admin
    cl("show both")
};

//====================enum==============================
enum Roles {
    easy = "easy",//{1,2,3}
    medium = "medium",//{add,mult,division}
    moderate = "moderate",//{set.algebra}
    difficult = "difficult"//{integration}
}
let student1 = {
    standard: "2 nd",
    MathsRole: "easy"
};
let student2 = {
    standard: "5 th",
    MathsRole: "medium"
};
let student3 = {
    standard: "9 th",
    MathsRole: "moderate"
};
let student4 = {
    standard: "bsc",
    MathsRole: "difficult"
};
let studentArray = [student1, student2, student3, student4, student2, student3, student1, student4, student2,];
function checkStandard() {
    for (let i = 0; i < studentArray.length; i++) {
        if (studentArray[i].MathsRole === Roles.easy) {
            cl("this maths only 2nd stadard")
        }
        else if (studentArray[i].MathsRole === Roles.medium) {
            cl("this maths only 5th stadrd")
        }
        else if (studentArray[i].MathsRole === Roles.moderate) {
            cl("this maths only 9th stadrd")
        }
        else if (studentArray[i].MathsRole === Roles.difficult) {
            cl("this maths only bsc stadard")
        }
    }
};
checkStandard()
