// q1. 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
// 나의 풀이
const set = new Set(fruits);
const result = Array.from(set);
console.log(result);

// better anwser
console.log([...new Set(fruits)]);
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// q2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// 나의 풀이
const arr1 = Array.from(set1);
const arr2 = Array.from(set2);
const intersectionArr = arr2.filter((item) => arr1.includes(item));
console.log(intersectionArr);
const result2 = new Set(intersectionArr);
console.log(result2);

// better anwser
function findIntersection(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}

console.log(findIntersection(set1, set2));
