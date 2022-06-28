function execute() {
  console.log("1");

  setTimeout(() => {
    console.log(2); // callback이 Node API에개  던져 짐, 처리 된 뒤 태스크 큐로 들어옴
  }, 3000);
  console.log(3);
}

execute(); // 함수 호출
