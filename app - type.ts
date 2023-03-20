let cl =console.log;
//function type;
type MathOp = (n1:number,n2:number)=>number;
function add(n1:number,n2:number):number{
    return n1+n2;
}
function print(n1:number):void{
    cl(`the result is ${n1}`)
}
/*let test ;
 test=add;
test=print;//
cl(test(40,67)) */

// let test:(n1:number,n2:number)=>number;
let test:MathOp;
test=add;
// test=print//because return is void
cl(add(20,30))
