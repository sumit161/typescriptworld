let cl = console.log;
/* class Department {
    dName: String; //fields
    dId: String;
    constructor(dname: string, did: string) {
      this.dName = dname;
      this.dId = did;
    }
  }
  
  let accounting = new Department("Accounting","D-123")
  cl(accounting) */



//private

class Department {
  dName: String; //fields
  dId: String;
  private employees: Array<string> = []
  constructor(dname: string, did: string) {
    this.dName = dname;
    this.dId = did;
  }
  describe() {
    cl(`this is department ${this.dName}`)
  }
  addEmployee(emp: string) {
    this.employees.push(emp)
  }
  printNumberOfEmployee() {
    return this.employees.length
  }
}

let accounting = new Department("Accounting", "D-123")
accounting.addEmployee("may");
cl(accounting)

accounting.addEmployee("jhon");
cl(accounting)
accounting.describe();
cl(accounting.printNumberOfEmployee())




let person = {
  fname: "jhon",
  lname: "doe",
  age: 23,
}

// my name is jhon doe ,i am cricketar, i am 23 years old


cl(`my name is ${person.fname} ${person.lname}, i am cricketer , i am ${person.age} old`)