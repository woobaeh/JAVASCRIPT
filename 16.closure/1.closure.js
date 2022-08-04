const text = 'hello';
function fun() {
  console.log(text);
}
fun();

// 내부함수와 외부함수의 상태가 묶여서 갇혀있는 느낌?

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}

const func1 = outer(); // inner 함수의 참조값이 할당
func1(); // inside inner: 0
// 클로저에 의해서 inner가 리턴이 될때 함수 외부의 outer 렉시컬 환경도 묶여서 클로저로 반환이 되기 떄문에
// x를 참조할 수 있다.
