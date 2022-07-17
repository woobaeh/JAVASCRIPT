// Bubbling up, Propagating
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('여기서 에러 못 잡을 듯 다음으로 넘기자');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done');
