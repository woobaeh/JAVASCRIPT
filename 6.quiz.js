class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  play = () => {
    console.log('같이 놀장');
  };
}

class Tiger extends Animal {
  hunt = () => {
    console.log('사냥시작!');
  };
}

const dog1 = new Dog('멍멍', '🐶', '똘똘');
dog1.play();
dog1.printName();
const tiger1 = new Tiger('어흥', '🐯');
tiger1.hunt();
tiger1.printName();

console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // false
console.log(tiger1 instanceof Dog); // false
console.log(tiger1 instanceof Animal); // true
console.log(tiger1 instanceof Tiger); // true
