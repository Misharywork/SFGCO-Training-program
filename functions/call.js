const person1 = { name: "John", balance: 10 };
const person2 = { name: "Paul", balance: 20 };
const person3 = { name: "Ringo", balance: 30 };

function greet(greeting) {
  return (greeting + " Hi " + this.name, "Your balance is " + this.balance);
}

console.log(greet.call(person1, "Hello"));
