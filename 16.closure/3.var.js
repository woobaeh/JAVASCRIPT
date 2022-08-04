// function loop() {
//   const array = [];
//   // var과 let의 차이점!
//   for (let i = 0; i < 5; i++) {
//     array.push(function () {
//       console.log(i);
//     });
//   }
//   return array;
// }

// const array = loop();
// array.forEach((func) => func());

function loop2() {
  const array2 = [];
  // var 키워드는 블록 레벨 스코프를 생성하지 않는다. 함수 스코프는 생성.
  //
  // 함수 스코프안에서 i = 5가 최종적으로 할당되고
  // result에는 loop2의 참조값이 할당됨(5를 출력하는 5개의 함수를 가진 array2를 리턴하는).
  for (var i = 0; i < 5; i++) {
    array2.push(function () {
      console.log(i);
    });
  }
  return array2;
}

const result = loop2(); // loop2 함수의 참조값이 할당하는 시점의 i는 5!!
console.log(result);
result.forEach((func) => func());
