// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else { }
// if(조건) { } else if(조건2) {} else {}

let fruit = 'orange';

if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('❌');
}

if (true) {
  console.log('truthy value can be printed');
}

if (0 || null || undefined || '') {
  console.log('falsy value can not be printed ');
}
