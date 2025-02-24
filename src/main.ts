import './style.css'

console.log(myNew("Era"))
 

function myNew(name: string="Hasa"): string {
  return "Hello " + name;
}

const myFunc = (num1: number, num2: number) => {
  const total = num1 + num2
  console.log(`${num1} + ${num2} = ${total}`);
}

myFunc(4, 4)