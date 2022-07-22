// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object
const woo = {
  name: 'woobaeh',
  age: 30,
  eat: () => {
    console.log(eat);
  },
};

const json = JSON.stringify(woo);
console.log(json);
console.log(woo);
const parsed = JSON.parse(json);
console.log(parsed);
