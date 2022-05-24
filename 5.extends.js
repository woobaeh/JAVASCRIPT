// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자');
//   }
// }
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}

const tiger = new Tiger('노랑이');

console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, dogName) {
    super(color);
    this.dogName = dogName;
  }
  play() {
    console.log('놀자아');
  }
}

const dog = new Dog('빨강', '똘똘이');
console.log(dog);
dog.play();
dog.sleep();
