// 주석을 달면 됨
/**
 * 주석이 됨
 * 다음줄로 자동으로 넘어감
 *
 */
/** 변수 규칙!
 *  라틴문자(0-9, a-z, A-Z,), _
 *  대소문자를 구분함
 *  추천: camelCase (likeThis) ✅
 *  한국어 ❌
 *  예약어 ❌
 *  숫자로 시작 ❌
 *  특수 문자 ❌(_, $ 두가지는 예외)
 *  이모지 ❌
 *  여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성.
 */
let $what = "apple";
let banana_apple$juice = "good";
let redApple = "so nice~";
console.log($what);
console.log(banana_apple$juice);
console.log(redApple);

// bad e.g
let number = 100;
let audio1;
let audio2;

// good e.g
let myHeight = 200;
let backgroundAudio;
let windAudio;

// Tip
let audioBackground;
let audioWind;
