// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수를 전달 해야 함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}
// 에러 발생시 앱이 종료됨.
// runInDelay(() => {
//   console.log('타이머 완료!');
// }, -1);

// try, catch를 활용해서 우아하게 에러처리 , 앱이 강제 종료되지 않도록
try {
  runInDelay(() => {
    console.log('타이머 완료!');
  }, 3);
} catch (error) {
  error;
}
