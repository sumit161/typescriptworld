let cl = console.log;
const num1 = document.getElementById("num1") as HTMLInputElement
const num2 = document.getElementById("num2") as HTMLInputElement
const add = <HTMLElement>document.getElementById("add");
const addition = (n1: number, n2: number) => {
	cl(n1 + n2);
};
add!.addEventListener("click", () => {
	addition(+num1.value, +num2.value);
})

//working with numbers ,boolean and string
let x: number = 10;
//x='12'

 let p;//any

let n: number;
// n=""//error
n = 99//possible

function hello(n1: number, n2: number, showResult: boolean, phrase: string) {
	if (showResult) {
		cl(`${phrase} ${n1 + n2}`)
	} else {
		return (`${phrase} ${n1 + n2}`)
	}
};
// cl(hello(10, 20, false, "how are you"))
hello(10, 20, true, "how are you")

//object