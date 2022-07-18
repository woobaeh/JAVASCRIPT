// 즉각적인 static 함수 사용 가능

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

fetchEgg("🐔") //
  .then((egg) => console.log(egg));

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음"));
  // return Promise.resolve(`🪴 => 🐓`);
}

getChicken()
  .catch(() => "🐔") // 실패하면 치킨머리 리턴 , 에러 나도 마저 실행해주는 법.
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

// 에러는 버블링 업 된다.
