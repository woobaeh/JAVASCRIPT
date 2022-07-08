// Spread 연산자, 전개구문
// 모든 Iterable은 Spred 될 수 있다
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(first, second, ...nums);
}
sum("first", "second", 1, 2, 2, 3, 4, 5, 6, 7);

// Array Concat
const fruits1 = ["🍎", "🍌"];
const fruits2 = ["🍊", "🥑"];
let arr = fruits1.concat(fruits2);
console.log(arr);

let newArr = [...fruits1, ...fruits2];
console.log(newArr);

// Object
const woobae = { name: "hyeonu", age: 20, home: { address: "home" } };
const updated = {
  ...woobae,
  job: "s/w enginerr",
};
console.log(updated);

console.log(updated.home.address === woobae.home.address);
console.log(woobae.age === updated.age);
