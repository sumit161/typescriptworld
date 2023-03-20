var cl = console.log;
var Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: [2, "Admin", true] //sequence change false >>[true, 2, "Admin"]
};
cl(Person);
Person.userRole[0] = 5; //possible
// Person.userRole[0] = "5"//not possible string
// Person.userRole[3]=123;//not possible 3 rd index show undefined
//drawback 
Person.userRole.push("hello"); //possible and length increase
Person.userRole.pop(); //possible and length decrease
Person.userRole.pop(); //possible and length decrease
cl(Person);
