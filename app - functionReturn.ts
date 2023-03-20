let cl = console.log;
function add(n1: number, n2: number): number {
    return (n1 + n2)
}
cl(add(1, 2))

function add1(n1: number, n2: number): string {
    return (n1 + n2) + " ";//typeof also number 
}
cl(add(1, 12))