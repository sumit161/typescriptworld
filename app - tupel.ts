let cl = console.log;
//tupels >> a fixed length array;
type Person = {
    fname: string,
    lname: string,
    age: number,
    userRole: [number, string, boolean]//(number | string)[]
};
let person: Person = {//detatype assign
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: [2, "Admin", true]//sequence change false >>[true, 2, "Admin"]
};
cl(person);

person.userRole[0] = 5//possible
// Person.userRole[0] = "5"//not possible string
// Person.userRole[3]=123;//not possible 3 rd index show undefined

//drawback 
person.userRole.push("hello");//possible and length increase
person.userRole.pop();//possible and length decrease
person.userRole.pop();//possible and length decrease
cl(person);


