"use strict";
let cl = console.log;
class Department {
    constructor(dname, did) {
        this.employees = [];
        this.dName = dname;
        this.dId = did;
    }
    describe() {
        cl(`this is department ${this.dName}`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printNumberOfEmployee() {
        return this.employees.length;
    }
}
let accounting = new Department("Accounting", "D-123");
accounting.addEmployee("may");
cl(accounting);
accounting.addEmployee("jhon");
cl(accounting);
accounting.describe();
cl(accounting.printNumberOfEmployee());
let person = {
    fname: "jhon",
    lname: "doe",
    age: 23,
};
cl(`my name is ${person.fname} ${person.lname}, i am cricketer , i am ${person.age} old`);
