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

// 밀봉! Object.seal
