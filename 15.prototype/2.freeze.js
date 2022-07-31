// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌ 속성 재정의
// (단, 얕은 레벨만 얼림!)
const woo = { name: '현우' };
const dog = { name: '와우', emoji: '🐶', owner: woo };
Object.freeze(dog);
dog.name = '마웅';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
woo.name = '혀누';
console.log(dog);
console.clear();

// 밀봉! Object.seal : 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(cat));
console.log(Object.isSealed(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions : 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '야옹';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 5;
console.log(tiger);
