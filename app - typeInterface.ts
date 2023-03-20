let cl = console.log;
//in typescript three way we create a type
//1>type aliese i.e type
//2>interface
//3>class
//?============================type============================================
//!type
//!example1
type person = {
    fname: string,
    lname: string,
    age: number,
    skill: string[]
}
let Person: person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    skill: ["html", "css", "javascript"]
};
//!example2
/* type Tmobile = {
    Pname:string,
    pModel:string,
    Price:number,
    rating:number,
}

let mobile : Tmobile= {
    Pname:"samsung",
    pModel:"g4",
    Price:8980,
    rating:4,
}

*/
//?==================interface================================
//!example1
interface Iperson {
    fname: string;//,
    lname: string;//,
    age: number;//,
    skill: Array<string>;//,//string[]
    gender?: string;//,
}
let PersonA: Iperson = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    skill: ["html", "css", "javascript"]
};

let PersonB: Iperson = {
    fname: "july",
    lname: "lucy",
    age: 44,
    skill: ["html", "css", "javascript"]
};
let ArrayOfPerson: Iperson[] = [
    {
        fname: "jhon",
        lname: "doe",
        age: 54,
        skill: ["html", "css", "javascript"]
    },
    {
        fname: "july",
        lname: "lucy",
        age: 44,
        skill: ["html", "css", "javascript"]
    }
];
cl(ArrayOfPerson);


// !example2
interface Imobile{
    Pname:string,
    pModel:string,
    Price:number,
    rating:number,
}
let samasung : Imobile= {
    Pname:"samsung",
    pModel:"g4",
    Price:8980,
    rating:4,
}

let iphone : Imobile= {
    Pname:"iphone",
    pModel:"p4",
    Price:8980,
    rating:4,
}
let arrayOfMobile : Imobile[] = [
    {
        Pname:"samsung",
        pModel:"g4",
        Price:8980,
        rating:4,
    },
    {
        Pname:"iphone",
        pModel:"p4",
        Price:8980,
        rating:4,
    }
];

//!example1

/* type passenger = {
    fname:string,
    lname:string,
    incheckedOut:boolean,
    inchekedout:boolean,
    childs: number | null
    let ArrayOfPassenger : passenger[]= [passenger1,passenger2];
} */
interface IPassenger  {
    fname:string,
    lname:string,
    incheckedOut:boolean,
    inchekedout:boolean,
    childs: number | null
}
let passenger1 = {
    fname:"jhon",
    lname:"doe",
    incheckedOut:true,
    inchekedout:false,
    childs:2
}

let passenger2 = {
    fname:"july",
    lname:"die",
    incheckedOut:true,
    inchekedout:false,
    childs:null
}


let ArrayOfPassenger :  IPassenger []= [passenger1,passenger2];