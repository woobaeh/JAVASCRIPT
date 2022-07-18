function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    // 성공, 실패 시 호출 가능한 콜백 함수 2개
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(3)
  .then(() => console.log("타이머 완료"))
  .catch(console.error) // 전달되는 인자와 호출시 전달되는 인자가 같아서 생략
  .finally(() => console.log("끝났다!"));
