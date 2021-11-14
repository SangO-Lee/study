// 자식이 만든 함수를 부모가 만든 함수를 덮어 씌우게 됨.
// 자식의 함수가 부모에는 없을 경우 새롭게 추가 하게 됨


class Parent {
    name = 'Lee';

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{
    age = 32;
    hello(){ //동일한 함수 이름으로 선언이 되어있을 경우 부모의 함수를 덮어씌움
        console.log('hello2', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();
c.name = 'anna';
c.hello();

console.log(p,c);
c.hello();