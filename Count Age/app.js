const person = {
    name: "Moss",
    age: 24,
    year: 2023,
    sayHi() {
      console.log(`My name is ${this.name}, this year ${this.year}, and I am ${this.age} years old.`);
      this.year++;
    },
    birthday() {
      this.age++;
      console.log(`Next year ${this.year}, I will be ${this.age} years old.`);
    }
  };



//   for (let i = 0; i < 6; i++) {
//     person.sayHi();
//     person.birthday();
//   }

  function roundCount (n) { 
    for (let i=1; i<=n; i++) { 
        person.sayHi();
        person.birthday();
    } 
}  
roundCount(2);

  
  
