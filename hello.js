const sayHellop  = function () {
  console.log("Hello, world");
}

sayHellop();

const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
"\n"
const returnSayHello  = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');
console.log(greeting);

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 