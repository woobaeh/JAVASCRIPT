function a() {
  for (let i = 0; i < 10; i++) {
    return i;
  }
}

function b() {
  return a() + 1;
}
function c() {
  return b() + 1;
}
console.log("start");
const result = c();
console.log(result);
