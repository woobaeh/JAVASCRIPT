// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 shitty한 방식이다.
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
  num = 10; // ❌
  console.log(num);
}
const value = 4;
display(value); // 10
console.log(value); // 4  원시값은 문제가 큰 문제가 되지는 않는다.

function displayObj(obj) {
  obj.name = 'Chris'; // ❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const Mark = { name: 'Mark' };
displayObj(Mark); // { name: Chris}
console.log(Mark); // { name: Chris} 원본 데이터가 변경 되는 것은 위험.

// 올바른 방법
function changeName(obj) {
  // 함수이름 부터 의미 부여
  return { ...obj, name: 'Angel' }; // 새로운 객체 만들기
}

const damon = { name: 'demon' };
console.log(changeName(damon)); // { name: 'Angel' }
console.log(damon); // { name: 'demon' }
