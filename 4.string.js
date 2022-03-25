let string = "안녕하세요";
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는법
string = `"안녕!"`;
console.log(string);

string = "Hi\nHyeonwoo!\t\t my name is\v \\ \u2602 \u1234";
console.log(string);

// Template Literal
let id = "현우";
let greetings = `안녕! ${id} 🙇🏻‍♂️ \n즐거운 하루 보내요!`;
console.log(greetings);
