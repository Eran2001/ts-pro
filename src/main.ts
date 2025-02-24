import './style.css'

myNew("Era")

function myNew(name: string) {
  console.log("Hello " + name);
}

const myFunc = (num1: number, num2: number) => {
  const total = num1 + num2
  console.log(`${num1} + ${num2} = ${total}`);
}

myFunc(4, 4)