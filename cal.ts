var prompt=require("prompt-sync")();
let   n1:number =parseInt(prompt("enter your first num: "));
let   n2:number =parseInt(prompt("enter your second num: "));
let   operator=(prompt("enter tour operator(+,-,*,/): "));
if(operator =="+"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 + n2}`)
}
else if(operator =="-"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 - n2}`)
}
else if(operator =="*"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 * n2}`)
}
else if(operator=="/"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 / n2}`)
}
else{
    console.log("please enter correct operator")
};
export{};