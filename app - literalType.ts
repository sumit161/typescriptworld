let cl = console.log;
//union of literal type
type combinable = number | string;
function combine(n1: combinable, n2: combinable, resultConversion: "as-string" | "as-number") {
    let result: any;
    if (typeof n1 === "number" && typeof n2 === "number" && resultConversion==="as-string") {
        result = n1 + n2;
        result = result.toString();
    } else {
        result = n1.toString() + n2.toString();
        result = +result;
    }
    return result
/*   if(resultConversion==="as-string"){
    return result.toString();
  }
  if(resultConversion==="as-number"){
    return +result
  } */
}
cl(combine(17, 34,"as-string"))//25 number>>we will change in string
cl(combine("12", "13","as-number"))//1213>>this string change in number
// cl(combine("12", "13","asumber"))//error throw
//resultConversion: "as-string" | "as-number"
//this is union of literal

//n1>number n2>number
//n1>string n2>number
//n1>number n2>string
//n1>string n2>string

