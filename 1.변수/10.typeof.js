//typeof: 데이터 타입을 확인
// 값을 타입 문자열로 변환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // ⬅️ 할당된 값에 따라 타입이 결정됨
console.log(variable);

variable = {};
console.log(variable);

variable = function () {};
console.log(variable);

variable = Symbol();
console.log(variable);

console.log(typeof 123);
console.log(typeof '123');
