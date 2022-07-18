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





async function getMeal() {
  const meal = await getChicken();
  console.log(meal);
}

getMeal();
