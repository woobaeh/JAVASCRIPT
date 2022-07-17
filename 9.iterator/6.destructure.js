// 구조 분해 할당 Desturcutring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다

const fruits = ["사과", "키위", "수박", "딸기"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;

console.log(x);
console.log(y);
console.log(z);

function post() {
  return ["Hello", "World"];
}
const [title, content] = post();
console.log(title, content);

const me = { name: "hyeonwoo", age: 16, job: "s/w engineer" };

function display({ name, age, job }) {
  console.log(name);
  console.log(age);
  console.log(job);
}
display(me);

const { name, age, job: occupation, pet = "똘똘이" } = me;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);
// Quiz
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
  console.log(styles);
}
changeColor(prop);
