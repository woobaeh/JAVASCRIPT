// 오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶다!
// Mixin!
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);

const dog1 = new Dog('똘똘이');
console.log(dog1);
dog1.play();
dog1.sleep();

// 자바스크립트에서 클래스도 결국 프로토타입 기반임을 보여주는 예시

class Animal {
  constructor(age, sex) {
    this.age = age;
    this.sex = sex;
  }
}
class Tiger extends Animal {
  constructor(age, sex, name) {
    super(age, sex);
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger(12, 'male', '어흥!');
console.log(tiger);
tiger.play();
tiger.sleep();
