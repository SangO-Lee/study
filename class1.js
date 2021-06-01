// class : 객체를 만들 수 있는 새로운 방법
// 1. 선언적 방식 
class A {

}
console.log(new A());
//2. class표현식을 변수에 할당
const b = class{};
console.log(new b());

class B{
    constructor(){ // class안에서 함수 역할을 사용할 수 있게 해줌
        console.log('constructor');
    }
}
new B();