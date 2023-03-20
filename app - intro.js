var cl = console.log;
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var add = document.getElementById("add");
var addition = function (n1, n2) {
    cl(n1 + n2);
};
add.addEventListener("click", function () {
    addition(+num1.value, +num2.value);
});
//working with numbers ,boolean and string
var x = 10;
//x='12'
// let p;//any
var n;
// n=""//error
n = 99; //possible
function hello(n1, n2, showResult, phrase) {
    if (showResult) {
        cl("".concat(phrase, " ").concat(n1 + n2));
    }
    else {
        return ("".concat(phrase, " ").concat(n1 + n2));
    }
}
;
// cl(hello(10, 20, false, "how are you"))
hello(10, 20, true, "how are you");
//object
