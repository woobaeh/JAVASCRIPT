// Wrapper Object
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입
console.log(number.toString()); // number 원시타입을 Number 객체로 감싼다
console.log(number); // 다시 number 원시 타입

const text = 'text';
console.log(text);
text.length; // String 객체
text.trim();
