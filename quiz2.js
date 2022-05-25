// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class FullTimer {
  constructor(name, department, monthWorkHours) {
    this.name = name;
    this.department = department;
    this.monthWorkHours = monthWorkHours;
  }
  get salary() {
    return this.monthWorkHours;
  }
  salary = () => {
    this.monthWorkHours = monthWorkHours * 10000;
  };
}

class PartTimer extends FullTimer {
  constructor(name, department, monthWorkHours) {
    super(name, department, monthWorkHours);
  }

  salary = () => {
    this.monthWorkHours * 8000;
  };
}

const fullTimer = new FullTimer('현우', '프론트엔드', '40');
console.log(fullTimer);
console.log(fullTimer.salary);

const partTimer = new PartTimer('현석', '백엔드', '40');
