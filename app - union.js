var cl = console.log;
function combine(n1, n2) {
    // let result :any;
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n1;
        // result = n1 + n1
    }
    else {
        return n1.toString() + n2.toString();
        // result =n1.toString() + n2.toString();
    }
    // return result
}
cl(combine(12, 13)); //25
cl(combine("12", "13")); //1213
//n1>number n2>number
//n1>string n2>number
//n1>number n2>string
//n1>string n2>string
var x = 10; //type of number
//literal type
var y = 5; //typeof y is number 5 and its value is also number 5
//self create literal type
var z = 20; //typeof number
var b = 20; //typeof b is number 20 and its value is also number 20
// b = 8//can not reassing b becz b is taking const property
var impSkill = "javascript";
