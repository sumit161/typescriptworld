var cl = console.log;
//unknown
//?type any =>drawbacks
/* let userDetails: any;
let userName: string;
userDetails = "jhon";
userDetails =123;
userName=userDetails
 cl(typeof userName)
 //actually userName typeof is must be string but at that line taking typeof is number
  */
var weUseUnknown;
var userDetails;
var userName;
userDetails = "jhon";
userDetails = 123;
// userName=userDetails//strict>>show error
//  cl(typeof userName) 
var car;
var vehicle;
car = "123";
car = true;
car = 123;
// vehicle = car;//error
if (typeof car === "string") {
    vehicle = car;
    cl(vehicle);
}
else {
    cl("another datatype is stored in vehicle");
}
// class Department {
//  public dName: String; //fields
//  public dId: String;
//   constructor(dname: string, did: string) {
//     this.dName = dname;
//     this.dId = did;
//   }
//   describe(){
//     cl(`this is department ${this.dName}`)
//   }
// }
// let accounting = new Department("Accounting","D-123")
/* cl(accounting)
cl(accounting.dId)
cl(accounting.dName) //all public
accounting.describe() */
//private
var Department = /** @class */ (function () {
    function Department(dname, did) {
        this.employees = [];
        this.dName = dname;
        this.dId = did;
    }
    Department.prototype.describe = function () {
        cl("this is department ".concat(this.dName));
    };
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department.prototype.printNumberOfEmployee = function () {
        return this.employees.length;
    };
    return Department;
}());
var accounting = new Department("Accounting", "D-123");
accounting.addEmployee("may");
cl(accounting);
accounting.addEmployee("jhon");
cl(accounting);
accounting.describe();
cl(accounting.printNumberOfEmployee());
