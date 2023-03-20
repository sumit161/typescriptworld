let cl = console.log;
//type define three option>>type alias,interface,class
type Person = {
    fname: string,
    lname: string,
    age: number,
    skills: string[]
};
let person: Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    skills: ["html", "css", "javascript", "typescript", "angular"],

};
for (const i of person.skills) {
    cl(i.toUpperCase());
}



function addition(n1: number, n2 : number, showresult: boolean, pharse : string){ 
    if(showresult){ 
        cl(`${pharse} ${n1 + n2}`) 
    }else{ 
        return `${pharse} ${n1 + n2}`; 
    } 
} 
 
cl(addition(15,13,false,"The result is")) 
addition(10,30,true,"The result is") 
 
type PersoN = { 
    fname : string, 
    lname : string, 
    age : number, 
    child : { 
        fanme : string, 
        lname : string, 
        age : number 
    } 
} 
 
 
let person1 : PersoN = { // type alias, interface, class 
    fname : " jhon", 
    lname : "doe", 
    age : 33, 
    child : { 
        fanme : "may", 
        lname : "doe", 
        age : 5 
    } 
} 
 
 
// let data : {fname: string, lname : string, email: string | null}[] = [ 
//     { 
//         fname : "Jhon", 
//         lname : "Doe", 
//         email : null 
 
//     }, 
//     { 
//         fname : "May", 
//         lname : "doe", 
//         email : "maydoe@gmail.com" 
//     } 
// ] 
 
// for(const i of data){ 
//    cl(i.email?.toUpperCase()) 
// }