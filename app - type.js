var cl = console.log;
function add(n1, n2) {
    return n1 + n2;
}
function print(n1) {
    cl("the result is ".concat(n1));
}
/*let test ;
 test=add;
test=print;//
cl(test(40,67)) */
// let test:(n1:number,n2:number)=>number;
var test;
test = add;
// test=print//because return is void
cl(add(20, 30));
